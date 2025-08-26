import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class ApproveQuotePopup {
	approveQuotePopupApproveQuotePopup_UpLink = PcfButton('#ApproveQuotePopup-ApproveQuotePopup_UpLink');
	approveQuotePopupCancel = PcfButton('#ApproveQuotePopup-Cancel');
	approveQuotePopupEdit = PcfButton('#ApproveQuotePopup-Edit');
	approveQuotePopupRequestedServiceCompletionDate = PcfDateValueInput('#ApproveQuotePopup-RequestedServiceCompletionDate');
	approveQuotePopupUpdate = PcfButton('#ApproveQuotePopup-Update');
	approveQuotePopup_Paging = PcfButton('#ApproveQuotePopup-_Paging');
	approveQuotePopup__crumb__ = PcfComponent('#ApproveQuotePopup-__crumb__');
	approveQuotePopup_msgs = PcfButton('#ApproveQuotePopup-_msgs');
}
