@claimcenter @regressionSuite @evaluation
Feature: Evaluation For Claim
    As a user, I want to do evaluation for claim in cc

    @new_evaluation
    Scenario: Evaluation of total in a claim
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "createClaim_01" from json "AddNoteTestData"
        And the user creates new FNOL
        And the user loads "cc" data "evaluatioData_01" from json "EvaluationTestData"
        When the user creates new total evaluation
        Then evaluation is validated successfully