import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class PolicyDetailNotes {
	policyDetailNotesPolicyDetailNotesScreenNoteSearchDVAuthor = PcfSelectInput('#PolicyDetailNotes-PolicyDetailNotesScreen-NoteSearchDV-Author');
	policyDetailNotesPolicyDetailNotesScreenNoteSearchDVDateSearch2DateSearch2DirectChoice_Choice = PcfButton('#PolicyDetailNotes-PolicyDetailNotesScreen-NoteSearchDV-DateSearch2-DateSearch2DirectChoice_Choice');
	policyDetailNotesPolicyDetailNotesScreenNoteSearchDVDateSearch2DateSearch2EndDate = PcfDateValueInput('#PolicyDetailNotes-PolicyDetailNotesScreen-NoteSearchDV-DateSearch2-DateSearch2EndDate');
	policyDetailNotesPolicyDetailNotesScreenNoteSearchDVDateSearch2DateSearch2RangeChoice_Choice = PcfButton('#PolicyDetailNotes-PolicyDetailNotesScreen-NoteSearchDV-DateSearch2-DateSearch2RangeChoice_Choice');
	policyDetailNotesPolicyDetailNotesScreenNoteSearchDVDateSearch2DateSearch2RangeValue = PcfSelectInput('#PolicyDetailNotes-PolicyDetailNotesScreen-NoteSearchDV-DateSearch2-DateSearch2RangeValue');
	policyDetailNotesPolicyDetailNotesScreenNoteSearchDVDateSearch2DateSearch2StartDate = PcfDateValueInput('#PolicyDetailNotes-PolicyDetailNotesScreen-NoteSearchDV-DateSearch2-DateSearch2StartDate');
	noteSearchDVLanguageSearch = PcfSelectInput('#PolicyDetailNotes-PolicyDetailNotesScreen-NoteSearchDV-LanguageSearch');
	policyDetailNotesPolicyDetailNotesScreenNoteSearchDVRelatedToSearch = PcfSelectInput('#PolicyDetailNotes-PolicyDetailNotesScreen-NoteSearchDV-RelatedToSearch');
	policyDetailNotesPolicyDetailNotesScreenNoteSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#PolicyDetailNotes-PolicyDetailNotesScreen-NoteSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	policyDetailNotesPolicyDetailNotesScreenNoteSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#PolicyDetailNotes-PolicyDetailNotesScreen-NoteSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	policyDetailNotesPolicyDetailNotesScreenNoteSearchDVSortAscending = PcfComponent('#PolicyDetailNotes-PolicyDetailNotesScreen-NoteSearchDV-SortAscending');
	policyDetailNotesPolicyDetailNotesScreenNoteSearchDVSortByOption = PcfSelectInput('#PolicyDetailNotes-PolicyDetailNotesScreen-NoteSearchDV-SortByOption');
	policyDetailNotesPolicyDetailNotesScreenNoteSearchDVTextSearch = PcfTextInput('#PolicyDetailNotes-PolicyDetailNotesScreen-NoteSearchDV-TextSearch');
	noteSearchDVTopic = PcfSelectInput('#PolicyDetailNotes-PolicyDetailNotesScreen-NoteSearchDV-Topic');
	policyDetailNotesScreenNotesLV = PcfListView('#PolicyDetailNotes-PolicyDetailNotesScreen-NotesLV');
	policyDetailNotesScreen_msgs = PcfButton('#PolicyDetailNotes-PolicyDetailNotesScreen-_msgs');
	policyDetailNotesPolicyDetailNotes_UpLink = PcfButton('#PolicyDetailNotes-PolicyDetailNotes_UpLink');
	policyDetailNotes_Paging = PcfButton('#PolicyDetailNotes-_Paging');
	policyDetailNotes__crumb__ = PcfComponent('#PolicyDetailNotes-__crumb__');
}
