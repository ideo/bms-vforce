import figma, { html } from "@figma/code-connect/html"

/**
 * BMS Section Banner Component Set
 * 
 * A notification banner component with 3 types: Warning, Regular, Reminder
 * Uses CSS variables for consistent BMS brand colors
 * Optimized for Visualforce email templates with table-based layout
 */

figma.connect(
  "https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=295-12049&m=dev",
  {
  props: {
    Type: figma.enum('Type', {
      'Warning': 'Warning',
      'Regular': 'Regular', 
      'Reminder': 'Reminder'
    })
  },
  example: ({ Type }) => html`
    <!-- BMS Section Banner - Visualforce Email Template -->
    <!-- Table-based layout for maximum email client compatibility -->
    <table width="600" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto; font-family: 'Avenir', Arial, sans-serif;">
      <tr>
        <td style="background-color: var(--linen-rose); 
                   border: 1px solid var(--peach-blossom); 
                   border-radius: 12px; 
                   padding: 16px;">
          
          <!-- Banner Content Container -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <!-- Warning Icon -->
                <td
                    width="24"
                    valign="top"
                    style="padding-right: 16px"
                >
                    <img
                        src="https://bms-emails.s3.us-east-1.amazonaws.com/icon-info-warning.svg"
                        alt="Warning Icon"
                        width="24"
                        height="24"
                        style="
                            display: block;
                            width: 24px;
                            height: 24px;
                        "
                    />
                </td>
              
              <!-- Banner Message -->
              <td valign="middle">
                <span style="font-size: 12px; 
                             color: var(--scarlet); 
                             font-weight: 400; 
                             line-height: 16px; 
                             margin: 0; 
                             display: block;">
                  Do not start lymphodepleting chemotherapy until you have received a notification that quality release processes are complete.
                </span>
              </td>
            </tr>
          </table>
          
        </td>
      </tr>
    </table>
    
    <!-- 
    Usage in Visualforce Email Templates:
    
    Type Variants (modify background-color, border, icon, and text color based on type):
    
    Warning Type (Red Theme):
    - Background: var(--linen-rose) (light pink)
    - Border: var(--peach-blossom) (pink border)
    - Icon: Red exclamation mark with var(--scarlet) background
    - Text Color: var(--scarlet) (red text)
    - Use for: Critical warnings, errors, important alerts
    
    Regular Type (Blue Theme):
    - Background: var(--frost-white) (light blue)
    - Border: var(--cloudy-sky) (blue border)
    - Icon: Blue info icon with var(--coomassie-blue)
    - Text Color: var(--coomassie-blue) (blue text)
    - Use for: General information, status updates
    
    Reminder Type (Gold Theme):
    - Background: var(--porcelain-glow) (light cream)
    - Border: var(--light-buttercream) (yellow border)
    - Icon: Gold info icon with var(--earthy-gold)
    - Text Color: var(--earthy-gold) (gold text)
    - Content: Includes action button with "Confirm Patient Details"
    - Use for: Action reminders, prompts, interactive notifications
    
    Color Style Names from Figma:
    Warning:
    - Linen Rose: Background color
    - Peach Blossom: Border color
    - Scarlet: Icon and text color
    
    Regular:
    - Frost White: Background color
    - Cloudy Sky: Border color
    - Coomassie Blue: Icon and text color
    
    Reminder:
    - Porcelain Glow: Background color
    - Light Buttercream: Border and button color
    - Earthy Gold: Icon and text color
    
    Example integration with Salesforce:
    Replace banner text with: {!BannerMessage__c} or {!NotificationText__c}
    Conditional type selection: {!IF(AlertLevel__c = 'Critical', 'Warning', 
                                     IF(AlertLevel__c = 'Action', 'Reminder', 'Regular'))}
    
    For Reminder type, replace button text with: {!ActionButtonText__c}
    Replace button action with: {!ActionURL} or Salesforce action
    
    Typography:
    - Font: Avenir Medium, 12px
    - Line height: 16.39px
    - Font weight: 500
    - Container: 600px width, 16px padding, 12px border radius
    -->
  `
})
