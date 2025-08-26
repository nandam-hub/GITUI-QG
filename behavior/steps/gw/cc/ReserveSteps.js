const { When, Then } = require("@cucumber/cucumber")
import { ReserveScenario } from '../../../../ui/actions/gw/cc/ReserveScenario'
import { t } from "testcafe";
import { searchTableRecord, navigateAndClickSubmenu } from "../../../../ui/util/gw/helper";
import { SearchScenario } from "../../../../ui/actions/gw/cc/SearchScenario";
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";
import { FnolScenario } from "../../../../ui/actions/gw/cc/FnolScenario";
import { ContactScenario} from "../../../../ui/actions/gw/cc/ContactScenario"
import { ExposureScenario } from "../../../../ui/actions/gw/cc/ExposureScenario";

const reserveScenario = new ReserveScenario()
const searchScenario = new SearchScenario()
const navigationScenario = new NavigationScenario()
const fnolScenario = new FnolScenario()
const contactScenario = new ContactScenario()
const exposureScenario = new ExposureScenario()

When('the user creates recovery reserve', async function () {
    await searchScenario.claimSimpleSearch(t.ctx.claimNo)
    await searchTableRecord(3, t.ctx.claimNo)
    await navigationScenario.clickClaimMenuAction()
    await navigateAndClickSubmenu(['Other'], 'Recovery Reserve')
    await reserveScenario.addRecoveryReserve()
});

Then('the recovery reserve is created successfully', async function () {
    await reserveScenario.validateRecoveryReserve()
});

When('the user creates reserve', async function () {
    await searchScenario.claimSimpleSearch(t.ctx.claimNo)
    await searchTableRecord(3, t.ctx.claimNo)
    await navigationScenario.clickClaimMenuAction()
    await navigationScenario.navigateToReserve()
    await reserveScenario.createReserve()
});

When('the user adds contact and exposure with reserve to the claim', async function () {
    await navigationScenario.navigateToNewClaimWizard()
    await fnolScenario.searchOrCreatePolicy()
    await fnolScenario.newPerson()
    await fnolScenario.clickNext()
    await fnolScenario.addBasicInformation()
    await fnolScenario.clickNext()
    await fnolScenario.addPropertyClaimInformation()
    await fnolScenario.clickNext()
    await fnolScenario.clickNext()
    await fnolScenario.saveAndAssignClaim()
    await fnolScenario.readClaimNumber1()
    await navigationScenario.goToClaim()
    await navigationScenario.navigateToContacts()
    await contactScenario.editContact()
    await navigationScenario.clickClaimMenuAction()
    await navigateAndClickSubmenu(['Choose by Coverage Type'], 'Building Coverage')
    await exposureScenario.newExposureProperty()
    await exposureScenario.propertyIncident()
    await exposureScenario.clickOnUpdate()
    await searchScenario.claimSimpleSearch(t.ctx.claimNo1)
    await searchTableRecord(3, t.ctx.claimNo1)
    await navigationScenario.clickClaimMenuAction()
    await navigationScenario.navigateToReserve()
    await reserveScenario.createReserve()
});

Then('the reserve is created successfully', async function () {
    await reserveScenario.validateReserve()
});

When(/^the user creates (.*) reserve/, async function (t, stepArguments) {
    await searchScenario.claimSimpleSearch(t.ctx.claimNo)
    await searchTableRecord(3, t.ctx.claimNo)
    await navigationScenario.clickClaimMenuAction()
    await navigationScenario.navigateToReserve()
    await reserveScenario.createReserve(stepArguments[0])
});

Then(/^the (.*) reserves are created successfully/, async function (t, stepArguments) {
    await reserveScenario.validateReserve(stepArguments[0])
});

Then(/^the automatic reserve is created successfully/, async function () {
    await navigationScenario.clickClaimMenuAction()
    await navigationScenario.navigateToReserve()
    await reserveScenario.validateAutomaticeReserve()
});