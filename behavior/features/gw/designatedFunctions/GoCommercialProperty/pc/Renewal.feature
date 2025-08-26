@policycenter @designatedfunction @renewal
Feature: Processing a renewal
    As a user, I want to perform renewal transaction on Go commercial property

    @renewal_commercial
    Scenario: Perform renewal on commercial policy
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user creates commercial policy
        And the user loads "pc" data "renewal_01" from json "RenewalTestData"
        When the user performs renewal on commercial policy
        Then the renewal is applied successfully