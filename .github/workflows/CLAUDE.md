# CI Workflow Patterns

## Shell Scripts in GitHub Actions

### Error Handling
- Use `set -euo pipefail` for strict mode
- Omit `-e` when handling errors manually (e.g., capturing failed command output)
- Use `|| true` when command failure is expected/acceptable

### Variables
- Always quote: `"$variable"` not `$variable`
- Use defaults for arithmetic: `$((x - ${y:-0}))`
- Store step outputs in quoted variables before arithmetic

### GitHub Outputs

**Single-line values:**
```bash
echo "key=value" >> $GITHUB_OUTPUT
```

**Multiline values - use heredoc with unique delimiter:**
```bash
{
  echo "key<<UNIQUE_EOF"
  echo "$multiline_content"
  echo "UNIQUE_EOF"
} >> $GITHUB_OUTPUT
```

**Avoid:** Inline escaping (`tr`, `sed` for newlines) - fragile and incomplete.

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

## Anti-Patterns

| Anti-Pattern | Problem | Solution |
|--------------|---------|----------|
| `grep` for error extraction | Unreliable matching | Use `tail -n` for last N lines |
| Inline JSON with shell interpolation | Breaks on special chars | Use `jq -n --arg/--argjson` |
| Unquoted `${{ outputs }}` in arithmetic | Empty = syntax error | Quote and use `${var:-0}` |
| Direct `${{ }}` in JS template literals | Breaks on backticks/`${` | Use `process.env` |
| Silent fallbacks/defaults | Hides real errors | Explicit validation + clear messages |

## Build Comparison

**Prefer:** Build base branch in CI for comparison
- Always accurate, no cache expiration
- Trade-off: ~2x build time

**Handle failures gracefully:**
- Base branch may not build (different deps, breaking changes)
- Show stats without comparison when base fails
- Include error details in collapsible section

## General Principles

1. **Validate early** - Check inputs/directories exist before using
2. **Fail explicitly** - Clear error messages, not silent failures
3. **Escape properly** - Heredocs > inline escaping
4. **Provide context** - Show what failed and why in user-facing output
5. **Degrade gracefully** - Partial results better than total failure
