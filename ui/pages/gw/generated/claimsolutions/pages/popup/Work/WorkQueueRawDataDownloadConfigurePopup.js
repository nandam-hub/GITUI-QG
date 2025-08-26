import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class WorkQueueRawDataDownloadConfigurePopup {
	workQueueRawDataDownloadConfigurePopupEndDate = PcfDateValueInput('#WorkQueueRawDataDownloadConfigurePopup-EndDate');
	workQueueRawDataDownloadConfigurePopupStartDate = PcfDateValueInput('#WorkQueueRawDataDownloadConfigurePopup-StartDate');
	workQueueRawDataDownloadConfigurePopupWorkQueueRawDataDownloadConfigurePopup_UpLink = PcfButton('#WorkQueueRawDataDownloadConfigurePopup-WorkQueueRawDataDownloadConfigurePopup_UpLink');
	workQueueRawDataDownloadConfigurePopup_Paging = PcfButton('#WorkQueueRawDataDownloadConfigurePopup-_Paging');
	workQueueRawDataDownloadConfigurePopup__crumb__ = PcfComponent('#WorkQueueRawDataDownloadConfigurePopup-__crumb__');
	workQueueRawDataDownloadConfigurePopup_msgs = PcfButton('#WorkQueueRawDataDownloadConfigurePopup-_msgs');
	workQueueRawDataDownloadConfigurePopupdownload = PcfButton('#WorkQueueRawDataDownloadConfigurePopup-download');
}
