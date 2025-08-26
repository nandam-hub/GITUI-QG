@claimcenter @regressionSuite @checks
Feature: Create checks
    As a user, I want to create check in claim center

    @create_check
    Scenario: Creating check from actions menu for commercial policy
        Given the user logs into the claims center as "adjuster"
        And the user loads "cc" data "createActivity_01" from json "FNOLTestData"
        And the user creates new FNOL
        And the user loads "cc" data "contact_01" from json "ContactTestData"
        And the user update the contact details
        And the user loads "cc" data "createCheck_01" from json "CreateCheck"
        When the user creates the check
        And the user runs automatic financial escalation batch job
        And the user navigates to the claim
        Then the check details are updated successfully

    @void_check
    Scenario: Creating void check from actions menu for commercial policy
        Given the user logs into the claims center as "adjuster"
        And the user loads "cc" data "createActivity_01" from json "FNOLTestData"
        And the user creates new FNOL
        And the user loads "cc" data "contact_01" from json "ContactTestData"
        And the user update the contact details
        And the user loads "cc" data "createCheck_02" from json "CreateCheck"
        When the user creates the check
        And the user runs automatic financial escalation batch job
        And the user navigates to the claim
        And the user void the check
        Then the check details are updated successfully

    @stop_check
    Scenario: Creating stop check from actions menu for commercial policy
        Given the user logs into the claims center as "adjuster"
        And the user loads "cc" data "createActivity_01" from json "FNOLTestData"
        And the user creates new FNOL
        And the user loads "cc" data "contact_01" from json "ContactTestData"
        And the user update the contact details
        And the user loads "cc" data "createCheck_03" from json "CreateCheck"
        When the user creates the check
        And the user runs automatic financial escalation batch job
        And the user navigates to the claim
        And the user stop the check
        Then the check details are updated successfully

    @transfer_check
    Scenario: Creating transfer check from actions menu for commercial policy
        Given the user logs into the claims center as "adjuster"
        And the user loads "cc" data "createReserve_02" from json "ReserveTestData"
        And the user adds contact and exposure with reserve to the claim
        And the user creates new FNOL
        And the user update the contact details
        And the user loads "cc" data "createCheck_04" from json "CreateCheck"
        When the user creates the check
        And the user runs automatic financial escalation batch job
        And the user navigates to the claim
        And the user transfer the check
        Then the check details are updated successfully

    @manual_Check
    Scenario: Creating manual check from actions menu for commercial policy
        Given the user logs into the claims center as "adjuster"
        And the user loads "cc" data "createActivity_01" from json "FNOLTestData"
        And the user creates new FNOL
        And the user loads "cc" data "contact_01" from json "ContactTestData"
        And the user update the contact details
        And the user loads "cc" data "createManualCheck_01" from json "CreateCheck"
        When the user creates the manual check
        Then the check details are updated successfully