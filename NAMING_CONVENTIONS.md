# Figma to Visualforce Email Template - Naming Conventions

## Overview

This document defines the naming conventions that designers should use in Figma to enable automatic generation of Visualforce email templates. The plugin will parse these naming patterns to generate appropriate VF markup.

## Frame/Container Naming

### Email Structure
- `email-container` → Main email wrapper (`<messaging:emailTemplate>`)
- `email-body` → HTML body content (`<messaging:htmlEmailBody>`)
- `email-header` → Header section (table row)
- `email-content` → Main content area (table row)  
- `email-footer` → Footer section (table row)

### Layout Sections
- `section-{name}` → Generic content section
- `row-{name}` → Table row container
- `col-{name}` → Table cell container
- `spacer-{height}` → Vertical spacing (e.g., `spacer-20px`)

## Component Naming

### Text Elements
- `text-{fieldName}` → Static text or merge field
  - Example: `text-greeting` → `<apex:outputText value="Hello there!"/>`
  - Example: `text-firstName` → `<apex:outputText value="{!Contact.FirstName}"/>`

### Merge Fields (Dynamic Content)
Use double curly braces in text content to indicate merge fields:
- `{{Contact.FirstName}}` → `{!Contact.FirstName}`
- `{{Account.Name}}` → `{!Account.Name}`
- `{{User.Email}}` → `{!User.Email}`

### Images
- `image-{name}` → Static image
- `image-logo` → Company logo
- `image-banner` → Banner image
- `image-{mergeField}` → Dynamic image (e.g., `image-productPhoto`)

### Links & Buttons
- `link-{action}` → Text link
- `button-{action}` → Button/CTA
- `url-{destination}` → URL merge field

Examples:
- `button-viewRecord` → CTA button
- `link-unsubscribe` → Unsubscribe link
- `url-recordLink` → Dynamic record URL

### Lists & Repetition
- `repeat-{objectName}` → Repeating section
  - Must contain child elements that define the repeated structure
  - Example: `repeat-opportunities` contains opportunity details

### Conditional Content
- `if-{condition}` → Conditional rendering
- `show-{condition}` → Alternative conditional syntax
- `hide-{condition}` → Inverse conditional

Examples:
- `if-hasOpportunities` → Show only if opportunities exist
- `show-premiumMember` → Show for premium members only
- `hide-internalUser` → Hide for internal users

## Styling Conventions

### Colors
- Use Figma color variables when possible
- Plugin will convert to inline styles for email compatibility
- Special naming: `color-brand-primary`, `color-accent`

### Typography
- Font families will be converted to web-safe fonts
- Font sizes will be converted to pixels
- Use consistent text styles for better conversion

### Spacing
- Use Auto Layout for consistent spacing
- Plugin will convert to table cell padding/margins
- Name spacer elements: `spacer-{size}` (e.g., `spacer-20px`)

## Advanced Patterns

### Data Tables
```
table-{objectName}
├── header-row
│   ├── header-name
│   ├── header-email
│   └── header-phone
└── repeat-{objectName}
    ├── cell-name
    ├── cell-email
    └── cell-phone
```

### Multi-Column Layouts
```
row-twoColumn
├── col-left
│   └── content...
└── col-right
    └── content...
```

### Conditional Sections
```
if-hasProducts
├── section-productHeader
├── repeat-products
│   ├── text-productName
│   ├── text-productPrice
│   └── image-productPhoto
└── section-productFooter
```

## Merge Field Reference

### Standard Objects

#### Contact Fields
- `{{Contact.FirstName}}`
- `{{Contact.LastName}}`
- `{{Contact.Email}}`
- `{{Contact.Phone}}`
- `{{Contact.Title}}`
- `{{Contact.Account.Name}}`

#### Account Fields
- `{{Account.Name}}`
- `{{Account.Industry}}`
- `{{Account.Phone}}`
- `{{Account.Website}}`
- `{{Account.BillingCity}}`

#### User Fields
- `{{User.FirstName}}`
- `{{User.LastName}}`
- `{{User.Email}}`
- `{{User.Phone}}`

#### Organization Fields
- `{{Organization.Name}}`
- `{{Organization.Street}}`
- `{{Organization.City}}`

### Custom Fields
- Use API names: `{{Contact.Custom_Field__c}}`
- Plugin will validate field names against Salesforce schema

## Example Figma Design Structure

