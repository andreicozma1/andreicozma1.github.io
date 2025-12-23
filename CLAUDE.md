# Claude Code Collaboration Guide

**Purpose:** Document optimal workflows, principles, and best practices for collaborating on this Gatsby/TypeScript portfolio website.

**Character limit:** 20,000 (current: ~15,000)

---

## Core Principles

### 1. **Verify Before Push (VBP)**
**Never push broken code.** Always validate locally before committing.

**Why:** GitHub CI/CD is not a substitute for local validation. Broken pushes waste time and create unnecessary commits.

**How (Smart Validation):**
- **Automated:** `./scripts/smart-validate.sh` - Detects work type, runs appropriate checks
- **Manual TypeScript:** `npx tsc --noEmit | grep -v "Cannot find module"`
- **Manual JSON:** `find src/data -name "*.json" -exec python -m json.tool {} \; > /dev/null`
- **Git diff review:** Always before committing

### 2. **Read Before Write (RBW)**
**Always read files before editing them.** The Edit tool requires prior Read.

**Why:** Understanding existing structure prevents breaking changes and maintains consistency.

**How:**
- Use Read tool for target files
- Use Grep to find patterns across multiple files
- Use Glob to discover file locations

### 3. **Test Changes Incrementally (TCI)**
**Make small, verifiable changes rather than large batch updates.**

**Why:** Easier to debug, easier to review, easier to revert if needed.

**Anti-pattern:**
```bash
# BAD: Mass update without validation
sed -i 's/pattern/replacement/g' **/*.json
git add -A && git commit && git push
```

**Pattern:**
```bash
# GOOD: Test on one file first
Edit one file
Verify the change
Apply to remaining files
Run type check
Commit and push
```

### 4. **Preserve User Intent (PUI)**
**Honor user-provided data and decisions exactly.**

**Why:** The user knows their domain better than you. Don't embellish, don't speculate, don't "improve" without asking.

**Examples:**
- User says "remove ECE 598" → Remove it, don't try to fix it
- User provides course content → Use it verbatim, don't add topics
- User specifies technology → Don't add related tech unless confirmed

---

## Repository Structure

### Data Layer (TypeScript)
```
src/data/
├── academics/                 # MAIN PAGE - Single academics structure
│   ├── IntelligentSystems.ts  # Graduate ML/AI courses
│   ├── GraduateCore.ts        # Graduate CS core
│   ├── GraduateOther.ts       # Specialized topics
│   ├── Mathematics.ts         # Math & Stats (grad + undergrad)
│   ├── Cybersecurity.ts       # Security courses
│   └── General.ts             # CS foundational courses
└── academics-shared/          # DRY: Reusable course definitions (17 files)
    ├── COSC522-MachineLearning.ts
    ├── ECE517-ReinforcementLearning.ts
    └── MATH525-Statistics.ts
```

**Principles:**
- **Single structure**: One main page, no alternative views
- **Shared files**: 17 graduate courses, zero duplication
- **TypeScript**: 100% migration complete (no JSON)
- **Simplicity**: Pyramid/domains removed per "don't over-engineer" principle

### Config Layer (TypeScript)
```
src/config/
└── Pages.tsx                  # Page registry and navigation config
```

**Principle:** All pages must be registered in Pages.tsx. Hidden pages use `hidden: true`.

### Component Layer
```
src/components/
├── Custom/SkillsSection.tsx   # Main academics renderer
├── DataCard/                  # Card components
└── UIElement/SlideNotes.tsx   # Notes with AlertColor typing
```

---

## Workflow Patterns

### Pattern: Adding a New Course

**Steps:**
1. **Create shared definition**
   - File: `src/data/academics-shared/DEPT###-CourseName.json`
   - Use consistent property order: title → subtitle → chips → actions → avatar
   - Get course description from official catalog (no speculation)

2. **Validate JSON structure**
   ```bash
   # Check syntax
   cat file.json | python -m json.tool > /dev/null
   ```

3. **Add to section files**
   - Import or embed in relevant section files
   - Maintain alphabetical/logical ordering

4. **Test locally**
   - Run type check: `npx tsc --noEmit`
   - Verify no severity/AlertColor issues in notes
   - Check for trailing whitespace

5. **Commit with context**
   - Clear message explaining what and why
   - Reference source if using external data

### Pattern: Updating Course Data

**Principle:** Update shared file → propagate to sections

**Why:** Single source of truth prevents inconsistencies

**Anti-pattern:**
```
# BAD: Update in multiple places
Edit GraduateML.json (adds tool)
Edit IntelligentSystemsML.json (forgets to add tool)
Result: Inconsistent data
```

