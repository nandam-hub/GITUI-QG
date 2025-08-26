import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class EditNotePopup {
	editNotePopupCancel = PcfButton('#EditNotePopup-Cancel');
	editNotePopupEdit = PcfButton('#EditNotePopup-Edit');
	editNotePopupEditNotePopup_UpLink = PcfButton('#EditNotePopup-EditNotePopup_UpLink');
	noteDetailDVBody = PcfTextInput('#EditNotePopup-NoteDetailDV-Body');
	noteDetailDVConfidential = PcfComponent('#EditNotePopup-NoteDetailDV-Confidential');
	noteDetailDVNoteBody = PcfTextInput('#EditNotePopup-NoteDetailDV-NoteBody');
	noteDetailDVRelatedTo = PcfSelectInput('#EditNotePopup-NoteDetailDV-RelatedTo');
	noteDetailDVSecurityType = PcfSelectInput('#EditNotePopup-NoteDetailDV-SecurityType');
	noteDetailDVSubject = PcfTextInput('#EditNotePopup-NoteDetailDV-Subject');
	noteDetailDVTopic = PcfSelectInput('#EditNotePopup-NoteDetailDV-Topic');
	editNotePopupUpdate = PcfButton('#EditNotePopup-Update');
	editNotePopup_Paging = PcfButton('#EditNotePopup-_Paging');
	editNotePopup__crumb__ = PcfComponent('#EditNotePopup-__crumb__');
	editNotePopup_msgs = PcfButton('#EditNotePopup-_msgs');
}
