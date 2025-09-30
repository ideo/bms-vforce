import figma, { html } from "@figma/code-connect/html"

/**
 * Warning Banner Component - Generated from Figma Design
 * Bristol-Myers Squibb Cell Therapy 360
 * 
 * Structure parsed from Figma:
 * - Warning icon (red circle with exclamation)
 * - Warning message text
 * - Light red background with red border
 * - Horizontal layout with 16px spacing
 */

figma.connect(
  "https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=124-231",
  {
    props: {},
    example: () => html`<!-- Warning Banner - Visualforce Email Template -->
<table width="600" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto; font-family: 'Avenir', Arial, sans-serif;">
  <tr>
    <td style="background-color: #FDF4F4; border: 1px solid #DA1E28; border-radius: 12px; padding: 16px;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <!-- Warning Icon -->
          <td width="24" valign="top" style="padding-right: 16px;">
            <table cellpadding="0" cellspacing="0" border="0" style="width: 24px; height: 24px;">
              <tr>
                <td align="center" valign="middle" style="background-color: #DA1E28; border-radius: 12px; width: 24px; height: 24px; color: #FDF4F4; font-size: 16px; font-weight: bold; line-height: 24px;">
                  !
                </td>
              </tr>
            </table>
          </td>
          
          <!-- Warning Message -->
          <td valign="middle">
            <apex:outputText value="Do not start lymphodepleting chemotherapy until you have received a notification that quality release processes are complete." 
                           style="font-size: 14px; color: #DA1E28; font-weight: 500; line-height: 19px; margin: 0; display: block;" 
                           escape="true"/>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`,
  },
)