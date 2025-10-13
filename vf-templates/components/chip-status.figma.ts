import figma, { html } from "@figma/code-connect/html"

/**
 * BMS Status Chip Component Set
 * 
 * A Visualforce email template for status chips indicating process states.
 * Supports multiple status variants with different colors and text.
 * Optimized for email clients with table-based layout and inline styles.
 * 
 * Component: chip-status (351:21205)
 * URL: https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=351-21205
 */

figma.connect(
  'https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=351-21205',
  {
    props: {},
    example: () => html`
<!-- BMS Status Chip - Updated Status (Default) -->
<!-- Table-based layout for maximum email client compatibility -->
<table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
  <tr>
    <td align="center" style="padding: 8px 0;">
      
      <!-- Updated Status Chip (Blue) -->
      <table cellpadding="0" cellspacing="0" border="0" style="display: inline-table;">
        <tr>
          <td align="center" valign="middle" 
              style="background-color: var(--cloudy-sky); 
                     border-radius: 4px; 
                     padding: 2px 4px;
                     min-width: 40px;
                     height: 19px;">
            <span style="color: var(--coomassie-blue); 
                         font-family: 'Avenir', Arial, sans-serif; 
                         font-size: 10px; 
                         font-weight: 500; 
                         line-height: 13.66px;
                         display: block;
                         text-align: center;">
              Updated
            </span>
          </td>
        </tr>
      </table>
      
    </td>
  </tr>
</table>

<!-- Alternative: Cancelled Status Chip (Red) -->
<!-- Replace Updated chip above with this for cancelled status -->
<!-- 
<table cellpadding="0" cellspacing="0" border="0" style="display: inline-table;">
  <tr>
    <td align="center" valign="middle" 
        style="background-color: var(--peach-blossom); 
               border-radius: 4px; 
               padding: 2px 4px;
               min-width: 45px;
               height: 19px;">
      <span style="color: var(--scarlet); 
                   font-family: 'Avenir', Arial, sans-serif; 
                   font-size: 10px; 
                   font-weight: 500; 
                   line-height: 13.66px;
                   display: block;
                   text-align: center;">
        Cancelled
      </span>
    </td>
  </tr>
</table>
-->

<!-- 
Usage in Visualforce Email Templates:

Updated Status (Blue):
- Background: Cloudy Sky color variable
- Text: Coomassie Blue color variable
- Use for: Updated, Completed, Active, In Progress

Cancelled Status (Red):
- Background: Peach Blossom color variable
- Text: Scarlet color variable  
- Use for: Cancelled, Failed, Rejected, Error

Color Style Names from Figma:
- Coomassie Blue: Text color for updated status
- Cloudy Sky: Background color for updated status
- Scarlet: Text color for cancelled status
- Peach Blossom: Background color for cancelled status

Example Salesforce merge fields:
- Replace "Updated" with: {!Status__c}
- Replace "Cancelled" with: {!ProcessStatus__c}
- Conditional rendering: Use Visualforce apex:outputPanel with rendered attribute

Typography:
- Font: Avenir Medium, 10px
- Line height: 13.66px
- Font weight: 500
-->`
  }
)
