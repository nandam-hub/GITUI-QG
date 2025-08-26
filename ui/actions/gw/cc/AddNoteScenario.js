import { ClaimNotes } from "../../../pages/gw/generated/claimsolutions/pages/claim/ClaimNotes.js";
import { ClaimMenuLinks } from "../../../pages/gw/generated/claimsolutions/pages/navigation/menuLinks/ClaimMenuLinks.js";
import { NewNoteWorkSheet_Ext } from "./scenarioPages/notes/NewNoteWorkSheet_Ext.js";
import world from "../../../util/gw/world.js"
import { t } from "testcafe"

const claimNotes = new ClaimNotes();
const claimMenuNotes = new ClaimMenuLinks();
const newNoteWorkSheet_Ext = new NewNoteWorkSheet_Ext();

export class AddNoteScenario {
    async noteScenario() {
        await claimMenuNotes.menuLinksClaim_ClaimNotes.click();
        await claimNotes.notesSearchScreenNotesSearchScreen_NewNote.click();
        await newNoteWorkSheet_Ext.newNoteWorksheetNewNoteScreenNoteDetailDVTopic.selectOptionByLabel(world.dataMap.get('Topic'));
        await newNoteWorkSheet_Ext.newNoteWorksheetNewNoteScreenNoteDetailDVRelatedTo.selectOptionByLabel(world.dataMap.get('RelatedTO'));
        await t.typeText(newNoteWorkSheet_Ext.newNoteTextArea.component, world.dataMap.get('Text'));
        await newNoteWorkSheet_Ext.newNoteScreenUpdate.click()
    }

    async validateAddedNote() {
        await t.expect(newNoteWorkSheet_Ext.addedNoteText.component.textContent).eql(world.dataMap.get('Text'));
    }
}