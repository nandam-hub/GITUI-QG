import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class WorkQueueHistoryDownloadConfigurePopup {
	workQueueHistoryDownloadConfigurePopupEndDate = PcfDateValueInput('#WorkQueueHistoryDownloadConfigurePopup-EndDate');
	workQueueHistoryDownloadConfigurePopupStartDate = PcfDateValueInput('#WorkQueueHistoryDownloadConfigurePopup-StartDate');
	workQueueHistoryDownloadConfigurePopupWorkQueueHistoryDownloadConfigurePopup_UpLink = PcfButton('#WorkQueueHistoryDownloadConfigurePopup-WorkQueueHistoryDownloadConfigurePopup_UpLink');
	workQueueHistoryDownloadConfigurePopup_Paging = PcfButton('#WorkQueueHistoryDownloadConfigurePopup-_Paging');
	workQueueHistoryDownloadConfigurePopup__crumb__ = PcfComponent('#WorkQueueHistoryDownloadConfigurePopup-__crumb__');
	workQueueHistoryDownloadConfigurePopup_msgs = PcfButton('#WorkQueueHistoryDownloadConfigurePopup-_msgs');
	workQueueHistoryDownloadConfigurePopupdownload = PcfButton('#WorkQueueHistoryDownloadConfigurePopup-download');
}
