import { PcfButton, PcfCheckBox, PcfComponent, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";

export class MultiPaymentEntryWizard {
    Account = '[id$="-Account"]'
    Checkbox = '[id*="_Checkbox_checkboxDiv"]'
    PaymentInstrument = '[id$="-PaymentInstrument"]'
    multiPaymentEntryWizardDescription = '[id$="-Description"]';
    multiPaymentEntryWizard_Next = PcfButton("#MultiPaymentEntryWizard-Next");
    multiPaymentEntryWizard_Finish = PcfButton("#MultiPaymentEntryWizard-Finish");
    multiPaymentEntryWizardAmount = '[id$="-Amount"]'
}