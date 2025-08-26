import { PcfSelectInput } from "@gtui/gt-ui-framework";
import { NewVehicleIncidentPopup } from "../../../../../../pages/gw/generated/claimsolutions/pages/popup/New/NewVehicleIncidentPopup";


export class NewVehicleIncidentPopup_Ext extends NewVehicleIncidentPopup{
    newVehicleIncidentPopupDriverName = PcfSelectInput('#NewVehicleIncidentPopup-NewVehicleIncidentScreen-VehIncidentDetailDV-VehicleIncidentDV-Driver_Picker > div.gw-vw--value')
}