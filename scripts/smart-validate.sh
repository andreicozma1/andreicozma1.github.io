#!/bin/bash
# Smart validation script - detects work type and runs appropriate checks
# Usage: ./scripts/smart-validate.sh [--verbose]

set -e

VERBOSE=false
if [[ "$1" == "--verbose" || "$1" == "-v" ]]; then
    VERBOSE=true
fi

echo "🔍 Smart Validation - Detecting changes..."

# Get list of changed files
CHANGED_FILES=$(git diff --name-only HEAD 2>/dev/null || echo "")
STAGED_FILES=$(git diff --cached --name-only 2>/dev/null || echo "")
ALL_CHANGES="$CHANGED_FILES $STAGED_FILES"

# Show changed files in verbose mode
if [ "$VERBOSE" = true ] && [ -n "$ALL_CHANGES" ]; then
    echo ""
    echo "Changed files:"
    echo "$ALL_CHANGES" | tr ' ' '\n' | sed 's/^/  - /'
    echo ""
fi

# Detect work type
HAS_TS_CHANGES=$(echo "$ALL_CHANGES" | grep -E '\.(ts|tsx)$' || true)
HAS_JSON_CHANGES=$(echo "$ALL_CHANGES" | grep -E '\.json$' || true)
HAS_COMPONENT_CHANGES=$(echo "$ALL_CHANGES" | grep -E 'src/components/' || true)
HAS_CONFIG_CHANGES=$(echo "$ALL_CHANGES" | grep -E '(package\.json|tsconfig\.json|gatsby-config|eslint\.config)' || true)

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

        # Capture full TypeScript output
        TS_OUTPUT=$(npx tsc --noEmit 2>&1 || true)
        TS_ERRORS=$(echo "$TS_OUTPUT" | grep "error TS" | grep -v "Cannot find module" || true)

        if [ -n "$TS_ERRORS" ]; then
            echo "❌ TypeScript errors found:"
            echo "$TS_ERRORS" | sed 's/^/     /'
            exit 1
        else
            echo "  ✅ TypeScript OK"
        fi

        echo "  2️⃣  JSON syntax..."
        JSON_ERRORS=""
        for json_file in $(find src/data -name "*.json" 2>/dev/null); do
            if ! python -m json.tool < "$json_file" > /dev/null 2>&1; then
                JSON_ERRORS="${JSON_ERRORS}\n     Invalid JSON: $json_file"
            fi
        done

        if [ -n "$JSON_ERRORS" ]; then
            echo "❌ JSON syntax errors:"
            echo -e "$JSON_ERRORS"
            exit 1
        else
            echo "  ✅ JSON OK"
        fi

        if [ "$DEPS_INSTALLED" = true ]; then
            echo "  3️⃣  Linting..."
            LINT_OUTPUT=$(npm run lint 2>&1 || true)
            LINT_ERRORS=$(echo "$LINT_OUTPUT" | grep -E "^.*error " || true)

            if [ -n "$LINT_ERRORS" ]; then
                LINT_ERROR_COUNT=$(echo "$LINT_ERRORS" | wc -l)
                echo "⚠️  Lint errors found ($LINT_ERROR_COUNT issues):"
                echo "$LINT_ERRORS" | head -10 | sed 's/^/     /'
                if [ "$LINT_ERROR_COUNT" -gt 10 ]; then
                    echo "     ... and $((LINT_ERROR_COUNT - 10)) more"
                fi
                echo "     💡 Run 'npm run lint:fix' to auto-fix some issues"
                # Don't exit - linting is advisory for now
            else
                echo "  ✅ Lint OK"
            fi
        fi
        ;;

    "typescript")
        echo ""
        echo "🔍 Running TypeScript validation..."
        echo "  1️⃣  TypeScript check..."

        # Capture full TypeScript output
        TS_OUTPUT=$(npx tsc --noEmit 2>&1 || true)
        TS_ERRORS=$(echo "$TS_OUTPUT" | grep "error TS" | grep -v "Cannot find module" || true)

        if [ -n "$TS_ERRORS" ]; then
            echo "❌ TypeScript errors found:"
            echo "$TS_ERRORS" | sed 's/^/     /'
            exit 1
        else
            echo "  ✅ TypeScript OK"
        fi

        if [ "$DEPS_INSTALLED" = true ]; then
            echo "  2️⃣  Linting..."
            LINT_OUTPUT=$(npm run lint 2>&1 || true)
            LINT_ERRORS=$(echo "$LINT_OUTPUT" | grep -E "^.*error " || true)

            if [ -n "$LINT_ERRORS" ]; then
                LINT_ERROR_COUNT=$(echo "$LINT_ERRORS" | wc -l)
                echo "⚠️  Lint errors found ($LINT_ERROR_COUNT issues):"
                echo "$LINT_ERRORS" | head -10 | sed 's/^/     /'
                if [ "$LINT_ERROR_COUNT" -gt 10 ]; then
                    echo "     ... and $((LINT_ERROR_COUNT - 10)) more"
                fi
                echo "     💡 Run 'npm run lint:fix' to auto-fix some issues"
                # Don't exit - linting is advisory for now
            else
                echo "  ✅ Lint OK"
            fi
        fi

        if [ -n "$HAS_JSON_CHANGES" ]; then
            STEP_NUM="3"
            [ "$DEPS_INSTALLED" = false ] && STEP_NUM="2"
            echo "  ${STEP_NUM}️⃣  JSON syntax..."
            JSON_ERRORS=""
            for json_file in $(find src/data -name "*.json" 2>/dev/null); do
                if ! python -m json.tool < "$json_file" > /dev/null 2>&1; then
                    JSON_ERRORS="${JSON_ERRORS}\n     Invalid JSON: $json_file"
                fi
            done

            if [ -n "$JSON_ERRORS" ]; then
                echo "❌ JSON syntax errors:"
                echo -e "$JSON_ERRORS"
                exit 1
            else
                echo "  ✅ JSON OK"
            fi
        fi
        ;;

    "json-only")
        echo ""
        echo "🔍 Running JSON validation..."
        echo "  1️⃣  JSON syntax..."

        JSON_ERRORS=""
        for json_file in $(find src/data -name "*.json" 2>/dev/null); do
            if ! python -m json.tool < "$json_file" > /dev/null 2>&1; then
                JSON_ERRORS="${JSON_ERRORS}\n     Invalid JSON: $json_file"
            fi
        done

        if [ -n "$JSON_ERRORS" ]; then
            echo "❌ JSON syntax errors:"
            echo -e "$JSON_ERRORS"
            exit 1
        else
            echo "  ✅ JSON OK"
        fi

        echo "  2️⃣  TypeScript check (quick)..."

        # Capture full TypeScript output
        TS_OUTPUT=$(npx tsc --noEmit 2>&1 || true)
        TS_ERRORS=$(echo "$TS_OUTPUT" | grep "error TS" | grep -v "Cannot find module" || true)

        if [ -n "$TS_ERRORS" ]; then
            echo "❌ TypeScript errors found (likely from JSON changes):"
            echo "$TS_ERRORS" | sed 's/^/     /'
            exit 1
        else
            echo "  ✅ TypeScript OK"
        fi
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
