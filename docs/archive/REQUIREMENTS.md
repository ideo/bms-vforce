# Figma to Visualforce Email Template Generator - Requirements Document

## Project Overview

**Objective:** Create a dynamic solution to translate Figma email designs into production-ready Visualforce email templates for Salesforce, eliminating the need for developer involvement during the design-to-code process.

**Problem Statement:** 
- Designers create HTML email designs in Figma that need translation to Visualforce
- Current Code Connect approach requires manual developer creation per component
- Email templates have specific constraints (table layouts, 600px width, Outlook compatibility)
- Need to support Salesforce merge fields and Apex logic (repeat, conditionals)

## Technical Constraints

### Salesforce Email Limitations
- **Width:** Maximum 600px for email client compatibility
- **Layout:** Table-based layouts preferred over div-based (Outlook compatibility)
- **HTML:** Limited CSS support, inline styles preferred
- **Images:** Must be hosted externally or as Salesforce static resources

### Visualforce Requirements
- Use `<messaging:emailTemplate>` wrapper
- Support merge fields: `{!Contact.Name}`, `{!Account.Industry}`
- Handle `<apex:repeat>` for dynamic lists
- Support conditional rendering with `<apex:outputPanel rendered="{!condition}">`
- Proper escaping with `escape="true"` for security

## Solution Evaluation

### Approach 1: Code Connect ❌
**Status:** Not viable
- Requires manual developer creation per component
- Static templates only
- No dynamic generation capabilities

### Approach 2: Codegen Plugins (Anima, Locofy, Builder) ✅
**Status:** Most viable - especially Anima
- **Anima:** Already handles email-specific constraints (tables, 600px, inline CSS, Outlook compatibility)
- **Locofy:** Advanced AI analysis but web-focused, not email-specific
- **Builder:** AI-powered but no email features
- **Key insight:** Anima solves 80% of the problem, just needs Visualforce post-processing

### Approach 3: Custom Figma Plugin ⚠️
**Status:** Backup approach
- Full control but significant development effort
- Proven feasibility but high time investment
- Better to leverage existing codegen + post-processing

## Recommended Solution: Anima + Post-Processing Hybrid

### Core Architecture

```typescript
// Plugin Structure
src/
├── parser/
│   ├── DesignAnalyzer.ts      // Analyze Figma design structure
│   ├── NamingConventions.ts   // Parse naming conventions
│   └── ComponentMapper.ts     // Map to VF components
├── generators/
│   ├── VisualforceGenerator.ts // Generate VF markup
│   ├── TableLayoutEngine.ts   // Convert to table layouts
│   └── MergeFieldProcessor.ts // Handle Salesforce merge fields
├── templates/
│   ├── email-base.vf          // Base email template
│   ├── components/            // Reusable VF components
│   └── patterns/              // Common email patterns
└── ui/
    ├── plugin-ui.html         // Plugin interface
    └── preview.ts             // Live preview functionality
```

### Naming Conventions System

#### Frame/Group Names
- `email-container` → `<messaging:emailTemplate>`
- `header-section` → Header table row
- `content-{type}` → Content sections
- `footer-section` → Footer table row

#### Component Naming
- `text-{fieldName}` → `<apex:outputText value="{!Contact.fieldName}"/>`
- `image-{name}` → `<apex:image>` with static resource
- `button-{action}` → `<apex:outputLink>` with styling
- `repeat-{objectName}` → `<apex:repeat var="item" value="{!objectName}">`

#### Conditional Rendering
- `if-{condition}` → `<apex:outputPanel rendered="{!condition}">`
- `show-{role}` → Role-based visibility

#### Merge Fields
- Text layers containing `{{Contact.Name}}` → `{!Contact.Name}`
- Dynamic content markers: `{{Account.Industry}}` → `{!Account.Industry}`

### Technical Implementation

#### Phase 1: Core Plugin (MVP)
1. **Design Analysis Engine**
   - Parse Figma design hierarchy
   - Identify components by naming conventions
   - Extract text content and styling
   - Map coordinates to table structure

