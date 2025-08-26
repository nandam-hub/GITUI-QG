@policycenter @designatedfunction
Feature: Processing a renewal
    As a user, I want to perform renewal transaction on small business

    @renewal
    Scenario: Perform renewal on small business policy
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "newSubmission_05" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user issue the new submission for small business
        And the user loads "pc" data "renewal_04" from json "RenewalTestData"
        When the user performs renewal on small business policy
        Then the renewal is applied successfully