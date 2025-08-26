@policycenter @regressionSuite @riskanalysis
Feature: Manage Risk Analysis
    As a user, I want to manage Risk Analysis

    @UW_issue_approve
    Scenario: Approve manually added UW Issue
        Given the user logs into the policy center as "superuser"
        And the user loads "pc" data "newSubmission_05" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user initiates quote for small business
        And the user loads "pc" data "underwriting_01" from json "UnderwritingTestData"
        When the user manually adds "2" UW
        And the user approves the UW issues
        And the user proceeds and issues policy
        Then UW issue is in approved status