const { When, Then } = require("@cucumber/cucumber");
import { NavigationScenario } from "../../../../ui/actions/gw/bc/NavigationScenario"
import { OverrideDistributionScenario } from "../../../../ui/actions/gw/bc/OverrideDistributionScenario"
import { t } from "testcafe";

const navigationScenario = new NavigationScenario();
const overrideDistributionScenario = new OverrideDistributionScenario()

When('the user search with the account number', async function () {
    await navigationScenario.navigateToAccountScreenWithNewPolicy(t.ctx.AccountNumber)
});

When('the user makes payment in new direct bill payment from action tab', async function () {
    await navigationScenario.navigateToNewpaymet()
    await overrideDistributionScenario.overrideDistribution()
});

Then('the override distribution is applied successfully', async function () {
    await overrideDistributionScenario.validateOverrideDistribution()
});