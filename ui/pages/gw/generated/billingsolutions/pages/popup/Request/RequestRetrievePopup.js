import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class RequestRetrievePopup {
	requestRetrievePopupCancel = PcfButton('#RequestRetrievePopup-Cancel');
	requestRetrievePopupEdit = PcfButton('#RequestRetrievePopup-Edit');
	requestRetrievePopupReasonText = PcfTextInput('#RequestRetrievePopup-ReasonText');
	requestRetrievePopupRequestRetrievePopup_UpLink = PcfButton('#RequestRetrievePopup-RequestRetrievePopup_UpLink');
	requestRetrievePopupUpdate = PcfButton('#RequestRetrievePopup-Update');
	requestRetrievePopup_Paging = PcfButton('#RequestRetrievePopup-_Paging');
	requestRetrievePopup__crumb__ = PcfComponent('#RequestRetrievePopup-__crumb__');
	requestRetrievePopup_msgs = PcfButton('#RequestRetrievePopup-_msgs');
}
