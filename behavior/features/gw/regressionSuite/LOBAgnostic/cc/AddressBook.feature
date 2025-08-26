@claimcenter @regressionSuite @addressbook
Feature: Address book in Claim center
    As a user, I want to manage Address book in claim center

    @addressbook_search
    Scenario: Searching an existing contact in address book
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "addressbook_01" from json "AddressBookTestData"
        When the user searches an existing contact
        Then the contact is displayed successfully