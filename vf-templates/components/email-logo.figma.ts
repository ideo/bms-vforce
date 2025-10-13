import figma, { html } from "@figma/code-connect/html"

/**
 * BMS Cell Therapy Email Logo Component
 * 
 * A Visualforce email template for the BMS Cell Therapy logo header.
 * Optimized for email clients with table-based layout and inline styles.
 * 
 * Component: email-logo (266:7150)
 * URL: https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=266-7150
 */

figma.connect(
  'https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=266-7150',
  {
    props: {},
    example: () => html`
<!-- BMS Cell Therapy Email Logo Header -->
<!-- Table-based layout for maximum email client compatibility -->
<table width="600" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto; background-color: #ffffff;">
  <tr>
    <td style="padding: 0 16px;">
      <!-- Logo Container -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td align="left" style="padding: 8px 0;">
            <!-- Logo with Text Layout -->
            <table cellpadding="0" cellspacing="0" border="0" style="display: inline-table;">
              <tr>
                <td valign="middle" style="padding-right: 0px;">
                  <!-- BMS Cell Therapy Logo Image -->
                  <apex:image value="https://bms-emails.s3.us-east-1.amazonaws.com/image-logo.svg" 
                             alt="BMS Cell Therapy Logo" 
                             width="128" 
                             height="39.4"
                             style="display: block; border: 0; outline: none; text-decoration: none;" />
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
- Replace {!$Resource.BMS_CellTherapy_Logo} with your logo static resource
- Customize text content with merge fields: {!Organization.Name}
- Modify colors using your brand palette
- Ensure logo static resource is uploaded to Salesforce
-->`
  }
)
