#!/bin/bash

# Component Generator Helper Script
# This script helps you create Visualforce templates from Figma components

set -e

echo "🎨 BMS Component Code Generator"
echo "==============================="
echo ""

# Check if we're in the right directory
if [ ! -d "vf-templates" ]; then
    echo "❌ Please run this script from the bms-vforce root directory"
    exit 1
fi

# Check for Figma token
if [ -z "$FIGMA_ACCESS_TOKEN" ]; then
    echo "❌ FIGMA_ACCESS_TOKEN is not set"
    echo "Run ./setup.sh first to configure your environment"
    exit 1
fi

if [ $# -eq 0 ]; then
    echo "📋 Usage Examples:"
    echo ""
    echo "Generate code for a specific component:"
    echo "  ./generate.sh \"https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=266-7301\""
    echo ""
    echo "Or use Claude in Cursor (recommended):"
    echo "1. Copy Figma component link"
    echo "2. Open Cursor chat (Cmd+L)"
    echo "3. Paste: @figma_url"
    echo "4. Add: 'Create a Visualforce email template for this component'"
    echo ""
    echo "Available npm commands in vf-templates/:"
    echo "  npm run figma:parse     # Parse existing templates"
    echo "  npm run figma:publish   # Publish to Figma"
    echo "  npm run figma:create    # Create new template"
    echo ""
    exit 0
fi

FIGMA_URL=$1

# Extract node ID from URL
if [[ $FIGMA_URL =~ node-id=([0-9]+-[0-9]+) ]]; then
    NODE_ID=${BASH_REMATCH[1]}
    echo "🔍 Detected component: $NODE_ID"
else
    echo "❌ Invalid Figma URL. Make sure it contains node-id parameter"
    echo "Example: https://www.figma.com/design/FILE_ID?node-id=123-456"
    exit 1
fi

echo ""
echo "🤖 Recommended Workflow:"
echo "========================"
echo ""
echo "1. Copy this URL: $FIGMA_URL"
echo ""
echo "2. Open Cursor and start a new chat (Cmd+L)"
echo ""
echo "3. Paste this prompt:"
echo "   @$FIGMA_URL"
echo ""
echo "   Create a Visualforce email template for this component following the BMS naming conventions. The component should:"
echo "   - Use table-based layout for email compatibility"
echo "   - Include proper Salesforce merge fields"
echo "   - Follow the 600px width constraint"
echo "   - Use inline CSS styles"
echo "   - Include apex:outputText with escape=\"true\" for security"
echo ""
echo "4. Claude will generate the code and create the .figma.ts file"
echo ""
echo "5. Test the generated code:"
echo "   cd vf-templates"
echo "   npm run figma:parse"
echo "   npm run figma:publish"
echo ""
