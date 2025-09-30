import { figma } from '@figma/code-connect'

figma.connect("https://www.figma.com/file/.../ContactList?node-id=789:012", {
  example: () => `<apex:pageBlock title="Contact List">
    <apex:pageBlockTable value="{!contacts}" var="contact">
      <apex:column headerValue="Name">
        <apex:outputField value="{!contact.Name}"/>
      </apex:column>
      <apex:column headerValue="Email">
        <apex:outputField value="{!contact.Email}"/>
      </apex:column>
      <apex:column headerValue="Addresses">
        <apex:repeat var="address" value="{!contact.Addresses}">
          <apex:outputText value="{!address.Street}, {!address.City}" escape="true"/><br/>
        </apex:repeat>
      </apex:column>
    </apex:pageBlockTable>
  </apex:pageBlock>`
})