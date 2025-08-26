@claimcenter @regressionSuite @search
Feature: Search menu in claim center
    As a user, I want to search check or contact or claim in claim center

    @advance_search_claim
    Scenario: Searching claim by name in advance search
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "createActivity_01" from json "FNOLTestData"
        And the user creates new FNOL
        And the user loads "cc" data "advanceSearch_01" from json "SearchTestData"
        When the user searches the claim on advance search page
        Then the newly created claim details are loaded successfully