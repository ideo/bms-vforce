# Salesforce Visualforce Templates

This directory contains Figma Template V2 API templates specifically designed for converting Figma designs into Salesforce Visualforce pages.

## Quick Start

### 1. Get Your Figma Token

Go to [Figma Settings → Personal Access Tokens](https://www.figma.com/developers/api#access-tokens)

**Required Permissions:**
- ✅ **File content: Read**
- ✅ **Code Connect: Write**

```bash
# Set your token (add to ~/.zshrc to persist)
export FIGMA_ACCESS_TOKEN="figd_your_token_here"
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Visualforce Templates (via Claude in Cursor)

**This is our recommended workflow:**

1. **In Figma:** Select a component → Right-click → "Copy link to selection"

2. **In Cursor:** Open this chat (Cmd+L) and paste:
   ```
   @https://www.figma.com/design/YOUR_FILE_URL?node-id=XXX-XXX
   
   Create a Visualforce email template for this component
   ```

3. **Claude will:**
   - Fetch the component structure from Figma API
   - Parse layer names using the naming conventions
   - Generate proper Visualforce code with `<apex:>` components
   - Create the `.figma.ts` file
   - Publish it to Figma

4. **View in Figma:** Open your file → Dev Mode → Select component → See generated code

### 4. Manual Workflow (if needed)

```bash
# Test templates locally
npm run figma:parse

# Publish to Figma
npm run figma:publish

# Create new template stub (requires manual editing)
npm run figma:create "figma_url"
```

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