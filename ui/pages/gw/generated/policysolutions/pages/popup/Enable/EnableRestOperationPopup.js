import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class EnableRestOperationPopup {
	enableRestOperationPopupCancel = PcfButton('#EnableRestOperationPopup-Cancel');
	enableRestOperationPopupEdit = PcfButton('#EnableRestOperationPopup-Edit');
	enableRestOperationPopupEnableRestOperationPopup_UpLink = PcfButton('#EnableRestOperationPopup-EnableRestOperationPopup_UpLink');
	enableRestOperationPopupRestOperationName = PcfSelectInput('#EnableRestOperationPopup-RestOperationName');
	enableRestOperationPopupUpdate = PcfButton('#EnableRestOperationPopup-Update');
	enableRestOperationPopup_Paging = PcfButton('#EnableRestOperationPopup-_Paging');
	enableRestOperationPopup__crumb__ = PcfComponent('#EnableRestOperationPopup-__crumb__');
	enableRestOperationPopup_msgs = PcfButton('#EnableRestOperationPopup-_msgs');
}
