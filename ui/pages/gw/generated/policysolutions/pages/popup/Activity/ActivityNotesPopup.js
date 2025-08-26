import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ActivityNotesPopup {
	activityNoNotesDVActivityNoNotesInput = PcfTextInput('#ActivityNotesPopup-ActivityNoNotesDV-ActivityNoNotesInput');
	activityNotesPopupActivityNotesPopup_UpLink = PcfButton('#ActivityNotesPopup-ActivityNotesPopup_UpLink');
	activityNotesPopupNotesLV = PcfListView('#ActivityNotesPopup-NotesLV');
	activityNotesPopup_Paging = PcfButton('#ActivityNotesPopup-_Paging');
	activityNotesPopup__crumb__ = PcfComponent('#ActivityNotesPopup-__crumb__');
	activityNotesPopup_msgs = PcfButton('#ActivityNotesPopup-_msgs');
}
