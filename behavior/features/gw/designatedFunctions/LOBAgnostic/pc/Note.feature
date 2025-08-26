@policycenter @designatedfunction @note
Feature: Add note in policy center
    As a user, I want to perform add note transaction in policy center

    @add_note
    Scenario: Adding the note from the account level
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "addNote_01" from json "AddNoteTestData"
        When the user creates personal account
        And the user adds the note
        Then the note is added successfully to account