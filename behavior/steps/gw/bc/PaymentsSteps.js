const { When } = require("@cucumber/cucumber");
import { NavigationScenario } from "../../../../ui/actions/gw/bc/NavigationScenario";
import { DisbursementScenario } from "../../../../ui/actions/gw/bc/DisbursementScenario";
import { PaymentsScenario } from "../../../../ui/actions/gw/bc/PaymentsScenario";

const navigationScenario = new NavigationScenario()
const disbursementScenario = new DisbursementScenario()
const paymentsScenario = new PaymentsScenario()

When('the user makes new payment', async function (t) {
    await navigationScenario.navigateToAccountScreenWithNewPolicy(t.ctx.AccountNumber)
    await navigationScenario.navigateToNewpaymet();
    await disbursementScenario.newPaymentDetails();
})

When('the user loads the payments screen', async function (t) {
    await navigationScenario.navigateToPaymentsScreen()
})

When('payment details are updated successfully', async function (t) {
    await paymentsScenario.validatePaymentDetails()
})

When('the user performs payment reversal', async function (t) {
    await paymentsScenario.paymentReversal()
})

When('payment reversal is processed successfully', async function (t) {
    await paymentsScenario.validatePaymentReversal()
})