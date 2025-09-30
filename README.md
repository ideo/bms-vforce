# BMS Visualforce Email Template Generator

> Convert Figma designs to production-ready Salesforce Visualforce email templates using AI

## Overview

This project enables designers to create Salesforce email templates directly from Figma designs. Using **Figma Code Connect** and **Claude AI** in Cursor, we automatically generate email-compatible Visualforce markup that follows Salesforce best practices.

### Key Features

- ✅ **AI-Powered Conversion**: Claude analyzes Figma components and generates proper Visualforce code
- ✅ **Email-Compatible**: Table-based layouts, 600px width, inline styles for Outlook compatibility
- ✅ **Salesforce Best Practices**: Uses `<apex:>` components, proper escaping, merge fields
- ✅ **Designer-Friendly**: No coding knowledge required
- ✅ **Version Controlled**: All templates stored in Git

## Quick Start

### Prerequisites

- Figma account with **Code Connect** access
- Cursor IDE with Claude AI
- Node.js installed

### 1. Get Your Figma Access Token

**Create Token:**
1. Go to [Figma Settings → Personal Access Tokens](https://www.figma.com/developers/api#access-tokens)
2. Click **"Generate new token"**
3. Name it: `BMS Code Connect`

**Required Permissions:**
- ✅ **File content: Read**
- ✅ **Code Connect: Write**

**Set Token:**
```bash
# Add to your shell profile for persistence
echo 'export FIGMA_ACCESS_TOKEN="figd_your_token_here"' >> ~/.zshrc
source ~/.zshrc
```

### 2. Install Dependencies

```bash
cd vf-templates
npm install
```

### 3. Create Visualforce Templates

**This is our recommended workflow using Claude in Cursor:**

1. **In Figma:** 
   - Create a component (or select existing component)
   - Right-click → "Copy link to selection"

2. **In Cursor:** 
   - Open chat (Cmd+L)
   - Paste the Figma URL with `@` prefix:
   ```
   @https://www.figma.com/design/YOUR_FILE?node-id=XXX-XXX
   
   Create a Visualforce email template for this component
   ```

3. **Claude will:**
   - Fetch the component structure from Figma API
   - Analyze layers, text, colors, and layout
   - Generate proper Visualforce email markup
   - Create the `.figma.ts` file in `components/`
   - Publish it to Figma Code Connect

4. **View in Figma:**
   - Open your Figma file
   - Switch to **Dev Mode** (bottom right)
   - Select the component
   - See the generated Visualforce code!

### 4. Manual Commands (if needed)

```bash
# Validate templates locally
npm run figma:parse

# Publish to Figma
npm run figma:publish

# Create new template stub
npm run figma:create "figma_url"
```

## Project Structure

```
vf-templates/
├── components/              # Published Code Connect templates (active)
│   ├── footer.figma.ts
│   └── warning.figma.ts
├── examples/                # Example templates (reference only)
│   ├── bms-component.figma.template.js
│   ├── button.figma.template.js
│   ├── contact-list.figma.template.js
│   └── form-card.figma.template.js
├── figma.config.json        # Code Connect configuration
├── package.json
└── README.md
```

## Technical Details

### Visualforce Email Requirements

All generated templates follow these constraints:

- **Width:** 600px maximum (email client compatibility)
- **Layout:** Table-based (Outlook support)
- **Styling:** Inline CSS only
- **Components:** `<apex:outputText>`, `<apex:outputLink>`, etc.
- **Security:** `escape="true"` by default
- **Merge Fields:** `{!Contact.Name}`, `{!Account.Field__c}`

### Component Guidelines

For best results, structure your Figma components with:

- **Clear hierarchy**: Group related elements
- **Text layers**: Use actual text (not images) for dynamic content
- **Consistent spacing**: Use Auto Layout
- **Color variables**: For easy theme changes
- **Semantic naming**: Descriptive layer names help Claude understand intent

📖 **For detailed naming conventions, see:** [NAMING_CONVENTIONS.md](./NAMING_CONVENTIONS.md)

## Examples

### Generated Components

- **Footer**: Contact info, legal links, copyright
- **Warning Banner**: Alert messages with icons
- **Header**: Logo, navigation, personalization

See `components/` folder for examples.

## Troubleshooting

### Token Issues
```bash
# Check if token is set
echo $FIGMA_ACCESS_TOKEN

# If empty, set it again
export FIGMA_ACCESS_TOKEN="your_token"
```

### Permission Errors
- Ensure your token has both **File content: Read** and **Code Connect: Write** permissions
- Verify you have access to the Figma file

### Component Not Found
- Make sure you're selecting an actual **component** (purple diamond icon)
- Regular frames won't work - convert to component first (Cmd+Option+K)

## Contributing

1. Create components in Figma
2. Use Claude in Cursor to generate Visualforce templates
3. Review the generated code
4. Commit to Git
5. Templates automatically sync to Figma Dev Mode

## Resources

- [Figma Code Connect Docs](https://www.figma.com/developers/code-connect)
- [Salesforce Visualforce Email Templates](https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_email_templates.htm)
- [Cursor Documentation](https://cursor.sh/docs)

## Team

Built for **Bristol-Myers Squibb Cell Therapy 360** by the IDEO design team.
