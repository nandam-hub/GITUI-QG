@claimcenter @designatedfunction
Feature: Adding or updating Person or Vendor contact for a claim
    As a user, I want to update contact or vendor details

    @edit_contact
    Scenario: Updating contact details for a claim
        Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "createActivity_01" from json "FNOLTestData"
        And the user creates new FNOL
        When the user loads "cc" data "contact_01" from json "ContactTestData"
        And the user update the contact details
        Then the contact details are updated successfully