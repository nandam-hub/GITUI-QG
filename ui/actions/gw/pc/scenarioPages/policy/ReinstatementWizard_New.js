import{ PcfTextInput, PcfComponent, PcfButton, PcfSelectInput } from '@gtui/gt-ui-framework';
export class ReinstatementWizard_New {
    reinstate_reason = PcfSelectInput('#ReinstatementWizard-ReinstatementWizard_ReinstatePolicyScreen-ReinstatePolicyDV-ReasonCode')
    reinstateNextButton = PcfButton('#ReinstatementWizard-Next')
    reinstateQuoteButton= PcfButton('#ReinstatementWizard-Job_RiskAnalysisScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote')
    reinstatePolicy= PcfButton('#ReinstatementWizard-ReinstatementWizard_QuoteScreen-JobWizardToolbarButtonSet-Reinstate')
    reinstateComplete_Title = PcfComponent('#gw-center-title-toolbar');
}