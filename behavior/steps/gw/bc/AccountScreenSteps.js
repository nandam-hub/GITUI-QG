const { When, Then } = require("@cucumber/cucumber");
 
import { AccountScreenScenario } from "../../../../ui/actions/gw/bc/AccountScreenScenario";
import { NavigationScenario } from "../../../../ui/actions/gw/bc/NavigationScenario"

const navigationScenario = new NavigationScenario();
const accountScreenScenario = new AccountScreenScenario()

When('the user navigate to account screen from account tab', async function () {
    await navigationScenario.navigateToAccountScreen();
});

Then('the account summary screen loaded successfully', async function () {
    await accountScreenScenario.validateAccountScreen()
});