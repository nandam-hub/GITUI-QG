@policycenter @regressionSuite @newsubmission
Feature: Commercial property new submission
    As a user, I want to perform create new submission(quote, bind and issue)

    Background: Login as superuser
        Given the user logs into the policy center as "superuser"

    @multiple_building
    Scenario: Issuing commercial property with multiple buildings
        Given the user loads "pc" data "newSubmission_07" from json "NewSubmissionTestData"
        When the user creates commercial account
        And the user issue the new submission for commercial property with "3" building
        Then the policy is issued

    @multiple_location
    Scenario: Issuing commercial property with multiple location
        Given the user loads "pc" data "newSubmission_07" from json "NewSubmissionTestData"
        When the user creates commercial account
        And the user issue the new submission for commercial property with "3" location
        Then the policy is issued
        And locations are added successfully
