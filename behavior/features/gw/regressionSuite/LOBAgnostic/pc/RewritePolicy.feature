@policycenter @regressionSuite @rewrite
Feature: Rewrite policy in policy center
    As a user, I want to perform rewrite transaction on canceled Policy

    @rewrite_policy
    Scenario: Initiate rewrite transaction on canceled policy from actions menu
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user creates commercial policy
        And the user loads "pc" data "cancelPolicy_01" from json "CancelPolicyTestData"
        And the user performs cancel policy transaction
        And the policy is canceled successfully
        And the user loads "pc" data "rewritePolicy_01" from json "RewritePolicyTestData"
        When the user rewrites the canceled policy
        Then the rewrite is successful
        
        
        

