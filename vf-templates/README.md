# Salesforce Visualforce Templates

This directory contains Figma Template V2 API templates specifically designed for converting Figma designs into Salesforce Visualforce pages.

## Quick Start

```bash
# 1. Set your Figma token (get it from https://figma.com/developers/api#access-tokens)
export FIGMA_ACCESS_TOKEN="your_token_here"

# 2. Install dependencies
npm install

# 3. Test your templates locally
npm run figma:parse

# 4. Publish to Figma
npm run figma:publish

# 5. View in Figma: Open your file → Dev Mode → Select component → See Visualforce code
```

**Create new template:** `npm run figma:create`

## Template Rules

All templates follow Salesforce Visualforce best practices:

### ✅ DO Use
- `<apex:pageBlockTable>` and `<apex:dataTable>` for data display
- `<apex:pageBlock>` and `<apex:pageBlockSection>` for layout containers
- `<apex:outputField>` and `<apex:inputField>` for field display/editing
- `<apex:commandButton>` and `<apex:commandLink>` for actions
- Merge syntax: `{!objectName.fieldName}`
- `escape="true"` for security (default behavior)

### ❌ DON'T Use
- Generic HTML `<div>` elements for data display
- Inline styles (use SLDS classes instead)
- Direct HTML form elements
- Hardcoded values (use custom settings/metadata)

## Available Templates

### 1. **button.figma.template.js**
- Table-based record display with action buttons
- Uses `<apex:pageBlockTable>` with `<apex:commandButton>`
- Perfect for list views with inline actions

### 2. **contact-list.figma.template.js** 
- Master-detail relationship display
- Nested `<apex:repeat>` within table columns
- Shows related records in structured format

### 3. **form-card.figma.template.js**
- Complete form layout with sections
- Uses `<apex:pageBlockSection>` for organized input fields
- Includes save/cancel buttons and validation

## Usage

1. Replace placeholder URLs with actual Figma component URLs
2. Update merge field references to match your object schema
3. Adjust `instance.find()` calls to match your Figma layer names
4. Test generated templates in Salesforce org

## Configuration

The root `figma.config.json` includes Visualforce-specific settings:
- `preferTables: true` - Enforces table-based layouts
- `useApexComponents: true` - Prefers Apex components over HTML
- `escapingDefault: true` - Ensures secure output by default
- `sldsStyling: true` - Uses Lightning Design System classes

## Cursor AI Integration

The `.cursorrules` file provides comprehensive guidelines for:
- Component preferences and patterns
- Security best practices
- Performance optimization
- Common Visualforce structures

This ensures consistent, secure, and performant Visualforce code generation.