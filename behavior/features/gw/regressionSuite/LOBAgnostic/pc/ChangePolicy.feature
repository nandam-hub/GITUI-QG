@policycenter @regressionSuite @changepolicy
Feature: Change policy in policy center
    As a user, I want to perform address change policy transaction in policy center
 
    @change_policy_commercial
    Scenario: Initiates address change policy transaction from actions menu
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user creates commercial policy
        And the user loads "pc" data "changePolicy_01" from json "ChangePolicyTestData"
        When the user perform address detail change transaction
        Then the address detail is changed successfully