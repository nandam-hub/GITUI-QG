const { When, Then } = require("@cucumber/cucumber")
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";
import { ExposureScenario } from "../../../../ui/actions/gw/cc/ExposureScenario";
import { navigateAndClickSubmenu } from "../../../../ui/util/gw/helper";
import { SearchScenario } from "../../../../ui/actions/gw/cc/SearchScenario";
import { t } from "testcafe";
import { searchTableRecord } from "../../../../ui/util/gw/helper";

const navigationScenario = new NavigationScenario()
const exposureScenario = new ExposureScenario()
const searchScenario = new SearchScenario()

When('the user creates BI Liability exposure', async function () {
    await searchScenario.claimSimpleSearch(t.ctx.claimNo)
    await searchTableRecord(3, t.ctx.claimNo)
    await navigationScenario.clickClaimMenuAction()
    await navigateAndClickSubmenu(['Choose by Coverage Type', 'U'], 'Uninsured Motorist - Bodily Injury')
    await exposureScenario.newExposure()
    await exposureScenario.injuryIncident()
    await exposureScenario.clickOnUpdate()
});

When('the user creates UMBI Liability exposure', async function () {
    await searchScenario.claimSimpleSearch(t.ctx.claimNo)
    await searchTableRecord(3, t.ctx.claimNo)
    await navigationScenario.clickClaimMenuAction()
    await navigateAndClickSubmenu(['Choose by Coverage Type', 'U'], 'Underinsured Motorist - Bodily Injury')
    await exposureScenario.newExposure()
    await exposureScenario.injuryIncident()
    await exposureScenario.clickOnUpdate()
});

When('the user creates medical payments exposure', async function () {
    await navigationScenario.clickClaimMenuAction()
    await navigateAndClickSubmenu(['Choose by Coverage Type', 'M'], 'Medical Payments')
    await exposureScenario.newExposure()
    await exposureScenario.injuryIncident()
    await exposureScenario.clickOnUpdate()
});

When('the user creates property exposure', async function () {
    await navigationScenario.openClaim(t.ctx.claimNo);
    await navigationScenario.clickClaimMenuAction()
    await navigateAndClickSubmenu(['Choose by Coverage Type'], 'Building Coverage')
    await exposureScenario.newExposureProperty()
    await exposureScenario.propertyIncident()
    await exposureScenario.clickOnUpdate()
});

When('the user creates liability vehicle damage exposure', async function () {
    await navigationScenario.clickClaimMenuAction()
    await navigateAndClickSubmenu(['Choose by Coverage Type', 'L'], 'Liability - Vehicle Damage')
    await exposureScenario.liabilityVehicleDamagaExposure()
    await exposureScenario.clickOnUpdate()
});

Then('the BI Liability exposure is created successfully', async function () {
    await exposureScenario.validateExposure("Bodily Injury") 
});

Then('the medical payment exposure is created successfully', async function () {
    await exposureScenario.validateExposure("Med Pay")
});

Then('the property exposure is created successfully', async function () {
    await exposureScenario.validateExposure("Property")
});

Then(/^the user selects and validates the BI liability and Medical Payment exposure's/, async function () {
    console.log("BI Liability, Medical Payment exposure's are selected")
    await exposureScenario.verifyExposureHeader()
    await exposureScenario.selectExposure()
});

When('the user closes the exposure', async function () {
    await exposureScenario.closeExposure()
});