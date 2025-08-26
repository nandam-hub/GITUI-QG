import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class EnableWorkQueuePopup {
	enableWorkQueuePopupCancel = PcfButton('#EnableWorkQueuePopup-Cancel');
	enableWorkQueuePopupEdit = PcfButton('#EnableWorkQueuePopup-Edit');
	enableWorkQueuePopupEnableWorkQueuePopup_UpLink = PcfButton('#EnableWorkQueuePopup-EnableWorkQueuePopup_UpLink');
	enableWorkQueuePopupUpdate = PcfButton('#EnableWorkQueuePopup-Update');
	enableWorkQueuePopupWorkQueue = PcfSelectInput('#EnableWorkQueuePopup-WorkQueue');
	enableWorkQueuePopup_Paging = PcfButton('#EnableWorkQueuePopup-_Paging');
	enableWorkQueuePopup__crumb__ = PcfComponent('#EnableWorkQueuePopup-__crumb__');
	enableWorkQueuePopup_msgs = PcfButton('#EnableWorkQueuePopup-_msgs');
}
