@billingcenter @designatedfunction @invoice
Feature: Invoice in billing center
    As a user, I want to manage invoices in billing center

    @invoice_due
    Scenario: Updating billed date for an invoice due
        Given the user logs into the billing center as "superuser"
        And the user loads "bc" data "invoiceDue_01" from json "BillingTestData"
        When the user navigates to invoices on billing center home page
        And the user changes the invoice billed date
        Then the invoice billed date is updated

    @invoice_billed
    Scenario: Resend invoice for a billed invoice
        Given the user logs into the billing center as "superuser"
        And the user loads "bc" data "invoiceBilled_01" from json "BillingTestData"
        When the user navigates to invoices on billing center home page
        And the user resends invoice
        Then the invoice resent confirmation message is displayed
