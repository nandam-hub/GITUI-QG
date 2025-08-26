@claimcenter @regressionSuite @incident
Feature: Create Incident
    As a user, I want to create incident in claim center

    Background: Login and create new claim
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "createActivity_02" from json "FNOLTestData"
        When the user create new FNOL for USAPersonalAuto
        Then the FNOL is added successfully

    @vehicle_incident
    Scenario: Validate the vehicle incident is created in the claim center        
        Given the user loads "cc" data "vehicleIncident_01" from json "CreateIncidentTestData"
        When the user creates vehicle incident
        Then the vehicle incident is created successfully

    @property_incident
    Scenario: Validate the property incident is created in the claim center
        Given the user loads "cc" data "propertyIncident_01" from json "CreateIncidentTestData"
        When the user creates property incident
        Then the property incident is created successfully

    @injury_incident
    Scenario: Validate the injury incident is created in the claim center
        Given the user loads "cc" data "injuryIncident_01" from json "CreateIncidentTestData"
        When the user creates injury incident
        Then the injury incident is created successfully