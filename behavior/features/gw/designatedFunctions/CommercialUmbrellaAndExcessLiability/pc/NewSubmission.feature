@policycenter @designatedfunction @newsubmission
Feature: Commercial umbrella and excess liability new submission
    As a user, I want to perform create new submission(quote, bind and issue)

    Background: Login as superuser
        Given the user logs into the policy center as "superuser"

    @bind_submission
    Scenario: Creating commercial umbrella and excess liability bind
        Given the user loads "pc" data "newSubmission_03" from json "NewSubmissionTestData"
        When the user creates commercial account
        And the user quote the new submission for umbrella liability
        And the user bind the new submission
        Then the policy is bound successfully

    @quote_submission
    Scenario: Creating commercial umbrella and excess liability quote & return to quote
        Given the user loads "pc" data "newSubmission_03" from json "NewSubmissionTestData"
        When the user creates commercial account
        And the user quote the new submission for umbrella liability
        And the quote is saved successfully
        Then the user performs return to quote to the new submission

    @issue_submission
    Scenario: Issuing commercial umbrella and excess liability policy
        Given the user loads "pc" data "newSubmission_03" from json "NewSubmissionTestData"
        When the user creates commercial account
        And the user issue the new submission for umbrella liability
        Then the policy gets issued and the summary page is displayed
