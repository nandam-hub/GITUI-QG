Feature: Create a new organization
  As a system user I want to create additional organizations for policy operations

  Background:
    * def sharedPath = 'classpath:pc/organizations/'
    * def adminUrl = pcBaseUrl + '/rest/admin/v1/'
    * configure headers = read('classpath:gw/gtapi/util/testsconfig/headers.js')
    * def response = {}

  @id=CreateOrganization
  Scenario: Create organization
    * def createOrganizationTemplate = sharedPath + 'createOrganization.json'
    * def organizationUrl = adminUrl + 'organizations'
    Given url organizationUrl
    And request readWithArgs(createOrganizationTemplate, {'organizationName': organizationName})
    When method POST
    Then status 201
    * response.name = response.data.attributes.name
    * response.id = response.data.attributes.id