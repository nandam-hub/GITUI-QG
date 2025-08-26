import { ClaimMenuLinks_Ext } from './scenarioPages/navigation/menuLinks/ClaimMenuLinks_Ext'
import { t } from 'testcafe'
import { generateRandomStringFunction, clickTableRecord } from "../../../../ui/util/gw/helper";
import world from "../../../../ui/util/gw/world"

import {ClaimContacts_Ext} from "./scenarioPages/claim/claimPartiesGroup/ClaimContacts_Ext"
const claimMenuLinks_Ext = new ClaimMenuLinks_Ext()
const claimContacts_Ext = new ClaimContacts_Ext()

export class ContactScenario {

    async editContact() {
        console.log("Edit Contact Details")
        await clickTableRecord('_Checkbox_checkboxDiv', world.dataMap.get('ContactRole'))
        await claimMenuLinks_Ext.editButton.click()
        t.ctx.editLastName= generateRandomStringFunction(5)
        t.ctx.editFirstName= generateRandomStringFunction(5)
        await claimContacts_Ext.claimContactsClaimContactsScreenPeopleInvolvedDetailedListDetailContactBasicsDVPersonNameInputSetGlobalPersonNameInputSetLastName.setValue(t.ctx.editLastName)
        await claimContacts_Ext.claimContactsClaimContactsScreenPeopleInvolvedDetailedListDetailContactBasicsDVPersonNameInputSetGlobalPersonNameInputSetFirstName.setValue(t.ctx.editFirstName)
        await claimContacts_Ext.addressLine1.setValue(world.dataMap.get('AddressLine1'))
        await claimContacts_Ext.city.setValue(world.dataMap.get('City'))
        await claimContacts_Ext.addressLine1.click()
        await claimContacts_Ext.state.selectOptionByLabel(world.dataMap.get('State'))
        await claimMenuLinks_Ext.updateContactDetails.click()
        t.ctx.name = await t.ctx.editFirstName + " " + await t.ctx.editLastName
    }

    async verifyContactDetails() {
        await t.expect((claimMenuLinks_Ext.contactsHeader).component.exists).ok();
        await t.expect(claimContacts_Ext.personLastName.component.innerText).eql(await t.ctx.editLastName)
        await t.expect(claimContacts_Ext.personFirstName.component.innerText).eql(t.ctx.editFirstName)
    }
}