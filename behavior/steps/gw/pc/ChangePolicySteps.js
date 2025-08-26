const { When, Then } = require("@cucumber/cucumber");
import { ChangePolicyScenario } from "../../../../ui/actions/gw/pc/ChangePolicyScenario"
import { NavigationScenario } from "../../../../ui/actions/gw/pc/NavigationScenario"
import { t } from "testcafe";

const changePolicyScenario = new ChangePolicyScenario();
const navigationScenario = new NavigationScenario();

Then('the user perform address detail change transaction', async function () {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await navigationScenario.navigatePolicyChange()
    await changePolicyScenario.addressDetailchange()
    await changePolicyScenario.quoteChangePolicy()
    await changePolicyScenario.issueChangePolicy()
});

Then('the address detail is changed successfully', async function () {
    await changePolicyScenario.validatePolicyChangeStatus()
    await changePolicyScenario.validateAddressType()
});