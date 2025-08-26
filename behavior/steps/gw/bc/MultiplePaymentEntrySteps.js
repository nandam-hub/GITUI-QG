const { When, Then } = require("@cucumber/cucumber");
import { t } from "testcafe";
import { NavigationScenario } from "../../../../ui/actions/gw/bc/NavigationScenario";
import { MultiplePaymentEntryScenario } from "../../../../ui/actions/gw/bc/MultiplePaymentEntryScenario";

const navigationScenario = new NavigationScenario();
const multiplePaymentEntryScenario = new MultiplePaymentEntryScenario();

When('the user  enter payment information in multipayment entry screen', async function () {
    await navigationScenario.navigateToDesktopScreen();
    await multiplePaymentEntryScenario.paymentInformationDetails();
})
Then('validates the amount value in payments screen', async function () {
    await multiplePaymentEntryScenario.validatePayment();
})