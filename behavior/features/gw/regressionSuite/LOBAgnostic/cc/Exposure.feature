@claimcenter @regressionSuite @exposure
Feature: Add or Update Exposure
    As a user, I want to add or update exposure in claim center

    @bi_liability_exposure @medical_payments_exposure @select_exposure
    Scenario: Creating and selecting the BI Liability and Medical Payment exposure's
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "createActivity_02" from json "FNOLTestData"
        And the user create new FNOL for USAPersonalAuto
        And the user loads "cc" data "Exposure_01" from json "ExposuresTestData"
        When the user creates BI Liability exposure
        And the user creates medical payments exposure
        Then the BI Liability exposure is created successfully
        And the medical payment exposure is created successfully
        And the user selects and validates the BI liability and Medical Payment exposure's

    @property_exposure
    Scenario: Creating property exposure
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "createActivity_01" from json "FNOLTestData"
        When the user creates new FNOL
        Then the FNOL is added successfully
        Given the user loads "cc" data "Exposure_02" from json "ExposuresTestData"
        When the user creates property exposure
        Then the property exposure is created successfully
        