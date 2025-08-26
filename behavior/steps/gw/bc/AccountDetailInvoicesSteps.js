const { When, Then } = require("@cucumber/cucumber")
import { t } from "testcafe";
import world from "../../../../ui/util/gw/world"
import { AccountDetailInvoicesScenario } from '../../../../ui/actions/gw/bc/AccountDetailInvoicesScenario'
import { searchTableRecord } from "../../../../ui/util/gw/helper";
import { NavigationScenario } from "../../../../ui/actions/gw/bc/NavigationScenario";

const accountDetailInvoicesScenario = new AccountDetailInvoicesScenario();
const navigationScenario = new NavigationScenario();

When('the user changes the invoice billed date', async () => {
    await searchTableRecord(5, world.dataMap.get('InvoiceStatus'))
    await accountDetailInvoicesScenario.setInvoiceDate(world.dataMap.get('InvoiceDate'));
});

When('the user resends invoice', async function() {
    await searchTableRecord(5, world.dataMap.get('InvoiceStatus'))
});

When('the user navigates to account from summary page', async function() {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await navigationScenario.accountLinkFromSummary()
});

Then('the invoice billed date is updated', async function() {
    await accountDetailInvoicesScenario.validateBilledDate(world.dataMap.get('InvoiceDate'));
});

Then('the invoice resent confirmation message is displayed', async function() {
    await accountDetailInvoicesScenario.validateInvoiceResentMessageDisplayed();
});

Then('the invoice details are validated as per the payplan successfully', async function() {
    await accountDetailInvoicesScenario.validateInvoices()
});
