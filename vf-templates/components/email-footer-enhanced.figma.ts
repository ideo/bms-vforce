import figma, { html } from "@figma/code-connect/html"

/**
 * Enhanced Email Footer Component - Generated from Figma Design
 * Bristol-Myers Squibb Cell Therapy 360
 * 
 * Two variants: Commercial (regular) and Clinical
 * - Commercial: Standard business footer with unsubscribe links
 * - Clinical: Cell therapy portal login with Celgene branding  
 * 
 * Features:
 * - Contact information (varies by type)
 * - Portal/preference links (varies by type)
 * - Legal disclaimer text
 * - Updated 2025 copyright
 */

figma.connect(
  "https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=351-18394&m=dev",
  {
    props: {
      Type: figma.enum('Type', {
        'regular': 'regular',
        'clinical': 'clinical'
      })
    },
    example: (props) => html`
    <!-- BMS Enhanced Email Footer - Visualforce Email Template -->
    <!-- Table-based layout for maximum email client compatibility -->
    <table width="600" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto; font-family: 'Avenir', Arial, sans-serif; background-color: var(--white); border-top: 1px solid var(--stone-gray);">
      
      <!-- Main Footer Content Section -->
      <tr>
        <td style="padding: 24px;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <!-- Left Side - Contact Information -->
              <td align="left" valign="top" style="padding-right: 24px;">
                <table cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding-bottom: 4px;">
                      <!-- Commercial Type (Default) -->
                      <span style="color: var(--stone-gray); 
                                   font-size: 12px; 
                                   font-weight: 500; 
                                   line-height: 16.39px; 
                                   display: block;">
                        Best regards,
                      </span>
                      <!-- Clinical Type Alternative: "On behalf of Celgene, a BMS Company" -->
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 4px;">
                      <span style="color: var(--coomassie-blue); 
                                   font-size: 12px; 
                                   font-weight: 500; 
                                   line-height: 16.39px; 
                                   display: block;">
                        Cell Therapy 360
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span style="color: var(--coomassie-blue); 
                                   font-size: 12px; 
                                   font-weight: 500; 
                                   line-height: 16.39px; 
                                   display: block;">
                        (US) +1 123-456-7890
                      </span>
                      <!-- Clinical Type: Use var(--olive-grove) color instead -->
                    </td>
                  </tr>
                </table>
              </td>
              
              <!-- Right Side - Portal Links -->
              <td align="right" valign="top">
                <table cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="center" style="padding-bottom: 4px;">
                      <!-- Commercial Type: Unsubscribe Link -->
                      <a href="{!Unsubscribe_URL}" 
                         style="color: var(--stone-gray); 
                                font-size: 12px; 
                                font-weight: 400; 
                                text-decoration: underline; 
                                line-height: 16.39px; 
                                display: block;">
                        Unsubscribe
                      </a>
                      <!-- Clinical Type Alternative: "Log In to Cell Therapy 360 Portal" with var(--olive-grove) color -->
                    </td>
                  </tr>
                  <tr>
                    <td align="center">
                      <a href="{!Preferences_URL}" 
                         style="color: var(--stone-gray); 
                                font-size: 12px; 
                                font-weight: 400; 
                                text-decoration: underline; 
                                line-height: 16.39px; 
                                display: block;">
                        Change Preferences
                      </a>
                      <!-- Clinical Type Alternative: "Manage Preferences" -->
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      
      <!-- Legal/Disclaimer Section -->
      <tr>
        <td style="padding: 0 24px 24px 24px;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td>
                <table cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding-bottom: 1px;">
                      <span style="color: var(--stone-gray); 
                                   font-size: 10px; 
                                   font-weight: 400; 
                                   line-height: 13.66px; 
                                   display: block;">
                        © 2025 Bristol Myers Squibb Company.
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span style="color: var(--stone-gray); 
                                   font-size: 10px; 
                                   font-weight: 400; 
                                   line-height: 13.66px; 
                                   display: block;">
                        CELL THERAPY 360 and the related logo are trademarks of Celgene Corporation, a Bristol Myers Squibb Company
                      </span>
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
    
    Type Variants (modify content and colors based on type):
    
    Commercial Type (Regular) - Default:
    - Greeting: "Best regards," + "Cell Therapy 360"
    - Contact: Phone number in Coomassie Blue
    - Links: "Unsubscribe" and "Change Preferences" in Stone Gray
    - Use for: Commercial communications, business processes
    
    Clinical Type:
    - Greeting: "On behalf of Celgene, a BMS Company"
    - Contact: Phone number in Olive Grove color
    - Links: "Log In to Cell Therapy 360 Portal" (Olive Grove) and "Manage Preferences" (Stone Gray)
    - Use for: Clinical trial communications, medical procedures
    
    Color Style Names from Figma:
    Commercial:
    - Coomassie Blue: Contact information color
    - Stone Gray: Secondary text and links
    
    Clinical:
    - Olive Grove: Primary contact and portal link color
    - Stone Gray: Secondary text and links
    
    Example Salesforce merge fields:
    - Replace contact info with: {!Organization.Name}, {!Support_Phone__c}
    - Replace links with: {!Unsubscribe_URL}, {!Preferences_URL}, {!Portal_URL}
    - Dynamic type selection: {!IF(ProcessType__c = 'Clinical', 'clinical', 'regular')}
    - Year update: {!YEAR(TODAY())}
    
    Typography:
    - Contact info: Avenir Medium, 12px, 16.39px line height
    - Links: Avenir Regular, 12px, 16.39px line height
    - Legal text: Avenir Regular, 10px, 13.66px line height
    - Layout: 600px width, 24px padding, white background with top border
    -->
  `,
  }
)
