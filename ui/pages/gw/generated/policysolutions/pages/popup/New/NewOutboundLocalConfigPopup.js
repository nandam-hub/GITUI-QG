import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewOutboundLocalConfigPopup {
	newOutboundConfigScreenCancel = PcfButton('#NewOutboundLocalConfigPopup-NewOutboundConfigScreen-Cancel');
	newOutboundConfigScreenEdit = PcfButton('#NewOutboundLocalConfigPopup-NewOutboundConfigScreen-Edit');
	outboundConfigDVConfigExtension = PcfTextInput('#NewOutboundLocalConfigPopup-NewOutboundConfigScreen-OutboundConfigDV-ConfigExtension');
	outboundConfigDVConfigName = PcfTextInput('#NewOutboundLocalConfigPopup-NewOutboundConfigScreen-OutboundConfigDV-ConfigName');
	outboundConfigDVConfigPermanentDir = PcfTextInput('#NewOutboundLocalConfigPopup-NewOutboundConfigScreen-OutboundConfigDV-ConfigPermanentDir');
	outboundConfigDVConfigPrefix = PcfTextInput('#NewOutboundLocalConfigPopup-NewOutboundConfigScreen-OutboundConfigDV-ConfigPrefix');
	outboundConfigDVConfigTemporaryDir = PcfTextInput('#NewOutboundLocalConfigPopup-NewOutboundConfigScreen-OutboundConfigDV-ConfigTemporaryDir');
	outboundConfigDVDaysTilPurge = PcfTextInput('#NewOutboundLocalConfigPopup-NewOutboundConfigScreen-OutboundConfigDV-DaysTilPurge');
	outboundConfigDVHandlerClass = PcfTextInput('#NewOutboundLocalConfigPopup-NewOutboundConfigScreen-OutboundConfigDV-HandlerClass');
	newOutboundConfigScreenUpdate = PcfButton('#NewOutboundLocalConfigPopup-NewOutboundConfigScreen-Update');
	newOutboundConfigScreen_msgs = PcfButton('#NewOutboundLocalConfigPopup-NewOutboundConfigScreen-_msgs');
	newOutboundLocalConfigPopupNewOutboundLocalConfigPopup_UpLink = PcfButton('#NewOutboundLocalConfigPopup-NewOutboundLocalConfigPopup_UpLink');
	newOutboundLocalConfigPopup_Paging = PcfButton('#NewOutboundLocalConfigPopup-_Paging');
	newOutboundLocalConfigPopup__crumb__ = PcfComponent('#NewOutboundLocalConfigPopup-__crumb__');
}
