Feature: A feature file to create TDM Admin data using TestSupportAPIs.
  Admin data is only created once and is available for rest of the test execution(s).
  Same feature file can be used in GT-API and also can be used from external systems such as GT-UI.

  @id=PCAdminData
  Scenario: Loading policy admin data using Test Support APIs
    * def policyAdminData = Java.type('pc.PolicyAdminData')
    * policyAdminData.loadAdminData('api')