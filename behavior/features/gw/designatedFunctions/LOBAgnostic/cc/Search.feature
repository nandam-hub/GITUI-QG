@claimcenter @designatedfunction @search
Feature: Search menu in claim center
    As a user, I want to search check or contact or claim in claim center

    @search_check
    Scenario: Searching check in claim center
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "searchCheck_01" from json "SearchTestData"
        When the user search the check
        Then the check details are loaded

    @search_contact
    Scenario: Searching contact in claim center
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "searchContact_01" from json "SearchTestData"
        When the user searches the contact
        Then the search contact details are loaded

    @search_policy
    Scenario Outline: Seaching with policy from search claims
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "searchPolicy_01" from json "SearchTestData"
        When the user searches for the policy in Search Claims
        Then the claim details are loaded successfully

    @search_recovery @create_recovery
    Scenario: Searching recovery in claim center
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "searchRecovery_01" from json "SearchTestData"
        And the user creates new FNOL
        And the user search with claim number
        When the user creates the recovery
        And the user searches for the recovery details with claim number
        Then the recovery details are loaded