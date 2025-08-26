const { When, Then } = require("@cucumber/cucumber")
import { t } from "testcafe";
import { PrintExportScenario } from "../../../../ui/actions/gw/cc/PrintExportScenario";
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";

const printExportScenario = new PrintExportScenario();
const navigationScenario = new NavigationScenario();

When('the user downloads adjuster from custom export', async function () {
    await navigationScenario.openClaim(t.ctx.ClaimNumber);
    await printExportScenario.downloadExposureDocument();
});

When('the user downloads property exposure pdf document', async function () {
    await printExportScenario.downloadExposureDocument();
});

When('the user navigates to exposure screen', async function () {
    await navigationScenario.openClaim(t.ctx.ClaimNumber);
    await navigationScenario.navigateToExposureScreen();
});