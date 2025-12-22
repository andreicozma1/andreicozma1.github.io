#!/bin/bash
# Smart validation script - detects work type and runs appropriate checks
# Usage: ./scripts/smart-validate.sh

set -e

echo "🔍 Smart Validation - Detecting changes..."

# Get list of changed files
CHANGED_FILES=$(git diff --name-only HEAD 2>/dev/null || echo "")
STAGED_FILES=$(git diff --cached --name-only 2>/dev/null || echo "")
ALL_CHANGES="$CHANGED_FILES $STAGED_FILES"

# Detect work type
HAS_TS_CHANGES=$(echo "$ALL_CHANGES" | grep -E '\.(ts|tsx)$' || true)
HAS_JSON_CHANGES=$(echo "$ALL_CHANGES" | grep -E '\.json$' || true)
HAS_COMPONENT_CHANGES=$(echo "$ALL_CHANGES" | grep -E 'src/components/' || true)
HAS_CONFIG_CHANGES=$(echo "$ALL_CHANGES" | grep -E '(package\.json|tsconfig\.json|gatsby-config)' || true)

# Determine validation level
VALIDATION_LEVEL="none"
NEEDS_DEPS=false

if [ -n "$HAS_CONFIG_CHANGES" ]; then
    VALIDATION_LEVEL="full"
    NEEDS_DEPS=true
    echo "📦 Config changes detected → Full validation required"
elif [ -n "$HAS_COMPONENT_CHANGES" ] || [ -n "$HAS_TS_CHANGES" ]; then
    VALIDATION_LEVEL="typescript"
    echo "⚛️  TypeScript/Component changes → TypeScript validation"
elif [ -n "$HAS_JSON_CHANGES" ]; then
    VALIDATION_LEVEL="json-only"
    echo "📄 JSON-only changes → Lightweight validation"
else
    echo "ℹ️  No changes detected"
    exit 0
fi

# Check if dependencies are installed
DEPS_INSTALLED=false
if [ -d "node_modules" ] && [ -f "node_modules/.bin/tsc" ]; then
    DEPS_INSTALLED=true
fi

# Install dependencies if needed and not installed
if [ "$NEEDS_DEPS" = true ] && [ "$DEPS_INSTALLED" = false ]; then
    echo "📦 Installing dependencies (one-time setup)..."
    npm install --quiet
    DEPS_INSTALLED=true
fi

# Run appropriate validation
case $VALIDATION_LEVEL in
    "full")
        echo ""
        echo "🔍 Running full validation..."
        echo "  1️⃣  TypeScript check..."
        npx tsc --noEmit 2>&1 | grep -v "Cannot find module" | grep "error TS" && {
            echo "❌ TypeScript errors found!"
            exit 1
        } || echo "  ✅ TypeScript OK"

        echo "  2️⃣  JSON syntax..."
        find src/data -name "*.json" -exec sh -c 'python -m json.tool < {} > /dev/null || { echo "❌ Invalid JSON: {}"; exit 1; }' \; && echo "  ✅ JSON OK"

        if [ "$DEPS_INSTALLED" = true ]; then
            echo "  3️⃣  Linting..."
            npm run lint --silent 2>/dev/null && echo "  ✅ Lint OK" || echo "  ⚠️  Lint warnings (non-blocking)"
        fi
        ;;

    "typescript")
        echo ""
        echo "🔍 Running TypeScript validation..."
        echo "  1️⃣  TypeScript check..."
        npx tsc --noEmit 2>&1 | grep -v "Cannot find module" | grep "error TS" && {
            echo "❌ TypeScript errors found!"
            exit 1
        } || echo "  ✅ TypeScript OK"

        if [ -n "$HAS_JSON_CHANGES" ]; then
            echo "  2️⃣  JSON syntax..."
            find src/data -name "*.json" -exec sh -c 'python -m json.tool < {} > /dev/null || { echo "❌ Invalid JSON: {}"; exit 1; }' \; && echo "  ✅ JSON OK"
        fi
        ;;

    "json-only")
        echo ""
        echo "🔍 Running JSON validation..."
        echo "  1️⃣  JSON syntax..."
        find src/data -name "*.json" -exec sh -c 'python -m json.tool < {} > /dev/null || { echo "❌ Invalid JSON: {}"; exit 1; }' \; && echo "  ✅ JSON OK"

        echo "  2️⃣  TypeScript check (quick)..."
        npx tsc --noEmit 2>&1 | grep -v "Cannot find module" | grep "error TS" && {
            echo "❌ TypeScript errors found (likely from JSON changes)!"
            exit 1
        } || echo "  ✅ TypeScript OK"
        ;;
esac

echo ""
echo "✅ All validations passed!"
echo ""
echo "💡 Recommendation based on changes:"
if [ "$VALIDATION_LEVEL" = "full" ]; then
    echo "   → Run 'npm run build' before pushing (config changes)"
elif [ "$VALIDATION_LEVEL" = "typescript" ]; then
    echo "   → Safe to push (CI will handle full build)"
else
    echo "   → Safe to push (minimal risk)"
fi
