import { PcfComponent } from '@gtui/gt-ui-framework';
import { NewNoteWorksheet } from '../../../../../pages/gw/generated/claimsolutions/pages/other/NewNoteWorksheet';
 
export class NewNoteWorkSheet_Ext extends NewNoteWorksheet {
    newNoteWorksheetNewNoteScreenNoteDetailDVBody = PcfComponent('#NewNoteWorksheet-NewNoteScreen-NoteDetailDV-Body')
    addedNoteText = PcfComponent('#ClaimSummary-ClaimSummaryScreen-NotesLV-0-Body > div > div')
    newNoteTextArea= PcfComponent('#NewNoteWorksheet-NewNoteScreen-NoteDetailDV-Body > div > textarea')
}