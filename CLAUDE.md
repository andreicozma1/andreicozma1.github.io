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

### 5. **Dependency Integrity (DI)**
**Always keep package-lock.json in sync with package.json.** The lock file must be committed and updated properly.

**Why:** Ensures reproducible builds, prevents CI/CD failures, and maintains security by locking exact versions.

**Critical Facts:**
- ✅ **DO commit package-lock.json** for applications (like this Gatsby site)
- ✅ **Use `npm ci`** in CI/CD (requires exact lock file match)
- ✅ **Use `npm install`** in development (auto-updates lock file)
- ❌ **DON'T manually edit package-lock.json** (always regenerate)
- ❌ **DON'T commit package.json changes without updating lock file**

**How to Maintain Sync:**
```bash
# Adding/updating a package (CORRECT)
npm install <package>        # Updates both package.json and lock file
git add package.json package-lock.json
git commit -m "Add <package>"

# Removing a package (CORRECT)
npm uninstall <package>      # Updates both files
git add package.json package-lock.json
git commit -m "Remove <package>"

# If lock file gets out of sync (FIX)
rm package-lock.json
npm install
git add package-lock.json
git commit -m "Regenerate package-lock.json to sync with package.json"
```

**Validation:**
- Before every commit: `./scripts/smart-validate.sh`
- CI/CD enforces this: `npm ci` fails if out of sync ✅
- Modern npm (v10+) properly resolves peer dependency conflicts without --legacy-peer-deps

**Common Mistakes:**
- ❌ Editing package.json manually without running `npm install`
- ❌ Deleting package-lock.json and not committing the regenerated one
- ❌ Using `npm install` in CI/CD instead of `npm ci`
- ❌ Ignoring package-lock.json in .gitignore (should be committed!)

### 6. **Avoid Unnecessary Filtering (AUF)**
**When processing data, don't add filters that exclude valid cases.**

**Why:** Overly specific patterns silently drop data. If you count 10 items but only extract 5 because of a filter mismatch, users see incomplete results without knowing why.

**Common Mistakes:**
- ❌ Using `^src/` anchor when errors can come from any directory
- ❌ Grepping for specific patterns then counting with a different pattern
- ❌ Hardcoding paths or prefixes that may not always apply

**Pattern:**
```bash
# BAD: Count all errors but only extract from src/
error_count=$(grep -c "error TS" file.txt)
errors=$(grep "^src/.*error TS" file.txt | head -5)  # Misses root-level files!

# GOOD: Use the same pattern for both
error_count=$(grep -c "error TS" file.txt)
errors=$(grep "error TS" file.txt | head -5)  # Matches all sources
```

**Applies To:**
- CI/CD pipelines and log processing
- Data extraction and transformation scripts
- Search patterns and filters in code
- Regular expressions with anchors (`^`, `$`)

**Review Checklist:**
- [ ] Does the extraction pattern match what was counted?
- [ ] Are there anchors (`^src/`, `\.json$`) that might exclude valid cases?
- [ ] Would a file in an unexpected location be missed?

### 7. **Synthesize As You Go (SAYG)**
**Continuously document insights, patterns, and lessons in this file.**

**Why:** This file is living documentation that makes future work more efficient. Every session generates valuable context - patterns that work, mistakes to avoid, tool discoveries - that should be captured while fresh.

**When to Update CLAUDE.md:**
- ✅ After completing a significant task or fixing a non-trivial bug
- ✅ When discovering a better way to do something (tool, command, pattern)
- ✅ When making a mistake that should not repeat
- ✅ When finding that existing documentation is incorrect or incomplete
- ✅ Before ending a work session (retrospective synthesis)

**What Belongs Here:**
- **Principles**: Core rules that guide all work (like these numbered sections)
- **Patterns**: Reusable solutions to recurring problems
- **Workflows**: Step-by-step processes for common tasks
- **Lessons Learned**: Specific incidents with what went wrong and how to prevent
- **Tool Reference**: Commands, flags, and when to use each option
- **Anti-patterns**: Things that seem right but cause problems

