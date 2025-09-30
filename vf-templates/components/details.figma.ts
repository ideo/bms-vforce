import figma, { html } from "@figma/code-connect/html"

/**
 * Details Component - Generated from Figma Design
 * Bristol-Myers Squibb Cell Therapy 360
 * 
 * Structure parsed from Figma:
 * - Two sections: Estimated Dates and Product Information
 * - Four items with icons: Package, Truck, Ruler, Calculator
 * - Dynamic merge fields for dates, container size, and quantity
 * - Fine print disclaimer
 */

figma.connect(
  "https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=124-232",
  {
    props: {},
    example: () => html`<!-- Details Section - Visualforce Email Template -->
<table width="600" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto; font-family: 'Avenir', Arial, sans-serif;">
  <tr>
    <td style="background-color: #F5F5F5; border-radius: 12px; padding: 20px;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <!-- Main Content Row -->
        <tr>
          <td style="vertical-align: top; width: 48%;">
            <!-- Estimated Dates Section -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 16px;">
              <tr>
                <td style="padding-bottom: 16px;">
                  <apex:outputText value="Estimated Dates" 
                                 style="font-size: 14px; color: #124B8D; font-weight: 500; display: block;" 
                                 escape="true"/>
                </td>
              </tr>
              
              <!-- First Item - Package/Available -->
              <tr>
                <td style="padding-bottom: 16px;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <!-- Icon -->
                      <td width="96" valign="top" style="padding-right: 20px;">
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 96px; height: 96px; background-color: #E1E1E1; border-radius: 12px;">
                          <tr>
                            <td align="center" valign="middle" style="padding: 24px;">
                              <div style="width: 48px; height: 48px; background-color: #124B8D; opacity: 0.2; border-radius: 6px; position: relative;">
                                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 24px; height: 24px; background-color: #124B8D;"></div>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                      
                      <!-- Info -->
                      <td valign="middle">
                        <table cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="padding-bottom: 6px;">
                              <table cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                  <td style="padding-right: 6px;">
                                    <apex:outputText value="{!Estimated_Available_Date}" 
                                                   style="font-size: 16px; color: #124B8D; font-weight: 500;" 
                                                   escape="true"/>
                                  </td>
                                  <td>
                                    <span style="background-color: rgba(18, 75, 141, 0.1); color: #124B8D; font-size: 10px; font-weight: 500; padding: 2px 4px; border-radius: 4px; display: inline-block;">
                                      Updated
                                    </span>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <apex:outputText value="Estimated earliest available" 
                                             style="font-size: 14px; color: rgba(0, 0, 0, 0.5); font-weight: 500;" 
                                             escape="true"/>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Second Item - Truck/Delivery -->
              <tr>
                <td>
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <!-- Icon -->
                      <td width="96" valign="top" style="padding-right: 20px;">
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 96px; height: 96px; background-color: #E1E1E1; border-radius: 12px;">
                          <tr>
                            <td align="center" valign="middle" style="padding: 24px;">
                              <div style="width: 48px; height: 48px; background-color: #124B8D; opacity: 0.2; border-radius: 6px; position: relative;">
                                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 24px; height: 12px; background-color: #124B8D;"></div>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                      
                      <!-- Info -->
                      <td valign="middle">
                        <table cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="padding-bottom: 6px;">
                              <apex:outputText value="{!Estimated_Delivery_Date}" 
                                             style="font-size: 16px; color: #124B8D; font-weight: 500;" 
                                             escape="true"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <apex:outputText value="Estimated earliest delivery" 
                                             style="font-size: 14px; color: rgba(0, 0, 0, 0.5); font-weight: 500;" 
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
            
            <!-- Fine Print -->
            <apex:outputText value="Please note these dates are an estimates and may be subject to change. If changes to this date are required, you will be notified by BMS Cell Therapy 360 Scheduling Team." 
                           style="font-size: 10px; color: rgba(0, 0, 0, 0.5); font-weight: 500; line-height: 13.66px; display: block;" 
                           escape="true"/>
          </td>
          
          <!-- Spacer -->
          <td width="4%" style=""></td>
          
          <!-- Product Information Section -->
          <td style="vertical-align: top; width: 48%;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding-bottom: 16px;">
                  <apex:outputText value="Product Information" 
                                 style="font-size: 14px; color: #124B8D; font-weight: 500; display: block;" 
                                 escape="true"/>
                </td>
              </tr>
              
              <!-- Container Size Item -->
              <tr>
                <td style="padding-bottom: 16px;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <!-- Icon -->
                      <td width="96" valign="top" style="padding-right: 20px;">
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 96px; height: 96px; background-color: #E1E1E1; border-radius: 12px;">
                          <tr>
                            <td align="center" valign="middle" style="padding: 24px;">
                              <div style="width: 48px; height: 48px; background-color: #124B8D; opacity: 0.2; border-radius: 6px; position: relative;">
                                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 20px; height: 20px; border: 2px solid #124B8D;"></div>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                      
                      <!-- Info -->
                      <td valign="middle">
                        <table cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="padding-bottom: 6px;">
                              <apex:outputText value="{!Container_Size}" 
                                             style="font-size: 16px; color: #124B8D; font-weight: 500;" 
                                             escape="true"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <apex:outputText value="Container Size" 
                                             style="font-size: 14px; color: rgba(0, 0, 0, 0.5); font-weight: 500;" 
                                             escape="true"/>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Quantity Item -->
              <tr>
                <td>
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <!-- Icon -->
                      <td width="96" valign="top" style="padding-right: 20px;">
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 96px; height: 96px; background-color: #E1E1E1; border-radius: 12px;">
                          <tr>
                            <td align="center" valign="middle" style="padding: 24px;">
                              <div style="width: 48px; height: 48px; background-color: #124B8D; opacity: 0.2; border-radius: 6px; position: relative;">
                                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 16px; height: 20px; background-color: #124B8D;"></div>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                      
                      <!-- Info -->
                      <td valign="middle">
                        <table cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="padding-bottom: 6px;">
                              <apex:outputText value="{!Product_Quantity}" 
                                             style="font-size: 16px; color: #124B8D; font-weight: 500;" 
                                             escape="true"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <apex:outputText value="Qty" 
                                             style="font-size: 14px; color: rgba(0, 0, 0, 0.5); font-weight: 500;" 
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
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`,
  },
)
