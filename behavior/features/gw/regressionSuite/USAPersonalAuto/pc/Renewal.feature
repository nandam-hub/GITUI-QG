@policycenter @regressionSuite @renewal
Feature: Processing a renewal on USAPersonalAuto policy
    As a user, I want to process renewal on usa personal auto policy

    @pre_renewal
    Scenario: Perform pre renewal on usa personal auto policy
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "newSubmission_01" from json "NewSubmissionTestData"
        And the user creates personal account
        And the user issue the new submission for personal auto with with "1" vehicles
        And the user loads "pc" data "renewal_06" from json "RenewalTestData"
        When the user initiates pre renewal
        And the user adds pre renewal direction to usa personal auto policy
        Then pre renewal direction is added successfully