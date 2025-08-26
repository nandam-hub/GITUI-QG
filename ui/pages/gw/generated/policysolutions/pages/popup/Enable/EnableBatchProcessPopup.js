import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class EnableBatchProcessPopup {
	enableBatchProcessPopupBatchProcess = PcfSelectInput('#EnableBatchProcessPopup-BatchProcess');
	enableBatchProcessPopupCancel = PcfButton('#EnableBatchProcessPopup-Cancel');
	enableBatchProcessPopupEdit = PcfButton('#EnableBatchProcessPopup-Edit');
	enableBatchProcessPopupEnableBatchProcessPopup_UpLink = PcfButton('#EnableBatchProcessPopup-EnableBatchProcessPopup_UpLink');
	enableBatchProcessPopupUpdate = PcfButton('#EnableBatchProcessPopup-Update');
	enableBatchProcessPopup_Paging = PcfButton('#EnableBatchProcessPopup-_Paging');
	enableBatchProcessPopup__crumb__ = PcfComponent('#EnableBatchProcessPopup-__crumb__');
	enableBatchProcessPopup_msgs = PcfButton('#EnableBatchProcessPopup-_msgs');
}
