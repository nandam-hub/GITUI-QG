import { ClaimLossDetails_Ext } from "./scenarioPages/claim/claimLossDetailsGroup/ClaimLossDetails_Ext";
import { NewVehicleIncidentPopup_Ext } from "./scenarioPages/popup/New/NewVehicleIncidentPopup_Ext"
import { NewFixedPropertyIncidentPopup_Ext } from "./scenarioPages/popup/New/NewFixedPropertyIncidentPopup_Ext"
import { NewInjuryIncidentPopup_Ext } from "./scenarioPages/popup/New/NewInjuryIncidentPopup_Ext";
import { t } from 'testcafe'
import world from "../../../util/gw/world";
import { validateTableRecord } from "../../../util/gw/helper"

const claimLossDetails_Ext = new ClaimLossDetails_Ext()
const newVehicleIncidentPopup_Ext = new NewVehicleIncidentPopup_Ext()
const newFixedPropertyIncidentPopup_Ext = new NewFixedPropertyIncidentPopup_Ext()
const newInjuryIncidentPopup_Ext = new NewInjuryIncidentPopup_Ext()

export class IncidentScenario {
    async addVehicleIncident(){
        await claimLossDetails_Ext.claimLossDetailsScreenEdit.click();
        await claimLossDetails_Ext.editableVehicleIncidentsLV_tbAdd.click(); 
        await newVehicleIncidentPopup_Ext.newVehicleIncidentPopupNewVehicleIncidentScreenVehIncidentDetailDVVehicleIncidentDVVehicle_Picker.selectOptionByLabel(world.dataMap.get('SelectVehicle')); 
        await newVehicleIncidentPopup_Ext.newVehicleIncidentPopupNewVehicleIncidentScreenVehIncidentDetailDVVehicleIncidentDVVehicle_Year.setValue(world.dataMap.get('Year'));
        await newVehicleIncidentPopup_Ext.newVehicleIncidentPopupNewVehicleIncidentScreenVehIncidentDetailDVVehicleIncidentDVVehicle_Make.setValue(world.dataMap.get('Make'));
        await newVehicleIncidentPopup_Ext.newVehicleIncidentPopupNewVehicleIncidentScreenVehIncidentDetailDVVehicleIncidentDVVehicle_Model.setValue(world.dataMap.get('Model'));
        await newVehicleIncidentPopup_Ext.newVehicleIncidentPopupDriverName.selectOptionByLabel(t.ctx.insuredName);
        await newVehicleIncidentPopup_Ext.newVehicleIncidentPopupNewVehicleIncidentScreenVehIncidentDetailDVVehicleIncidentDVLossOccured.selectOptionByLabel(world.dataMap.get('LossOccurred'));
        await newVehicleIncidentPopup_Ext.newVehicleIncidentScreenUpdate.click();
        await claimLossDetails_Ext.claimLossDetailsScreenUpdate.click();
    }

    async addPropertyIncident(){
        await claimLossDetails_Ext.claimLossDetailsScreenEdit.click();
        await claimLossDetails_Ext.editableFixedPropertyIncidentsLV_tbAdd.click(); 
        await newFixedPropertyIncidentPopup_Ext.newFixedPropertyIncidentPopupNewFixedPropertyIncidentScreenFixPropIncidentDetailDVFixedPropertyIncidentDVCCAddressInputSetglobalAddressContainerAddress_Picker.selectOptionByLabel(world.dataMap.get('SelectProperty')); 
        await newFixedPropertyIncidentPopup_Ext.newFixedPropertyIncidentPopupNewFixedPropertyIncidentScreenFixPropIncidentDetailDVFixedPropertyIncidentDVCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetAddressLine1.setValue(world.dataMap.get('Address1'));
        await newFixedPropertyIncidentPopup_Ext.newFixedPropertyIncidentPopupCity.setValue(world.dataMap.get('City'));
        await newFixedPropertyIncidentPopup_Ext.newFixedPropertyIncidentScreenUpdate.click();
        await claimLossDetails_Ext.claimLossDetailsScreenUpdate.click();
    }

    async addInjuryIncident(){
        await claimLossDetails_Ext.claimLossDetailsScreenEdit.click();
        await claimLossDetails_Ext.editableInjuryIncidentsLV_tbAdd.click(); 
        await newInjuryIncidentPopup_Ext.NewInjuryIncidentPopupInjuredPerson.selectOptionByLabel(t.ctx.insuredName); 
        await newInjuryIncidentPopup_Ext.newInjuryIncidentPopupNewInjuryIncidentScreenInjuryIncidentDVInjuryIncidentInputSetLossParty.selectOptionByLabel(world.dataMap.get('LossParty'));
        await newInjuryIncidentPopup_Ext.newInjuryIncidentScreenUpdate.click();
        await claimLossDetails_Ext.claimLossDetailsScreenUpdate.click();
    }

    async validateVehicleIncident(){
        await t.expect(await validateTableRecord("Model", world.dataMap.get('Model'), 6)).contains(t.ctx.insuredName)
    }

    async validatePropertyIncident(){
        await t.expect(await claimLossDetails_Ext.propertiesAddressInTabel.component.innerText).contains(world.dataMap.get('Address1'))
    }

    async validateInjuryIncident(){
        await t.expect(await claimLossDetails_Ext.injuredNameInTabel.component.innerText).contains(t.ctx.insuredName)
    }
}