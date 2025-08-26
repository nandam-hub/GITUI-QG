import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class Notes {
	policyFile_NotesPolicyFile_Notes_UpLink = PcfButton('#PolicyFile_Notes-PolicyFile_Notes_UpLink');
	policyFile_NotesPolicy_NotesScreenNoteSearchDVAuthorUserBrowseMenuItem = PcfComponent('#PolicyFile_Notes-Policy_NotesScreen-NoteSearchDV-Author-UserBrowseMenuItem');
	policyFile_NotesPolicy_NotesScreenNoteSearchDVDateFrom = PcfDateValueInput('#PolicyFile_Notes-Policy_NotesScreen-NoteSearchDV-DateFrom');
	policyFile_NotesPolicy_NotesScreenNoteSearchDVDateTo = PcfDateValueInput('#PolicyFile_Notes-Policy_NotesScreen-NoteSearchDV-DateTo');
	policyFile_NotesPolicy_NotesScreenNoteSearchDVLanguage = PcfSelectInput('#PolicyFile_Notes-Policy_NotesScreen-NoteSearchDV-Language');
	policyFile_NotesPolicy_NotesScreenNoteSearchDVRelatedTo = PcfSelectInput('#PolicyFile_Notes-Policy_NotesScreen-NoteSearchDV-RelatedTo');
	policyFile_NotesPolicy_NotesScreenNoteSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#PolicyFile_Notes-Policy_NotesScreen-NoteSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	policyFile_NotesPolicy_NotesScreenNoteSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#PolicyFile_Notes-Policy_NotesScreen-NoteSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	policyFile_NotesPolicy_NotesScreenNoteSearchDVSortBy = PcfSelectInput('#PolicyFile_Notes-Policy_NotesScreen-NoteSearchDV-SortBy');
	policyFile_NotesPolicy_NotesScreenNoteSearchDVTextSearch = PcfTextInput('#PolicyFile_Notes-Policy_NotesScreen-NoteSearchDV-TextSearch');
	policyFile_NotesPolicy_NotesScreenNoteSearchDVTopic = PcfSelectInput('#PolicyFile_Notes-Policy_NotesScreen-NoteSearchDV-Topic');
	policyFile_NotesPolicy_NotesScreenNoteSearchDVsortAscending = PcfComponent('#PolicyFile_Notes-Policy_NotesScreen-NoteSearchDV-sortAscending');
	policy_NotesScreenNotesLV = PcfListView('#PolicyFile_Notes-Policy_NotesScreen-NotesLV');
	policyFile_NotesPolicy_NotesScreenNotesLV_tbAdd = PcfButton('#PolicyFile_Notes-Policy_NotesScreen-NotesLV_tb-Add');
	policyFile_NotesPolicy_NotesScreenNotesLV_tbRemove = PcfButton('#PolicyFile_Notes-Policy_NotesScreen-NotesLV_tb-Remove');
	policy_NotesScreen_msgs = PcfButton('#PolicyFile_Notes-Policy_NotesScreen-_msgs');
	policyFile_Notes_Paging = PcfButton('#PolicyFile_Notes-_Paging');
	policyFile_Notes__crumb__ = PcfComponent('#PolicyFile_Notes-__crumb__');
}
