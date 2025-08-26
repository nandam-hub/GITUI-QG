const { When } = require("@cucumber/cucumber")
import { NavigationScenario } from "../../../../ui/actions/gw/bc/NavigationScenario";
import { SearchScenario } from "../../../../ui/actions/gw/bc/SearchScenario";
import world from "../../../../ui/util/gw/world";
import { t } from "testcafe"

const navigationScenario = new NavigationScenario()
const searchScenario = new SearchScenario()

When('the user loads the existing policy number', async function () {
    await navigationScenario.navigateSearchPolicyScreen()
    await searchScenario.searchWithPolicy(world.dataMap.get('PolicyNumber'))
});

When('the user loads the policy with policy number', async function () {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
});