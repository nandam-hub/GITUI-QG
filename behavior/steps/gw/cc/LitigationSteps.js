const { When, Then } = require("@cucumber/cucumber")
import { t } from "testcafe";
import { LitigationScenario } from "../../../../ui/actions/gw/cc/LitigationScenario"
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario"

const navigationScenario = new NavigationScenario()
const litigationScenario = new LitigationScenario()

When('the user adds new litigation', async function () {
    await navigationScenario.openClaim(t.ctx.claimNo);
    await navigationScenario.navigateToLitigation()
    await litigationScenario.addNewLitigation()
});

Then('the litigation is added successfully', async function () {
    await navigationScenario.navigateToLitigation()
    await litigationScenario.litigationValidation()
});

When('the user closes the litigation matter', async function () {
    await navigationScenario.navigateToLitigation()
    await litigationScenario.closeLitigation()
});