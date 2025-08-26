const { When, Then } = require("@cucumber/cucumber")
import { CommissionsScenario } from "../../../../ui/actions/gw/bc/CommissionsScenario";
import { NavigationScenario } from "../../../../ui/actions/gw/bc/NavigationScenario";

const commissionsScenario = new CommissionsScenario()
const navigationScenario = new NavigationScenario()

When('the user loads the commissions screen', async function () {
    await navigationScenario.navigateToCommissionsScreen()
});

Then('commission rate is validated', async function () {
    await commissionsScenario.validateCommissionRate()
});