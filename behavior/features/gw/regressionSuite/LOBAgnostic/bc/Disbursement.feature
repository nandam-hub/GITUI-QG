@billingcenter @regressionSuite @disbursement
Feature: Creating and verifying disbursment
    As a user, I want to manage Disbursements in billing center

    @disbursement_status
    Scenario: Verify disbursement is created
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "newSubmission_02" from json "NewSubmissionTestData"
        And the user creates personal account
        And the user issue the new submission from actions menu for homeowner policy
        And the user logs into the billing center as "superuser"
        And the user loads "bc" data "disbursmentStatus" from json "DisbursementTestData"
        When the user creates a disbursement
        Then the disbursement created successfully

    @automatic_disbursement
    Scenario: Creating automatic disbursement
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "newSubmission_02" from json "NewSubmissionTestData"
        And the user creates personal account
        And the user issue the new submission from actions menu for homeowner policy
        And the user logs into the billing center as "superuser"
        And the user loads "bc" data "automatic_disbursement" from json "DisbursementTestData"
        When the user makes new payment
        And the user runs automatic disbursement batch job
        And the user loads the disbursement screen
        Then automatic disbursement is created successfully

    @verify_batch_process
    Scenario: Run and verify automatic disbursement batch process
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "newSubmission_02" from json "NewSubmissionTestData"
        And the user creates personal account
        And the user issue the new submission from actions menu for homeowner policy
        And the user logs into the billing center as "superuser"
        And the user loads "bc" data "automatic_disbursement" from json "DisbursementTestData"
        When the user makes new payment
        And the user runs automatic disbursement batch job
        Then the automatic disbursement batch job is processed successfully