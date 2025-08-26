@policycenter @designatedfunction
Feature: creating an account in policy center
   As a user, I want to view account summary in policy center

   @view_account_summary
   Scenario: View personal account summary
      Given the user logs into the policy center as "superuser"
      And the user loads "pc" data "viewAccountSummary_01" from json "PersonalLineAccountTestData"
      When the user creates personal account
      And the user search with an account number
      Then the view account summary details are loaded