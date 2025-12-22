# Surge Deployment Fix

## Problem
Files (PDFs, routes) return 404 on Surge but work on GitHub Pages.

## Root Causes

### 1. Static Files Not Copying
Gatsby copies files from `/static` to `/public` during build, but Surge deployment might be happening before the copy completes or files are in wrong location.

### 2. Client-Side Routing
Surge doesn't handle SPAs by default. When you access `/about`, Surge looks for `/about.html` or `/about/index.html`. If Gatsby uses client-side routing, these files might not exist.

### 3. Case Sensitivity
Surge is case-sensitive. `/Resume-AndreiCozma.pdf` ≠ `/resume-andreicozma.pdf`

## Solutions

### Solution 1: Add Post-Build Script (Recommended)

Create a post-build script to ensure proper Surge deployment:

**1. Create `scripts/prepare-surge.sh`:**
```bash
#!/bin/bash
set -euo pipefail

echo "Preparing build for Surge deployment..."

# Verify public directory exists
if [ ! -d "public" ]; then
  echo "Error: public directory not found"
  exit 1
fi

# List static files to verify they were copied
echo "Static files in public:"
find public -name "*.pdf" -type f

# Create 200.html for SPA fallback (optional, only if needed for routes)
# If you have client-side only routes, uncomment this:
# cp public/index.html public/200.html
# echo "Created 200.html for SPA routing"

# Verify critical files exist
CRITICAL_FILES=(
  "Resume-AndreiCozma.pdf"
  "utk-diploma-BS_CeD.22BI-G03J-AHA6.pdf"
  "utk-diploma-MS_CeD.24AM-10I2-AOA4.pdf"
)

for file in "${CRITICAL_FILES[@]}"; do
  if [ ! -f "public/$file" ]; then
    echo "Warning: Critical file missing: $file"
  else
    echo "✓ Found: $file ($(du -h "public/$file" | cut -f1))"
  fi
done

echo "Surge preparation complete"
```

**2. Update `package.json`:**
```json
{
  "scripts": {
    "develop": "gatsby develop",
    "start": "gatsby develop",
    "build": "gatsby build",
    "postbuild": "bash scripts/prepare-surge.sh",
    "serve": "gatsby serve",
    "clean": "gatsby clean",
    "typecheck": "tsc --noEmit"
  }
}
```

**3. Update `.github/workflows/pr.yml` line 795:**
```yaml
# No changes needed - postbuild script runs automatically after build
```

### Solution 2: Add gatsby-plugin-surge (Alternative)

**1. Install plugin:**
```bash
npm install --save-dev gatsby-plugin-surge
```

**2. Update `gatsby-config.ts`:**
```typescript
plugins: [
  // ... existing plugins
  {
    resolve: 'gatsby-plugin-surge',
    options: {
      domain: 'your-domain.surge.sh',  // Will be overridden by CLI
      copyIndexHtml: true,  // Creates 200.html for SPA routing
    }
  }
]
```

### Solution 3: Quick Fix in Workflow (Minimal Changes)

Update `.github/workflows/pr.yml` at line 794-801:

**Before:**
```yaml
# Deploy to Surge
echo "Deploying to ${FULL_URL}..."
if ! npx surge ./public "${PREVIEW_URL}" --token "$SURGE_TOKEN" 2>&1; then
  echo "::error::Surge deployment command failed"
  echo "status=deploy_failed" >> "$GITHUB_OUTPUT"
  echo "deployed=false" >> "$GITHUB_OUTPUT"
  exit 1
fi
```

**After:**
```yaml
# Verify build output before deploying
echo "Verifying build output..."
ls -lah public/*.pdf || echo "No PDFs found in public root"
echo "Total files in public: $(find public -type f | wc -l)"

# Create 200.html for SPA fallback (if needed)
if [ ! -f "public/200.html" ] && [ -f "public/index.html" ]; then
  cp public/index.html public/200.html
  echo "Created 200.html for Surge SPA routing"
fi

# Deploy to Surge
echo "Deploying to ${FULL_URL}..."
if ! npx surge ./public "${PREVIEW_URL}" --token "$SURGE_TOKEN" 2>&1; then
  echo "::error::Surge deployment command failed"
  echo "status=deploy_failed" >> "$GITHUB_OUTPUT"
  echo "deployed=false" >> "$GITHUB_OUTPUT"
  exit 1
fi
```

## Testing

After implementing a solution, test with:

```bash
# Local test
npm run build
ls -lah public/*.pdf
npx surge public test-domain.surge.sh

# Verify files are accessible
curl -I https://test-domain.surge.sh/Resume-AndreiCozma.pdf
```

## Verification Checklist

- [ ] PDFs are in `/public` directory after build
- [ ] PDF URLs are accessible (case-sensitive match)
- [ ] Client routes work (if applicable)
- [ ] Surge deployment succeeds without errors
- [ ] Preview URL returns 200 OK for all critical files

## Recommended Approach

**Start with Solution 3** (minimal workflow changes) to quickly diagnose if files are present. Then move to Solution 1 for a proper long-term fix.
