@policycenter @designatedfunction

Feature: Homeowner new submission
    As a user, I want to perform create new submission(quote, bind and issue)

    @bind_submission_ho
    Scenario: Creating homeowners bind
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_02" from json "NewSubmissionTestData"
        And the user creates personal account
        And the user quote the new submission for homeowners
        And the user bind the new submission
        Then the policy is bound successfully

    @quote_submission_ho
    Scenario: Creating homeowners quote
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_02" from json "NewSubmissionTestData"
        And the user creates personal account
        And the user quote the new submission for homeowners
        Then the quote is saved successfully

    @issue_submission_ho
    Scenario: Issuing homeowner policy
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_02" from json "NewSubmissionTestData"
        And the user creates personal account
        And the user issue the new homeowner policy
        Then the policy is issued
