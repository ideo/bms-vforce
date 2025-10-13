import figma, { html } from "@figma/code-connect/html"

/**
 * BMS Action Button Component Set
 * 
 * A Visualforce email template for call-to-action buttons in emails.
 * Supports multiple variants for different email contexts and visual hierarchy.
 * Optimized for email clients with table-based layout and inline styles.
 * 
 * Component: button-action (266:7685)
 * URL: https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=266-7685
 */

figma.connect(
  'https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=266-7685',
  {
    props: {},
    example: () => html`
<!-- BMS Action Button - Primary (Light Mode, Large) -->
<!-- Table-based layout for maximum email client compatibility -->
<table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
  <tr>
    <td align="center" style="padding: 16px 0;">
      
      <!-- Primary Action Button (Blue Background, White Text) -->
      <table cellpadding="0" cellspacing="0" border="0" style="display: inline-table;">
        <tr>
          <td align="center" valign="middle" 
              style="background-color: var(--coomassie-blue); 
                     border-radius: 8px; 
                     padding: 10px 16px;
                     min-width: 168px;">
            <a href="#" 
               style="color: var(--white); 
                      font-family: 'Avenir', Arial, sans-serif; 
                      font-size: 14px; 
                      font-weight: 500; 
                      text-decoration: none; 
                      display: block;
                      line-height: 19px;">
              Schedule Product Delivery
            </a>
          </td>
        </tr>
      </table>
      
    </td>
  </tr>
</table>

<!-- Alternative Button Variants -->

<!-- Secondary Action Button (White Background, Blue Text) -->
<table cellpadding="0" cellspacing="0" border="0" style="margin: 16px auto 0 auto;">
  <tr>
    <td align="center">
      
      <table cellpadding="0" cellspacing="0" border="0" style="display: inline-table;">
        <tr>
          <td align="center" valign="middle" 
              style="background-color: var(--white); 
                     border-radius: 8px; 
                     padding: 10px 16px;
                     min-width: 168px;
                     border: 1px solid var(--cloudy-sky);">
            <a href="#" 
               style="color: var(--coomassie-blue); 
                      font-family: 'Avenir', Arial, sans-serif; 
                      font-size: 14px; 
                      font-weight: 500; 
                      text-decoration: none; 
                      display: block;
                      line-height: 19px;">
              View Details
            </a>
          </td>
        </tr>
      </table>
      
    </td>
  </tr>
</table>

<!-- Small Button Variant (Compact Size) -->
<table cellpadding="0" cellspacing="0" border="0" style="margin: 16px auto 0 auto;">
  <tr>
    <td align="center">
      
      <table cellpadding="0" cellspacing="0" border="0" style="display: inline-table;">
        <tr>
          <td align="center" valign="middle" 
              style="background-color: var(--ash-white); 
                     border: 1px solid var(--cloudy-sky);
                     border-radius: 100px; 
                     padding: 4px 12px;
                     min-width: 120px;">
            <a href="#" 
               style="color: var(--coomassie-blue); 
                      font-family: 'Avenir', Arial, sans-serif; 
                      font-size: 12px; 
                      font-weight: 500; 
                      text-decoration: none; 
                      display: block;
                      line-height: 16px;">
              Learn More
            </a>
          </td>
        </tr>
      </table>
      
    </td>
  </tr>
</table>

<!-- 
Usage in Visualforce Email Templates:

Primary Button (Blue):
- Replace href="#" with: {!ActionURL} or Salesforce URL
- Replace "Schedule Product Delivery" with: {!ButtonText} or custom text
- Use for main call-to-action buttons

Secondary Button (White):
- Use for secondary actions or alternative options
- Good for "View Details", "Cancel", "Contact Support" actions

Small Button (Gray):
- Use for tertiary actions or compact layouts
- Good for "Learn More", "FAQ", "Settings" links

Color palette: 
- Primary: Coomassie Blue (var(--coomassie-blue))
- Secondary: White (var(--white)) with Cloudy Sky border (var(--cloudy-sky))
- Tertiary: Ash White (var(--ash-white)) with Cloudy Sky border

Example Salesforce merge fields:
- {!ActionURL} - Dynamic URL
- {!ButtonText} - Dynamic button text
- {!Contact.Name} - Personalization
-->`
  }
)
