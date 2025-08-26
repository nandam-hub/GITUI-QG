@policycenter @designatedfunction
Feature: Processing a renewal on homeowners policy
    As a user, I want to process renewal on homeowners policy

    @renewal
    Scenario: Perform renewal on homeowners policy
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "newSubmission_02" from json "NewSubmissionTestData"
        And the user creates personal account
        And the user issue the new homeowner policy
        And the user loads "pc" data "renewal_02" from json "RenewalTestData"
        When the user performs renewal on homeowners policy
        Then the renewal is applied successfully