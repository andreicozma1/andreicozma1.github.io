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
**Fix**: Indent all lines within template literals to match or exceed parent indentation

### Multiline String Handling

**Pattern**: Use heredoc for complex multiline content in shell scripts
**Why**: Prevents quote escaping issues and improves readability

### Error Handling in Workflows

**Principle**: Distinguish between hard failures and acceptable outcomes
**Pattern**: Non-existent resources (cleanup already done) should not fail workflows
**Implementation**: Set appropriate status codes, use warnings instead of errors

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
