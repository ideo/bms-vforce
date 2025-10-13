import figma, { html } from "@figma/code-connect/html"

/**
 * BMS Disclaimer Container Component Set
 * 
 * A Visualforce email template for disclaimer and note sections.
 * Supports commercial and clinical variants with different color schemes.
 * Optimized for email clients with table-based layout and inline styles.
 * 
 * Component: container-disclaimer (351:22022)
 * URL: https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=351-22022
 */

figma.connect(
  'https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=351-22022',
  {
    props: {},
    example: () => html`
<!-- BMS Disclaimer Container - Commercial Type (Default) -->
<!-- Table-based layout for maximum email client compatibility -->
<table cellpadding="0" cellspacing="0" border="0" style="margin: 16px auto; width: 100%; max-width: 311px;">
  <tr>
    <td style="background-color: var(--frost-white); 
               border: 1px solid var(--cloudy-sky);
               border-radius: 8px; 
               padding: 8px 12px;">
      
      <!-- Disclaimer Text -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td>
            <span style="color: var(--coomassie-blue); 
                         font-family: 'Avenir', Arial, sans-serif; 
                         font-size: 12px; 
                         font-weight: 400; 
                         line-height: 16px;
                         display: block;">
              *Disclaimer or note field: provides contextual details about scheduling or delivery estimates. Use for legal, informational, or procedural notes.
            </span>
          </td>
        </tr>
      </table>
      
    </td>
  </tr>
</table>

<!-- Alternative: Clinical Type Disclaimer -->
<!-- Replace commercial disclaimer above with this for clinical context -->
<!-- 
<table cellpadding="0" cellspacing="0" border="0" style="margin: 16px auto; width: 100%; max-width: 311px;">
  <tr>
    <td style="background-color: var(--mist-green); 
               border: 1px solid var(--pastel-green);
               border-radius: 8px; 
               padding: 8px 12px;">
      
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td>
            <span style="color: var(--leafline); 
                         font-family: 'Avenir', Arial, sans-serif; 
                         font-size: 12px; 
                         font-weight: 400; 
                         line-height: 16px;
                         display: block;">
              *Disclaimer or note field: provides contextual details about scheduling or delivery estimates. Use for legal, informational, or procedural notes.
            </span>
          </td>
        </tr>
      </table>
      
    </td>
  </tr>
</table>
-->

<!-- 
Usage in Visualforce Email Templates:

Commercial Type (Blue):
- Background: Frost White (var(--frost-white))
- Border: Cloudy Sky (var(--cloudy-sky))
- Text: Coomassie Blue (var(--coomassie-blue))
- Use for: Commercial processes, business communications, standard disclaimers

Clinical Type (Green):
- Background: Mist Green (var(--mist-green))
- Border: Pastel Green (var(--pastel-green))
- Text: Leafline (var(--leafline))
- Use for: Clinical trials, medical procedures, research disclaimers

Color Style Names from Figma:
Commercial:
- Frost White: Background color
- Cloudy Sky: Border color
- Coomassie Blue: Text color

Clinical:
- Mist Green: Background color
- Pastel Green: Border color
- Leafline: Text color

Example Salesforce merge fields:
- Replace disclaimer text with: {!DisclaimerText__c}
- Dynamic content: {!IF(ProcessType__c = "Clinical", ClinicalDisclaimer__c, CommercialDisclaimer__c)}
- Legal text: {!LegalNotice__c}

Typography:
- Font: Avenir Medium, 10px
- Line height: 13.66px
- Font weight: 500
- Container: 311px max-width, 8px padding
-->`
  }
)
