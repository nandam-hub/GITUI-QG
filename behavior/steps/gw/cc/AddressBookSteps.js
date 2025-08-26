const { When, Then } = require("@cucumber/cucumber")
import { AddressBookScenario } from "../../../../ui/actions/gw/cc/AddressBookScenario"
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario"

const navigationScenario = new NavigationScenario()
const addressBookScenario = new AddressBookScenario()

When('the user searches an existing contact', async function () {
    await navigationScenario.navigateToAddressBookSearch()
    await addressBookScenario.addressBookSearchContact()
});

Then('the contact is displayed successfully', async function () {
    await addressBookScenario.addressBookValidation()
});