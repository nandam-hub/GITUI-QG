import { AddActivityPage_New } from "../../../../ui/actions/gw/pc/scenarioPages/account/AddActivityPage_New";
import { AccountMenuActions } from "../../../../ui/pages/gw/generated/policysolutions/pages/navigation/menuActions/AccountMenuActions"
import { Summary_Ext} from "../../../actions/gw/pc/scenarioPages/account/Summary_Ext"
import { t } from "testcafe"
import world from "../../../util/gw/world"
import { NewActivityWorksheet } from "../../../../ui/pages/gw/generated/policysolutions/pages/other/NewActivityWorksheet"
import { NavigationScenario } from "./NavigationScenario";

const addActivityPage_New = new AddActivityPage_New()
const accountMenuActions = new AccountMenuActions()
const summary_Ext = new Summary_Ext()
const newActivityWorksheet = new NewActivityWorksheet()
const navigationScenario = new NavigationScenario()

export class AddActivityScenario {

    async addActivity() {
        await accountMenuActions.accountFileAccountFileMenuActions.click();
        await navigationScenario.navigateToNewActivity()
        await addActivityPage_New.securityLevel.selectOptionByLabel(world.dataMap.get('SecurityLevel'));
        await newActivityWorksheet.newActivityWorksheetNewActivityScreenNewActivityDVPriority.selectOptionByLabel(world.dataMap.get('Priority'))
        await addActivityPage_New.okButton.click();
    }

    async activityValidation() {
        await t.expect(summary_Ext.activitiesAdded.component.textContent).eql(world.dataMap.get('ActivityAdded'))
    }
}