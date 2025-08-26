import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NoteEditPopup {
	noteEditPopupNoteEditPopup_UpLink = PcfButton('#NoteEditPopup-NoteEditPopup_UpLink');
	noteEditScreenCancel = PcfButton('#NoteEditPopup-NoteEditScreen-Cancel');
	noteEditScreenEdit = PcfButton('#NoteEditPopup-NoteEditScreen-Edit');
	noteEditPopupNoteEditScreenNewNoteDVAuthor = PcfTextInput('#NoteEditPopup-NoteEditScreen-NewNoteDV-Author');
	noteEditPopupNoteEditScreenNewNoteDVAuthoringDate = PcfDateValueInput('#NoteEditPopup-NoteEditScreen-NewNoteDV-AuthoringDate');
	noteEditPopupNoteEditScreenNewNoteDVConfidential = PcfSelectInput('#NoteEditPopup-NoteEditScreen-NewNoteDV-Confidential');
	noteEditPopupNoteEditScreenNewNoteDVLanguage = PcfSelectInput('#NoteEditPopup-NoteEditScreen-NewNoteDV-Language');
	noteEditPopupNoteEditScreenNewNoteDVRelatedTo = PcfSelectInput('#NoteEditPopup-NoteEditScreen-NewNoteDV-RelatedTo');
	noteEditPopupNoteEditScreenNewNoteDVSubject = PcfTextInput('#NoteEditPopup-NoteEditScreen-NewNoteDV-Subject');
	noteEditPopupNoteEditScreenNewNoteDVText = PcfTextInput('#NoteEditPopup-NoteEditScreen-NewNoteDV-Text');
	noteEditPopupNoteEditScreenNewNoteDVTopic = PcfSelectInput('#NoteEditPopup-NoteEditScreen-NewNoteDV-Topic');
	noteEditScreenUpdate = PcfButton('#NoteEditPopup-NoteEditScreen-Update');
	noteEditScreen_msgs = PcfButton('#NoteEditPopup-NoteEditScreen-_msgs');
	noteEditPopup_Paging = PcfButton('#NoteEditPopup-_Paging');
	noteEditPopup__crumb__ = PcfComponent('#NoteEditPopup-__crumb__');
}
