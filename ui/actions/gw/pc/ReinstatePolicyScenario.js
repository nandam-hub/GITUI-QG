import { ReinstatementWizard_New } from "./scenarioPages/policy/ReinstatementWizard_New"
import { Summary_Ext } from "../../../actions/gw/pc/scenarioPages/policy/Summary_Ext"
import { JobComplete_New } from "./scenarioPages/other/JobComplete_New"
import world from "../../../util/gw/world"
import { t } from "testcafe"
import { PolicyMenuLinks } from "../../../pages/gw/generated/policysolutions/pages/navigation/menuLinks/PolicyMenuLinks"
import { validateTableRecord } from "../../../util/gw/helper"

const reinstatementWizard_New = new ReinstatementWizard_New()
const jobComplete_New = new JobComplete_New()
const summary_Ext = new Summary_Ext()
const policyMenuLinks = new PolicyMenuLinks()

export class ReinstatePolicyScenario {

    async reinstatePolicy() {
        await reinstatementWizard_New.reinstate_reason.selectOptionByLabel(world.dataMap.get('Reason'))
        await reinstatementWizard_New.reinstateNextButton.click()
        await reinstatementWizard_New.reinstateQuoteButton.click()
        await reinstatementWizard_New.reinstatePolicy.click()
    }

    async validateReinstate() {
        await t.expect(await reinstatementWizard_New.reinstateComplete_Title.component.textContent).eql('Reinstatement Bound')
    }

    async validatingPolicyTransactionStatus() {
        await jobComplete_New.jobComplete_ViewPolicyHyperLink.click()
        await policyMenuLinks.menuLinksPolicyFile_PolicyFile_Jobs.click()
        await t.expect(await validateTableRecord("Type", "Reinstatement", 5)).eql(world.dataMap.get('CurrentStatus'))
    }
}