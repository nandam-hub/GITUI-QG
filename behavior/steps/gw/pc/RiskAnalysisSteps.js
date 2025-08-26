const { When, Then } = require("@cucumber/cucumber");
import { t } from 'testcafe';
import { NavigationScenario } from '../../../../ui/actions/gw/pc/NavigationScenario';
import { RiskAnalysisScenario} from '../../../../ui/actions/gw/pc/RiskAnalysisScenario'

const riskAnalysisScenario = new RiskAnalysisScenario()
const navigationScenario = new NavigationScenario()

When(/^the user manually adds (.*) UW/, async function (t, stepArguments) {
    await riskAnalysisScenario.addManualUW(stepArguments[0])
});

When('the user approves the UW issues', async function () {
await riskAnalysisScenario.clickApproveOrRejectUWIssue()
await riskAnalysisScenario.riskApprovalDetails()
});

Then('UW issue is in approved status', async function() {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await navigationScenario.navigateToPolicyFileRiskAnalysis()
    await navigationScenario.navigateRiskAnalysisTab("UWIssues")
    await riskAnalysisScenario.validateUWStatus()
})