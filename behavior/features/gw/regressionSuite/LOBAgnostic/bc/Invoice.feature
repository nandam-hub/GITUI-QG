@billingcenter @regressionSuite @invoice
Feature: Invoice in billing center
    As a user, I want to manage invoices in billing center

    @search_invoices
    Scenario:  Validate the created invoices as per the selected Payment plan
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "newSubmission_01" from json "NewSubmissionTestData"
        And the user creates personal account
        And the user issue the new submission from actions menu for personal auto with "1" vehicles
        And the user logs into the billing center as "superuser"
        And the user loads "bc" data "changePaymentPlan_01" from json "ChangePaymentPlanTestData"
        When the user navigates to account from summary page
        Then the invoice details are validated as per the payplan successfully
