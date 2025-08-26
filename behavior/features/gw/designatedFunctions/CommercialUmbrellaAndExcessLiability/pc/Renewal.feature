@policycenter @designatedfunction
Feature: Processing a renewal on commercial umbrella and excess liability
    As a user, I want to process renewal on commercial umbrella and excess liability policy

    @renewal
    Scenario: Creating commercial umbrella and excess liability renewal
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "newSubmission_03" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user issue the new submission for umbrella liability
        And the user loads "pc" data "renewal_03" from json "RenewalTestData"
        When the user performs renewal on commercial umbrella and excess liability policy
        Then the renewal is applied successfully