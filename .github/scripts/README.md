# Validation Tools

This directory contains **actionlint** - the official GitHub Actions validation tool.

## Quick Start

```bash
# Validate all workflows
.github/scripts/actionlint .github/workflows/*.yml
```

## Mandatory Validation

- ✅ **CI validation**: Automatic on all PRs (no setup required)
- ⚪ **Pre-commit hook**: Optional local speedup (requires `git config` setup)

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
