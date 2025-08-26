Feature: Users
  As a system user I want to create additional users for policy operations

  Background:
    * def sharedPath = 'classpath:pc/users/'
    * configure headers = read('classpath:gw/gtapi/util/testsconfig/headers.js')
    * def response = {}

  @id=CreateUser
  Scenario: Create user
    * def createUserTemplate = sharedPath + 'createPolicyUser.json'
    * def userUrl = PC_URL + 'enter create user URL.'
    Given url userUrl
    And request readWithArgs(createUserTemplate, {'userName': userName, 'roles': roles, 'groups': groups, 'useProducerCodeSecurity': useProducerCodeSecurity})
    When method POST
    Then status 201
    * response.userName = response.data.attributes.username
    * response.groupId = response.data.attributes.groupId
    * response.userId = response.data.attributes.id