```
email-container
├── email-header
│   ├── image-logo
│   └── text-companyName → "{{Organization.Name}}"
├── email-content
│   ├── section-greeting
│   │   └── text-greeting → "Hello {{Contact.FirstName}}!"
│   ├── section-opportunities
│   │   ├── if-hasOpportunities
│   │   │   ├── text-opportunityHeader → "Your Current Opportunities:"
│   │   │   └── repeat-opportunities
│   │   │       ├── text-oppName → "{{Opportunity.Name}}"
│   │   │       ├── text-oppAmount → "{{Opportunity.Amount}}"
│   │   │       └── text-oppStage → "{{Opportunity.StageName}}"
│   │   └── spacer-20px
│   └── section-cta
│       ├── button-viewDashboard → "View Dashboard"
│       └── url-dashboardLink → "{{Organization.My_Domain__c}}/dashboard"
└── email-footer
    ├── text-unsubscribe → "Unsubscribe"
    └── link-unsubscribe → "{{Unsubscribe_URL}}"
```

## Generated Visualforce Output

The above structure would generate:

```html
<messaging:emailTemplate>
    <messaging:htmlEmailBody>
        <table width="600" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif;">
            <!-- Header -->
            <tr>
                <td style="padding: 20px; background-color: #f8f9fa;">
                    <img src="{!$Resource.CompanyLogo}" alt="Logo" style="height: 40px;"/>
                    <apex:outputText value="{!Organization.Name}" style="font-size: 18px; font-weight: bold; margin-left: 10px;"/>
                </td>
            </tr>
            
            <!-- Content -->
            <tr>
                <td style="padding: 30px;">
                    <!-- Greeting -->
                    <apex:outputText value="Hello {!Contact.FirstName}!" style="font-size: 24px; margin-bottom: 20px; display: block;"/>
                    
                    <!-- Opportunities Section -->
                    <apex:outputPanel rendered="{!Contact.Opportunities.size > 0}">
                        <apex:outputText value="Your Current Opportunities:" style="font-size: 18px; font-weight: bold; margin-bottom: 15px; display: block;"/>
                        
                        <table width="100%" cellpadding="10" cellspacing="0" style="border: 1px solid #ddd;">
                            <apex:repeat var="opp" value="{!Contact.Opportunities}">
                                <tr>
                                    <td><apex:outputText value="{!opp.Name}"/></td>
                                    <td><apex:outputText value="{!opp.Amount}"/></td>
                                    <td><apex:outputText value="{!opp.StageName}"/></td>
                                </tr>
                            </apex:repeat>
                        </table>
                    </apex:outputPanel>
                    
                    <!-- Spacer -->
                    <div style="height: 20px;"></div>
                    
                    <!-- CTA -->
                    <apex:outputLink value="{!Organization.My_Domain__c}/dashboard" 
                                   style="background-color: #007cba; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">
                        View Dashboard
                    </apex:outputLink>
                </td>
            </tr>
            
            <!-- Footer -->
            <tr>
                <td style="padding: 20px; background-color: #f8f9fa; text-align: center; font-size: 12px; color: #666;">
                    <apex:outputLink value="{!Unsubscribe_URL}">Unsubscribe</apex:outputLink>
                </td>
            </tr>
        </table>
    </messaging:htmlEmailBody>
</messaging:emailTemplate>
```

## Validation Rules

### Required Elements
- Must have `email-container` as root frame
- Must have either `email-body` or direct content sections
- All merge field references must be valid Salesforce field API names

### Naming Rules
- Use kebab-case (hyphens) for all naming
- No spaces or special characters except hyphens and underscores
- Be descriptive but concise
- Use consistent naming patterns across similar components

### Best Practices
- Group related elements under logical parent frames
- Use meaningful names that describe content/purpose
- Include conditional logic names that clearly indicate the condition
- Test merge field names against your Salesforce org schema

## Plugin Configuration

The plugin will allow configuration of:
- Default merge field mappings
- Custom naming pattern overrides  
- Salesforce org connection for field validation
- Email client compatibility settings
- Custom CSS/styling rules

## Error Handling

The plugin will provide warnings/errors for:
- Invalid merge field references
- Missing required structural elements
- Naming convention violations
- Email client compatibility issues
- Accessibility concerns

This naming convention system enables designers to create sophisticated, data-driven email templates without requiring Apex or Visualforce knowledge, while ensuring the generated code follows Salesforce best practices.