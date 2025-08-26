const { When, Then } = require("@cucumber/cucumber")
import { t } from "testcafe";
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";
import { SpecialInvestigationDetailsScenario } from "../../../../ui/actions/gw/cc/SpecialInvestigationDetailsScenario";

const navigationScenario = new NavigationScenario();
const specialInvestigationDetailsScenario = new SpecialInvestigationDetailsScenario();

When('the user updates special investigation details', async function () {
    await navigationScenario.openClaim(t.ctx.claimNo);
    await navigationScenario.navigateToLossDetails();
    await specialInvestigationDetailsScenario.updateSIDDetails();
});
Then('special investigation details is updated successfully in workplan', async function () {
    await navigationScenario.navigateClaimWorkplan();
    await specialInvestigationDetailsScenario.validateSID();
});