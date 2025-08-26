import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NoteDetailsPopup {
	noteDetailsPopupNoteDetailsPopup_UpLink = PcfButton('#NoteDetailsPopup-NoteDetailsPopup_UpLink');
	noteDetailsScreenCancel = PcfButton('#NoteDetailsPopup-NoteDetailsScreen-Cancel');
	noteDetailsScreenEdit = PcfButton('#NoteDetailsPopup-NoteDetailsScreen-Edit');
	noteDetailsPopupNoteDetailsScreenNewNoteDVAuthor = PcfTextInput('#NoteDetailsPopup-NoteDetailsScreen-NewNoteDV-Author');
	noteDetailsPopupNoteDetailsScreenNewNoteDVAuthoringDate = PcfDateValueInput('#NoteDetailsPopup-NoteDetailsScreen-NewNoteDV-AuthoringDate');
	noteDetailsPopupNoteDetailsScreenNewNoteDVConfidential = PcfSelectInput('#NoteDetailsPopup-NoteDetailsScreen-NewNoteDV-Confidential');
	noteDetailsPopupNoteDetailsScreenNewNoteDVLanguage = PcfSelectInput('#NoteDetailsPopup-NoteDetailsScreen-NewNoteDV-Language');
	noteDetailsPopupNoteDetailsScreenNewNoteDVRelatedTo = PcfSelectInput('#NoteDetailsPopup-NoteDetailsScreen-NewNoteDV-RelatedTo');
	noteDetailsPopupNoteDetailsScreenNewNoteDVSubject = PcfTextInput('#NoteDetailsPopup-NoteDetailsScreen-NewNoteDV-Subject');
	noteDetailsPopupNoteDetailsScreenNewNoteDVText = PcfTextInput('#NoteDetailsPopup-NoteDetailsScreen-NewNoteDV-Text');
	noteDetailsPopupNoteDetailsScreenNewNoteDVTopic = PcfSelectInput('#NoteDetailsPopup-NoteDetailsScreen-NewNoteDV-Topic');
	noteDetailsScreenUpdate = PcfButton('#NoteDetailsPopup-NoteDetailsScreen-Update');
	noteDetailsScreen_msgs = PcfButton('#NoteDetailsPopup-NoteDetailsScreen-_msgs');
	noteDetailsPopup_Paging = PcfButton('#NoteDetailsPopup-_Paging');
	noteDetailsPopup__crumb__ = PcfComponent('#NoteDetailsPopup-__crumb__');
}
