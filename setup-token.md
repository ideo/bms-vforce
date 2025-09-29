# Figma Token Setup Guide

## Step 1: Set Your Figma Token

You have a few options to configure your Figma token:

### Option A: Environment Variable (Recommended)
```bash
# In your terminal, export your token:
export FIGMA_ACCESS_TOKEN="your_actual_figma_token_here"

# Or add it to your shell profile (.zshrc, .bashrc, etc.):
echo 'export FIGMA_ACCESS_TOKEN="your_actual_figma_token_here"' >> ~/.zshrc
source ~/.zshrc
```

### Option B: .env File (Local Development)
```bash
# Edit the .env file in the project root:
# Replace 'your_figma_token_here' with your actual token
```

### Option C: Direct CLI Setup
```bash
# The Figma CLI can also store the token:
figma auth
```

## Step 2: Test Your Setup

Once your token is configured, run these commands:

```bash
# Navigate to your templates directory
cd vf-templates

# Test the connection and run in dev mode
npm run figma:dev
```

## Step 3: Update Your Figma URLs

In your template files, replace the placeholder URLs with your actual Figma component URLs:

1. Open your Figma file
2. Select a component
3. Copy the URL (should look like: `https://www.figma.com/file/ABC123/YourFile?node-id=123:456`)
4. Update the `// url=` line in your `.figma.template.js` files

## Troubleshooting

- **Invalid token**: Make sure your token has the correct permissions
- **File not found**: Verify your Figma file URLs are correct and accessible
- **Connection issues**: Check your internet connection and token validity

## Next Steps

After successful setup:
1. Test individual templates
2. Modify templates to match your actual Figma components
3. Generate Visualforce code
4. Deploy to your Salesforce org