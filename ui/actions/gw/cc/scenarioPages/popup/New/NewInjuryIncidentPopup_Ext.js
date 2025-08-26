import { PcfSelectInput } from "@gtui/gt-ui-framework";
import { NewInjuryIncidentPopup } from "../../../../../../pages/gw/generated/claimsolutions/pages/popup/New/NewInjuryIncidentPopup";


export class NewInjuryIncidentPopup_Ext extends NewInjuryIncidentPopup{
    NewInjuryIncidentPopupInjuredPerson = PcfSelectInput('#NewInjuryIncidentPopup-NewInjuryIncidentScreen-InjuryIncidentDV-Injured_Picker > div.gw-vw--value')
}