# CI Workflow Patterns

## GitHub Actions Version Management

### Current Versions (Updated: 2025-12-23)

**Quick Reference** - Copy-paste for workflow updates:
```yaml
actions/checkout: v5
actions/setup-node: v6          # Requires runner v2.327.1+
actions/github-script: v8        # Node 24 runtime
actions/cache: v4
actions/configure-pages: v5
actions/upload-pages-artifact: v3  # Latest for Pages-specific deployment (different from upload-artifact@v4)
actions/deploy-pages: v4
```

### When User Requests Action Updates

**Process:**
1. Search for latest versions using current year: `"actions/[name] latest version 2025"`
2. Check release notes for breaking changes
3. Verify runner compatibility requirements (visible in CI logs as "Current runner version: '2.xxx.x'")
4. Update consistently across all workflow files (deploy.yml, pr.yml, validate-workflows.yml)
5. Document versions in this file and main CLAUDE.md maintenance notes
6. Test in PR workflow first, then update deploy workflow if successful

**Common triggers:**
- User reports CI failure mentioning deprecated actions
- User asks to "update GitHub Actions" or "fix outdated actions"
- GitHub deprecation notice appears in workflow logs

### Version History

Track all updates with rationale for future reference:

- **2025-12-23**: Updated checkout v4→v5, setup-node v4→v6, github-script v7→v8
  - Reason: Fixed package-lock.json sync issue, verified runner v2.330.0 compatibility
  - Breaking: setup-node@v6 requires runner v2.327.1+ (we have v2.330.0 ✅)

### Important Notes

**Runner Compatibility:**
- Current GitHub-hosted runner: v2.330.0 (shown in CI logs)
- setup-node@v6 requires: v2.327.1+
- Always check runner requirements when updating actions

**Special Cases:**
- `actions/upload-pages-artifact@v3` is Pages-specific (different from general `upload-artifact@v4`)
- Always use `--legacy-peer-deps` with npm (Gatsby peer dependency conflicts)

**Version Check Commands:**
```bash
# Find all action versions in workflows
grep -r "uses: actions/" .github/workflows/ | grep -v "#"

# Check current versions match this file
grep "uses: actions/checkout@" .github/workflows/*.yml
```

---

## Shell Scripts in GitHub Actions

### Error Handling
- Use `set -euo pipefail` for strict mode
- Omit `-e` when handling errors manually (e.g., capturing failed command output)
- Use `|| true` when command failure is expected/acceptable
- Capture command output with exit status: `output=$(cmd 2>&1) && ok=true || ok=false`

### Variables
- Always quote: `"$variable"` not `$variable`
- Use defaults for arithmetic: `$((x - ${y:-0}))`
- Store step outputs in quoted variables before arithmetic

### Heredocs

**For GitHub outputs - use brace grouping:**
```bash
{
  echo "key<<UNIQUE_EOF"
  echo "$multiline_content"
  echo "UNIQUE_EOF"
} >> $GITHUB_OUTPUT
```

**Critical:** Closing delimiter must be at column 1 (no indentation), or use `<<-` with tabs only.

**Anti-pattern** (breaks in YAML due to indentation):
```bash
# WRONG - delimiter is indented
value=$(cat <<'EOF'
${{ steps.x.outputs.content }}
EOF
)
```

**Fix:** Use env vars instead of heredocs for reading step outputs in shell:
```yaml
env:
  CONTENT: ${{ steps.x.outputs.multiline }}
run: |
  echo "$CONTENT"  # Safe, handles multiline
```

### File Operations
- Validate directories exist before operating on them
- Use `find ... 2>/dev/null` to suppress errors, check result before using
- Use `wc -l | tr -d ' '` for portable line counting

## JavaScript in actions/github-script

### Passing Values

**Simple single-line values** - safe to inline:
```javascript
const value = '${{ steps.x.outputs.simple }}';
const num = parseInt('${{ steps.x.outputs.number }}') || 0;
```

**Multiline/complex values** - pass via env block:
```yaml
env:
  CONTENT: ${{ steps.x.outputs.multiline }}
with:
  script: |
    const content = process.env.CONTENT || '';
```

**Why:** Template literals break if content contains backticks or `${`.

### API Calls
- Wrap in try/catch
- Don't fail workflow on non-critical operations (comments, annotations)

## PR Comment Management

### Use HTML Comment Markers

