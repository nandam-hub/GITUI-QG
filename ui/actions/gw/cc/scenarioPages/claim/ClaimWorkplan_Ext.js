import { PcfCheckBox, PcfComponent, PcfSelectInput } from '@gtui/gt-ui-framework';
import { ClaimWorkplan } from '../../../../../pages/gw/generated/claimsolutions/pages/claim/ClaimWorkplan';

export class ClaimWorkplan_Ext extends ClaimWorkplan {
    workPlanFilter = PcfSelectInput('#ClaimWorkplan-ClaimWorkplanScreen-WorkplanLV-WorkplanFilter')
    activitiesCheckbox = PcfCheckBox('#ClaimWorkplan-ClaimWorkplanScreen-WorkplanLV-0-_Checkbox_checkboxDiv')
}