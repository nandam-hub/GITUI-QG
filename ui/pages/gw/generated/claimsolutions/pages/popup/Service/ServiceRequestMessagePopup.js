import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class ServiceRequestMessagePopup {
	serviceRequestMessagePopupCancel = PcfButton('#ServiceRequestMessagePopup-Cancel');
	serviceRequestMessagePopupEdit = PcfButton('#ServiceRequestMessagePopup-Edit');
	newMessageDVMessageContent = PcfTextInput('#ServiceRequestMessagePopup-NewMessageDV-MessageContent');
	newMessageDVMessageTitle = PcfTextInput('#ServiceRequestMessagePopup-NewMessageDV-MessageTitle');
	newMessageDVMessageType = PcfSelectInput('#ServiceRequestMessagePopup-NewMessageDV-MessageType');
	serviceRequestMessagePopupServiceRequestMessagePopup_UpLink = PcfButton('#ServiceRequestMessagePopup-ServiceRequestMessagePopup_UpLink');
	serviceRequestMessagePopupUpdate = PcfButton('#ServiceRequestMessagePopup-Update');
	serviceRequestMessagePopup_Paging = PcfButton('#ServiceRequestMessagePopup-_Paging');
	serviceRequestMessagePopup__crumb__ = PcfComponent('#ServiceRequestMessagePopup-__crumb__');
	serviceRequestMessagePopup_msgs = PcfButton('#ServiceRequestMessagePopup-_msgs');
}
