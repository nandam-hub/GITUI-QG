@billingcenter @designatedfunction @invoice
Feature: Multiple payment entry in billing center
    As a user, I want to update multiple_paymententry in billing center

    @multiple_paymententry
    Scenario: User enters the payment information in bc
        Given the user logs into the billing center as "superuser"
        And the user loads "bc" data "multiplePayment_01" from json "MultiplePaymentEntryTestData"
        When the user  enter payment information in multipayment entry screen
        Then validates the amount value in payments screen 
        