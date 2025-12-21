# Validation Tools

This directory contains **actionlint** - the official GitHub Actions validation tool.

## Quick Start

```bash
# Validate all workflows
.github/scripts/actionlint .github/workflows/*.yml
```

## Automated Validation

- ✅ **CI**: Automatic validation on all PRs (mandatory)
- ✅ **Pre-commit hook**: Available at `.github/hooks/pre-commit.sample`

## Complete Documentation

See [`.github/instructions/yaml-validation.instructions.md`](../instructions/yaml-validation.instructions.md) for:
- Complete validation workflow
- Tool comparison matrix
- Development cycle optimization
- Troubleshooting patterns

## Update actionlint

```bash
bash <(curl -s https://raw.githubusercontent.com/rhysd/actionlint/main/scripts/download-actionlint.bash)
mv actionlint .github/scripts/
```
