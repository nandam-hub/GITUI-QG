import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class Notes {
	accountFile_NotesAccountFileInfoBarAccount = PcfButton('#AccountFile_Notes-AccountFileInfoBar-Account');
	accountFile_NotesAccountFileInfoBarAccountLabel = PcfButton('#AccountFile_Notes-AccountFileInfoBar-AccountLabel');
	accountFile_NotesAccountFileInfoBarAccountName = PcfButton('#AccountFile_Notes-AccountFileInfoBar-AccountName');
	accountFile_NotesAccountFile_Notes_UpLink = PcfButton('#AccountFile_Notes-AccountFile_Notes_UpLink');
	authorUserBrowseMenuItem = PcfComponent('#AccountFile_Notes-NotesScreen-NoteSearchDV-Author-UserBrowseMenuItem');
	noteSearchDVDateFrom = PcfDateValueInput('#AccountFile_Notes-NotesScreen-NoteSearchDV-DateFrom');
	noteSearchDVDateTo = PcfDateValueInput('#AccountFile_Notes-NotesScreen-NoteSearchDV-DateTo');
	noteSearchDVLanguage = PcfSelectInput('#AccountFile_Notes-NotesScreen-NoteSearchDV-Language');
	noteSearchDVRelatedTo = PcfSelectInput('#AccountFile_Notes-NotesScreen-NoteSearchDV-RelatedTo');
	accountFile_NotesNotesScreenNoteSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#AccountFile_Notes-NotesScreen-NoteSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	accountFile_NotesNotesScreenNoteSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#AccountFile_Notes-NotesScreen-NoteSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	noteSearchDVSortBy = PcfSelectInput('#AccountFile_Notes-NotesScreen-NoteSearchDV-SortBy');
	noteSearchDVTextSearch = PcfTextInput('#AccountFile_Notes-NotesScreen-NoteSearchDV-TextSearch');
	noteSearchDVTopic = PcfSelectInput('#AccountFile_Notes-NotesScreen-NoteSearchDV-Topic');
	noteSearchDVsortAscending = PcfComponent('#AccountFile_Notes-NotesScreen-NoteSearchDV-sortAscending');
	notesScreenNotesLV = PcfListView('#AccountFile_Notes-NotesScreen-NotesLV');
	notesLV_tbAdd = PcfButton('#AccountFile_Notes-NotesScreen-NotesLV_tb-Add');
	notesLV_tbRemove = PcfButton('#AccountFile_Notes-NotesScreen-NotesLV_tb-Remove');
	notesScreen_msgs = PcfButton('#AccountFile_Notes-NotesScreen-_msgs');
	accountFile_Notes_Paging = PcfButton('#AccountFile_Notes-_Paging');
	accountFile_Notes__crumb__ = PcfComponent('#AccountFile_Notes-__crumb__');
}
