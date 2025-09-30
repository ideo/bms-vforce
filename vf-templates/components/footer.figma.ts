import figma, { html } from "@figma/code-connect/html"

/**
 * Email Footer Component - Generated from Figma Design
 * Bristol-Myers Squibb Cell Therapy 360
 * 
 * Structure parsed from Figma:
 * - Signature section with company name and phone
 * - Legal links (Unsubscribe, Change Preferences)
 * - Copyright notice
 */

figma.connect(
  "https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=124-233",
  {
    props: {},
    example: () => html`<!-- Email Footer - Visualforce Email Template -->
<table width="600" cellpadding="0" cellspacing="0" border="0" style="border-top: 1px solid #e0e0e0; margin: 0 auto; font-family: 'Avenir', Arial, sans-serif;">
  <!-- Signature Section -->
  <tr>
    <td style="padding: 24px;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding-bottom: 2px;">
            <apex:outputText value="Best regards, " 
                           style="font-size: 12px; color: rgba(0, 0, 0, 0.5); font-weight: 500;" 
                           escape="true"/>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom: 2px;">
            <apex:outputText value="Cell Therapy 360" 
                           style="font-size: 12px; color: rgba(0, 0, 0, 0.5); font-weight: 500;" 
                           escape="true"/>
          </td>
        </tr>
        <tr>
          <td>
            <apex:outputText value="(US) +1 123-456-7890" 
                           style="font-size: 12px; color: #124B8D; font-weight: 500;" 
                           escape="true"/>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  
  <!-- Legal Section -->
  <tr>
    <td style="padding: 0 24px 24px 24px;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td align="left" style="font-size: 12px;">
            <apex:outputLink value="{!Unsubscribe_URL}" 
                           style="color: rgba(0, 0, 0, 0.5); text-decoration: underline; margin-right: 8px;">
              Unsubscribe
            </apex:outputLink>
            <apex:outputLink value="{!Preferences_URL}" 
                           style="color: rgba(0, 0, 0, 0.5); text-decoration: underline;">
              Change Preferences
            </apex:outputLink>
          </td>
          <td align="right">
            <apex:outputText value="© 2024 Bristol-Myers Squibb Company" 
                           style="font-size: 12px; color: rgba(0, 0, 0, 0.5);" 
                           escape="true"/>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`,
  },
)
