import { AccountMenuActions } from "../../../../ui/pages/gw/generated/policysolutions/pages/navigation/menuActions/AccountMenuActions"
import { NewAccountNoteWorksheet_Ext } from "./scenarioPages/account/NewAccountNoteWorksheet_Ext"
import world from "../../../../ui/util/gw/world"
import { t } from "testcafe"

let accountMenuActions = new AccountMenuActions()
const newAccountNoteWorksheet_Ext = new NewAccountNoteWorksheet_Ext()

export class AddNoteScenario {

    async createNote() {
        await accountMenuActions.accountFileAccountFileMenuActions.click()
        await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewNote.click()
        await newAccountNoteWorksheet_Ext.newNoteDVTopic.selectOptionByLabel(world.dataMap.get("Topic"))
        await newAccountNoteWorksheet_Ext.newNoteDVSecurityLevel.selectOptionByLabel(world.dataMap.get("SecurityLevel"))
        await t.typeText(newAccountNoteWorksheet_Ext.textbox.component, world.dataMap.get("Text"))
        await newAccountNoteWorksheet_Ext.newNoteScreenNewNoteScreen_UpdateButton.click()
    }

    async validateNote() {
        await t.expect(await newAccountNoteWorksheet_Ext.noteAdded.component.textContent).eql('General')
    }
}



