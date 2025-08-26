const { When, Then } = require("@cucumber/cucumber");
import { NavigationScenario } from "../../../../ui/actions/gw/bc/NavigationScenario"
import { PaymentInstrumentScenario } from "../../../../ui/actions/gw/bc/PaymentInstrumentScenario";
import { t } from 'testcafe'

const navigationScenario = new NavigationScenario();
const paymentInstrumentScenario = new PaymentInstrumentScenario()

When('the user adds new payment instrument', async function () {
    await navigationScenario.navigateToAccountScreenWithNewPolicy(t.ctx.AccountNumber)
    await paymentInstrumentScenario.paymentInstrument()
});

Then('the payment instrument is added successfully', async function () {
    await paymentInstrumentScenario.validatePaymentInstrument()
});
