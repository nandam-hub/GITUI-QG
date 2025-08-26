import { PcfButton, PcfCheckBox, PcfComponent, PcfSelectInput, PcfTextInput } from '@gtui/gt-ui-framework';

export class ManualCreateCheckWizard_New {
    primaryPayeeName = PcfSelectInput('#ManualCreateCheckWizard-ManualCheckWizard_CheckPayeesScreen-NewManualCheckPayeeDV-PrimaryPayee_Name > div.gw-vw--value')
    next = PcfButton('#ManualCreateCheckWizard-Next')
    reserveLine = PcfSelectInput('#ManualCreateCheckWizard-ManualCheckWizard_CheckPaymentsScreen-NewCheckPaymentPanelSet-NewPaymentDetailDV-ReserveLineInputSet-ReserveLine')
    costType = PcfSelectInput('#ManualCreateCheckWizard-ManualCheckWizard_CheckPaymentsScreen-NewCheckPaymentPanelSet-NewPaymentDetailDV-ReserveLineInputSet-CostType')
    costCategory = PcfSelectInput('#ManualCreateCheckWizard-ManualCheckWizard_CheckPaymentsScreen-NewCheckPaymentPanelSet-NewPaymentDetailDV-ReserveLineInputSet-CostCategory')
    paymentType = PcfSelectInput('#ManualCreateCheckWizard-ManualCheckWizard_CheckPaymentsScreen-NewCheckPaymentPanelSet-NewPaymentDetailDV-Payment_PaymentType')
    amount = PcfTextInput('#ManualCreateCheckWizard-ManualCheckWizard_CheckPaymentsScreen-NewCheckPaymentPanelSet-NewPaymentDetailDV-EditablePaymentLineItemsLV-0-Amount')
    finish = PcfButton('#ManualCreateCheckWizard-Finish')
}
