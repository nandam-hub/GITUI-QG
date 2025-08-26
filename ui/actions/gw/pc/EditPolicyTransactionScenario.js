import { SubmissionWizard_New } from "../../../../ui/actions/gw/pc/scenarioPages/navigation//submissionWizard/SubmissionWizard_New"

const submissionWizard_New = new SubmissionWizard_New()

export class EditPolicyTransactionScenario {

    async quoteUpdatedPolicy() {
        await submissionWizard_New.submissionQuote.click()
    }
}
