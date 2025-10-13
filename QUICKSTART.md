# BMS Visualforce Email Template Generator - Quick Start

## 🚀 Complete Setup Instructions

### 1. Get Your Figma Access Token (REQUIRED)

1. **Go to:** https://www.figma.com/developers/api#access-tokens
2. **Click:** "Generate new token"
3. **Name:** `BMS Code Connect`
4. **Select permissions:**
   - ✅ **File content: Read**
   - ✅ **Code Connect: Write**
5. **Copy the token** (starts with `figd_`)

### 2. Set Your Token (Choose ONE method)

**Option A: Permanent setup (recommended)**
```bash
# Replace YOUR_TOKEN with your actual token
echo 'export FIGMA_ACCESS_TOKEN="figd_YOUR_TOKEN_HERE"' >> ~/.zshrc
source ~/.zshrc
```

**Option B: Current session only**
```bash
export FIGMA_ACCESS_TOKEN="figd_YOUR_TOKEN_HERE"
```

### 3. Verify Setup
```bash
./setup.sh
```

You should see: ✅ FIGMA_ACCESS_TOKEN is set

## 🎨 Generate Code for Your Component

### Method 1: Using Cursor + Claude (Recommended)

1. **Copy your Figma component URL:**
   ```
   https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=266-7301
   ```

2. **Open Cursor chat:** `Cmd+L`

3. **Paste this prompt:**
   ```
   @https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=266-7301
   
   Create a Visualforce email template for this component following BMS naming conventions:
   - Use table-based layout for email compatibility
   - Include proper Salesforce merge fields
   - Follow 600px width constraint
   - Use inline CSS styles
   - Include apex:outputText with escape="true"
   ```

4. **Claude will:**
   - Fetch component data from Figma
   - Generate Visualforce code
   - Create the `.figma.ts` file
   - Publish to Figma Code Connect

### Method 2: Manual Helper Script

```bash
./generate.sh "https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=266-7301"
```

## 🛠️ Available Commands

```bash
# In project root
./setup.sh           # Setup environment
./generate.sh URL    # Generate component code

# In vf-templates/ directory
cd vf-templates
npm run figma:parse     # Validate existing templates
npm run figma:publish   # Publish to Figma
npm run figma:create    # Create new template stub
```

## 🔍 View Generated Code in Figma

1. **Open your Figma file**
2. **Switch to Dev Mode** (bottom right corner)
3. **Select your component**
4. **See the generated Visualforce code!**

## 📁 Project Structure

```
bms-vforce/
├── setup.sh              # Setup script
├── generate.sh           # Code generation helper
├── vf-templates/          # Main working directory
│   ├── components/        # Generated .figma.ts files
│   ├── examples/          # Reference templates
│   └── package.json       # Dependencies
└── docs/                  # Documentation
```

## ❓ Troubleshooting

### Token Issues
```bash
# Check if token is set
echo $FIGMA_ACCESS_TOKEN

# Should show: figd_...
# If empty, repeat step 2 above
```

### Permission Errors
- Make sure your token has both required permissions
- Verify you own or have access to the Figma file

### Component Not Found
- Ensure you're selecting a **component** (purple diamond icon)
- Regular frames won't work - convert to component first (Cmd+Option+K)

## 🎯 Next Steps

1. **Set up your token** (steps 1-3 above)
2. **Try generating code** for your component: `node-id=266-7301`
3. **Review the generated Visualforce template**
4. **Check it in Figma Dev Mode**

---

**Need help?** Check the full documentation in `README.md`
