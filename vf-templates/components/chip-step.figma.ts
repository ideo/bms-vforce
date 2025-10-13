import figma, { html } from "@figma/code-connect/html"

/**
 * BMS Step Chip Component Set
 * 
 * A step label chip component with 3 states: current, regular, error
 * Uses CSS variables for consistent BMS brand colors
 * Optimized for Visualforce email templates with table-based layout
 */

figma.connect('https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=266-8605&m=dev', {
  props: {
    State: figma.enum('State', {
      'current': 'current',
      'regular': 'regular', 
      'error': 'error'
    })
  },
  example: ({ State }) => html`
    <!-- BMS Step Chip - Visualforce Email Template -->
    <!-- Table-based layout for maximum email client compatibility -->
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 0; padding: 0;">
      <tr>
        <td align="center" valign="middle" style="padding: 4px;">
          <!-- Step Chip Container - Current State (default) -->
          <table cellpadding="0" cellspacing="0" border="0" style="display: inline-table;">
            <tr>
              <td align="center" valign="middle" 
                  style="background-color: var(--frost-white); 
                         border-radius: 1000px; 
                         padding: 4px 10px;
                         min-height: 22px;">
                
                <!-- Current State: Text Only -->
                <span style="color: var(--coomassie-blue); 
                             font-family: 'Avenir', Arial, sans-serif; 
                             font-size: 10px; 
                             font-weight: 500; 
                             line-height: 13.66px;
                             display: block;
                             text-align: center;">
                  Step name
                </span>
                
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    
    <!-- 
    Usage in Visualforce Email Templates:
    
    State Variants (modify background-color, text, and content based on state):
    
    Current State:
    - Background: var(--frost-white) (white)
    - Text Color: var(--coomassie-blue) 
    - Content: Step name text visible
    - Use for: Active/current step in process
    
    Regular State:
    - Background: var(--cloudy-sky) (light blue)
    - Text: Hidden/not visible
    - Content: Empty chip
    - Use for: Completed or future steps
    
    Error State:
    - Background: var(--linen-rose) (light pink)
    - Text Color: var(--scarlet) (red)
    - Content: Warning icon + step name text
    - Use for: Failed or problematic steps
    
    Color Style Names from Figma:
    - Coomassie Blue: Current step text color
    - Cloudy Sky: Regular step background color
    - Scarlet: Error step text/icon color
    - Linen Rose: Error step background color
    - Frost White: Current step background color
    
    Example in step progress flow:
    Place multiple chips in sequence for process visualization
    Use conditional logic to set State based on step progress
    
    Integration with Salesforce:
    Replace with appropriate styling and content based on merge field logic:
    {!IF(StepStatus__c = 'Current', 'current', 
         IF(StepStatus__c = 'Error', 'error', 'regular'))}
    
    Replace "Step name" with: {!StepName__c} or {!ProcessStepLabel__c}
    -->
  `
})