**Anti-pattern** (fragile):
```javascript
// Emoji could appear in user content
comment.body.includes('📊 Build Report')
!comment.body.includes('🚀')
```

**Pattern** (robust):
```javascript
// Invisible markers, unique identifiers
comment.body.includes('<!-- build-report -->')
!comment.body.includes('<!-- preview-url -->')
```

### Comment Structure with Markers
```markdown
<!-- build-report -->
## 📊 Build Report

| Metric | Value |
|--------|-------|
...

<!-- preview-url -->
🚀 https://preview-url.example.com

<!-- footer -->
⏱️ 45s · https://github.com/.../runs/123
```

**Benefits:**
- Invisible in rendered markdown
- Unique, won't match user content
- Stable anchors for regex replacements
- Can check if content already added

### Inserting Content
```javascript
// Use marker as insertion anchor
const updated = body.replace(
  /<!-- footer -->/,
  `<!-- preview-url -->\n🚀 ${url}\n\n<!-- footer -->`
);
```

### Incremental Comment Updates

Update PR comments as workflow progresses to show current status:

```yaml
# 1. Post initial placeholder early
- name: Post initial PR comment
  if: github.event_name == 'pull_request'
  uses: actions/github-script@v7
  # Shows: ⏳ Types · ⏳ Build · ⏳ Stats

# 2. Update after each major step
- name: Update PR comment after typecheck
  if: github.event_name == 'pull_request' && always()
  # Shows: ✅ Types · ⏳ Build · ⏳ Stats

# 3. Final update with all stats
- name: Post PR comment with build stats
  # Shows: ✅ Types · ✅ Bundles · 📊 +2.1K
```

**Status indicators:**
- `⏳` - Pending/in progress
- `✅` - Success
- `❌` - Failed
- `⏸️` - Skipped

**Benefits:**
- Shows current status immediately when PR updates
- Clear what stage the workflow is at
- Failed steps visible without waiting for full workflow
- Timestamp shows when comment was last updated

## Anti-Patterns

| Anti-Pattern | Problem | Solution |
|--------------|---------|----------|
| `grep` for error extraction | Unreliable matching | Use `tail -n` for last N lines |
| Inline JSON with shell interpolation | Breaks on special chars | Use `jq -n --arg/--argjson` |
| Unquoted `${{ outputs }}` in arithmetic | Empty = syntax error | Quote and use `${var:-0}` |
| Direct `${{ }}` in JS template literals | Breaks on backticks/`${` | Use `process.env` |
| Silent fallbacks/defaults | Hides real errors | Explicit validation + clear messages |
| Heredocs in YAML with indentation | Delimiter not recognized | Use env vars or unindented delimiter |
| Emoji-based comment matching | Could match user content | Use HTML comment markers |
| Embedded URLs `[text](url)` | Harder to copy, verify | Display raw URLs |
| Always showing warnings | Noise when no issues | Conditional sections |

## Build Comparison

### Safe Caching Strategy

Cache base branch build stats keyed by commit SHA:

```yaml
- name: Get base commit SHA
  id: base-sha
  run: echo "sha=$(git rev-parse origin/${{ github.base_ref }})" >> $GITHUB_OUTPUT

- name: Check cache
  uses: actions/cache@v4
  with:
    path: .base-stats.json
    key: base-stats-${{ github.base_ref }}-${{ steps.base-sha.outputs.sha }}

- name: Build if cache miss
  if: steps.cache.outputs.cache-hit != 'true'
  run: |
    # Build and save stats to JSON
    jq -n --arg total "$total" '{total: $total}' > .base-stats.json
```

**Why this is safe:**
- Same commit SHA = same build output (immutable)
- No race conditions (SHA is unique identifier)
- No stale data (new commits = new cache key)

**Consolidation pattern:**
When stats can come from cache or fresh build, use a consolidation step:
```yaml
- name: Consolidate stats
  id: stats
  run: |
    if [ "${{ steps.cache.outputs.cache-hit }}" = "true" ]; then
      echo "value=$(jq -r '.field' .stats.json)" >> $GITHUB_OUTPUT
    else
      echo "value=${{ steps.build.outputs.field }}" >> $GITHUB_OUTPUT
    fi
```
Downstream steps reference only `steps.stats.outputs.*`.

### Handle Failures Gracefully

- Base branch may not build (different deps, breaking changes)
- Show stats without comparison when base fails
- Include error details in collapsible section