**What Does NOT Belong Here:**
- ❌ Temporary task lists (use TodoWrite instead)
- ❌ Specific data content (belongs in code/data files)
- ❌ Time-based reminders ("check monthly") - AI can't schedule
- ❌ Highly project-specific details that won't generalize

**How to Update:**
1. Read existing relevant sections first
2. Prefer refining existing content over adding new sections
3. Keep entries actionable and pattern-focused
4. Include concrete examples when helpful
5. Maintain the character limit (~20,000)

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
- [ ] Remove from all section files
- [ ] Search for references: `grep -r "DEPT ###" src/data`
- [ ] Remove from Pages.tsx if independently registered
- [ ] Test build: `npx tsc --noEmit`
- [ ] Commit with clear reason

### Task: Removing a Page (Gatsby-Specific)

**CRITICAL: File-Based Routing Principle**
In frameworks with file-based routing (Gatsby, Next.js), pages are created from **both** configuration AND physical files. You must remove ALL layers.

**Complete Removal Checklist:**
- [ ] **Layer 1: Data** - Delete data directory (e.g., `src/data/academics-pyramid/`)
- [ ] **Layer 2: Config** - Remove from `src/config/Pages.tsx` configuration
- [ ] **Layer 3: Page Component** - Delete page file in `src/pages/` (e.g., `src/pages/academics-pyramid.tsx`)
- [ ] **Layer 4: Search** - Grep for any remaining references: `grep -ri "pagename" src/`
- [ ] **Layer 5: Validate** - Run type check: `npx tsc --noEmit`
- [ ] **Layer 6: Verify** - Check git status shows all expected deletions
- [ ] Commit with clear explanation of what was removed and why
- [ ] Push and monitor CI build

**Why This Matters:**
Gatsby automatically creates routes from files in `src/pages/`. Even if you remove data and config, leftover page components will cause build failures with "Page not found" errors.

**Generalized Principle:**
When removing features in layered architectures, identify ALL layers where the feature exists and remove from each systematically. Missing even one layer causes runtime/build failures.

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

## Framework-Specific Gotchas

### Gatsby: File-Based Routing

**Core Principle:** Files in `src/pages/` automatically become routes, independent of configuration.

**Common Mistake:** Removing page data/config but forgetting to delete the page component file

**Example Failure:**
```
1. Delete src/data/academics-pyramid/ ✅
2. Remove from Pages.tsx config ✅
3. Forget src/pages/academics-pyramid.tsx ❌
Result: CI fails with "Page AcademicsPyramid not found"
```

**Why It Fails:**
Gatsby sees the file → creates route → tries to render → can't find data configuration → build error

**Prevention:**
- Always search for page component files: `ls src/pages/ | grep <pagename>`
- Use complete removal checklist (see "Task: Removing a Page")
- Verify with grep: `grep -ri "pagename" src/`

**Generalized Lesson:**
In any framework with automatic file-based behavior (routing, API endpoints, etc.), removing a feature requires deleting BOTH:
1. The configuration/data that controls behavior
2. The physical files that trigger the automatic behavior

**Similar Patterns in Other Frameworks:**
- **Next.js**: `pages/` directory for routing, `app/` directory for app router
- **SvelteKit**: `routes/` directory for file-based routing
- **Nuxt.js**: `pages/` directory for automatic routing
- **Astro**: `pages/` directory for file-based routing

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
- Installs dependencies only when needed
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

### Local CI Validation (Mirror CI Exactly)

**Principle:** Before pushing, run the exact same commands CI runs to catch errors locally.

**Why:** Prevents wasted CI cycles and commit noise from fix-after-fix pattern.

**Exact CI Commands:**
```bash
# 1. Install dependencies exactly as CI does
npm ci --loglevel=error

# 2. Run TypeScript check
npm run typecheck

# 3. (Optional) Full build to catch runtime issues
npm run build
```

**When to Use Full CI Mirror:**
- After TypeScript/component changes
- When fixing type errors
- Before any push (if uncertain)

**Common Type Issues to Watch:**
| Issue | Cause | Fix |
|-------|-------|-----|
| `Type 'string' not assignable to literal` | JSON imports lose literal types | Cast at boundary: `as "left" \| "right" \| "center"` |
| `avatar?: "string"` | Typo (quoted type name) | Remove quotes: `avatar?: string` |
| `any` in selectors | Missing RootState type | Import and use: `state: RootState` |

