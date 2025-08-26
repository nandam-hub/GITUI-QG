import { PcfTextInput, PcfComponent, PcfButton, PcfSelectInput } from '@gtui/gt-ui-framework';
import { NewSubmission } from '../../../../../pages/gw/generated/policysolutions/pages/policy/NewSubmission'

export class NewSubmission_Ext extends NewSubmission {
    newSubmissionAccountNumber = PcfTextInput('#NewSubmission-NewSubmissionScreen-SelectAccountAndProducerDV-Account');
    policyNumber = PcfComponent("#JobComplete-JobWizardInfoBar-PolicyNumber >div:nth-child(2)")
    newSubmission_GoCommercialPropertySelect = PcfButton('#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV-1-addSubmission')
}