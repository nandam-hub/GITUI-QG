const { When, Then } = require("@cucumber/cucumber");
import { RewritePolicyScenario } from "../../../../ui/actions/gw/pc/RewritePolicyScenario"

const rewritePolicyScenario = new RewritePolicyScenario();

Then('the user rewrites the canceled policy', async function () {
    await rewritePolicyScenario.rewritePolicy()
});

Then('the rewrite is successful', async function () {
    await rewritePolicyScenario.validateRewrite()
});