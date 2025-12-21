# CI Workflow Patterns

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

**Prefer:** Build base branch in CI for comparison
- Always accurate, no cache expiration
- Trade-off: ~2x build time

**Handle failures gracefully:**
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

## General Principles

1. **Validate early** - Check inputs/directories exist before using
2. **Fail explicitly** - Clear error messages, not silent failures
3. **Escape properly** - Env vars > heredocs in YAML
4. **Provide context** - Show what failed and why in user-facing output
5. **Degrade gracefully** - Partial results better than total failure
6. **Use invisible markers** - HTML comments for reliable matching
7. **Minimize noise** - Only show warnings when actionable
8. **Prefer raw values** - URLs, counts, sizes without extra formatting
9. **Verify, don't assume** - Check that actions actually succeeded
10. **Make outcomes discoverable** - Job summaries, annotations, status outputs
