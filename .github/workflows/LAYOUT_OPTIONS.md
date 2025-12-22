# Build Report Layout Options

## Current Layout Issues
1. **Delta Display**: The delta is mathematically correct but might be confusing when shown in both the status line AND the table
2. **"Types" unclear**: Single-line status is hard to scan
3. **Long footer**: Commit info line is too cramped

---

## Option 1: Sectioned with Subheadings (Recommended)

```markdown
## CI Report

🚀 https://pr-123-andreicozma1.surge.sh

### Status Summary
- ✅ **Type Check**: Passed
- ✅ **Build**: Completed (9.5M, -2.13M from base)
- ✅ **Deploy**: Live
- ⏱️ **Build Time**: 53s

### Build Metrics

| Metric | Base | PR | Change |
|:-------|-----:|---:|-------:|
| 📦 Total Size | 12M | **9.5M** | -2.13M 📉 |
| 📜 JavaScript | 1.2M | **1.2M** | +140B 📈 |
| 🎨 CSS | 0 | **0** | - |
| 📄 HTML Pages | 10 | **10** | - |
| 🖼️ Images | 2 | **2** | - |

### Large Bundles
**1 bundle(s) exceed 200KB:**

| File | Size |
|:-----|-----:|
| `framework-abc123.js` | 245K |

### Build Details
- **Commit**: `03af251`
- **Base**: `main@91413e9` 📦
- **Workflow**: [View Run](https://github.com/.../runs/20418560577)
- **Timestamp**: 2025-12-22 00:59:25 UTC
```

---

## Option 2: Compact Cards

```markdown
## CI Report

🚀 **Preview**: https://pr-123-andreicozma1.surge.sh

<table>
<tr>
<td>

#### ✅ Type Check
Passed

</td>
<td>

#### ⚠️ Build
9.5M (-2.13M)
⏱️ 53s

</td>
<td>

#### ✅ Deploy
Live

</td>
</tr>
</table>

### Build Comparison vs `main@91413e9`

| Metric | Base | PR | Δ |
|:-------|-----:|---:|--:|
| 📦 Total Size | 12M | **9.5M** | -2.13M 📉 |
| 📜 JavaScript | 1.2M | **1.2M** | +140B 📈 |
| 🎨 CSS | 0 | **0** | - |
| 📄 HTML Pages | 10 | **10** | - |
| 🖼️ Images | 2 | **2** | - |

⚠️ **1 bundle(s) exceed 200KB** - See workflow for details

---
**Commit** `03af251` · [Workflow Run](https://github.com/.../runs/20418560577) · 2025-12-22 00:59:25 UTC
```

---

## Option 3: Two-Column Layout

```markdown
## CI Report

### Status
| Check | Result |
|:------|:-------|
| ✅ Type Check | Passed |
| ⚠️ Build | 9.5M (↓2.13M) |
| ✅ Deploy | [Preview](https://pr-123-andreicozma1.surge.sh) |
| ⏱️ Build Time | 53s |

### Metrics vs `main@91413e9`
| Metric | Base → PR | Change |
|:-------|----------:|-------:|
| 📦 Total Size | 12M → **9.5M** | -2.13M 📉 |
| 📜 JavaScript | 1.2M → **1.2M** | +140B 📈 |
| 🎨 CSS | 0 → **0** | - |
| 📄 HTML Pages | 10 → **10** | - |
| 🖼️ Images | 2 → **2** | - |

<details>
<summary>⚠️ 1 bundle(s) exceed 200KB</summary>

| File | Size |
|:-----|-----:|
| `framework-abc123.js` | 245K |
</details>

<details>
<summary>📋 Build Info</summary>

- **PR Commit**: `03af251`
- **Base Commit**: `main@91413e9` (cached)
- **Workflow**: https://github.com/.../runs/20418560577
- **Completed**: 2025-12-22 00:59:25 UTC
</details>
```

---

## Option 4: Minimal & Clean

```markdown
## CI Report · [Preview](https://pr-123-andreicozma1.surge.sh)

**Status**: ✅ Types · ⚠️ Build · ✅ Deploy · ⏱️ 53s

### Build Size: 9.5M (↓17% from base)

| Component | Size | vs Base |
|:----------|-----:|--------:|
| 📜 JavaScript | 1.2M | +140B |
| 🎨 CSS | 0 | - |
| 📦 Other | 8.3M | -2.27M |

⚠️ 1 large bundle detected

<sub>
`03af251` compared to `main@91413e9` (cached) ·
[View workflow](https://github.com/.../runs/20418560577) ·
Built at 2025-12-22 00:59:25 UTC
</sub>
```

---

## Option 5: Progressive Disclosure

```markdown
## ✅ CI Report - All Checks Passed

🚀 **Live Preview**: https://pr-123-andreicozma1.surge.sh

### Quick Summary
```
✅ Types: Passed
⚠️ Build:  9.5M (saved 2.13M) - 1 large bundle
✅ Deploy: Success
⏱️  Time:  53s
```

<details open>
<summary><b>📊 Build Metrics</b></summary>

Comparing PR to `main@91413e9`:

| Metric | Base | This PR | Change |
|--------|-----:|--------:|-------:|
| 📦 Total Size | 12M | **9.5M** | **-2.13M** 📉 |
| 📜 JavaScript | 1.2M | 1.2M | +140B |
| 🎨 CSS | 0 | 0 | - |
| 📄 HTML Pages | 10 | 10 | - |
| 🖼️ Images | 2 | 2 | - |

</details>

<details>
<summary>⚠️ Large Bundles (1)</summary>

Files exceeding 200KB:
- `framework-abc123.js` - 245K

</details>

<details>
<summary>ℹ️ Build Information</summary>

| | |
|---|---|
| **PR Commit** | `03af251` |
| **Base Branch** | `main@91413e9` 📦 |
| **Workflow** | [Run #20418560577](https://github.com/.../runs/20418560577) |
| **Completed** | 2025-12-22 00:59:25 UTC |

</details>
```

---

## Recommendations

### For Delta Clarity
Instead of just `-2.13M 📉`, consider:
- `↓2.13M (17% smaller)`
- `-2.13M saved`
- `12M → 9.5M (-2.13M)`

### For Status Line
Replace:
- `✅ Types · ⚠️ Build · ✅ Deploy · ⏱️ 53s`

With either:
- Separate subheadings (Options 1, 3, 5)
- Status table (Option 3)
- Cards (Option 2)

### For Footer
Break up long line by using:
- Multi-line format with labels
- Collapsible details section
- Sub-text with links

## My Top Pick: Option 1
- Clear hierarchy with H3 subheadings
- Easy to scan
- All info visible without clicking
- Professional appearance
- Footer broken into labeled lines
