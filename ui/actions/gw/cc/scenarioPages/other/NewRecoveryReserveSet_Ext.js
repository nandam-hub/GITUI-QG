import { PcfCheckBox, PcfSelectInput, PcfTextInput } from '@gtui/gt-ui-framework';
import { NewRecoveryReserveSet } from '../../../../../pages/gw/generated/claimsolutions/pages/other/NewRecoveryReserveSet'

export class NewRecoveryReserveSet_Ext extends NewRecoveryReserveSet {
    newRecoveryEditableRecoveryReserves = PcfCheckBox('#NewRecoveryReserveSet-NewReserveSetScreen-RecoveryReservesSummaryDV-EditableRecoveryReservesLV-0-_Checkbox_checkboxDiv');
    newReserveSetScreenCostType = PcfSelectInput('#NewRecoveryReserveSet-NewReserveSetScreen-RecoveryReservesSummaryDV-EditableRecoveryReservesLV-0-CostType');
    newReserveSetScreenCostCategory = PcfSelectInput('#NewRecoveryReserveSet-NewReserveSetScreen-RecoveryReservesSummaryDV-EditableRecoveryReservesLV-0-CostCategory')
    newReserveSetScreenRecoveryCategory = PcfSelectInput('#NewRecoveryReserveSet-NewReserveSetScreen-RecoveryReservesSummaryDV-EditableRecoveryReservesLV-0-RecoveryCategory');
    newReserveSetScreenNewOpenRecoveryReserves = PcfTextInput('#NewRecoveryReserveSet-NewReserveSetScreen-RecoveryReservesSummaryDV-EditableRecoveryReservesLV-0-NewOpenRecoveryReserves');
}