**Workflow:**
```bash
# Before every push
npm ci --loglevel=error && npm run typecheck && echo "Ready to push"

# If errors found:
# 1. Fix the error
# 2. Re-run typecheck
# 3. Only push when clean
```

---

## Tools Reference

### Development Scripts
```bash
# Smart validation (recommended - auto-detects work type)
./scripts/smart-validate.sh
./scripts/smart-validate.sh --verbose  # Show changed files

# Manual dependency setup (one-time per session when needed)
npm install

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

### GitHub CLI (gh)

**Setup (one-time):**
```bash
# Install via direct binary (most reliable)
curl -sL https://github.com/cli/cli/releases/latest/download/gh_*_linux_amd64.tar.gz | tar xz
sudo mv gh_*/bin/gh /usr/local/bin/

# Auth happens automatically via GH_TOKEN environment variable
gh auth status
```

**Quick Reference (prefer built-in commands over `gh api`):**

| Task | Best Command |
|------|--------------|
| **CI status** | `gh pr checks PR_NUM` |
| **Watch CI live** | `gh pr checks PR_NUM --watch` |
| **Run summary + steps** | `gh run view RUN_ID -v` |
| **Failed step logs only** | `gh run view RUN_ID --log-failed` |
| **Full run logs** | `gh run view RUN_ID --log` |
| **PR comments** | `gh pr view PR_NUM --comments` |
| **Re-run workflow** | `gh run rerun RUN_ID` |
| **List failed runs** | `gh run list --status failure` |

**Debugging CI Failures (recommended workflow):**
```bash
# 1. Quick CI status check
gh pr checks PR_NUM -R OWNER/REPO

# 2. If failed, view run with job steps + annotations
gh run view RUN_ID -R OWNER/REPO -v

# 3. Get only failed step logs (no grep needed!)
gh run view RUN_ID -R OWNER/REPO --log-failed

# 4. If needed, full logs for specific job
gh run view RUN_ID -R OWNER/REPO --job JOB_ID --log
```

**Real-Time Monitoring Options:**
```bash
# Option 1: Watch CI checks (best for status)
gh pr checks PR_NUM -R OWNER/REPO --watch

# Option 2: Watch specific run
gh run watch RUN_ID -R OWNER/REPO

# Option 3: Poll bot comments via API (for detailed CI report)
gh api repos/OWNER/REPO/issues/PR_NUM/comments \
  --jq '.[] | select(.user.login == "github-actions[bot]") | .body'
