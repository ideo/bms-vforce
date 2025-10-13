import figma, { html } from "@figma/code-connect/html"

/**
 * BMS Email Header Component - Commercial Category
 * 
 * A Visualforce email template for email headers with progress tracking.
 * Features a step-by-step progress indicator for commercial processes.
 * Optimized for email clients with table-based layout and inline styles.
 * 
 * Component: email-header (315:22697)
 * URL: https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=315-22697
 */

figma.connect(
  'https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=315-28002',
  {
    props: {},
    example: () => html`
<!-- BMS Email Header with Progress Tracking -->
<!-- Table-based layout for maximum email client compatibility -->
<table width="600" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto; background-color: #E2EDF8; border-radius: 12px; overflow: hidden;">
  <tr>
    <td style="padding: 0;">
      <!-- Header Content Container -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        
        <!-- Main Header Section -->
        <tr>
          <td style="background-color: #D0DBEF; padding: 24px;">
            <!-- Header Title -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td align="center">
                  <span style="font-family: 'Avenir', Arial, sans-serif; 
                               font-size: 20px; 
                               font-weight: 600; 
                               color: #144A8E; 
                               line-height: 1.3;
                               margin: 0;
                               display: block;">
                    Quality Release Notification
                  </span>
                </td>
              </tr>
              
              <!-- Optional Subtitle -->
              <tr>
                <td align="center" style="padding-top: 8px;">
                  <span style="font-family: 'Avenir', Arial, sans-serif; 
                               font-size: 14px; 
                               font-weight: 400; 
                               color: #144A8E; 
                               line-height: 1.4;
                               margin: 0;
                               display: block;">
                    Commercial Process - Step 3 of 5
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Progress Indicator Section -->
        <tr>
          <td style="background-color: #E7EDF4; padding: 8px 48px;">
            <!-- Progress Steps Container -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td align="center">
                  <!-- Progress Steps Layout -->
                  <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 500px;">
                    <tr>
                      <!-- Step 1: Done -->
                      <td align="center" valign="middle" width="20%">
                        <table cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td align="center">
                              <!-- Step 1 Indicator (Done) -->
                              <div style="width: 6px; 
                                          height: 6px; 
                                          background-color: #ffffff; 
                                          border-radius: 50%; 
                                          display: inline-block;
                                          margin: 0;"></div>
                            </td>
                          </tr>
                        </table>
                      </td>
                      
                      <!-- Step 2: Done -->
                      <td align="center" valign="middle" width="20%">
                        <table cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td align="center">
                              <!-- Step 2 Indicator (Done) -->
                              <div style="width: 6px; 
                                          height: 6px; 
                                          background-color: #ffffff; 
                                          border-radius: 50%; 
                                          display: inline-block;
                                          margin: 0;"></div>
                            </td>
                          </tr>
                        </table>
                      </td>
                      
                      <!-- Step 3: Current -->
                      <td align="center" valign="middle" width="20%">
                        <table cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td align="center">
                              <!-- Step 3 Indicator (Current) -->
                              <div style="width: 6px; 
                                          height: 6px; 
                                          background-color: #144A8E; 
                                          border: 1px solid #ffffff;
                                          border-radius: 50%; 
                                          display: inline-block;
                                          margin: 0;"></div>
                            </td>
                          </tr>
                        </table>
                      </td>
                      
                      <!-- Step 4: Future -->
                      <td align="center" valign="middle" width="20%">
                        <table cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td align="center">
                              <!-- Step 4 Indicator (Future) -->
                              <div style="width: 6px; 
                                          height: 6px; 
                                          background-color: #144A8E; 
                                          border-radius: 50%; 
                                          display: inline-block;
                                          margin: 0;"></div>
                            </td>
                          </tr>
                        </table>
                      </td>
                      
                      <!-- Step 5: Future -->
                      <td align="center" valign="middle" width="20%">
                        <table cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td align="center">
                              <!-- Step 5 Indicator (Future) -->
                              <div style="width: 6px; 
                                          height: 6px; 
                                          background-color: #144A8E; 
                                          border-radius: 50%; 
                                          display: inline-block;
                                          margin: 0;"></div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Optional Status Text -->
        <tr>
          <td style="background-color: #E2EDF8; padding: 16px 24px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td align="center">
                  <span style="font-family: 'Avenir', Arial, sans-serif; 
                               font-size: 14px; 
                               font-weight: 500; 
                               color: #144A8E; 
                               line-height: 1.4;
                               margin: 0;
                               display: block;">
                    Ready for manufacturing - awaiting final approvals
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
- Replace "Quality Release Notification" with: {!EmailTemplate.Subject} or custom field
- Replace "Commercial Process - Step 3 of 5" with: {!ProcessType} and {!CurrentStep}
- Replace "Ready for manufacturing..." with: {!CurrentStepDescription}
- Customize step indicators based on actual process progress
- Color palette: Coomassie Blue (#144A8E), Frost White (#ffffff), Cloudy Sky (#D0DBEF)

Example Salesforce merge fields:
- {!EmailTemplate.Subject}
- {!Contact.Name}
- {!Account.Name}
- {!CustomObject__c.ProcessStep__c}
-->`
  }
)
