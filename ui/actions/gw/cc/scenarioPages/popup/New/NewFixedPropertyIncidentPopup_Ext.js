import { PcfTextInput } from "@gtui/gt-ui-framework";
import { NewFixedPropertyIncidentPopup } from "../../../../../../pages/gw/generated/claimsolutions/pages/popup/New/NewFixedPropertyIncidentPopup";


export class NewFixedPropertyIncidentPopup_Ext extends NewFixedPropertyIncidentPopup{
    newFixedPropertyIncidentPopupCity = PcfTextInput('#NewFixedPropertyIncidentPopup-NewFixedPropertyIncidentScreen-FixPropIncidentDetailDV-FixedPropertyIncidentDV-CCAddressInputSet-globalAddressContainer-globalAddress-GlobalAddressInputSet-City > div.gw-vw--value')
}