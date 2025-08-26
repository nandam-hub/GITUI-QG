import { PcfComponent } from '@gtui/gt-ui-framework';
import { NewAccountNoteWorksheet } from '../../../../../pages/gw/generated/policysolutions/pages/other/NewAccountNoteWorksheet';

export class NewAccountNoteWorksheet_Ext extends NewAccountNoteWorksheet {
    textbox = PcfComponent("#NewAccountNoteWorksheet-NewNoteScreen-NewNoteDV-Text > div > textarea")
    noteAdded = PcfComponent("#AccountFile_Summary-AccountSummaryDashboard-NotesDetailViewTile-NotesDetailViewTile_DV-NoteTopicLabel0_button")
}
