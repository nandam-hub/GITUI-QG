import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class WorkQueueInfoDownloadConfigurePopup {
	workQueueInfoDownloadConfigurePopupWorkQueueInfoDownloadConfigurePopup_UpLink = PcfButton('#WorkQueueInfoDownloadConfigurePopup-WorkQueueInfoDownloadConfigurePopup_UpLink');
	workQueueInfoDownloadConfigurePopup_Paging = PcfButton('#WorkQueueInfoDownloadConfigurePopup-_Paging');
	workQueueInfoDownloadConfigurePopup__crumb__ = PcfComponent('#WorkQueueInfoDownloadConfigurePopup-__crumb__');
	workQueueInfoDownloadConfigurePopup_msgs = PcfButton('#WorkQueueInfoDownloadConfigurePopup-_msgs');
	workQueueInfoDownloadConfigurePopupdownload = PcfButton('#WorkQueueInfoDownloadConfigurePopup-download');
	workQueueInfoDownloadConfigurePopupmaxBatches = PcfTextInput('#WorkQueueInfoDownloadConfigurePopup-maxBatches');
	workQueueInfoDownloadConfigurePopupmaxExecutors = PcfTextInput('#WorkQueueInfoDownloadConfigurePopup-maxExecutors');
	workQueueInfoDownloadConfigurePopupmaxHours = PcfTextInput('#WorkQueueInfoDownloadConfigurePopup-maxHours');
	workQueueInfoDownloadConfigurePopupmaxWriters = PcfTextInput('#WorkQueueInfoDownloadConfigurePopup-maxWriters');
}
