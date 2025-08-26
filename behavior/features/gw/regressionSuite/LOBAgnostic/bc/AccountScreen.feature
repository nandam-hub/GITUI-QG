@billingcenter @regressionSuite @accountscreen
Feature: Navigate to account screen
    As a user, I want to navigate to account in billing center

    @navigate_account_screen
    Scenario: Navigate to account screen by searching account number in account tab
        Given the user logs into the billing center as "superuser"
        And the user loads "bc" data "navigateAccountScreen_01" from json "AccountTestData"
        When the user navigate to account screen from account tab
        Then the account summary screen loaded successfully
