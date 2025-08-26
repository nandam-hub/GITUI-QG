import { t } from "testcafe"
import { ActivityDetailWorksheet_New } from "../../../../ui/actions/gw/cc/scenarioPages/other/ActivityDetailWorksheet_New"
import { NewActivity } from "../../../../ui/pages/gw/generated/claimsolutions/pages/other/NewActivity";
import { ClaimMenuActions_Ext } from "./scenarioPages/navigation/menuActions/ClaimMenuActions_Ext";
import world from "../../../util/gw/world"

const activityDetailWorksheet_New = new ActivityDetailWorksheet_New()
const newActivity = new NewActivity()
const claimMenuActions_Ext = new ClaimMenuActions_Ext()

export class AddActivityScenario {

    async activityValidation() {
        await t.expect(activityDetailWorksheet_New.activityDetailWorksheetSubject.component.textContent).eql(world.dataMap.get('Subject'))
    }

    async addAutoPilotActionRequiredActivity() {
        await claimMenuActions_Ext.claimMenuActions.click();
        await claimMenuActions_Ext.activityAutoPilot.click();
        await claimMenuActions_Ext.activityAutoPilot.click();
        await claimMenuActions_Ext.autopilotActionRequired.click();
        await newActivity.newActivityDVActivity_Subject.setValue(world.dataMap.get('Subject'))
        await newActivity.newActivityScreenNewActivity_UpdateButton.click()
    }
}