@policycenter @designatedfunction @newsubmission
Feature: Commercial property new submission
    As a user, I want to perform create new submission(quote, bind and issue)

    Background: Login as superuser
        Given the user logs into the policy center as "superuser"

    @quote_submission
    Scenario: Creating commercial property quote
        Given the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        When the user creates commercial account
        And the user quote the new submission for commercial property
        Then the quote is saved successfully

    @bind_submission
    Scenario: Creating commercial property bind
        Given the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        When the user creates commercial account
        And the user quote the new submission for commercial property
        And the user bind the new submission
        Then the policy is bound successfully

    @issue_submission
    Scenario: Issuing commercial property from actions menu
        Given the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        When the user creates commercial account
        And the user issue the new submission from actions menu for commercial property
        Then the policy is issued
