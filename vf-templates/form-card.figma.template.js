import { figma } from '@figma/code-connect'

figma.connect("https://www.figma.com/file/.../FormCard?node-id=901:234", {
  example: () => `<apex:form>
    <apex:pageBlock title="Record Details">
      <apex:pageMessages/>
      <apex:pageBlockButtons>
        <apex:commandButton value="Save" action="{!save}"/>
        <apex:commandButton value="Cancel" action="{!cancel}" immediate="true"/>
      </apex:pageBlockButtons>
      
      <apex:pageBlockSection title="Basic Information" columns="2">
        <apex:inputField value="{!record.Name}" required="true"/>
        <apex:inputField value="{!record.Email}"/>
        <apex:inputField value="{!record.Phone}"/>
        <apex:inputField value="{!record.Department}"/>
      </apex:pageBlockSection>
      
      <apex:pageBlockSection title="Address Information" columns="1">
        <apex:inputField value="{!record.MailingStreet}"/>
        <apex:inputField value="{!record.MailingCity}"/>
        <apex:inputField value="{!record.MailingState}"/>
        <apex:inputField value="{!record.MailingPostalCode}"/>
      </apex:pageBlockSection>
    </apex:pageBlock>
  </apex:form>`
})