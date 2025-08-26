import { ClaimWorkplan_Ext } from "../../../../ui/actions/gw/cc/scenarioPages/claim/ClaimWorkplan_Ext"
import { t } from "testcafe"
import { findTable, performClickInTable, validateTableRecord, clickTableRecord } from "../../../util/gw/helper"
import { ActivityDetailWorksheet_New } from './scenarioPages/other/ActivityDetailWorksheet_New'
import world from '../../../util/gw/world'

const claimWorkplan_Ext = new ClaimWorkplan_Ext()
const activityDetailWorksheet_New = new ActivityDetailWorksheet_New()
export class WorkPlanScenario {

    async workPlanActivity() {
        await claimWorkplan_Ext.workPlanFilter.selectOptionByLabel(world.dataMap.get('WorkPlanFilter'))
        await claimWorkplan_Ext.activitiesCheckbox.click()
        await claimWorkplan_Ext.claimWorkplanScreenClaimWorkplan_CompleteButton.click()
    }

    async workPlanUpdate(){
        await clickTableRecord('Make initial contact with insured', 6)
        await activityDetailWorksheet_New.activityDetailWorksheetEdit.click()
        await activityDetailWorksheet_New.activityDetailWorksheetPriority.selectOptionByLabel(world.dataMap.get('Priority'))
        await activityDetailWorksheet_New.activityDetailWorksheetCalenderImportance.selectOptionByLabel(world.dataMap.get('CalenderImportance'))
        await activityDetailWorksheet_New.activityDetailWorksheetUpdate.click()
    }


    async workPlanActivityStatusValidation() {
        await t.expect(await validateTableRecord("Status", "Complete", 5)).contains(world.dataMap.get('Status'))
    }

    async workPlanUpdateValidation() {
        await t.expect(await validateTableRecord("Priority", (world.dataMap.get('Priority')), 5)).contains(world.dataMap.get('Status'))
    }

    async closeAllWorkPlanActivities() {
        t.ctx.TableIdentifier = "Due"
        let foundTable = await findTable(t.ctx.TableIdentifier)
        const rowCount = await foundTable.find('tr').count
        for (let i = 1; i < rowCount; i++) {
            await performClickInTable(`[id*="${i - 1}-_Checkbox_checkboxDiv"]`, i)
        }
        await claimWorkplan_Ext.claimWorkplanScreenClaimWorkplan_CompleteButton.click()
    }
}
