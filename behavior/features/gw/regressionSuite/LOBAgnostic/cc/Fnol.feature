@claimcenter @regressionSuite @fnol
Feature: Capturing first notice of loss
    As a user, I want to manage fnol in claim center

    @add_rental_service
    Scenario: To add rental service for an auto claim
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "newSubmission_01" from json "NewSubmissionTestData"
        And the user issues new Auto policy
        And the user logs into the claims center as "superuser"
        And the user loads "cc" data "createActivity_04" from json "FNOLTestData"
        When the user creates new claim with rental
        Then claim is created with rental service

    @catastrophe
    Scenario: Creating a new fnol with auto policy for catastrophe
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "createActivity_03" from json "FNOLTestData"
        When the user create new FNOL for USAPersonalAuto
        Then the FNOL is added successfully
        And the catastrophe is displayed in loss details

    @claim_history
    Scenario: Verify that key activities on the claim is updated in history screen
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "createActivity_01" from json "FNOLTestData"
        When the user creates new FNOL
        Then the FNOL is added successfully
        And the activities on the claim is updated in claim history screen

    @close_claim @exposure_unavailable @reserve_unavailable
    Scenario: To close a claim by closing all the items associated within the claim (exposure, activities, litigation) and validate the exposure is unavailable
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "addLitigation_01" from json "LitigationTestData"
        And the user creates new FNOL
        And the user adds new litigation
        And the user loads "cc" data "addActivity_01" from json "AddActivityTestData"
        And the user adds an activity
        And the user loads "cc" data "Exposure_02" from json "ExposuresTestData"
        And the user creates property exposure
        And the user loads "cc" data "createActivity_05" from json "FNOLTestData"
        When the user closes the exposure
        And the user completes all workplan activities
        And the user closes the litigation matter
        And the user closes the claim
        Then claim is closed successfully
        And the new exposure is not displayed in action menu
        And the reserve is not displayed in action menu

    @unverified_claimwithfuturelossdate
    Scenario: Creation of unverified claim by entering future loss date
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "FNOL_01" from json "FNOLTestData"
        When the user start creating unverified claim by giving future loss date
        Then the user should able to see the error message

    @assign_claim
    Scenario: Verify the Claim is not assigned to Auto Claim Consultant group after changing loss cause
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "createActivity_03" from json "FNOLTestData"
        When the user create new FNOL for USAPersonalAuto
        And the FNOL is added successfully
        Given the user loads "cc" data "assignClaim_01" from json "FNOLTestData"
        When the user updates loss cause and assigns claim
        Then the claim is not assigned to claims autopilot in claim history screen