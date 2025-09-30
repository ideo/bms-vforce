#!/bin/bash

# Figma Code Connect Helper Script
# Automates common workflows for the BMS Visualforce team

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Banner
echo -e "${BLUE}╔═══════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Figma → Visualforce Code Connect Helper                ║${NC}"
echo -e "${BLUE}║   BMS Cell Therapy 360                                    ║${NC}"
echo -e "${BLUE}╚═══════════════════════════════════════════════════════════╝${NC}"
echo ""

# Check if we're in the right directory
if [ ! -f "$SCRIPT_DIR/package.json" ]; then
    echo -e "${RED}✗ Error: Must run from vf-templates directory${NC}"
    exit 1
fi

cd "$SCRIPT_DIR"

# Function to check Figma token
check_token() {
    if [ -z "$FIGMA_ACCESS_TOKEN" ]; then
        echo -e "${RED}✗ FIGMA_ACCESS_TOKEN not set${NC}"
        echo ""
        echo "To set your token, run:"
        echo -e "${YELLOW}export FIGMA_ACCESS_TOKEN=\"your_token_here\"${NC}"
        echo ""
        echo "Get your token from: https://www.figma.com/developers/api#access-tokens"
        echo "Required permissions: File content (Read) + Code Connect (Write)"
        echo ""
        exit 1
    fi
    echo -e "${GREEN}✓ Figma token is set${NC}"
}

# Function to create new component
create_component() {
    echo ""
    echo -e "${BLUE}Create New Component${NC}"
    echo "────────────────────────────────────────────────────────────"
    echo ""
    echo "1. Open your Figma file"
    echo "2. Select a component (purple diamond icon)"
    echo "3. Copy link to selection"
    echo ""
    read -p "Paste Figma component URL: " figma_url
    
    if [ -z "$figma_url" ]; then
        echo -e "${RED}✗ No URL provided${NC}"
        exit 1
    fi
    
    echo ""
    echo -e "${BLUE}Creating Code Connect template...${NC}"
    npm run figma:create "$figma_url"
    
    echo ""
    echo -e "${GREEN}✓ Template created!${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Edit the generated .figma.ts file"
    echo "2. Run this script again and choose 'Publish'"
}

# Function to publish to Figma
publish_to_figma() {
    echo ""
    echo -e "${BLUE}Publishing to Figma...${NC}"
    echo "────────────────────────────────────────────────────────────"
    npm run figma:parse
    echo ""
    npm run figma:publish
    echo ""
    echo -e "${GREEN}✓ Published successfully!${NC}"
    echo ""
    echo "View in Figma: Open your file → Dev Mode → Select component"
}

# Function to validate templates locally
validate_templates() {
    echo ""
    echo -e "${BLUE}Validating templates...${NC}"
    echo "────────────────────────────────────────────────────────────"
    npm run figma:parse
    echo ""
    echo -e "${GREEN}✓ All templates are valid${NC}"
}

# Function to unpublish
unpublish_from_figma() {
    echo ""
    echo -e "${YELLOW}⚠ Unpublish from Figma${NC}"
    echo "────────────────────────────────────────────────────────────"
    echo ""
    read -p "Are you sure? This will remove all Code Connect data (y/N): " confirm
    
    if [[ "$confirm" =~ ^[Yy]$ ]]; then
        npm run figma:unpublish
        echo ""
        echo -e "${GREEN}✓ Unpublished${NC}"
    else
        echo "Cancelled"
    fi
}

# Function to show status
show_status() {
    echo ""
    echo -e "${BLUE}Current Status${NC}"
    echo "────────────────────────────────────────────────────────────"
    
    # Count templates
    template_count=$(find . -name "*.figma.ts" -o -name "*.figma.js" | wc -l | tr -d ' ')
    echo "Templates found: $template_count"
    echo ""
    
    # List templates
    echo "Templates:"
    find . -name "*.figma.ts" -o -name "*.figma.js" | sed 's|^\./||' | while read file; do
        echo "  • $file"
    done
    echo ""
    
    # Check token
    if [ -n "$FIGMA_ACCESS_TOKEN" ]; then
        echo -e "${GREEN}✓ Figma token is set${NC}"
    else
        echo -e "${RED}✗ Figma token not set${NC}"
    fi
    echo ""
}

# Main menu
main_menu() {
    check_token
    echo ""
    echo "What would you like to do?"
    echo ""
    echo "1) Create new component template"
    echo "2) Validate templates locally"
    echo "3) Publish to Figma"
    echo "4) Unpublish from Figma"
    echo "5) Show status"
    echo "6) Exit"
    echo ""
    read -p "Choose an option (1-6): " choice
    
    case $choice in
        1) create_component ;;
        2) validate_templates ;;
        3) publish_to_figma ;;
        4) unpublish_from_figma ;;
        5) show_status ;;
        6) 
            echo ""
            echo -e "${BLUE}Goodbye!${NC}"
            exit 0 
            ;;
        *)
            echo -e "${RED}Invalid option${NC}"
            exit 1
            ;;
    esac
}

# Run main menu
main_menu
