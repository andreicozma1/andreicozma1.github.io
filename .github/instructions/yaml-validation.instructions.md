---
applyTo: "**/*.yml,**/*.yaml"
---

# YAML & GitHub Actions Workflow Validation

## Validation Tools Priority

1. **actionlint** - Comprehensive GitHub Actions validation (always use)
2. **PyYAML** - Quick YAML syntax check (optional fallback)
3. **yamllint** - Style/formatting enforcement (optional)

## Core Principles

### Mandatory Validation (Enforced Automatically)

**CRITICAL**: All workflow files MUST pass actionlint validation.

**Automatic enforcement via CI (no setup required):**
- GitHub Actions workflow validates all workflow changes on PR
- Validation failures block merging
- No local configuration needed - runs automatically

### Indentation Rules for GitHub Actions

**Critical**: Content within `script: |` blocks must be consistently indented:
- All JavaScript/shell code within block scalar (`|`) must maintain proper indentation
- Template literals (backtick strings) content must be indented relative to the template literal declaration
- Lack of indentation causes YAML parser to interpret content as new YAML keys

Example of **correct** indentation:
```yaml
script: |
  const msg = `
    This is indented
    All lines aligned
  `;
```

Example of **incorrect** indentation (causes parse errors):
```yaml
script: |
  const msg = `
This breaks YAML
Parser expects key:value
  `;
```

### Context Awareness

The `on:` trigger key becomes `True` when parsed by YAML libraries (expected behavior, not an error).

## Validation Tools

### actionlint - Primary Tool

**Purpose**: Comprehensive GitHub Actions workflow validation
**Validates**: YAML syntax, expressions, types, deprecated actions, shell scripts, workflow structure
**Why**: Only tool that validates GitHub Actions-specific semantics
**When**: Always - before every commit, in CI pipelines
**Install**: Downloaded automatically by CI, or install manually for local use

### PyYAML - Quick Syntax Check

**Purpose**: Verify YAML can be parsed without errors
**Command**: `python3 -c "import yaml; yaml.safe_load(open('file.yml'))"`
**Why**: Built into Python, zero additional dependencies
**When**: Quick manual checks when actionlint unavailable

### yamllint - Style Enforcement (Optional)

**Purpose**: YAML style and formatting consistency
**Why**: Enforces team coding standards
**When**: Style CI checks (optional)
**Note**: Generates many warnings on valid YAML (line length, etc.) - use selectively

## Common Issues & Patterns

### Template Literal Indentation Errors

**Symptom**: `could not find expected ':'` or `while scanning a simple key`
**Cause**: Content in JavaScript template literals not indented within YAML block scalars
**Root cause**: YAML parser treats unindented lines as new YAML keys, not as part of the string content

**Problem example** (causes YAML parse error):
```yaml
script: |
  const body = `
## This causes YAML parse error
⏳ Status line with emoji
  `;
```

**Solutions (from worst to best):**

1. **❌ Naive indentation** - Breaks markdown rendering:
```yaml
script: |
  const body = `
    ## All content indented
    ⏳ Status line with emoji
  `;
```
Indentation becomes part of the string → renders as code block in markdown

2. **⚠️ String concatenation** - Works but verbose:
```yaml
script: |
  const body = '## Title\n' +
    '\n' +
    '⏳ Status line\n';
```
Satisfies YAML and markdown, but hard to read and maintain

3. **✅ Dedent function** - Best approach (currently used):
```yaml
script: |
  // Define once at top of script
  const dedent = (str) => str.replace(/^[ \t]+/gm, '').trim();

  // Use for all multiline strings
  const body = dedent(`
    ## Title

    ⏳ Status line
  `);
```
**Benefits:**
- Readable multiline template literals (satisfies YAML)
- Indentation stripped at runtime (satisfies markdown)
- DRY - define function once, use everywhere
- Maintainable - easy to see structure at a glance

### Shell Variable Quoting

**Symptom**: shellcheck warnings SC2086 about globbing and word splitting
**Cause**: Unquoted variables in shell scripts
**Fix**: Always quote variables, especially `$GITHUB_OUTPUT` and `$GITHUB_STEP_SUMMARY`

**Wrong**:
```bash
echo "value" >> $GITHUB_OUTPUT  # Unquoted - shellcheck warning
```

**Correct**:
```bash
echo "value" >> "$GITHUB_OUTPUT"  # Quoted - no warning
```

