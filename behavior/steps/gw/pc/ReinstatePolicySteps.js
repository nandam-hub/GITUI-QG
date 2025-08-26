const { Then } = require("@cucumber/cucumber");
import { ReinstatePolicyScenario } from "../../../../ui/actions/gw/pc/ReinstatePolicyScenario"
import { NavigationScenario } from "../../../../ui/actions/gw/pc/NavigationScenario";
import { t } from "testcafe";

const reinstatePolicyScenario = new ReinstatePolicyScenario();
const navigationScenario = new NavigationScenario()

Then('the user perform reinstate policy transaction', async function () {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await navigationScenario.initiateReinstate()
    await reinstatePolicyScenario.reinstatePolicy()
});

Then('the reinstate is successful', async function () {
    await reinstatePolicyScenario.validateReinstate()
});

Then('the user validates policy transaction status', async function () {
    await reinstatePolicyScenario.validatingPolicyTransactionStatus()
});