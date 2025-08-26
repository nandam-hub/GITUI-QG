import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class EnableWebServicePopup {
	enableWebServicePopupCancel = PcfButton('#EnableWebServicePopup-Cancel');
	enableWebServicePopupEdit = PcfButton('#EnableWebServicePopup-Edit');
	enableWebServicePopupEnableWebServicePopup_UpLink = PcfButton('#EnableWebServicePopup-EnableWebServicePopup_UpLink');
	enableWebServicePopupOperationName = PcfSelectInput('#EnableWebServicePopup-OperationName');
	enableWebServicePopupUpdate = PcfButton('#EnableWebServicePopup-Update');
	enableWebServicePopupWebServiceName = PcfSelectInput('#EnableWebServicePopup-WebServiceName');
	enableWebServicePopup_Paging = PcfButton('#EnableWebServicePopup-_Paging');
	enableWebServicePopup__crumb__ = PcfComponent('#EnableWebServicePopup-__crumb__');
	enableWebServicePopup_msgs = PcfButton('#EnableWebServicePopup-_msgs');
}
