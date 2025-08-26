@claimcenter @regressionSuite @SID
Feature: Verify special investigation details
    As a user, I want to Verify special investigation details
    
    @special_investigation_details
    Scenario: Update special investigation details in claim center
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "createClaim_01" from json "AddNoteTestData"
        And the user creates new FNOL
        And the user loads "cc" data "sIDetails_01" from json "SpecialInvestigationDetailsTestData"
        When the user updates special investigation details
        Then special investigation details is updated successfully in workplan