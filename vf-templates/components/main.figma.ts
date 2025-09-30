import figma, { html } from "@figma/code-connect/html"

/**
 * Main Email Component - Generated from Figma Design
 * Bristol-Myers Squibb Cell Therapy 360
 * 
 * Exact structure from Figma layer hierarchy:
 * Main > Header > Header Content > (Logo + Headline)
 * Main > Patient Details Section > Patient Details > Detail Items  
 * Main > Fineprint
 * Main > CTA Section > Button
 * Main > Progress Bar > Steps
 */

figma.connect(
  "https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=124-230",
  {
    props: {},
    example: () => html`<!-- Main Email Template - Visualforce -->
<table width="600" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto; font-family: 'Avenir', Arial, sans-serif;">
  <tr>
    <td style="background-color: #E2ECF8; border-radius: 12px; padding: 20px 0;">
      
      <!-- Header -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td>
            <!-- Header Content -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 16px 0;">
              <tr>
                <td align="center">
                  <!-- Providers 1 (BMS Logo) -->
                  <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 8px;">
                    <tr>
                      <td>
                        <img src="{!BMS_Logo_URL}" alt="Bristol-Myers Squibb" width="145" height="138" style="display: block; border: 0;" />
                      </td>
                    </tr>
                  </table>
                  
                  <!-- Headline -->
                  <table cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td>
                        <apex:outputText value="Manufacturing completed.{!$Label.Line_Break}Quality release begins." 
                                       style="font-size: 32px; color: #124B8D; font-weight: 800; line-height: 43.71px; text-align: center; display: block; width: 405px; margin: 24px 0 0 0;" 
                                       escape="false"/>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      
      <!-- Patient Details Section -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 16px 0;">
        <tr>
          <td align="center">
            <!-- Patient Details -->
            <table cellpadding="0" cellspacing="0" border="0" style="margin: 12px 0;">
              <tr>
                <!-- Detail Item 1: Enrollment ID -->
                <td style="padding-right: 2px;">
                  <table cellpadding="0" cellspacing="0" border="0" style="background-color: white; border-radius: 100px 0 0 100px; padding: 4px 8px;">
                    <tr>
                      <td>
                        <apex:outputText value="Enrollment ID: " 
                                       style="font-size: 10px; color: #124B8D; font-weight: 500;" 
                                       escape="true"/>
                        <apex:outputText value="203497" 
                                       style="font-size: 10px; color: #124B8D; font-weight: 800;" 
                                       escape="true"/>
                      </td>
                    </tr>
                  </table>
                </td>
                
                <!-- Detail Item 2: Join -->
                <td style="padding-right: 2px;">
                  <table cellpadding="0" cellspacing="0" border="0" style="background-color: white; padding: 4px 8px;">
                    <tr>
                      <td>
                        <apex:outputText value="Join: " 
                                       style="font-size: 10px; color: #124B8D; font-weight: 500;" 
                                       escape="true"/>
                        <apex:outputText value="A405BDP23-A" 
                                       style="font-size: 10px; color: #124B8D; font-weight: 800;" 
                                       escape="true"/>
                      </td>
                    </tr>
                  </table>
                </td>
                
                <!-- Detail Item 3: Patient Initials -->
                <td style="padding-right: 2px;">
                  <table cellpadding="0" cellspacing="0" border="0" style="background-color: white; padding: 4px 8px;">
                    <tr>
                      <td>
                        <apex:outputText value="Patient Initials: " 
                                       style="font-size: 10px; color: #124B8D; font-weight: 500;" 
                                       escape="true"/>
                        <apex:outputText value="BP" 
                                       style="font-size: 10px; color: #124B8D; font-weight: 800;" 
                                       escape="true"/>
                      </td>
                    </tr>
                  </table>
                </td>
                
                <!-- Detail Item 4: Treating Physician -->
                <td>
                  <table cellpadding="0" cellspacing="0" border="0" style="background-color: white; border-radius: 0 100px 100px 0; padding: 4px 8px;">
                    <tr>
                      <td>
                        <apex:outputText value="Treating Physician: " 
                                       style="font-size: 10px; color: #124B8D; font-weight: 500;" 
                                       escape="true"/>
                        <apex:outputText value="Alex Lane" 
                                       style="font-size: 10px; color: #124B8D; font-weight: 800;" 
                                       escape="true"/>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      
      <!-- Fineprint -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td align="center" style="padding: 0 16px;">
            <apex:outputText value="Additional in-market quality release is required for CAR-T products shipped to: Canada, Switzerland, United Kingdom and Israel." 
                           style="font-size: 10px; color: rgba(18, 75, 141, 0.8); font-weight: 500; line-height: 13.66px; text-align: center; display: block; width: 403px; margin: 0 auto;" 
                           escape="true"/>
          </td>
        </tr>
      </table>
      
      <!-- CTA Section -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 24px 0 40px 0;">
        <tr>
          <td align="center">
            <!-- Button -->
            <table cellpadding="0" cellspacing="0" border="0" style="background-color: #124B8D; border-radius: 8px; padding: 12px 16px;">
              <tr>
                <td>
                  <apex:outputLink value="{!Schedule_Delivery_URL}" 
                                 style="color: white; text-decoration: none; font-size: 14px; font-weight: 500;">
                    Schedule Product Delivery
                  </apex:outputLink>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      
      <!-- Progress Bar -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top: 1px solid white;">
        <tr>
          <!-- Step 1: Enrollment -->
          <td width="20%" style="background-color: #D3E4F3; border-right: 1px solid white; padding: 10px 16px;" align="center">
            <apex:outputText value="Enrollment" 
                           style="font-size: 10px; color: #124B8D; font-weight: 500; text-align: center;" 
                           escape="true"/>
          </td>
          
          <!-- Step 2: Apheresis -->
          <td width="20%" style="background-color: #D3E4F3; border-right: 1px solid #124B8D; padding: 10px 16px;" align="center">
            <apex:outputText value="Apheresis" 
                           style="font-size: 10px; color: #124B8D; font-weight: 500; text-align: center;" 
                           escape="true"/>
          </td>
          
          <!-- Step 3: Manufacturing & Quality Release -->
          <td width="20%" style="background-color: #C4D6ED; border-right: 1px solid #124B8D; padding: 10px 16px;" align="center">
            <apex:outputText value="Manufacturing{!$Label.Line_Break}& Quality Release" 
                           style="font-size: 10px; color: #124B8D; font-weight: 500; text-align: center; line-height: 13.66px;" 
                           escape="false"/>
          </td>
          
          <!-- Step 4: Final Product Delivery -->
          <td width="20%" style="background-color: #E2ECF8; border-right: 1px solid white; padding: 10px 16px;" align="center">
            <apex:outputText value="Final Product Delivery" 
                           style="font-size: 10px; color: #9A9A9A; font-weight: 500; text-align: center;" 
                           escape="true"/>
          </td>
          
          <!-- Step 5: Product Administration -->
          <td width="20%" style="background-color: #E2ECF8; padding: 10px 16px;" align="center">
            <apex:outputText value="Product Administration" 
                           style="font-size: 10px; color: #9A9A9A; font-weight: 500; text-align: center;" 
                           escape="true"/>
          </td>
        </tr>
      </table>
      
    </td>
  </tr>
</table>`,
  },
)
