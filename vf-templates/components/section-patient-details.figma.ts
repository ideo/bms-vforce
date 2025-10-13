import figma, { html } from "@figma/code-connect/html"

/**
 * BMS Patient Details Section Component Set
 * 
 * A Visualforce email template for patient detail sections in clinical and commercial emails.
 * Supports multiple platform and type variants with different layouts and color schemes.
 * Optimized for email clients with table-based layout and inline styles.
 * 
 * Component: section-patient-details (275:7556)
 * URL: https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=275-7556
 */

figma.connect(
  'https://www.figma.com/design/PWO7zkdndistmOpsXV9PR5/BMS-Design-Space?node-id=275-7556',
  {
    props: {},
    example: () => html`
<!-- BMS Patient Details Section - Clinical Type (Default) -->
<!-- Table-based layout for maximum email client compatibility -->
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:800px; margin:0px auto;">
    <!-- Row 1: Enrollment ID | JOIN ID -->
    <tr>
      <!-- Enrollment ID (left) -->
      <td valign="top" width="50%" style="padding:4px 0;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:var(--white); border-radius:8px;">
          <tr>
            <td style="padding:2px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:2px 0;">
                    <span style="color:var(--cornflower-steel); font-family:&quot;Avenir&quot;, Arial, sans-serif; font-size:10.5px; font-weight:500; line-height:14px; display:block;">
                      Enrollment ID
                      <!-- e.g. {!PatientFieldLabel__c} -->
                    </span>
                  </td>
                  <td align="right" style="padding:2px 0;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="display:inline-table;">
                      <tr>
                        <td style="padding:2px;">
                          <span style="color:var(--coomassie-blue); font-family:&quot;Avenir&quot;, Arial, sans-serif; font-size:10.5px; font-weight:800; line-height:14px; display:block;">
                            ENR-013411
                            <!-- e.g. {!SubjectNumber__c} -->
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
      </td>

      <!-- JOIN ID (right) -->
      <td valign="top" width="50%" style="padding:2px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:var(--white); border-radius:8px;">
          <tr>
            <td style="padding:2px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:2px 0;">
                    <span style="color:var(--cornflower-steel); font-family:&quot;Avenir&quot;, Arial, sans-serif; font-size:10.5px; font-weight:500; line-height:14px; display:block;">
                      JOIN ID
                      <!-- e.g. {!JoinIdLabel__c} -->
                    </span>
                  </td>
                  <td align="right" style="padding:2px 0;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="display:inline-table;">
                      <tr>
                        <td style="padding:2px;">
                          <span style="color:var(--coomassie-blue); font-family:&quot;Avenir&quot;, Arial, sans-serif; font-size:10.5px; font-weight:800; line-height:14px; display:block;">
                            9P95-51M67
                            <!-- e.g. {!JoinId__c} -->
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
      </td>
    </tr>

    <!-- Row 2: Patient Initials | Treating Physician -->
    <tr>
      <!-- Patient Initials (left) -->
      <td valign="top" width="50%" style="padding:2px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:var(--white); border-radius:8px;">
          <tr>
            <td style="padding:2px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:2px 0;">
                    <span style="color:var(--cornflower-steel); font-family:&quot;Avenir&quot;, Arial, sans-serif; font-size:10.5px; font-weight:500; line-height:14px; display:block;">
                      Patient Initials
                    </span>
                  </td>
                  <td align="right" style="padding:2px 0;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="display:inline-table;">
                      <tr>
                        <td style="padding:2px;">
                          <span style="color:var(--coomassie-blue); font-family:&quot;Avenir&quot;, Arial, sans-serif; font-size:10.5px; font-weight:800; line-height:14px; display:block;">
                            BP
                            <!-- e.g. {!PatientInitials__c} -->
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
      </td>

      <!-- Treating Physician (right) -->
      <td valign="top" width="50%" style="padding:2px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:var(--white); border-radius:8px;">
          <tr>
            <td style="padding:2px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:2px 0;">
                    <span style="color:var(--cornflower-steel); font-family:&quot;Avenir&quot;, Arial, sans-serif; font-size:10.5px; font-weight:500; line-height:14px; display:block;">
                      Treating Physician
                    </span>
                  </td>
                  <td align="right" style="padding:2px 0;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="display:inline-table;">
                      <tr>
                        <td style="padding:2px;">
                          <span style="color:var(--coomassie-blue); font-family:&quot;Avenir&quot;, Arial, sans-serif; font-size:10.5px; font-weight:800; line-height:14px; display:block;">
                            Alex Lane
                            <!-- e.g. {!PhysicianName__c} -->
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
      </td>
    </tr>
  </table>

  <!-- Notes:
       - Replace static text with merge fields as needed (examples in comments).
       - Email clients vary in support for CSS variables and border-radius. If you see issues,
         swap var(--token) for hex values directly in the inline styles.
  -->`
  }
)
