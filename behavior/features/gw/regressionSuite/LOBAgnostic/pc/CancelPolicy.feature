@policycenter @regressionSuite @cancel
Feature: Cancel policy in policy center
    As a user, I want to perform cancel policy transaction in policy center
 
    @cancelpolicy
    Scenario: Initiates cancel policy transaction from actions menu
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user creates commercial policy
        And the user loads "pc" data "cancelPolicy_01" from json "CancelPolicyTestData"
        When the user performs cancel policy transaction
        Then the policy is canceled successfully