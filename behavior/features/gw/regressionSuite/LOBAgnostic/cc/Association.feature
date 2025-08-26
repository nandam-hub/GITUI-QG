@claimcenter @regressionSuite @association
Feature: Verify association in claim center
    As a user, I want to verify the association in claim center.

    @verify_association @add_association
    Scenario: Validate the association added in the claim center
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "createActivity_02" from json "FNOLTestData"
        When the user create new FNOL for USAPersonalAuto
        Then the FNOL is added successfully
        Given the user loads "cc" data "Association" from json "AssociationTestData"
        When the user adds the association
        Then the association is added successfully