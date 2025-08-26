import { RiskAnalysis_Ext } from './scenarioPages/policy/RiskAnalysis_Ext'
import { NewManualUWIssuePopup } from '../../../pages/gw/generated/policysolutions/pages/popup/New/NewManualUWIssuePopup'
import { clickTableRecord, convertToInt, returnDataFromTable } from "../../../util/gw/helper"
import { RiskApprovalDetailsPopup } from '../../../pages/gw/generated/policysolutions/pages/popup/Risk/RiskApprovalDetailsPopup'
import { t } from 'testcafe'
import world from "../../../../ui/util/gw/world"
import { NavigationScenario } from './NavigationScenario'

const riskAnalysis_Ext = new RiskAnalysis_Ext()
const newManualUWIssuePopup = new NewManualUWIssuePopup()
const riskApprovalDetailsPopup = new RiskApprovalDetailsPopup()
const navigationScenario = new NavigationScenario()

export class RiskAnalysisScenario {

    async addManualUW(issuesNum = "1") {
        let iterationNum = convertToInt(issuesNum.replace(/["]/g, ""))
        for (let i = 1; i <= iterationNum; i++) {
            await riskAnalysis_Ext.addUWIssue.click()
            await newManualUWIssuePopup.newUWIssueDelegateDVIssueType.selectOptionByLabel(world.dataMap.get(`IssueType${i}`))
            await newManualUWIssuePopup.newUWIssueDelegateDVShortDescription.setValue(world.dataMap.get(`IssueDescription${i}`))
            await newManualUWIssuePopup.newManualUWIssuePopupUpdate.click()
        }
    }

    async clickApproveOrRejectUWIssue() {
        await clickTableRecord(world.dataMap.get('ExpectedCellString'),
            world.dataMap.get('ReferenceCellString'))
    }

    async riskApprovalDetails() {
        await riskAnalysis_Ext.riskValidUntil.selectOptionByLabel(world.dataMap.get('ValidUntil'))
        await riskApprovalDetailsPopup.riskApprovalDetailsPopupUpdate.click()
    }

    async validateUWStatus() {
        await t.expect(await returnDataFromTable(1)).eql(world.dataMap.get('ReferenceCellString'))
    }
}