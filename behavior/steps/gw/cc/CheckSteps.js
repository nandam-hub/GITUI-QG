const { When, Then } = require("@cucumber/cucumber")
import { CheckScenario } from "../../../../ui/actions/gw/cc/CheckScenario";
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";
import { navigateAndClickSubmenu } from "../../../../ui/util/gw/helper";
import { t } from "testcafe";

const checkScenario = new CheckScenario()
const navigationScenario = new NavigationScenario()

When('the user creates the check', async function () {
    await navigationScenario.navigateToCheckFromActions()
    await checkScenario.createCheck()
});

When('the user creates the manual check', async function () {
   await navigationScenario.navigateToManualCheckFromActions() 
    console.log("Creating Manual Check")
    await checkScenario.createManualCheck()
});

When('the user runs automatic financial escalation batch job', async function () {
    await navigationScenario.navigateToBatchProcessInfoScreen()
    await checkScenario.financialsEscalation()
    await navigationScenario.returnToClaimCenter()
});

When('the user navigates to the claim', async function () {
    await navigationScenario.openClaim(t.ctx.claimNo);
    await navigationScenario.navigateToCheckFromFinancials()
    
});

When('the user void the check', async function () {
    await checkScenario.voidCheck()
});

When('the user stop the check', async function () {
    await checkScenario.stopCheck()
});

When('the user transfer the check', async function () {
    await checkScenario.transferCheck()
});

Then('the check details are updated successfully', async function () {
    await checkScenario.validateCheckDetails()
});

