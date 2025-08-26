const { When, Then } = require("@cucumber/cucumber");
import { SearchScenario } from "../../../../ui/actions/gw/cc/SearchScenario"
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";
import { ClaimSummaryScenario } from "../../../../ui/actions/gw/cc/ClaimSummaryScenario";
import { searchTableRecord } from "../../../../ui/util/gw/helper";
import world from "../../../../ui/util/gw/world"
import { t } from "testcafe"

const searchScenario = new SearchScenario();
const navigationScenario = new NavigationScenario()
const claimSummaryScenario = new ClaimSummaryScenario()

When('the user searches for the policy in Search Claims', async function () {
    await navigationScenario.navigateSearchPolicyScreen()
    await searchScenario.searchWithPolicy(world.dataMap.get('PolicyNumber'))
});

Then('the claim details are loaded successfully', async function (t) {
    await searchTableRecord("Claim", world.dataMap.get('ClaimNo'))
    await claimSummaryScenario.verifySummaryHeader()
});

Then('the newly created claim details are loaded successfully', async function (t) {
    await searchTableRecord("Claim", t.ctx.claimNo)
    await claimSummaryScenario.verifySummaryHeader()
});

When('the user searches the contact', async function () {
    await searchScenario.searchContact()
});

When('the user creates the recovery', async function () {
    await searchScenario.recoveryCreation();
});

When('the user searches for the recovery details with claim number', async function (t) {
    await searchScenario.searchRecovery(t.ctx.claimNo);
});

When('the recovery details are loaded', async function () {
    await searchScenario.validateRecovery()
});

Then('the search contact details are loaded', async function () {
    await searchScenario.searchValidation();
});

Then('the user search the check', async function () {
    await searchScenario.searchCheck();
});

Then('the check details are loaded', async function () {
    await searchScenario.validateCheckDetailsHeader();
});

When('the user searches the claim on advance search page', async function (t) {
    await navigationScenario.navigateToAdvanceSearch();
    await searchScenario.advanceSearchClaimWithName();
});