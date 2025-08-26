import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ClaimNotes {
	claimNotesClaimNotes_UpLink = PcfButton('#ClaimNotes-ClaimNotes_UpLink');
	notesSearchScreenClaimNotesLV = PcfListView('#ClaimNotes-NotesSearchScreen-ClaimNotesLV');
	noteSearchDVAuthor = PcfSelectInput('#ClaimNotes-NotesSearchScreen-NoteSearchDV-Author');
	dateSearch2DateSearch2DirectChoice_Choice = PcfButton('#ClaimNotes-NotesSearchScreen-NoteSearchDV-DateSearch2-DateSearch2DirectChoice_Choice');
	dateSearch2DateSearch2EndDate = PcfDateValueInput('#ClaimNotes-NotesSearchScreen-NoteSearchDV-DateSearch2-DateSearch2EndDate');
	dateSearch2DateSearch2RangeChoice_Choice = PcfButton('#ClaimNotes-NotesSearchScreen-NoteSearchDV-DateSearch2-DateSearch2RangeChoice_Choice');
	dateSearch2DateSearch2RangeValue = PcfSelectInput('#ClaimNotes-NotesSearchScreen-NoteSearchDV-DateSearch2-DateSearch2RangeValue');
	dateSearch2DateSearch2StartDate = PcfDateValueInput('#ClaimNotes-NotesSearchScreen-NoteSearchDV-DateSearch2-DateSearch2StartDate');
	noteSearchDVLanguage = PcfSelectInput('#ClaimNotes-NotesSearchScreen-NoteSearchDV-Language');
	noteSearchDVRelatedToSearch = PcfSelectInput('#ClaimNotes-NotesSearchScreen-NoteSearchDV-RelatedToSearch');
	claimNotesNotesSearchScreenNoteSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#ClaimNotes-NotesSearchScreen-NoteSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	claimNotesNotesSearchScreenNoteSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#ClaimNotes-NotesSearchScreen-NoteSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	noteSearchDVSortAscending = PcfComponent('#ClaimNotes-NotesSearchScreen-NoteSearchDV-SortAscending');
	noteSearchDVSortByOption = PcfSelectInput('#ClaimNotes-NotesSearchScreen-NoteSearchDV-SortByOption');
	noteSearchDVTextSearch = PcfTextInput('#ClaimNotes-NotesSearchScreen-NoteSearchDV-TextSearch');
	noteSearchDVTopic = PcfSelectInput('#ClaimNotes-NotesSearchScreen-NoteSearchDV-Topic');
	notesSearchScreenNotesSearchScreen_NewNote = PcfButton('#ClaimNotes-NotesSearchScreen-NotesSearchScreen_NewNote');
	notesSearchScreen_msgs = PcfButton('#ClaimNotes-NotesSearchScreen-_msgs');
	claimNotes_Paging = PcfButton('#ClaimNotes-_Paging');
	claimNotes__crumb__ = PcfComponent('#ClaimNotes-__crumb__');
}
