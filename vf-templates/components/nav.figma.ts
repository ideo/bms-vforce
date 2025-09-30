import figma, { html } from "@figma/code-connect/html"

/**
 * Navigation Component - Generated from Figma Design
 * Bristol-Myers Squibb Cell Therapy 360
 * 
 * Structure parsed from Figma:
 * - Email header/navigation with CT360 logo
 * - Horizontal layout with centered logo
 * - Brand-compliant spacing and colors
 * - Trademark symbol included
 */

figma.connect(
  "https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=146-4473",
  {
    props: {},
    example: () => html`<!-- Navigation Header - Visualforce Email Template -->
<table width="600" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto; font-family: 'Avenir', Arial, sans-serif;">
  <tr>
    <td style="padding: 16px;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td align="center" style="padding: 8px 0;">
            <!-- Cell Therapy 360 Logo -->
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td>
                  <img src="{!CT360_Logo_URL}" 
                       alt="Cell Therapy 360" 
                       width="128" 
                       height="55" 
                       style="display: block; border: 0;" />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`,
  },
)
