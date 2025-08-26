@claimcenter @regressionSuite @workplan
Feature: View Claim Summary
    As a user, I want add or update work plan

    @workplan_activity @create_workplan
    Scenario: Complete the work plan for activity and interactions associated with it
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "createClaim_01" from json "AddNoteTestData"
        And the user creates new FNOL
        And the user loads "cc" data "workPlan_01" from json "WorkPlanTestData"
        When the user search with claim number
        And the user completes the activity work plan
        Then the activity work plan status is completed

    @update_workplan
    Scenario: Update the work plan activity
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "createClaim_01" from json "AddNoteTestData"
        And the user creates new FNOL
        And the user loads "cc" data "workPlan_02" from json "WorkPlanTestData"
        When the user search with claim number
        And the user update the work plan
        Then the work plan update is completed