**Why**: Unquoted variables can cause unexpected behavior with spaces, special characters, or globbing.

### Multiline String Handling

**Pattern**: Use heredoc for complex multiline content in shell scripts
**Why**: Prevents quote escaping issues and improves readability

### Error Handling in Workflows

**Principle**: Distinguish between hard failures and acceptable outcomes
**Pattern**: Non-existent resources (cleanup already done) should not fail workflows
**Implementation**: Set appropriate status codes, use warnings instead of errors

**Critical lesson**: External CLI tools may not provide reliable error differentiation
- Example: Surge CLI returns exit code 1 for ALL errors (domain not found, auth failure, network error)
- No JSON output, no verbose mode, no specific exit codes
- String matching on error messages is unreliable (messages change between versions)
- **Solution**: Treat all failures as errors unless the tool provides structured error reporting
- **Don't assume**: Always verify actual exit codes and error messages from documentation/source code

## Optimized Workflow Development Cycle

### During Development (Fastest Feedback)
1. Install actionlint locally (one-time):
   ```bash
   bash <(curl -fsSL https://raw.githubusercontent.com/rhysd/actionlint/main/scripts/download-actionlint.bash)
   sudo mv actionlint /usr/local/bin/
   ```
2. Edit workflow file
3. Run actionlint immediately: `actionlint .github/workflows/your-file.yml`
4. Fix issues in real-time
5. Repeat until passing

### Before Push
Validate manually: `actionlint .github/workflows/*.yml`

### Automatic CI Validation (Mandatory)
- Runs on every PR that modifies workflows
- Blocks merge if validation fails
- No local setup required - enforced server-side
- Provides detailed error messages in PR checks

**Best practice**: Run actionlint locally during development for immediate feedback, rely on CI as mandatory gate.

## Tool Selection Guide

**Need comprehensive validation?** → Use actionlint (always)
**Need quick syntax check?** → Use PyYAML command
**Need style enforcement?** → Add yamllint (optional)

## Reference

**Install actionlint (local development):**
```bash
# Download and install to /usr/local/bin
bash <(curl -fsSL https://raw.githubusercontent.com/rhysd/actionlint/main/scripts/download-actionlint.bash)
sudo mv actionlint /usr/local/bin/

# Verify installation
actionlint --version
```

**Usage:**
```bash
# Validate all workflows
actionlint .github/workflows/*.yml

# Validate specific file
actionlint .github/workflows/pr.yml
```

**CI:**
- Automatically downloads and runs on every PR
- No manual setup required

**Resources:**
- [actionlint documentation](https://github.com/rhysd/actionlint)
- [GitHub Actions syntax](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)
- [shellcheck wiki](https://www.shellcheck.net/wiki/)

## Lessons Learned (from PR #16)

### 1. Never Assume - Always Verify
- Don't speculate about exit codes or error messages
- Check actual source code and documentation
- Test behavior when possible
- Document findings for future reference

### 2. YAML Indentation is Critical
- Block scalars (`|`) require consistent indentation
- Content in template literals must be indented
- YAML parser interprets unindented lines as new keys
- Use actionlint to catch these early
- **Best solution**: Use `dedent()` helper function to strip indentation at runtime
  - Satisfies YAML parser (content is indented)
  - Satisfies markdown rendering (indentation removed before posting)
  - More readable and maintainable than string concatenation

### 3. Shell Script Best Practices
- Quote all variables (`"$VAR"` not `$VAR`)
- Use command grouping `{ cmd1; cmd2; } >> file` instead of multiple redirects
- Enable shellcheck in actionlint for automated checking
- Exit codes: 0=success, non-zero=failure (convention, but verify tool-specific behavior)

### 4. Error Handling Requires Understanding
- Not all CLI tools provide structured error output
- Exit code 1 doesn't always mean "not found"
- String matching on errors is fragile (messages change)
- When in doubt, fail loudly rather than hide real errors

### 5. Tool Selection: Committed vs Download-on-Demand
**Committed binaries**: Reliable, fast, works offline, consistent versions
**Download-on-demand**: Smaller repo, platform-agnostic, always latest version
**Decision**: Depends on priorities (reliability vs repo size vs latest features)

### 6. Documentation Consolidation
- Single source of truth prevents sync issues
- Instructions file for Copilot, minimal READMEs for humans
- GitHub Copilot instructions apply automatically when editing matching files
- Keep documentation close to what it describes
