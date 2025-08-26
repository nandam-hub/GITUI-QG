@claimcenter @regressionSuite @document
Feature: User Document Upload
    As a user, I want to manage documents

    @document_upload
    Scenario: user want to upload Text document in cc
        Given the user logs into the claims center as "superuser"
        And  the user loads "cc" data "createClaim_01" from json "AddNoteTestData"
        And the user creates new FNOL
        And  the user loads "cc" data "documentUpload_01" from json "DocumentTestData"
        When the user uploads the document
        Then the document is uploaded successfully

    @document_add
    Scenario: user want to add document from existing template in cc
        Given the user logs into the claims center as "adjuster"
        And  the user loads "cc" data "createClaim_01" from json "AddNoteTestData"
        And the user creates new FNOL
        And  the user loads "cc" data "documentAddTemplate_02" from json "DocumentTestData"
        When the user adds document from template
        Then the document template is added successfully