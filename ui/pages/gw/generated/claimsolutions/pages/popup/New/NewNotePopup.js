import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewNotePopup {
	newNotePopupCancel = PcfButton('#NewNotePopup-Cancel');
	newNotePopupEdit = PcfButton('#NewNotePopup-Edit');
	newNotePopupNewNotePopup_UpLink = PcfButton('#NewNotePopup-NewNotePopup_UpLink');
	newNotePopupNoteDetailDVBody = PcfTextInput('#NewNotePopup-NoteDetailDV-Body');
	newNotePopupNoteDetailDVConfidential = PcfComponent('#NewNotePopup-NoteDetailDV-Confidential');
	newNotePopupNoteDetailDVNoteBody = PcfTextInput('#NewNotePopup-NoteDetailDV-NoteBody');
	newNotePopupNoteDetailDVRelatedTo = PcfSelectInput('#NewNotePopup-NoteDetailDV-RelatedTo');
	newNotePopupNoteDetailDVSecurityType = PcfSelectInput('#NewNotePopup-NoteDetailDV-SecurityType');
	newNotePopupNoteDetailDVSubject = PcfTextInput('#NewNotePopup-NoteDetailDV-Subject');
	newNotePopupNoteDetailDVTopic = PcfSelectInput('#NewNotePopup-NoteDetailDV-Topic');
	newNotePopupUpdate = PcfButton('#NewNotePopup-Update');
	newNotePopup_Paging = PcfButton('#NewNotePopup-_Paging');
	newNotePopup__crumb__ = PcfComponent('#NewNotePopup-__crumb__');
	newNotePopup_msgs = PcfButton('#NewNotePopup-_msgs');
}
