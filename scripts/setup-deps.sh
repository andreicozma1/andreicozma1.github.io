#!/bin/bash
# One-time dependency setup for local development
# Usage: ./scripts/setup-deps.sh

set -e

echo "📦 Setting up development dependencies..."

# Check if already installed
if [ -d "node_modules" ] && [ -f "node_modules/.bin/gatsby" ]; then
    echo "✅ Dependencies already installed"
    echo ""
    echo "Available commands:"
    echo "  npm run build    - Full Gatsby build"
    echo "  npm run develop  - Development server"
    echo "  npm run lint     - Run linter"
    echo "  npx tsc --noEmit - Type check only"
    exit 0
fi

# Install dependencies
echo "⏳ Installing... (this may take 2-5 minutes)"
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "Available commands:"
echo "  npm run build    - Full Gatsby build"
echo "  npm run develop  - Development server"
echo "  npm run lint     - Run linter"
echo "  npx tsc --noEmit - Type check only"
echo ""
echo "💡 Tip: You only need to run this once per session"
