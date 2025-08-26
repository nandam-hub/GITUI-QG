const { When, Then } = require("@cucumber/cucumber");
import { t } from "testcafe";
import { DisbursementScenario } from "../../../../ui/actions/gw/bc/DisbursementScenario.js";
import { NavigationScenario } from "../../../../ui/actions/gw/bc/NavigationScenario.js";

const disbursementScenario = new DisbursementScenario();
const navigationScenario = new NavigationScenario();

When('the user creates a disbursement', async function () {
    await navigationScenario.navigateToAccountScreenWithNewPolicy(t.ctx.AccountNumber)
    await navigationScenario.navigateToNewpaymet();
    await disbursementScenario.newPaymentDetails();
    await navigationScenario.navigateToDisbursement();
    await disbursementScenario.disbursementDetails();
})

Then('the disbursement created successfully', async function () {
    await disbursementScenario.validateDisbursement();
})

When('the user navigates to producer tab', async function () {
    await disbursementScenario.producerDetails();
})

Then('the commision statement is displayed', async function () {
    await disbursementScenario.displayedCommissionStatement();
})

When('the user runs automatic disbursement batch job', async function () {
    await navigationScenario.navigateToBatchProcessInfoScreen()
    await disbursementScenario.runAutomaticDisbursementBatchJob()
})

Then('the automatic disbursement batch job is processed successfully', async function () {
    await disbursementScenario.verifyAutomaticDisbursementBatchJob()
})

When('the user loads the disbursement screen', async function () {
    await disbursementScenario.returnToBillingCenter()
    await navigationScenario.navigateToAccountScreenWithNewPolicy(t.ctx.AccountNumber)
    await disbursementScenario.clickOnDisbursementMenu()
})

Then('automatic disbursement is created successfully', async function () {
    await disbursementScenario.validateAutomaticDisbursement()
})