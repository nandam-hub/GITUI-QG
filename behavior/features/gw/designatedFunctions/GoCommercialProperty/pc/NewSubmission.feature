@policycenter @designatedfunction

Feature: Commercial property new submission
    As a user, I want to perform create new submission(quote, bind and issue)

    @quote_submission_cp
    Scenario: Creating commercial property quote
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user quote the new submission for commercial property
        Then the quote is saved successfully

    @bind_submission_cp
    Scenario: Creating commercial property bind
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user quote the new submission for commercial property
        And the user bind the new submission
        Then the policy is bound successfully

    @issue_submission_cp
    Scenario: Issuing commercial property
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user creates commercial policy
        Then the policy is issued
