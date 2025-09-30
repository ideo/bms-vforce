const figma = require('@figma/code-connect')

figma.connect("https://www.figma.com/design/N6gSCJOJmym4isuCNlDxO5/BMS---VisualForce-Generator?node-id=2-12", {
  example: () => `<apex:page standardController="Account">
  <div style="max-width: 600px; margin: 0 auto;">
    <apex:form>
      <apex:pageBlock title="BMS Record Details">
        <apex:pageMessages/>
        
        <apex:pageBlockSection title="Basic Information" columns="2">
          <apex:inputField value="{!Account.Name}" required="true"/>
          <apex:inputField value="{!Account.Type}"/>
          <apex:inputField value="{!Account.Industry}"/>
          <apex:inputField value="{!Account.Phone}"/>
        </apex:pageBlockSection>
        
        <apex:pageBlockSection title="Address Information" columns="1">
          <apex:inputField value="{!Account.BillingStreet}"/>
          <apex:inputField value="{!Account.BillingCity}"/>
          <apex:inputField value="{!Account.BillingState}"/>
          <apex:inputField value="{!Account.BillingPostalCode}"/>
        </apex:pageBlockSection>
        
        <apex:pageBlockButtons>
          <apex:commandButton value="Save" action="{!save}"/>
          <apex:commandButton value="Cancel" action="{!cancel}" immediate="true"/>
        </apex:pageBlockButtons>
      </apex:pageBlock>
    </apex:form>
  </div>
</apex:page>`
})