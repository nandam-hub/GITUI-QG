import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class CopyPolicyDataDetailPopup {
	copyPolicyDataDetailPopupCancel = PcfButton('#CopyPolicyDataDetailPopup-Cancel');
	copyNotesDVCopyNotesLV = PcfListView('#CopyPolicyDataDetailPopup-CopyNotesDV-CopyNotesLV');
	copyNotesDVNoNotes = PcfTextInput('#CopyPolicyDataDetailPopup-CopyNotesDV-NoNotes');
	copyNotesDVallNotes = PcfComponent('#CopyPolicyDataDetailPopup-CopyNotesDV-allNotes');
	copyPolicyDataDetailPopupCopyPolicyDataDetailPopup_UpLink = PcfButton('#CopyPolicyDataDetailPopup-CopyPolicyDataDetailPopup_UpLink');
	copyPolicyDataDetailPopupEdit = PcfButton('#CopyPolicyDataDetailPopup-Edit');
	copyPolicyDataDetailPopupEffectiveDate = PcfDateValueInput('#CopyPolicyDataDetailPopup-EffectiveDate');
	copyPolicyDataDetailPopupNotesTab = PcfButton('#CopyPolicyDataDetailPopup-NotesTab');
	copyPolicyDataDetailPopupUpdate = PcfButton('#CopyPolicyDataDetailPopup-Update');
	copyPolicyDataDetailPopup_Paging = PcfButton('#CopyPolicyDataDetailPopup-_Paging');
	copyPolicyDataDetailPopup__crumb__ = PcfComponent('#CopyPolicyDataDetailPopup-__crumb__');
	copyPolicyDataDetailPopup_msgs = PcfButton('#CopyPolicyDataDetailPopup-_msgs');
}
