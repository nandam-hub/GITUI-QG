const { When, Then } = require("@cucumber/cucumber");
import { CancelPolicyScenario } from "../../../../ui/actions/gw/pc/CancelPolicyScenario"
import { NavigationScenario } from "../../../../ui/actions/gw/pc/NavigationScenario"
import { t } from "testcafe";
 
const cancelPolicyScenario = new CancelPolicyScenario();
const navigationScenario = new NavigationScenario();
 
When('the user performs cancel policy transaction', async function (t) {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await cancelPolicyScenario.cancelPolicy()
});
 
Then('the policy is canceled successfully', async function () {
    await cancelPolicyScenario.validateCancelStatus()
});