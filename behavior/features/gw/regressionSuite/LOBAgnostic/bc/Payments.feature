@billingcenter @regressionSuite @payments
Feature: Verifying payments in billing center
    As a user, I want to verify the payments in billing center

    @change_payment_plan
    Scenario: Changing the payment plan
        Given the user logs into the policy center as "superuser"
        Given the user loads "pc" data "newSubmission_01" from json "NewSubmissionTestData"
        And the user creates personal account
        And the user issue the new submission from actions menu for personal auto with "1" vehicles
        And the user logs into the billing center as "superuser"
        And the user loads "bc" data "changePaymentPlan_01" from json "ChangePaymentPlanTestData"
        When the user loads the policy with policy number
        And the user loads the change payment plan screen
        And the user changes the payment plan
        Then the payment plan is updated successfully

    @payment_request
    Scenario: Create Payment request for EFT policies
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user creates commercial policy
        And the user logs into the billing center as "superuser"
        And the user loads "bc" data "paymentRequest_01" from json "PaymentRequestTestData"
        When the user search with the account number
        And the user creates a payment request for EFT policy
        Then the payment request is added successfully

    @payment_details @payment_reversal
    Scenario: Verifying payment details and payment reversal in payment screen
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "newSubmission_02" from json "NewSubmissionTestData"
        When the user creates personal account
        And the user issue the new submission from actions menu for homeowner policy
        Then the policy is issued
        Given the user logs into the billing center as "superuser"
        And the user loads "bc" data "payments_01" from json "PaymentsTestData"
        When the user makes new payment
        And the user loads the payments screen
        Then payment details are updated successfully
        When the user performs payment reversal
        Then payment reversal is processed successfully

    @payment_instrument
    Scenario: Add new payment instrument
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user creates commercial policy
        And the user logs into the billing center as "superuser"
        And the user loads "bc" data "paymentInstrument_01" from json "PaymentsTestData"
        When the user adds new payment instrument
        Then the payment instrument is added successfully
