@billingcenter @regressionSuite @commission
Feature: Commissions in billing center
    As a user, I want to verify Commissions in billing center

    @commission_rate
    Scenario: Verifying commission rate
        Given the user logs into the billing center as "superuser"
        And the user loads "bc" data "commissionRate_01" from json "CommissionsTestData"
        When the user loads the existing policy number
        And the user loads the commissions screen
        Then commission rate is validated
        
    @commission_statement
    Scenario: Verify commission statement is displayed
        Given the user logs into the billing center as "superuser"
        And the user loads "bc" data "commissionStatement_02" from json "DisbursementTestData"
        When the user loads the existing policy number
        And the user navigates to producer tab
        Then the commision statement is displayed