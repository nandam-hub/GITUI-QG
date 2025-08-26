import { PcfButton, PcfCheckBox, PcfComponent, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";
import { AccountGroupMenuActions } from "./AccountGroupMenuActions";
export class AccountGroupMenuActions_Ext extends AccountGroupMenuActions {
    createDisbursementDetailDV_amount = PcfTextInput('#AccountCreateDisbursementWizard-CreateDisbursementDetailScreen-CreateDisbursementDetailDV-amount');
    createDisbursementDetailEffectiveDate = PcfTextInput('#AccountCreateDisbursementWizard-CreateDisbursementDetailScreen-CreateDisbursementDetailDV-effectiveDate');
    createDisbursementDetailReason = PcfSelectInput('#AccountCreateDisbursementWizard-CreateDisbursementDetailScreen-CreateDisbursementDetailDV-reason');
    accountCreateDisbursementWizard_Next = PcfButton('#AccountCreateDisbursementWizard-Next')
    disbursementFinish = PcfButton('#AccountCreateDisbursementWizard-Finish');
    disbursementPending = PcfComponent('#AccountCreateDisbursementWizard-CreateDisbursementDetailScreen-DisbursementPendingDV-pending');
}