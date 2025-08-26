@claimcenter @designatedfunction @activity
Feature: Add Activity in Claim center
    As a user, I want to add or update activity transaction in claim center

    @add_activity
    Scenario: Adding the activity
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "addActivity_01" from json "AddActivityTestData"
        When the user creates new FNOL
        And the user adds an activity
        Then the add activity is added successfully
