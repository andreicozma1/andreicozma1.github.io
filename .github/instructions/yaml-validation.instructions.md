---
applyTo: "**/*.yml,**/*.yaml"
---

# YAML & GitHub Actions Workflow Validation

## Validation Order (Most to Least Important)

1. **actionlint** - GitHub Actions-specific validation (primary tool)
2. **PyYAML** - Basic YAML syntax verification (fallback)
3. **yamllint** - Style and formatting checks (optional)

## Core Principles

### Always Validate Before Committing

Run validation after any YAML modifications. Syntax errors prevent workflows from running.

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

### actionlint (.github/scripts/actionlint)

**Purpose**: Comprehensive GitHub Actions workflow validation
**Use for**: Expression validation, type checking, deprecated action detection, shell script validation
**Why**: Catches GitHub Actions-specific issues that generic YAML validators miss
**When**: Before every commit, in CI pipelines

### validate_workflows.py (.github/scripts/validate_workflows.py)

**Purpose**: Basic YAML syntax and structure verification
**Use for**: Quick validation when actionlint unavailable, lightweight CI checks
**Why**: Portable, dependency-free fallback validation
**When**: As secondary check or in constrained environments

### PyYAML (python yaml.safe_load)

**Purpose**: Verify YAML can be parsed without errors
**Use for**: Basic syntax checking, ensuring no parser errors
**Why**: Quick confirmation of valid YAML structure
**When**: Minimal validation needs, automated checks

### yamllint

**Purpose**: YAML style and formatting consistency
**Use for**: Code style enforcement, team consistency
**Why**: Identifies style issues (line length, document markers)
**When**: Pre-commit hooks, style enforcement (generates many warnings on valid YAML)

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

## Testing Changes

1. Run actionlint first (fastest, most comprehensive feedback)
2. Fix any reported issues
3. Run PyYAML validation to confirm parse success
4. Commit only after both pass

## Reference

Tools location: `.github/scripts/`
Documentation: `.github/scripts/README.md`
