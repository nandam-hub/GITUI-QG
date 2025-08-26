@claimcenter @regressionSuite @litigation
Feature: Litigation in Claim center
    As a user, I want to manage litigation in claim center

    @add_litigation
    Scenario: Adding the litigation
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "addLitigation_01" from json "LitigationTestData"
        When the user creates new FNOL
        And the user adds new litigation
        Then the litigation is added successfully