@claimcenter @designatedfunction @fnol
Feature: Capturing first notice of loss
    As a user, I want to create a new fnol in claim center

    @fnol_commercial
    Scenario: Creating a new fnol with commercial policy
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "createActivity_01" from json "FNOLTestData"
        When the user creates new FNOL
        Then the FNOL is added successfully