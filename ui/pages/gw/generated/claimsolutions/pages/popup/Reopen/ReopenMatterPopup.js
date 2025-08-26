import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class ReopenMatterPopup {
	reopenMatterPopupReopenMatterPopup_UpLink = PcfButton('#ReopenMatterPopup-ReopenMatterPopup_UpLink');
	reopenMatterScreenCancel = PcfButton('#ReopenMatterPopup-ReopenMatterScreen-Cancel');
	reopenMatterScreenEdit = PcfButton('#ReopenMatterPopup-ReopenMatterScreen-Edit');
	reopenMatterInfoDVNote = PcfTextInput('#ReopenMatterPopup-ReopenMatterScreen-ReopenMatterInfoDV-Note');
	reopenMatterInfoDVReason = PcfSelectInput('#ReopenMatterPopup-ReopenMatterScreen-ReopenMatterInfoDV-Reason');
	reopenMatterScreenUpdate = PcfButton('#ReopenMatterPopup-ReopenMatterScreen-Update');
	reopenMatterScreen_msgs = PcfButton('#ReopenMatterPopup-ReopenMatterScreen-_msgs');
	reopenMatterPopup_Paging = PcfButton('#ReopenMatterPopup-_Paging');
	reopenMatterPopup__crumb__ = PcfComponent('#ReopenMatterPopup-__crumb__');
}
