import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class ReopenExposurePopup {
	reopenExposurePopupReopenExposurePopup_UpLink = PcfButton('#ReopenExposurePopup-ReopenExposurePopup_UpLink');
	reopenExposureScreenCancel = PcfButton('#ReopenExposurePopup-ReopenExposureScreen-Cancel');
	reopenExposureScreenEdit = PcfButton('#ReopenExposurePopup-ReopenExposureScreen-Edit');
	reopenExposureInfoDVNote = PcfTextInput('#ReopenExposurePopup-ReopenExposureScreen-ReopenExposureInfoDV-Note');
	reopenExposureInfoDVReason = PcfSelectInput('#ReopenExposurePopup-ReopenExposureScreen-ReopenExposureInfoDV-Reason');
	reopenExposureScreenUpdate = PcfButton('#ReopenExposurePopup-ReopenExposureScreen-Update');
	reopenExposureScreen_msgs = PcfButton('#ReopenExposurePopup-ReopenExposureScreen-_msgs');
	reopenExposurePopup_Paging = PcfButton('#ReopenExposurePopup-_Paging');
	reopenExposurePopup__crumb__ = PcfComponent('#ReopenExposurePopup-__crumb__');
}
