@policycenter @regressionSuite @editpolicy
Feature: Edit policy transaction in policy center
    As a user, I want to perform edit policy transaction in policy center
 
    @edit_policy
    Scenario: Update coverage through edit policy transaction after quote
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user quote the new submission for commercial property
        And the user loads "pc" data "editPolicy_01" from json "EditPolicyTransactionTestData"
        When the user updates coverage through edit policy transaction
        Then the user proceeds to quote and issue the policy with the updated changes
        And the coverage is successfully updated for commercial property policy