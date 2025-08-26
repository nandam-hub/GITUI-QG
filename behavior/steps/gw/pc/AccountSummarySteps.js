const { Given, When, Then } = require("@cucumber/cucumber")
import { AccountSummaryScenario } from "../../../../ui/actions/gw/pc/AccountSummaryScenario";
import { NavigationScenario } from "../../../../ui/actions/gw/pc/NavigationScenario";

const accountSummaryScenario = new AccountSummaryScenario()
const navigationScenario = new NavigationScenario()

When('the view account summary details are loaded', async function () {
    await accountSummaryScenario.viewAccountSummary();
})

When('the user search with an account number', async function (t) {
    await navigationScenario.openAccount(t.ctx.AccountNumber)
})