```

**When to Use Each:**
- **`gh pr checks`**: Quick CI status, watching builds
- **`gh run view -v`**: Job steps with annotations (warnings/errors)
- **`gh run view --log-failed`**: Only failed step output (no grepping)
- **`gh api`**: Custom queries, bot comment content, programmatic access
- **WebFetch**: Rendered markdown, human discussion context

---

## PR Review Workflow

### Addressing PR Feedback

**Process:**
1. **Fetch PR comments** - Use `gh api` for bot comments, WebFetch for human discussion
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
- ❌ **CI Build Failure: Incomplete Page Removal** - Deleted data and config but forgot page component files in `src/pages/`, causing build failure

**What Went Wrong (Critical Incident):**
1. ❌ Deleted data directories (`academics-pyramid/`, `academics-domains/`) ✅
2. ❌ Removed from Pages.tsx configuration ✅
3. ❌ **Forgot to delete page component files** (`src/pages/academics-pyramid.tsx`, `src/pages/academics-domains.tsx`) ❌
4. Result: CI build failed with "Page AcademicsPyramid not found" error
5. Root cause: Gatsby's file-based routing creates routes from files in `src/pages/` regardless of configuration

**How It Was Fixed:**
- Identified remaining files with `grep -ri "academics-pyramid" src/`
- Found `src/pages/academics-pyramid.tsx` and `src/pages/academics-domains.tsx`
- Deleted both page component files
- Committed with clear explanation of the fix
- CI build succeeded

**Workflow Insights:**
- Moving courses between sections: Update imports AND items array
- Renaming sections: Update title, notes description, AND filename if needed
- **Removing pages: Delete data, config, AND page component files (all 3 layers)**
- Validation before push is non-negotiable: `./scripts/smart-validate.sh`
- **After deletions: Search for remaining references before committing**
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

### Session: Package Lock Sync + GitHub Actions Update (Dec 2025)

**What Went Wrong:**
1. ❌ CI build failed: `npm ci can only install packages when package.json and package-lock.json are in sync`
2. ❌ Missing dependencies: `babel-eslint@10.1.0`, `eslint-visitor-keys@1.3.0`
3. ❌ Version conflicts: `picomatch@2.3.1` vs `picomatch@4.0.3`
4. ❌ Root cause: package-lock.json was generated with `--legacy-peer-deps` flag, creating incomplete lock file
5. ❌ Initial fix used --legacy-peer-deps, but this didn't solve production deploy (only PR workflow had the flag)

**What Went Right:**
✅ Identified issue immediately from CI logs
✅ Discovered modern npm (v10+) properly resolves peer conflicts WITHOUT --legacy-peer-deps
✅ Final fix: `rm package-lock.json && npm install` (no flags needed!)
✅ Updated all GitHub Actions to latest versions (Dec 2025)
✅ Removed all --legacy-peer-deps flags from workflows and scripts
✅ Documented prevention strategy as Core Principle #5: Dependency Integrity
✅ Created actionable AI documentation in `.github/workflows/CLAUDE.md`

**Actions Updated:**
- actions/checkout: v4 → v6 (Nov 20, 2025 release)
- actions/setup-node: v4 → v6 (verified runner v2.330.0 compatibility)
- actions/github-script: v7 → v8 (Node 24 runtime)
- Confirmed cache@v4, configure-pages@v5, deploy-pages@v4 already latest

**Key Takeaways:**
1. **Package-lock.json must be committed** - It's not optional for applications
2. **Always use `npm install <package>`** - Auto-updates both package.json and lock file
3. **CI/CD is the safety net** - `npm ci` fails immediately if files are out of sync
4. **Validate before push** - `./scripts/smart-validate.sh` catches sync issues
5. **Avoid --legacy-peer-deps** - Modern npm resolves conflicts properly without it; the flag creates incomplete lock files
6. **GitHub Actions need version tracking** - Document current versions and update history
7. **AI documentation must be actionable** - No time-based triggers AI can't perform (e.g., "quarterly updates")
8. **Runner compatibility matters** - Check runner version requirements when updating actions (setup-node@v6 needs v2.327.1+)

**Prevention:**
- Core Principle #5 added with comprehensive guide
- Version history tracking in `.github/workflows/CLAUDE.md`
- Clear DO/DON'T lists for package management
- Validation enforcement already in CI/CD

### Session: Type Safety & CI Tooling (Dec 2025)

**What Went Wrong:**
1. ❌ `avatar?: "string"` - Typo: quoted type name creates literal type instead of string type
2. ❌ `contentAlign` type mismatch - JSON imports typed as `string`, component expects literal union
3. ❌ Surge deployment "unverified" - Site deployed but CDN returned 503 (infrastructure issue)

**What Went Right:**
✅ Ran exact CI commands locally (`npm ci --loglevel=error && npm run typecheck`) before pushing
✅ Installed gh CLI via direct binary (more reliable than apt)
✅ Used `gh api` to poll PR comments in real-time for CI status
✅ Identified Surge infrastructure issue from logs (not config problem)

**Key Patterns Discovered:**

1. **Type Boundary Pattern** (JSON → TypeScript):
   - External interfaces (data from JSON): Use permissive types (`string`)
   - Internal components: Use strict literal types (`"left" | "right" | "center"`)
   - Cast at the boundary: `contentAlign={value as "left" | "right" | "center"}`
   - Why: JSON imports lose literal type information

2. **Common Type Typos:**
   | Wrong | Correct | Issue |
   |-------|---------|-------|
   | `prop?: "string"` | `prop?: string` | Quoted creates literal type |
   | `state: any` | `state: RootState` | Missing Redux type |

3. **gh CLI Patterns:**
   - Install: Direct binary download (`curl | tar`) more reliable than package managers
   - Auth: Automatic via `GH_TOKEN` environment variable
   - **Prefer built-in commands over `gh api`:**
     - `gh pr checks` > `gh api .../check-runs` (cleaner output)
     - `gh run view -v` > `gh run view --log | grep` (shows annotations!)
     - `gh run view --log-failed` > manual grep (no filtering needed)
   - Use `gh api` only for: bot comment content, custom queries

4. **Surge Free Tier Reality:**
   - Deployment can succeed (`Success! - Published`) but site may not be served
   - Verification returning HTTP 000 = infrastructure issue, not config
   - "Unverified" status is acceptable for PR previews

**Key Takeaways:**
1. **Mirror CI locally** - Run `npm ci && npm run typecheck` before every push
2. **Type at boundaries** - Cast JSON data where it enters typed components
3. **Use gh for debugging** - Faster than WebFetch for CI logs and API calls
4. **Don't trust deployment success** - Verify the site actually loads

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
- **Search for all references when deleting features** (grep before committing)
- **Remove from ALL layers** (data, config, page components, etc.)

### DON'T ❌
- Push without type checking
- Speculate on content
- Mass-edit without testing
- Ignore type errors
- Create unnecessary files
- Use sed for JSON manipulation
- Skip git diff review
- **Assume deletion is complete without verification**
- **Forget about file-based routing in frameworks** (Gatsby, Next.js, etc.)

---

## Maintenance Notes

**Last Updated:** 2025-12-25

**Recent Changes:**
- **Added Core Principle #7: Synthesize As You Go (SAYG)** - Meta-principle for continuous documentation
- **Added gh CLI Tools Reference** with command patterns, debugging workflow, monitoring options
- **Added Session: Type Safety & CI Tooling** to Lessons Learned
- **Documented Type Boundary Pattern** - External permissive, internal strict, cast at boundary
- **Refined gh documentation** - Prefer built-in commands (`gh pr checks`, `gh run view -v`) over `gh api`
- Completed TypeScript migration (100% - no JSON)
- Updated repository structure to reflect consolidated main page
- Added comprehensive lessons from academics reorganization session
- Documented anti-pattern: don't over-engineer organizational structures
- Added workflow insights for course grouping and section management
- **Added "Removing a Page" task checklist** with 6-layer verification process
- **Added Framework-Specific Gotchas section** covering file-based routing patterns
- **Documented CI build failure incident** and resolution in Lessons Learned
- **Enhanced Best Practices** with deletion verification principles
- All guidance made generalizable to other frameworks (Next.js, SvelteKit, etc.)
- **Added Core Principle #5: Dependency Integrity (DI)** - Comprehensive guide on package-lock.json management
- **Updated GitHub Actions to latest versions** (Dec 2025):
  - actions/checkout: v4 → v6 (Nov 20, 2025 release)
  - actions/setup-node: v4 → v6 (requires runner v2.327.1+, current: v2.330.0)
  - actions/github-script: v7 → v8 (Node 24 runtime)
  - actions/cache: v4 (already latest)
  - actions/configure-pages: v5 (already latest)
  - actions/upload-pages-artifact: v3 (latest for Pages)
  - actions/deploy-pages: v4 (already latest)
- **Removed --legacy-peer-deps dependency** (Dec 2025):
  - Discovered modern npm (v10+) resolves peer conflicts without the flag
  - Removed from pr.yml workflow (2 instances)
  - Removed from scripts/smart-validate.sh
  - Updated all documentation to reflect correct approach
  - Fixed production deploy by regenerating package-lock.json without the flag

**Key Metrics:**
- **Course Count:** 38 courses (17 graduate + 21 undergraduate)
- **Duplication:** 0 (all graduate courses use shared files)
- **Type Safety:** 100% TypeScript
- **Character Count:** ~19,500 / 20,000 limit
- **Critical Lessons Documented:** 4 major incidents with resolutions
- **GitHub Actions:** All up-to-date as of Dec 2025

**Future Optimization (Per Best Practices):**
- Consider moving detailed workflows to `docs/workflows/` for progressive disclosure
- Current size is good but approaching upper limit for optimal LLM processing
