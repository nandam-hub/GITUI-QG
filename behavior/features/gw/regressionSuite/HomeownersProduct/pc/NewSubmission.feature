@policycenter @regressionSuite @newsubmission
Feature: Homeowner new submission
    As a user, I want to perform create new submission(quote, bind and issue)

    Background: Login as superuser
        Given the user logs into the policy center as "superuser"

    @error_messages_validation
    Scenario: Verifying UI Error messages on Homeowners policy
        Given the user loads "pc" data "newSubmission_02" from json "NewSubmissionTestData"
        When the user creates personal account
        And the user initiate homeowner quote
        Then the user validates error messages for Refusal Type dropdown in GWHomeownersLine screen
        And the user validates error messages without selecting any coverage in Homeowners policy

    @validate_coverage_forms
    Scenario: Verify forms by adding specific coverages from Homeowners LOB
        Given the user loads "pc" data "newSubmission_02" from json "NewSubmissionTestData"
        When the user creates personal account
        And the user adds specific coverges to homeowner policy
        Then the forms are added successfully