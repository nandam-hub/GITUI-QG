const { When, Then } = require("@cucumber/cucumber")
import { t } from "testcafe";
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";
import { EvaluationScenario } from "../../../../ui/actions/gw/cc/EvaluationScenario";

const navigationScenario = new NavigationScenario();
const evaluationScenario = new EvaluationScenario();

When('the user creates new total evaluation', async function () {
    await navigationScenario.openClaim(t.ctx.claimNo);
    await navigationScenario.clickClaimMenuAction();
    await navigationScenario.navigateToEvaluationScreen();
    await evaluationScenario.liabilityDistributionDetails();
    await evaluationScenario.evaluationEdit();
});

Then('evaluation is validated successfully', async function () {
    await evaluationScenario.evaluationValidation();
});