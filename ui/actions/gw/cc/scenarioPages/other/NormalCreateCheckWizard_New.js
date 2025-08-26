import { PcfButton, PcfCheckBox, PcfComponent, PcfSelectInput, PcfTextInput } from '@gtui/gt-ui-framework';

export class NormalCreateCheckWizard_New {
    primaryPayeeName = PcfSelectInput('#NormalCreateCheckWizard-CheckWizard_CheckPayeesScreen-NewCheckPayeeDV-PrimaryPayee_Name > div.gw-vw--value');
    type = PcfSelectInput('#NormalCreateCheckWizard-CheckWizard_CheckPayeesScreen-NewCheckPayeeDV-PrimaryPayee_Type')
    payToNextOrder = PcfTextInput('#NormalCreateCheckWizard-CheckWizard_CheckPayeesScreen-NewCheckPayeeDV-PayTo')
    recipient = PcfTextInput('#NormalCreateCheckWizard-CheckWizard_CheckPayeesScreen-NewCheckPayeeDV-MailToContact')
    next = PcfButton('#NormalCreateCheckWizard-Next')
    reserveLine = PcfSelectInput('#NormalCreateCheckWizard-CheckWizard_CheckPaymentsScreen-NewCheckPaymentPanelSet-NewPaymentDetailDV-ReserveLineInputSet-ReserveLine')
    costType = PcfSelectInput('#NormalCreateCheckWizard-CheckWizard_CheckPaymentsScreen-NewCheckPaymentPanelSet-NewPaymentDetailDV-ReserveLineInputSet-CostType')
    costCategory = PcfSelectInput('#NormalCreateCheckWizard-CheckWizard_CheckPaymentsScreen-NewCheckPaymentPanelSet-NewPaymentDetailDV-ReserveLineInputSet-CostCategory')
    paymentType = PcfSelectInput('#NormalCreateCheckWizard-CheckWizard_CheckPaymentsScreen-NewCheckPaymentPanelSet-NewPaymentDetailDV-Payment_PaymentType')
    amount = PcfTextInput('#NormalCreateCheckWizard-CheckWizard_CheckPaymentsScreen-NewCheckPaymentPanelSet-NewPaymentDetailDV-EditablePaymentLineItemsLV-0-Amount')
    finsh = PcfButton('#NormalCreateCheckWizard-Finish')
    financialChecksHeader = PcfComponent('#ClaimFinancialsChecks-ClaimFinancialsChecksScreen-ttlBar > div.gw-TitleBar--titles--container')    
}