2. **Visualforce Generator**
   - Convert design to table-based layout
   - Generate proper VF markup
   - Handle merge field substitution
   - Apply Salesforce email constraints

3. **Preview System**
   - Live preview of generated VF code
   - Validation against VF syntax
   - Email client compatibility warnings

#### Phase 2: Advanced Features
1. **AI Enhancement** (Optional)
   - Use AI APIs for intelligent component detection
   - Suggest naming conventions
   - Auto-detect merge field opportunities

2. **Component Library**
   - Pre-built VF email components
   - Drag-and-drop component insertion
   - Design system integration

3. **Salesforce Integration**
   - Direct deployment to Salesforce org
   - Static resource management
   - Template testing capabilities

### Design Patterns & Best Practices

#### Email Layout Structure
```html
<messaging:emailTemplate>
  <messaging:htmlEmailBody>
    <table width="600" cellpadding="0" cellspacing="0">
      <tr><!-- Header --></tr>
      <tr><!-- Content --></tr>
      <tr><!-- Footer --></tr>
    </table>
  </messaging:htmlEmailBody>
</messaging:emailTemplate>
```

#### Component Mapping Examples

**Text Component:**
```
Figma: text-greeting → "Hello {{Contact.FirstName}}"
Output: <apex:outputText value="Hello {!Contact.FirstName}" escape="true"/>
```

**Repeat Section:**
```
Figma: repeat-opportunities (container)
Output: 
<apex:repeat var="opp" value="{!Contact.Opportunities}">
  <tr>
    <td><apex:outputText value="{!opp.Name}"/></td>
  </tr>
</apex:repeat>
```

**Conditional Content:**
```
Figma: if-hasOpportunities
Output: <apex:outputPanel rendered="{!Contact.Opportunities.size > 0}">
```

### Development Timeline

#### Week 1-2: Foundation
- Set up Figma plugin development environment
- Implement basic design parsing
- Create core naming convention system

#### Week 3-4: VF Generation
- Build Visualforce generator engine
- Implement table layout conversion
- Add merge field processing

#### Week 5-6: UI & Testing
- Create plugin user interface
- Implement preview functionality
- Test with various email designs

#### Week 7-8: Polish & Deploy
- Add error handling and validation
- Create documentation and examples
- Publish plugin for testing

### Success Metrics

1. **Accuracy:** 90%+ of generated VF templates work without manual editing
2. **Speed:** Generate template in <30 seconds for typical email design
3. **Adoption:** Designers can use without developer involvement
4. **Compatibility:** Works across major email clients (Outlook, Gmail, etc.)

## Alternative: Figma Make Evaluation

### If Figma Make Becomes Viable

**Advantages:**
- No custom development required
- Leverages Figma's AI capabilities
- Integrated into Figma platform

**Requirements for Viability:**
1. Support for Visualforce syntax generation
2. Email-specific constraint handling
3. Merge field processing capabilities
4. Table layout generation for email compatibility

**Recommendation:** Monitor Figma Make development and test when available, but proceed with custom plugin as primary solution.

## Risk Mitigation

### Technical Risks
- **Complex Design Parsing:** Start with simple layouts, gradually add complexity
- **VF Syntax Errors:** Implement validation and testing framework
- **Email Client Compatibility:** Use proven table-based patterns

### Business Risks
- **Designer Adoption:** Provide clear documentation and training
- **Maintenance:** Design for extensibility and easy updates
- **Scalability:** Plan for growing component library

## Conclusion

**Recommended Path:** Develop custom Figma plugin with phased approach
- **Phase 1:** MVP with core functionality (4-6 weeks)
- **Phase 2:** Advanced features and AI integration (4-6 weeks)
- **Monitoring:** Keep evaluating Figma Make as it develops

This approach provides the most control, flexibility, and certainty for achieving your goal of designer-independent Visualforce email template generation.