import {PcfButton, PcfSelectInput } from '@gtui/gt-ui-framework';
 
export class CancellationWizard_New {
    cancelPolicySource = PcfSelectInput('#StartCancellation-StartCancellationScreen-CancelPolicyDV-Source')
    cancelPolicyReason = PcfSelectInput('#StartCancellation-StartCancellationScreen-CancelPolicyDV-Reason')
    cancelPolicyStartCancellation = PcfButton('#StartCancellation-StartCancellationScreen-NewCancellation')
    cancelPolicyBindOption = PcfButton('#CancellationWizard-CancellationWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions')
    cancelPolicyBindOptionCancelNow = PcfButton('#CancellationWizard-CancellationWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-CancelNow')
}