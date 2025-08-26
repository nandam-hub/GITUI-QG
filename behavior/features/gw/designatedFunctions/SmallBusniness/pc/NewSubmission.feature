@policycenter @designatedfunction @newsubmission
Feature: Small business new submission
    As a user, I want to perform create new submission(quote, bind and issue)

    Background: Login as superuser
        Given the user logs into the policy center as "superuser"

    @bind_submission
    Scenario: Creating small business bind
        Given the user loads "pc" data "newSubmission_05" from json "NewSubmissionTestData"
        When the user creates commercial account
        And the user quote the new submission for small business
        And the user bind the new submission
        Then the policy is bound successfully

    @quote_submission
    Scenario: Creating small business quote
        Given the user loads "pc" data "newSubmission_05" from json "NewSubmissionTestData"
        When the user creates commercial account
        And the user quote the new submission for small business
        Then the quote is saved successfully

    @issue_submission
    Scenario: Issuing small business policy
        Given the user loads "pc" data "newSubmission_05" from json "NewSubmissionTestData"
        When the user creates commercial account
        And the user issue the new submission for small business
        Then the policy is issued