## Content Formatting

### Conditional Sections
Only show warnings when there are actual issues:
```javascript
let bundleSection = '';
if (hasLargeBundles) {
  bundleSection = `> ⚠️ **${count} bundle(s) exceed 200KB**...`;
}
```

### URLs
- Display raw URLs for easy copying and verification
- Avoid `[text](url)` format for important links

### Compact Footers
```markdown
⏱️ 45s · https://github.com/.../runs/123
```
Instead of verbose:
```markdown
Build time: **45s**
[View full details](https://github.com/.../runs/123)
Updated: 2024-01-15T10:30:00Z
```

## Reliability

Reliability must be built into the core of every workflow, not bolted on.

### Verify, Don't Assume

**Anti-pattern:**
```yaml
- run: npx surge ./public "$URL"
  continue-on-error: true  # Silently swallows failures
```

**Pattern:**
```yaml
- run: |
    # Deploy
    if ! npx surge ./public "$URL" 2>&1; then
      echo "::error::Deployment failed"
      exit 1
    fi

    # Verify it actually worked
    HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://$URL")
    if [ "$HTTP_STATUS" != "200" ]; then
      echo "::warning::Deployed but verification failed (HTTP $HTTP_STATUS)"
    fi
```

### Status Tracking

Every step that can fail should output explicit status:
```bash
echo "status=success" >> $GITHUB_OUTPUT   # or failed, skipped, unverified
echo "deployed=true" >> $GITHUB_OUTPUT    # boolean for conditionals
```

Use status in downstream steps:
```yaml
if: steps.deploy.outputs.status == 'success'
```

### Job Summaries for Visibility

Always write a summary so outcomes are discoverable:
```bash
echo "## 🧹 Preview Cleanup" >> $GITHUB_STEP_SUMMARY
case "$STATUS" in
  success) echo "✅ **Teardown successful**" ;;
  failed)  echo "❌ **Teardown failed**" ;;
  skipped) echo "⏭️ **Skipped** (token not configured)" ;;
esac >> $GITHUB_STEP_SUMMARY
```

### GitHub Annotations

Use annotations for visibility in the Actions UI:
```bash
echo "::notice::Informational message"
echo "::warning::Something unexpected but not fatal"
echo "::error::Something failed"
```

### Anti-Patterns

| Anti-Pattern | Problem | Solution |
|--------------|---------|----------|
| `continue-on-error: true` | Silently swallows failures | Explicit error handling with status output |
| No verification after deploy | Can't know if it worked | curl/wget to verify accessibility |
| Silent success | Hard to audit what happened | Job summary with clear outcomes |
| Logging only to console | Not discoverable | Use `::warning::` and `::error::` annotations |

### Secret Validation

Always validate required secrets before using them:

**Production workflows** - fail if missing:
```bash
if [ -z "${SECRET:-}" ]; then
  echo "::error::SECRET not configured - cannot proceed"
  exit 1
fi
```

**Optional features** - warn and skip:
```bash
if [ -z "${SECRET:-}" ]; then
  echo "::warning::SECRET not configured - feature will be skipped"
  echo "status=skipped" >> $GITHUB_OUTPUT
  exit 0
fi
```

### Placeholders for Async Content

When content will be filled in later (e.g., preview URL after deployment), show a placeholder:

**Anti-pattern** (confusing):
```markdown
## CI Report<!-- preview-marker -->
```
User doesn't know a URL will appear here.

**Pattern** (clear state):
```markdown
## CI Report · 🚀 _deploying..._<!-- preview-marker -->
```
User knows deployment is in progress. Replace with actual URL when ready.

## General Principles

1. **Validate early** - Check inputs/secrets/directories exist before using
2. **Fail explicitly** - Clear error messages, not silent failures
3. **Escape properly** - Env vars > heredocs in YAML
4. **Provide context** - Show what failed and why in user-facing output
5. **Degrade gracefully** - Partial results better than total failure
6. **Use invisible markers** - HTML comments for reliable matching
7. **Minimize noise** - Only show warnings when actionable
8. **Prefer raw values** - URLs, counts, sizes without extra formatting
9. **Verify, don't assume** - Check that actions actually succeeded
10. **Make outcomes discoverable** - Job summaries, annotations, status outputs
11. **Show pending state** - Use placeholders for content that will be filled in later
12. **Validate secrets** - Check required secrets, warn/skip for optional ones
