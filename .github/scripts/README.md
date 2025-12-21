# GitHub Actions Validation Scripts

This directory contains tools for validating GitHub Actions workflow files.

## Tools

### 1. actionlint (Recommended)

**actionlint** is the official, robust tool specifically designed for GitHub Actions validation.

**Features:**
- GitHub Actions-specific syntax validation
- Type checking for inputs/outputs/expressions
- Shell script validation in `run` steps (using shellcheck if available)
- Detection of deprecated actions
- Best practices checking
- Context and expression validation

**Usage:**
```bash
# Validate all workflows
.github/scripts/actionlint .github/workflows/*.yml

# Validate specific workflow
.github/scripts/actionlint .github/workflows/pr.yml

# Show detailed error messages
.github/scripts/actionlint -verbose .github/workflows/*.yml
```

**Installation:**
The binary is already included in this directory. To update to latest version:
```bash
bash <(curl -s https://raw.githubusercontent.com/rhysd/actionlint/main/scripts/download-actionlint.bash)
mv actionlint .github/scripts/
```

### 2. validate_workflows.py

A Python script for basic YAML syntax and structure validation.

**Usage:**
```bash
# Validate all workflows
python3 .github/scripts/validate_workflows.py

# Validate specific workflow
python3 .github/scripts/validate_workflows.py .github/workflows/pr.yml
```

**Requirements:**
- Python 3.6+
- PyYAML (`pip install pyyaml`)

## Recommended Validation Flow

1. **actionlint** - Primary validation (most comprehensive)
2. **validate_workflows.py** - Fallback if actionlint unavailable

## CI Integration

You can add validation to your CI workflow:

```yaml
- name: Validate workflows
  run: |
    .github/scripts/actionlint .github/workflows/*.yml
```

## Resources

- [actionlint documentation](https://github.com/rhysd/actionlint)
- [GitHub Actions syntax reference](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)
