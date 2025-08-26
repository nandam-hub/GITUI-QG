@claimcenter @regressionSuite @print_export
Feature: Print or Export document
    As a user, I want to print or export claim document

    @print_export_exposure
    Scenario: Print or export in exposure screen
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "createClaim_01" from json "AddNoteTestData"
        And the user creates new FNOL
        When the user loads "cc" data "printExport_01" from json "PrintExportTestData"
        And the user downloads adjuster from custom export
        Then the downloaded file is validated