import { t } from "testcafe"
import { validateTableRecord } from '../../../util/gw/helper'
import { AddressBookSearch } from "../../../pages/gw/generated/claimsolutions/pages/addressBook/AddressBookSearch"
import world from "../../../util/gw/world"

const addressBookSearch = new AddressBookSearch()

export class AddressBookScenario {

    async addressBookValidation() {
        await t.expect(await validateTableRecord("Name", "Albertson's", 8)).eql(world.dataMap.get('AddressType'))
    }

    async addressBookSearchContact() {
        await addressBookSearch.addressBookSearchDVContactSubtype.selectOptionByLabel(world.dataMap.get('AddressType'));
        await addressBookSearch.addressBookSearchAddressBookSearchScreenAddressBookSearchDVNameInputSetGlobalContactNameInputSetName.setValue(world.dataMap.get('CompanyName'));
        await addressBookSearch.addressBookSearchAddressBookSearchScreenAddressBookSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();
    }
}