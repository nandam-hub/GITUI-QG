import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class MessagePayloadPopup {
	messagePayloadPopupMessagePayloadPopup_UpLink = PcfButton('#MessagePayloadPopup-MessagePayloadPopup_UpLink');
	messagePayloadScreenCancel = PcfButton('#MessagePayloadPopup-MessagePayloadScreen-Cancel');
	messagePayloadScreenEdit = PcfButton('#MessagePayloadPopup-MessagePayloadScreen-Edit');
	payLoadDVPayload = PcfTextInput('#MessagePayloadPopup-MessagePayloadScreen-PayLoadDV-Payload');
	payLoadDVResponse = PcfTextInput('#MessagePayloadPopup-MessagePayloadScreen-PayLoadDV-Response');
	messagePayloadScreenUpdate = PcfButton('#MessagePayloadPopup-MessagePayloadScreen-Update');
	messagePayloadScreen_msgs = PcfButton('#MessagePayloadPopup-MessagePayloadScreen-_msgs');
	messagePayloadPopup_Paging = PcfButton('#MessagePayloadPopup-_Paging');
	messagePayloadPopup__crumb__ = PcfComponent('#MessagePayloadPopup-__crumb__');
}
