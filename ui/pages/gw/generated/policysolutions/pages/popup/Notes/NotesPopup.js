import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NotesPopup {
	notesPopupNotesLV = PcfListView('#NotesPopup-NotesLV');
	notesPopupNotesPopup_UpLink = PcfButton('#NotesPopup-NotesPopup_UpLink');
	notesPopup_Paging = PcfButton('#NotesPopup-_Paging');
	notesPopup__crumb__ = PcfComponent('#NotesPopup-__crumb__');
	notesPopup_msgs = PcfButton('#NotesPopup-_msgs');
}
