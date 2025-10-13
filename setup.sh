#!/bin/bash

# BMS Visualforce Email Template Generator Setup Script
# Run this script to set up your environment

set -e

echo "🚀 BMS Visualforce Email Template Generator Setup"
echo "================================================="
echo ""

# Check if we're in the right directory
if [ ! -f "README.md" ] || [ ! -d "vf-templates" ]; then
    echo "❌ Please run this script from the bms-vforce root directory"
    exit 1
fi

# Check Node.js
echo "📦 Checking Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first:"
    echo "   https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node --version)
echo "✅ Node.js version: $NODE_VERSION"

# Check npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed"
    exit 1
fi

NPM_VERSION=$(npm --version)
echo "✅ npm version: $NPM_VERSION"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
cd vf-templates
npm install
cd ..

# Check for Figma token
echo ""
echo "🔑 Checking Figma Access Token..."
if [ -z "$FIGMA_ACCESS_TOKEN" ]; then
    echo "❌ FIGMA_ACCESS_TOKEN is not set"
    echo ""
    echo "To set up your Figma token:"
    echo "1. Go to: https://www.figma.com/developers/api#access-tokens"
    echo "2. Click 'Generate new token'"
    echo "3. Name: 'BMS Code Connect'"
    echo "4. Required permissions:"
    echo "   ✅ File content: Read"
    echo "   ✅ Code Connect: Write"
    echo ""
    echo "5. Then run ONE of these commands:"
    echo ""
    echo "   # For current session only:"
    echo "   export FIGMA_ACCESS_TOKEN=\"your_token_here\""
    echo ""
    echo "   # For permanent setup (recommended):"
    echo "   echo 'export FIGMA_ACCESS_TOKEN=\"your_token_here\"' >> ~/.zshrc"
    echo "   source ~/.zshrc"
    echo ""
    echo "6. After setting token, run this setup script again"
    echo ""
    exit 1
else
    echo "✅ FIGMA_ACCESS_TOKEN is set"
fi

# Test Figma Code Connect
echo ""
echo "🧪 Testing Figma Code Connect..."
cd vf-templates
if npm run figma:parse > /dev/null 2>&1; then
    echo "✅ Figma Code Connect is working!"
else
    echo "⚠️  Figma Code Connect test failed - this might be normal if no components exist yet"
fi
cd ..

echo ""
echo "🎉 Setup Complete!"
echo "=================="
echo ""
echo "Next steps:"
echo "1. Open your Figma file: https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space"
echo "2. Create or select a component"
echo "3. Right-click → 'Copy link to selection'"
echo "4. In Cursor, open chat (Cmd+L) and paste:"
echo "   @https://www.figma.com/design/YOUR_FILE?node-id=XXX-XXX"
echo "   Create a Visualforce email template for this component"
echo ""
echo "Available commands:"
echo "  cd vf-templates"
echo "  npm run figma:parse     # Parse existing templates"
echo "  npm run figma:publish   # Publish to Figma"
echo "  npm run figma:create    # Create new template stub"
echo ""
