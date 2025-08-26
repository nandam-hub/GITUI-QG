import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AccountDetailNotes {
	noteSearchDVAuthor = PcfSelectInput('#AccountDetailNotes-AccountDetailNotesScreen-NoteSearchDV-Author');
	dateSearch2DateSearch2DirectChoice_Choice = PcfButton('#AccountDetailNotes-AccountDetailNotesScreen-NoteSearchDV-DateSearch2-DateSearch2DirectChoice_Choice');
	dateSearch2DateSearch2EndDate = PcfDateValueInput('#AccountDetailNotes-AccountDetailNotesScreen-NoteSearchDV-DateSearch2-DateSearch2EndDate');
	dateSearch2DateSearch2RangeChoice_Choice = PcfButton('#AccountDetailNotes-AccountDetailNotesScreen-NoteSearchDV-DateSearch2-DateSearch2RangeChoice_Choice');
	dateSearch2DateSearch2RangeValue = PcfSelectInput('#AccountDetailNotes-AccountDetailNotesScreen-NoteSearchDV-DateSearch2-DateSearch2RangeValue');
	dateSearch2DateSearch2StartDate = PcfDateValueInput('#AccountDetailNotes-AccountDetailNotesScreen-NoteSearchDV-DateSearch2-DateSearch2StartDate');
	noteSearchDVLanguage = PcfSelectInput('#AccountDetailNotes-AccountDetailNotesScreen-NoteSearchDV-Language');
	noteSearchDVRelatedToSearch = PcfSelectInput('#AccountDetailNotes-AccountDetailNotesScreen-NoteSearchDV-RelatedToSearch');
	accountDetailNotesAccountDetailNotesScreenNoteSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#AccountDetailNotes-AccountDetailNotesScreen-NoteSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	accountDetailNotesAccountDetailNotesScreenNoteSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#AccountDetailNotes-AccountDetailNotesScreen-NoteSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	noteSearchDVSortAscending = PcfComponent('#AccountDetailNotes-AccountDetailNotesScreen-NoteSearchDV-SortAscending');
	noteSearchDVSortByOption = PcfSelectInput('#AccountDetailNotes-AccountDetailNotesScreen-NoteSearchDV-SortByOption');
	noteSearchDVTextSearch = PcfTextInput('#AccountDetailNotes-AccountDetailNotesScreen-NoteSearchDV-TextSearch');
	accountDetailNotesScreenNotesLV = PcfListView('#AccountDetailNotes-AccountDetailNotesScreen-NotesLV');
	accountDetailNotesScreen_msgs = PcfButton('#AccountDetailNotes-AccountDetailNotesScreen-_msgs');
	accountDetailNotesAccountDetailNotes_UpLink = PcfButton('#AccountDetailNotes-AccountDetailNotes_UpLink');
	accountDetailNotes_Paging = PcfButton('#AccountDetailNotes-_Paging');
	accountDetailNotes__crumb__ = PcfComponent('#AccountDetailNotes-__crumb__');
}
