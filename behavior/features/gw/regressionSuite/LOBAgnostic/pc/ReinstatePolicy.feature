@policycenter @regressionSuite @reinstate
Feature: Reinstate policy in policy center
    As a user, I want to perform reinstate transaction on cancelled Policy

    @reinstate_policy
    Scenario: Reinstate transaction on canceled policy from actions menu and validating the policy transaction status
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user creates commercial policy
        And the user loads "pc" data "cancelPolicy_01" from json "CancelPolicyTestData"
        And the user performs cancel policy transaction
        And the policy is canceled successfully
        And the user loads "pc" data "reinstatePolicy_01" from json "ReinstatePolicyTestData"
        When the user perform reinstate policy transaction
        Then the reinstate is successful
        And the user validates policy transaction status