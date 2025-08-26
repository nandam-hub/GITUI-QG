import { PcfTextInput, PcfSelectInput } from '@gtui/gt-ui-framework';
import { NewRecoverySet } from '../../../../../../../ui/pages/gw/generated/claimsolutions/pages/other/NewRecoverySet'

export class NewRecoverySet_Ext extends NewRecoverySet {
    recoveryAmount = PcfTextInput('#NewRecoverySet-NewRecoveryScreen-RecoveryDetailDV-EditableRecoveryLineItemsLV-0-Amount');
    payerMenuIcon = PcfSelectInput("#NewRecoverySet-NewRecoveryScreen-RecoveryDetailDV-Payer-PayerMenuIcon")
}