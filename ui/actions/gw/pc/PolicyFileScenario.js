import { PolicyMenuActions_Ext } from "./scenarioPages/navigation/menuActions/PolicyMenuActions_Ext";
import { SubmissionWizard_New } from "./scenarioPages/navigation/submissionWizard/SubmissionWizard_New";
import world from "../../../util/gw/world";
import { t } from "testcafe";

const policyMenuActions_Ext = new PolicyMenuActions_Ext()
const submissionWizard_New = new SubmissionWizard_New()
export class PolicyFileScenario {
    async navigateLocationScreen() {
        await policyMenuActions_Ext.policyFileMenuActions_GoCommercialProperty.click()
        await policyMenuActions_Ext.policyFileMenuActions_Location.click()
    }

    async verifyLocation() {
        await t.expect(policyMenuActions_Ext.policyFileMenuActions_AddressLink.component.textContent).eql(`${world.dataMap.get('LocationAdded')}`)
    }

    async validateCoverageOfCommercialPolicy() {
        await submissionWizard_New.submissionWizardLOBCommercial.click()
        await t.expect(await policyMenuActions_Ext.submissionValidateCoverageOfCommercialLine.component.textContent).eql(world.dataMap.get('UpdatedCoverage'))
    }
}