**Pattern:**
```
# GOOD: Update shared, then propagate
Edit ECE517-ReinforcementLearning.json (add tool)
Update all section files that reference it
Verify consistency with Grep
```

### Pattern: Fixing TypeScript Errors

**Process:**
1. **Read the error message carefully**
   - Identify file and line number
   - Understand type mismatch

2. **Check type definitions**
   - Find interface (e.g., NoteProps, AlertColor)
   - Understand what's expected

3. **Fix at the source**
   - Don't cast unless necessary
   - Prefer removing optional properties over type casting
   - JSON imports = strings, not literals (can't use "info" as literal)

4. **Verify locally before pushing**
   ```bash
   npx tsc --noEmit
   # Must show 0 errors or only dependency errors
   ```

**Example - severity field:**
- Issue: JSON `"severity": "info"` typed as `string`, not `"info"` literal
- Solution: Remove optional severity field (simpler than casting)
- Why: JSON imports don't preserve literal types in TypeScript

### Pattern: Working with Git

**Commit Strategy:**
- **Phase commits**: Group related changes (e.g., "Phase 1: Quick fixes")
- **Atomic when possible**: One logical change per commit
- **Descriptive messages**: Explain what and why

**Before Commit:**
```bash
git status          # See what changed
git diff            # Review changes
git add -A          # Stage all
```

**After Commit:**
```bash
git push -u origin <branch-name>
```

**Handling Conflicts:**
1. Pull with rebase: `git pull --rebase origin <branch>`
2. Resolve conflicts manually (Edit tool)
3. Mark resolved: `git add <file> && git rebase --continue`
4. Push: `git push -u origin <branch>`

**Branch Naming:**
- Must start with `claude/`
- Must end with session ID for Claude Code
- Example: `claude/update-academics-page-omGCK`

---

## Common Tasks & Checklists

### Task: Removing a Course

**Checklist:**
- [ ] Delete shared file: `src/data/academics-shared/DEPT###-Course.json`
- [ ] Remove from all section files (pyramid + domains)
- [ ] Search for references: `grep -r "DEPT ###" src/data`
- [ ] Remove from Pages.tsx if independently registered
- [ ] Test build: `npx tsc --noEmit`
- [ ] Commit with clear reason

### Task: Fixing Data Duplication (PR #19 Main Issue)

**Problem:** Section files have embedded course data instead of importing from shared/

**Solution:**
1. Verify shared/ files exist and are complete
2. Refactor section files to import shared data
3. Test that all pages still render correctly

**Tools Needed:**
- DRY principle enforcement
- Import/export mechanism for JSON (may need TypeScript)
- Type safety preservation

### Task: Standardizing Property Order

**Standard Order:**
```json
{
  "title": "...",
  "subtitle": "...",
  "chips": { ... },
  "actions": [ ... ],  // optional
  "avatar": "..."
}
```

**Check With:**
```bash
# Find files with avatar before chips
grep -B1 '"avatar":' src/data/**/*.json | grep -B1 '"chips":'
```

**Fix:**
- Read file
- Move avatar to end
- Verify JSON is valid

---

## Anti-Patterns (What NOT to Do)

### ❌ Don't Speculate on Content
**Bad:** Adding "Koopman Operator Theory" to RL course because user researches it
**Why:** Course content ≠ Research content. Only use official syllabi.
**Good:** Ask user or find official course description

### ❌ Don't Mass-Edit Without Testing
**Bad:** `sed -i 's/pattern/replacement/g' **/*.json && git push`
**Why:** Breaks JSON syntax, removes needed commas, creates massive cleanup
**Good:** Test on one file, verify, then apply systematically

### ❌ Don't Push Before Validating
**Bad:** Make changes → commit → push → CI fails → fix → push again
**Why:** Creates noisy commit history, wastes time
**Good:** Validate locally → commit → push once

### ❌ Don't Ignore TypeScript Errors
**Bad:** "It's just types, it'll work at runtime"
**Why:** Types catch bugs, ensure contracts, prevent runtime errors
**Good:** Fix all type errors before committing

### ❌ Don't Hardcode Examples in Documentation
**Bad:** "Run: npm install lodash"
**Why:** Context changes, exact commands become outdated
**Good:** "Install dependencies: check package.json and use npm/yarn"

### ❌ Don't Create Files Unnecessarily
**Bad:** Creating README.md, CHANGELOG.md unprompted
**Why:** User hasn't requested it, may not want it
**Good:** Only create files when explicitly asked or clearly necessary

### ❌ Don't Over-Engineer Organization
**Bad:** Creating pyramid/, domains/, AND main/ structures "just in case"
**Why:** More structures = more maintenance, harder to keep consistent
**Good:** Start simple, add complexity only when user explicitly needs it
**Pattern:** Consolidate to one primary structure, keep alternatives hidden if needed

---

## TypeScript Gotchas

### JSON Import Typing
**Issue:** JSON imports in TypeScript type all strings as `string`, not literal types

**Example:**
```typescript
// file.json
{ "severity": "info" }

// TypeScript sees:
{ severity: string }  // not "info" literal

// But NoteProps expects:
{ severity?: "info" | "warning" | "error" | "success" }
```

**Solution:** Remove optional fields that cause type issues

### Missing Dependencies
**When:** Running `npx tsc --noEmit` without node_modules installed

**Expected:** Errors like "Cannot find module 'react'"

**Not a Problem:** These are dependency errors, not code errors

**Real Problem:** Errors in your code (src/) about type mismatches

---

## Quality Gates

### Before Committing
- [ ] All files read before edited
- [ ] JSON files are syntactically valid
- [ ] Property ordering is consistent
- [ ] No trailing whitespace
- [ ] No speculation in content
- [ ] Commit message is descriptive

### Before Pushing
- [ ] Type check passes (or only shows dependency errors)
- [ ] Git diff reviewed
- [ ] No debug code/comments left in
- [ ] Branch name follows convention

### After Pushing
- [ ] Monitor CI/CD pipeline
- [ ] Address any failures immediately
- [ ] Update PR if requested

---

## Smart Workflow Optimization

### **Principle: Install Dependencies Intelligently**

**Don't avoid `npm install` - use it strategically based on work type.**

### Decision Matrix

| Work Type | Example Changes | Dependencies Needed? | Validation Approach |
|-----------|----------------|---------------------|---------------------|
| **JSON-only** | Course data, section files | ❌ No | JSON syntax + TypeScript check |
| **TypeScript** | Components, utils, types | ✅ Yes (recommended) | TypeScript check + ESLint |
| **Config** | package.json, gatsby-config, eslint.config | ✅ Yes (required) | Full build + ESLint |
| **Major refactor** | Multiple file types | ✅ Yes (required) | Full build + ESLint + tests |

### Optimized Workflows

#### **Workflow A: JSON Data Changes** (Current Session)
```bash
# No dependencies needed
1. Edit JSON files
2. Validate: ./scripts/smart-validate.sh
3. Or manually: npx tsc --noEmit | grep -v "Cannot find module"
4. Commit and push

Time: ~10 seconds
Risk: Low
```

#### **Workflow B: Component/TypeScript Changes**
```bash
# Install dependencies once per session
1. npm install  # One-time (2-5 min)
2. Edit TypeScript files
3. Validate: ./scripts/smart-validate.sh
4. Commit and push

Time: First run ~5 min, subsequent ~15 sec
Risk: Medium (caught locally)
```

#### **Workflow C: Config/Major Changes**
```bash
# Full validation required
1. npm install  # One-time (if not done)
2. Make changes
3. npm run build  # Full build
4. Fix any errors
5. Commit and push

Time: First run ~5 min, build ~1-3 min
Risk: Low (everything validated)
```

### Smart Validation Script

**Location:** `scripts/smart-validate.sh`

**Features:**
- Auto-detects changed files (with --verbose flag to show them)
- Runs appropriate validation for work type
- Installs dependencies only when needed (with --legacy-peer-deps)
- Shows actual error messages for debugging
- Includes ESLint linting for TypeScript changes (advisory warnings)
- Provides context-specific recommendations

**Usage:**
```bash
# Before any commit
./scripts/smart-validate.sh

# Verbose mode (shows which files changed)
./scripts/smart-validate.sh --verbose

# It will:
# - Detect JSON-only → JSON syntax + TypeScript type check
# - Detect TypeScript → Type check + ESLint (if deps installed)
# - Detect config → Full validation + ESLint + JSON
```

---

## Tools Reference

### Development Scripts
```bash
# Smart validation (recommended - auto-detects work type)
./scripts/smart-validate.sh
./scripts/smart-validate.sh --verbose  # Show changed files

# Manual dependency setup (one-time per session when needed)
npm install --legacy-peer-deps

# Manual validation commands
npx tsc --noEmit        # TypeScript check only
npm run lint            # ESLint check
npm run lint:fix        # ESLint auto-fix
```

### Search & Discovery
```bash
# Find files by pattern
Glob: pattern="**/*.json"

# Search content
Grep: pattern="course name" path="src/data"

# Read file with line numbers
Read: file_path="/full/path"
```

### Validation Commands
```bash
# TypeScript check (no deps needed for type check)
npx tsc --noEmit

# JSON syntax check
find src/data -name "*.json" -exec python -m json.tool {} \; > /dev/null

# Linting (deps required - ESLint 9 with flat config)
npm run lint           # Check for issues
npm run lint:fix       # Auto-fix issues

# Full build (deps required)
npm run build
```

### Editing
```bash
# Edit file (requires prior Read)
Edit: old_string → new_string

# Write new file
Write: file_path + content

# Multiple edits - use Edit tool multiple times
```

---

## PR Review Workflow

### Addressing PR Feedback

**Process:**
1. **Fetch PR comments** - Use WebFetch on PR URL
2. **Categorize issues** - Critical, Medium, Low priority
3. **Create implementation plan** - Phase 1 (quick), Phase 2 (config), Phase 3 (refactor)
4. **Execute systematically** - One phase at a time
5. **Validate between phases** - Test after each phase
6. **Document in commits** - Clear phase markers

**Example Structure:**
```
PR#19 Phase 1: Quick fixes
PR#19 Phase 2: Configuration updates
PR#19 Phase 3: Refactoring (if needed)
```

---

## Lessons Learned

### Session: Academics Reorganization (Dec 2024)

**What Worked Extremely Well:**
1. ✅ **TypeScript Migration** - JSON → TS eliminated all duplication issues
2. ✅ **DRY with Shared Files** - 17 graduate courses, zero duplicates
3. ✅ **Iterative Refinement** - User feedback → adjust → repeat worked better than trying to get it perfect initially
4. ✅ **Smart Validation Script** - Caught all issues before pushing
5. ✅ **Comprehensive Audits** - Final audit confirmed zero course losses
6. ✅ **Clear Commit Messages** - Made it easy to track evolution

**What We Learned:**
1. **Simplicity Wins** - Started with pyramid/domains/main structures → consolidated to just main page
2. **Listen to User Instincts** - "This grouping feels awkward" was always right
3. **Course Grouping Pattern** - ML/AI together, separate specialized topics, combine grad+undergrad math
4. **Architecture Evolution** - JSON → TypeScript → Multiple views → Consolidated main page
5. **Hidden Pages Strategy** - Keep alternative views hidden (`hidden: true`) instead of deleting

**Anti-Patterns Discovered:**
- ❌ Creating 3 organizational structures when 1 would suffice
- ❌ Trying to group unrelated courses (Vision + HCI + PSYC didn't make sense)
- ❌ Moving courses too many times - should have consolidated earlier

**Workflow Insights:**
- Moving courses between sections: Update imports AND items array
- Renaming sections: Update title, notes description, AND filename if needed
- Validation before push is non-negotiable: `./scripts/smart-validate.sh`
- User feedback often reveals better organization than theoretical planning

### Session: PR #19 Revision

**What Went Wrong:**
1. ❌ Pushed without running type check → TypeScript error in CI
2. ❌ Used sed for mass JSON edit → Broke all files
3. ❌ Had to commit multiple fixes for same issue

**What Went Right:**
✅ Created phased approach (Phase 1, 2, 3)
✅ Fixed issues systematically
✅ Used Python for reliable JSON manipulation
✅ Documented lessons in claude.md

**Key Takeaways:**
1. **Always validate before pushing** - `npx tsc --noEmit` is non-negotiable
2. **Test destructive operations** - Try on one file before mass-applying
3. **Use proper tools** - Python/jq for JSON, not sed/awk
4. **Commit logical groups** - Phases make review easier

---

## Best Practices Summary

### DO ✅
- Validate locally before pushing
- Read files before editing
- Use official sources for content
- Test incrementally
- Commit in logical phases
- Ask when uncertain
- Document patterns

### DON'T ❌
- Push without type checking
- Speculate on content
- Mass-edit without testing
- Ignore type errors
- Create unnecessary files
- Use sed for JSON manipulation
- Skip git diff review

---

## Maintenance Notes

**Last Updated:** 2025-12-23

**Recent Changes:**
- Completed TypeScript migration (100% - no JSON)
- Updated repository structure to reflect consolidated main page
- Added comprehensive lessons from academics reorganization session
- Documented anti-pattern: don't over-engineer organizational structures
- Added workflow insights for course grouping and section management

**Key Metrics:**
- **Course Count:** 38 courses (17 graduate + 21 undergraduate)
- **Duplication:** 0 (all graduate courses use shared files)
- **Type Safety:** 100% TypeScript
- **Character Count:** ~16,500 / 20,000 limit

**Future Optimization (Per Best Practices):**
- Consider moving detailed workflows to `docs/workflows/` for progressive disclosure
- Current size is good but approaching upper limit for optimal LLM processing
