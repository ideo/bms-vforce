import { figma } from '@figma/code-connect'

figma.connect("https://www.figma.com/file/.../Component?node-id=123:456", {
  example: () => `<apex:pageBlock title="Related Records">
    <apex:pageBlockTable value="{!relatedRecords}" var="item">
      <apex:column headerValue="First Name">
        <apex:outputField value="{!item.FirstName}"/>
      </apex:column>
      <apex:column headerValue="Last Name">
        <apex:outputField value="{!item.LastName}"/>
      </apex:column>
      <apex:column headerValue="Actions">
        <apex:commandButton value="Edit" action="{!editRecord}" 
                           onclick="return confirm('Edit this record?')">
          <apex:param name="recordId" value="{!item.Id}"/>
        </apex:commandButton>
      </apex:column>
    </apex:pageBlockTable>
  </apex:pageBlock>`
})