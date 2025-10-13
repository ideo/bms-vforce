# BMS Visualforce Email Template Component Library

## 🚀 Generated Components

### ✅ Published to Figma Code Connect

All components have been successfully generated and published to your Figma design system. Each component provides production-ready Visualforce email templates with:
- Table-based layouts for maximum email client compatibility
- BMS brand color palette (Coomassie Blue #144A8E, Cloudy Sky #D0DBEF)
- Placeholder text (designer-friendly, no Salesforce syntax)
- Inline CSS styling optimized for Outlook

---

## 📧 Component Details

### 1. **Email Logo Header** 
- **Figma Node:** `266-7150`
- **File:** `components/email-logo.figma.ts`
- **Purpose:** BMS Cell Therapy logo header for emails
- **Features:** 
  - SVG logo with optimized dimensions (128x39.4px)
  - Clean header layout with proper spacing
  - Uses placeholder "Cell Therapy" text

### 2. **Email Header with Progress**
- **Figma Node:** `315-28002` 
- **File:** `components/email-header.figma.ts`
- **Purpose:** Email header with progress tracking for commercial processes
- **Features:**
  - 5-step progress indicator visualization
  - Title: "Quality Release Notification"
  - Subtitle: "Commercial Process - Step 3 of 5"
  - Status text: "Ready for manufacturing - awaiting final approvals"

### 3. **Action Button Set**
- **Figma Node:** `266-7685`
- **File:** `components/button-action.figma.ts`
- **Purpose:** Call-to-action button component with multiple variants
- **Features:**
  - **Primary Button:** Blue background (#144A8E), white text
  - **Secondary Button:** White background, blue text with border
  - **Small Button:** Gray background (#F5F5F5), compact size
  - Main CTA text: "Schedule Product Delivery"

### 4. **Warning Banner**
- **Figma Node:** `124-231`
- **File:** `components/warning.figma.ts`
- **Purpose:** Critical warning notifications
- **Features:**
  - Red warning color scheme (#DA1E28)
  - Icon indicator with exclamation mark
  - Warning text about lymphodepleting chemotherapy

### 5. **Email Footer**
- **Figma Node:** `124-233`
- **File:** `components/footer.figma.ts`
- **Purpose:** Professional email footer with contact and legal info
- **Features:**
  - Signature section: "Cell Therapy 360"
  - Phone number: "(US) +1 123-456-7890"
  - Unsubscribe and preferences links
  - Copyright notice: "© 2024 Bristol-Myers Squibb Company"

---

## 🔗 Access Your Components

**Figma Design File:** [BMS-Design-Space](https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space)

### In Figma Dev Mode:
1. Open any component in your design file
2. Switch to **Dev Mode** (toggle in top toolbar)
3. Select a component instance
4. See the **Code Connect** panel with your Visualforce templates
5. Copy the generated code directly into Salesforce

---

## 🛠️ Technical Implementation

### Email Client Compatibility
- ✅ **Outlook** (all versions) - Table-based layout
- ✅ **Gmail** - Inline CSS styling  
- ✅ **Apple Mail** - Web standards compliant
- ✅ **Mobile clients** - Responsive design patterns

### Salesforce Integration Ready
Each component includes commented examples for:
- `{!ActionURL}` - Dynamic URLs
- `{!Contact.Name}` - Personalization fields
- `{!EmailTemplate.Subject}` - Template variables
- `{!CustomObject__c.Field__c}` - Custom field data

### Brand Compliance
- **Primary Blue:** Coomassie Blue (`#144A8E`)
- **Light Blue:** Cloudy Sky (`#D0DBEF`) 
- **Background:** Frost White (`#ffffff`)
- **Secondary:** Ash White (`#F5F5F5`)
- **Typography:** Avenir font family with Arial fallback

---

## 📋 Next Steps

1. **Copy Templates:** Use Figma Dev Mode to copy Visualforce code
2. **Create Salesforce Templates:** Paste into Email Template builder
3. **Add Merge Fields:** Replace placeholder text with Salesforce fields
4. **Upload Assets:** Add logo and images to Static Resources
5. **Test Sending:** Preview in different email clients

---

## 🔄 Maintenance

To update components:
1. Make changes in Figma design
2. Run `npm run figma:parse` to validate
3. Run `npm run figma:publish` to sync updates
4. Components automatically update in Dev Mode

---

**Generated:** $(date)  
**Components:** 5 total  
**Status:** ✅ All published to Figma Code Connect
