Feature: Producer Codes
  As a system user I want to create additional producer codes for policy operations

  Background:
    * def sharedPath = 'classpath:pc/producercodes/'
    * configure headers = read('classpath:gw/gtapi/util/testsconfig/headers.js')
    * def response = {}

  @id=CreateProducerCode
  Scenario: Create producer code
    * def createProducerTemplate = sharedPath + 'createProducerCode.json'
    * def producerCodeUrl = PC_URL + 'enter create producer code URL.'
    Given url producerCodeUrl
    And request readWithArgs(createProducerTemplate, {'code': code, 'organization': organization, 'roles': roles})
    When method POST
    Then status 201
    * response.code = response.data.attributes.code
    * response.id = response.data.attributes.id
    * response.organization = response.data.attributes.organization