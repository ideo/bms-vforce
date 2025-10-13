import figma, { html } from "@figma/code-connect/html"

/**
 * BMS Card Info Component
 * 
 * A Visualforce email template component for displaying information cards in BMS communications.
 * Optimized for email clients with table-based layout and inline styles.
 * Uses CSS variables for consistent BMS brand colors.
 * 
 * Component: card-info (266:10553)
 * URL: https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=266-10553
 */

figma.connect(
  'https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=266-10553',
  {
    props: {
      // Add component props here based on the Figma design
      // Example for variant support:
      // Type: figma.enum('Type', {
      //   'Primary': 'Primary',
      //   'Secondary': 'Secondary',
      //   'Tertiary': 'Tertiary'
      // }),
      // State: figma.enum('State', {
      //   'Default': 'Default',
      //   'Hover': 'Hover',
      //   'Disabled': 'Disabled'
      // }),
      // Text: figma.string('Text')
    },
    example: (props) => html`
<!-- BMS Card Info Component - Visualforce Email Template -->
<!-- Table-based layout for maximum email client compatibility -->
<table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto; font-family: 'Avenir', Arial, sans-serif;">
  <tr>
    <td style="padding: 16px 0;">
      
      <!-- Card Info Container -->
      <table cellpadding="0" cellspacing="0" border="0" style="display: inline-table;">
        <tr>
          <td align="center" valign="middle" 
              style="background-color: var(--coomassie-blue); 
                     border: 1px solid var(--coomassie-blue);
                     border-radius: 8px; 
                     padding: 12px 20px;
                     min-width: 120px;">
            
            <!-- Card Content -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <!-- Icon (if applicable) -->
                <td width="20" valign="middle" style="padding-right: 8px;">
                  <img src="https://bms-emails.s3.us-east-1.amazonaws.com/icon-placeholder.svg"
                       alt="Card Icon"
                       width="16"
                       height="16"
                       style="display: block; 
                              width: 16px; 
                              height: 16px;"/>
                </td>
                
                <!-- Card Text Content -->
                <td valign="middle">
                  <a href="#" 
                     style="color: var(--white); 
                            font-family: 'Avenir', Arial, sans-serif; 
                            font-size: 14px; 
                            font-weight: 500; 
                            text-decoration: none; 
                            display: block;
                            line-height: 19px;">
                    Card Information
                    <!-- Replace with: {!CardTitle__c} -->
                  </a>
                </td>
              </tr>
            </table>
            
          </td>
        </tr>
      </table>
      
    </td>
  </tr>
</table>

<!-- 
Usage in Visualforce Email Templates:

Component Variants (modify styling based on type):

Primary (Blue Theme):
- Background: var(--coomassie-blue) (#144A8E)
- Border: var(--coomassie-blue)
- Text Color: var(--white)
- Use for: Primary actions, main CTAs

Secondary (White Theme):
- Background: var(--white)
- Border: var(--coomassie-blue) 
- Text Color: var(--coomassie-blue)
- Use for: Secondary actions, alternative options

Tertiary (Gray Theme):
- Background: var(--ash-white) (#F5F5F5)
- Border: var(--ash-white)
- Text Color: var(--charcoal-grey)
- Use for: Subtle actions, less prominent options

Color Palette:
- Primary Blue: var(--coomassie-blue) (#144A8E)
- Light Blue: var(--cloudy-sky) (#D0DBEF)
- Background: var(--white) (#FFFFFF)
- Secondary: var(--ash-white) (#F5F5F5)
- Text: var(--charcoal-grey) (#333333)

Typography:
- Font Family: Avenir, Arial, sans-serif
- Font Size: 14px
- Font Weight: 500 (Medium)
- Line Height: 19px

Salesforce Integration Examples:
- Replace href with: {!CardURL__c}
- Replace text with: {!CardTitle__c}
- Conditional rendering: <apex:outputPanel rendered="{!ShowCard}">
- Dynamic styling based on card type:
  style="background-color: {!IF(IsHighPriority__c, 'var(--coomassie-blue)', 'var(--white)')}"

Example Merge Fields:
- {!CardURL__c} - Dynamic link destination
- {!CardTitle__c} - Dynamic card title text
- {!CardIconURL__c} - Dynamic icon source
- {!IsActive__c} - Enable/disable state
- {!CardType__c} - Card variant type

Accessibility:
- Proper alt text for icons
- Adequate color contrast ratios
- Keyboard navigation support via proper link structure
- Screen reader friendly markup

Email Client Compatibility:
- ✅ Outlook (all versions) - Table-based layout
- ✅ Gmail - Inline CSS styling
- ✅ Apple Mail - Web standards compliant
- ✅ Mobile clients - Responsive design patterns
-->
    `
  }
)
