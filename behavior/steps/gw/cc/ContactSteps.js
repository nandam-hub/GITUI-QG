const { When, Then } = require("@cucumber/cucumber")
import { ContactScenario} from "../../../../ui/actions/gw/cc/ContactScenario"
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";

const contactScenario = new ContactScenario()
const navigationScenario = new NavigationScenario()

When('the user update the contact details', async function () {
    await navigationScenario.goToClaim()
    await navigationScenario.navigateToContacts()
    await contactScenario.editContact()
});

Then('the contact details are updated successfully', async function () {
    await contactScenario.verifyContactDetails()
});