@policycenter @designatedfunction @search
Feature: Search menu in policy center
    As a user, I want to search for an account or policy or contact

    @search_account
    Scenario: Search for an existing commercial account
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "searchAccount_01" from json "SearchTestData"
        When the user searches for an account with account number
        Then the account details are loaded

    @search_contact_policy
    Scenario: Searching contact in policy center
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "searchContact_01" from json "SearchTestData"
        When the user creates personal account
        And the user searches contact in policycenter
        Then the contact details are loaded successfully

    @searchPolicy
    Scenario: Searching with policy from Search tab
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        When the user creates commercial account
        And the user creates commercial policy
        And the user searches for the policy with policy number
        Then the policy details are loaded successfully