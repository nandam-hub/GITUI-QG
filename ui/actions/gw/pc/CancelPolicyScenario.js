import { CancellationWizard_New } from "./scenarioPages/policy/CancellationWizard_New.js"
import { JobComplete_New } from "./scenarioPages/other/JobComplete_New.js"
import { Summary } from "../../../pages/gw/generated/policysolutions/pages/policy/Summary.js"
import { Summary_Ext } from "./scenarioPages/policy/Summary_Ext.js"
import world from "../../../util/gw/world.js"
import { t } from "testcafe"
 
const cancellationWizard_New = new CancellationWizard_New()
const jobComplete_New = new JobComplete_New()
const summary = new Summary()
const summary_Ext = new Summary_Ext()

 
export class CancelPolicyScenario {
 
    async cancelPolicy() {
        await summary_Ext.newTransactionTab.click()
        await summary.policyDetailsDetailViewTileCancelPolicy.click()
        await cancellationWizard_New.cancelPolicySource.selectOptionByLabel(world.dataMap.get('Source'))
        await cancellationWizard_New.cancelPolicyReason.selectOptionByLabel(world.dataMap.get('Reason'))
        await cancellationWizard_New.cancelPolicyStartCancellation.click()
        await cancellationWizard_New.cancelPolicyBindOption.click()
        await cancellationWizard_New.cancelPolicyBindOptionCancelNow.click()
 
    }
 
    async validateCancelStatus() {
        await t.expect(await jobComplete_New.jobComplete_Title.component.textContent).eql('Cancellation Bound')
    }
}