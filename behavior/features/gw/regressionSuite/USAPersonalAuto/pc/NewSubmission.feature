@policycenter @regressionSuite @newsubmission

Feature: Personal auto new submission
    As a user, I want to perform create new submission(quote, bind and issue)

    Background: Login as superuser
        Given the user logs into the policy center as "superuser"

    @multiple_vehicles
    Scenario: Adding Multiple Vehicles
        Given the user loads "pc" data "newSubmission_06" from json "NewSubmissionTestData"
        When the user creates personal account
        And the user issue the new submission for personal auto with "3" vehicles
        Then the policy is issued

    @multiple_drivers
    Scenario: Adding Multiple Drivers
        Given the user loads "pc" data "newSubmission_08" from json "NewSubmissionTestData"
        When the user creates personal account
        And the user issue the new submission for personal auto with "2" drivers
        Then the policy is issued
        And "2" drivers are added successfully