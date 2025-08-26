const { When, Then } = require("@cucumber/cucumber")
import { WorkPlanScenario } from "../../../../ui/actions/gw/cc/WorkPlanScenario"
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";

const workPlanScenario = new WorkPlanScenario()
const navigationScenario = new NavigationScenario()

When('the user completes the activity work plan', async function () {
    await navigationScenario.navigateClaimWorkplan()
    await workPlanScenario.workPlanActivity()
});

When('the user update the work plan', async function () {
    await navigationScenario.navigateClaimWorkplan()
    await workPlanScenario.workPlanUpdate()
});

Then('the activity work plan status is completed', async function () {
    await workPlanScenario.workPlanActivityStatusValidation()
});

Then('the work plan update is completed', async function () {
    await workPlanScenario.workPlanUpdateValidation()
});

When('the user completes all workplan activities', async function () { 
    await navigationScenario.navigateClaimWorkplan()
    await workPlanScenario.closeAllWorkPlanActivities()
});