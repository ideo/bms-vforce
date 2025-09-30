import figma, { html } from "@figma/code-connect/html"

/**
 * Progress Bar Component - Updated from Figma Design
 * Bristol-Myers Squibb Cell Therapy 360
 * 
 * Structure parsed from Figma:
 * - 5-step process tracker for cell therapy workflow
 * - Visual progress line showing completion status
 * - Steps: Enrollment → Apheresis → Manufacturing → Delivery → Administration
 * - Visual states: Completed (checkmark), In Progress (animated dot), Not Started (empty)
 * - BMS blue color scheme (#124B8D)
 * - Horizontal layout with centered text labels and connecting progress line
 */

figma.connect(
  "https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=151-4821",
  {
    props: {},
    example: () => html`<!-- Progress Bar - Visualforce Email Template -->
<table width="600" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto; font-family: 'Avenir', Arial, sans-serif;">
  <tr>
    <td style="padding: 16px 24px; border-radius: 8px;">
      
      <!-- Progress Line Background -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 8px;">
        <tr>
          <td style="position: relative; height: 1px; background-color: rgba(18, 75, 141, 0.3);">
            <!-- Completed progress line (covers first ~40% of width) -->
            <div style="position: absolute; left: 0; top: 0; width: 40%; height: 1px; background-color: #124B8D;"></div>
          </td>
        </tr>
      </table>
      
      <!-- Progress Steps Container -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <!-- Step 1: Enrollment (Completed) -->
          <td width="20%" align="center" valign="top" style="padding: 0 4px;">
            <!-- Step Icon -->
            <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
              <tr>
                <td align="center" valign="middle" style="width: 20px; height: 20px; border-radius: 64px; background-color: #124B8D; padding: 2px;">
                  <span style="color: #FFFFFF; font-size: 8px; line-height: 1;">✓</span>
                </td>
              </tr>
            </table>
            
            <!-- Step Label -->
            <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 2px;">
              <tr>
                <td align="center">
                  <apex:outputText value="Enrollment" 
                                 style="font-size: 10px; color: #124B8D; font-weight: 500; line-height: 16px; text-align: center; display: block;" 
                                 escape="true"/>
                </td>
              </tr>
            </table>
          </td>

          <!-- Step 2: Apheresis (Completed) -->
          <td width="20%" align="center" valign="top" style="padding: 0 4px;">
            <!-- Step Icon -->
            <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
              <tr>
                <td align="center" valign="middle" style="width: 20px; height: 20px; border-radius: 64px; background-color: #124B8D; padding: 2px;">
                  <span style="color: #FFFFFF; font-size: 8px; line-height: 1;">✓</span>
                </td>
              </tr>
            </table>
            
            <!-- Step Label -->
            <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 2px;">
              <tr>
                <td align="center">
                  <apex:outputText value="Apheresis" 
                                 style="font-size: 10px; color: #124B8D; font-weight: 500; line-height: 16px; text-align: center; display: block;" 
                                 escape="true"/>
                </td>
              </tr>
            </table>
          </td>

          <!-- Step 3: Manufacturing (In Progress) -->
          <td width="20%" align="center" valign="top" style="padding: 0 4px;">
            <!-- Step Icon -->
            <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
              <tr>
                <td align="center" valign="middle" style="width: 20px; height: 20px; border-radius: 64px; background-color: #EBF4FF; border: 1px solid #124B8D; padding: 2px;">
                  <span style="color: #124B8D; font-size: 6px; line-height: 1;">●</span>
                </td>
              </tr>
            </table>
            
            <!-- Step Label -->
            <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 2px;">
              <tr>
                <td align="center">
                  <apex:outputText value="Manufacturing and Quality Release" 
                                 style="font-size: 10px; color: #124B8D; font-weight: 500; line-height: 13px; text-align: center; display: block;" 
                                 escape="true"/>
                </td>
              </tr>
            </table>
          </td>

          <!-- Step 4: Final Product Delivery (Not Started) -->
          <td width="20%" align="center" valign="top" style="padding: 0 4px;">
            <!-- Step Icon -->
            <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
              <tr>
                <td align="center" valign="middle" style="width: 20px; height: 20px; border-radius: 64px; background-color: #EBF4FF; border: 1px solid #629DD6; padding: 2px;">
                  <!-- Empty circle for not started -->
                </td>
              </tr>
            </table>
            
            <!-- Step Label -->
            <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 2px;">
              <tr>
                <td align="center">
                  <apex:outputText value="Final Product Delivery" 
                                 style="font-size: 10px; color: #124B8D; font-weight: 500; line-height: 16px; text-align: center; display: block;" 
                                 escape="true"/>
                </td>
              </tr>
            </table>
          </td>

          <!-- Step 5: Product Administration (Not Started) -->
          <td width="20%" align="center" valign="top" style="padding: 0 4px;">
            <!-- Step Icon -->
            <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
              <tr>
                <td align="center" valign="middle" style="width: 20px; height: 20px; border-radius: 64px; background-color: #EBF4FF; border: 1px solid #629DD6; padding: 2px;">
                  <!-- Empty circle for not started -->
                </td>
              </tr>
            </table>
            
            <!-- Step Label -->
            <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 2px;">
              <tr>
                <td align="center">
                  <apex:outputText value="Product{&nbsp;}Administration" 
                                 style="font-size: 10px; color: #124B8D; font-weight: 500; line-height: 13px; text-align: center; display: block;" 
                                 escape="false"/>
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
