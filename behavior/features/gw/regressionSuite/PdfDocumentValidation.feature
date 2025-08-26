@pdfDocumentValidation
Feature: PDF Document Validation
    Validate generated pdf from policy center and claim center

    @static_content_validation @policy_document
    Scenario: Validate whole policy document PDF content
        Given the user logs into the policy center with "policyDocument" data as "superuser"
        When the user navigates to documents screen
        And the user downloads policy document pdf
        And the user consumes content validation service to compare pdf
        Then verify the policy pdf document content are matching completely

    @dynamic_content_validation @claim_property_exposure
    Scenario: Validate policy number and claim number in property exposure PDF document
        Given the user logs into the claims center with "exposure" data as "superuser"
        And the user creates new FNOL
        When the user creates property exposure
        And the user downloads property exposure pdf document
        Then verify the claim number and policy number present in the pdf document in the respective place holder

    @ignore_dynamic_standard_validation @policy_document
    Scenario: Validate policy document PDF by ignoring policy number
        Given the user logs into the policy center with "document" data as "superuser"
        When the user navigates to documents screen
        And the user downloads policy document pdf
        And the user consumes ignore dynamic standard validation service to compare pdf
        Then the policy PDF document is validated by ignoring policy number

    @pdf_static
    Scenario Outline: Validate pdf contents with standard service
        Given the base file <baseFile>, actual file <actualFile> and data file <dataFile>
        When the <endpoint> standard service is consumed
        Then the pdf is validated successfully
        Examples:
            | baseFile                  | actualFile         | endpoint           |
            | Template_Baseline_PECO300 | Actual_PECO300     | content_validation |
            | Template_Baseline_PECO300 | Actualline_PECO300 | pixel_validation   |

    @pdf_dynamic
    Scenario Outline: Validate pdf dynamic contents
        Given the base file <baseFile>, actual file <actualFile> and data file <dataFile>
        When the <endpoint> dynamic service with standard form <standardform> is consumed
        Then the pdfs are a match with dynamic values
        Examples:
            | baseFile  | actualFile  | dataFile          | endpoint                   | standardform |
            | SVDC_Base | SVDC_Actual | DataForValidation | dynamic_content_validation | true         |

    @pdf_dynamic_ignore
    Scenario Outline: Validate pdf contents ignoring dynamics
        Given the base file <baseFile>, actual file <actualFile> and data file <dataFile>
        When the <endpoint> dynamic ignore service with standard form <standardForm> is consumed
        Then the pdf is validated successfully
        Examples:
            | baseFile  | actualFile  | endpoint                          | standardForm |
            | SVDC_Base | SVDC_Actual | content_validation_ignore_dynamic | true         |