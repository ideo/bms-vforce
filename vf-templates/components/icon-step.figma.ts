import figma, { html } from "@figma/code-connect/html"

/**
 * BMS Step Icon Component Set
 * 
 * A circular step indicator component with 4 states: done, current, error, future
 * Uses CSS variables for consistent BMS brand colors
 * Optimized for Visualforce email templates with table-based layout
 */

figma.connect('https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=266-9126&m=dev', {
  props: {
    State: figma.enum('State', {
      'done': 'done',
      'current': 'current', 
      'error': 'error',
      'future': 'future'
    })
  },
  example: ({ State }) => html`
    <!-- BMS Step Icon - Visualforce Email Template -->
    <!-- Table-based layout for maximum email client compatibility -->
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 0; padding: 0;">
      <tr>
        <td align="center" valign="middle" style="padding: 4px;">
          <!-- Step Indicator Circle - Current State (Coomassie Blue with white border) -->
          <div style="
            width: 6px;
            height: 6px;
            background-color: var(--coomassie-blue);
            border: 1px solid var(--frost-white);
            border-radius: 50%;
            display: inline-block;
            box-sizing: border-box;
          "></div>
        </td>
      </tr>
    </table>
    
    <!-- 
    Usage in Visualforce Email Templates:
    
    State Variants (modify background-color and border based on state):
    - done: background-color: var(--frost-white); (no border)
    - current: background-color: var(--coomassie-blue); border: 1px solid var(--frost-white);
    - error: background-color: var(--scarlet); border: 1px solid var(--frost-white);
    - future: background-color: var(--coomassie-blue); (no border)
    
    Color Style Names from Figma:
    - Coomassie Blue: Primary brand color for current/future states
    - Scarlet: Error/warning color for error state
    - Frost White: Background for done state, border for current/error states
    
    Example in step progress indicator:
    Place multiple icons in sequence for process visualization
    Use conditional logic to set State based on process progress
    
    Integration with Salesforce:
    Replace with appropriate styling based on merge field logic:
    {!IF(StepNumber__c = CurrentStep__c, 'current', 
         IF(StepNumber__c < CurrentStep__c, 'done', 
            IF(HasError__c, 'error', 'future')))}
    -->
  `
})
