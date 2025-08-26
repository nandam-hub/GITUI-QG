Feature: To create and manage administrative objects
  As a system superuser (su) I want to create admin data such as organizations, users, and producer codes

  Background:
    * def username = '<username>'
    * def password = '<password>'
    * configure headers = read('classpath:gw/gtapi/util/testsconfig/headers.js')
    * def adminUrl = PC_URL + '/rest/admin/v1/'
    * def response = {}

  @GetUserScenario
  @id=GetUser
  Scenario: Get an individual user
    Given url adminUrl + 'users/' + userId
    When method GET
    Then assert responseStatus == 200 || responseStatus == 404
    * response.userExists = responseStatus == 200