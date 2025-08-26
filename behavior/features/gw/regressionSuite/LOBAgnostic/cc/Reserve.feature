@claimcenter @regressionSuite @reserve
Feature: Create recovery reserve in Claim center
    As a user, I want to create recovery reserve

    @recovery_reserve
    Scenario: Create recovery reserve from actions tab
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "addActivity_01" from json "FNOLTestData"
        And the user creates new FNOL
        And the user loads "cc" data "recoveryReserve_01" from json "ReserveTestData"
        When the user creates recovery reserve
        Then the recovery reserve is created successfully

    @create_reserve
    Scenario: Create reserve after exposure is created from actions tab
        Given the user logs into the claims center as "adjuster"
        And the user loads "cc" data "addActivity_01" from json "FNOLTestData"
        And the user creates new FNOL
        Then the FNOL is added successfully
        When the user loads "cc" data "Exposure_02" from json "ExposuresTestData"
        And the user creates property exposure
        When the user loads "cc" data "createReserve_01" from json "ReserveTestData"
        And the user creates reserve
        Then the reserve is created successfully

    @create_multiple_reserve
    Scenario: Create multiple reserve after exposure is created from actions tab
        Given the user logs into the claims center as "adjuster"
        And the user loads "cc" data "createActivity_02" from json "FNOLTestData"
        And the user create new FNOL for USAPersonalAuto
        Then the FNOL is added successfully
        And the user loads "cc" data "Exposure_01" from json "ExposuresTestData"
        When the user creates BI Liability exposure
        And the user creates UMBI Liability exposure
        And the user creates medical payments exposure
        When the user loads "cc" data "createMultipleReserve_02" from json "ReserveTestData"
        And the user creates 6 reserve
        Then the 6 reserves are created successfully

    @automatic_reserve
    Scenario: Validate the automatic reserve is created in the claim center
        Given the user logs into the claims center as "adjuster"
        And the user loads "cc" data "createActivity_02" from json "FNOLTestData"
        When the user create new FNOL for USAPersonalAuto
        And the FNOL is added successfully
        And the user loads "cc" data "vehicleIncident_01" from json "CreateIncidentTestData"
        And the user creates vehicle incident
        And the user loads "cc" data "automaticReserve_01" from json "ReserveTestData"
        And the user creates liability vehicle damage exposure
        Then the automatic reserve is created successfully