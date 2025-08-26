import { AccountScenario } from '../../../../ui/actions/gw/pc/AccountScenario'
import { NavigationScenario } from "../../../../ui/actions/gw/pc/NavigationScenario";
const { When } = require("@cucumber/cucumber")

const accountScenario = new AccountScenario();
const navigationScenario = new NavigationScenario();

When('the user creates personal account', async function () {
    await navigationScenario.navigateNewAccountScreen()
    await accountScenario.createPersonalAccount()
    await accountScenario.organizationSearchPopup()
    await accountScenario.createAccountNumber()
});

When('the user creates commercial account', async function () {
    await navigationScenario.navigateNewAccountScreen()
    await accountScenario.createCommercialAccount()
    await accountScenario.organizationSearchPopup()
    await accountScenario.createAccountNumber()
})