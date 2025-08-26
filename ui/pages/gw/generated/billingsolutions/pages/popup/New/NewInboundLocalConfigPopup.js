import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewInboundLocalConfigPopup {
	newInboundLocalConfigPopupNewInboundLocalConfigPopup_UpLink = PcfButton('#NewInboundLocalConfigPopup-NewInboundLocalConfigPopup_UpLink');
	newInboundLocalConfigScreenCancel = PcfButton('#NewInboundLocalConfigPopup-NewInboundLocalConfigScreen-Cancel');
	configDVConfigArchiveDir = PcfTextInput('#NewInboundLocalConfigPopup-NewInboundLocalConfigScreen-ConfigDV-ConfigArchiveDir');
	configDVConfigChunkSize = PcfTextInput('#NewInboundLocalConfigPopup-NewInboundLocalConfigScreen-ConfigDV-ConfigChunkSize');
	configDVConfigInputDir = PcfTextInput('#NewInboundLocalConfigPopup-NewInboundLocalConfigScreen-ConfigDV-ConfigInputDir');
	configDVConfigName = PcfTextInput('#NewInboundLocalConfigPopup-NewInboundLocalConfigScreen-ConfigDV-ConfigName');
	configDVDaysTilPurge = PcfTextInput('#NewInboundLocalConfigPopup-NewInboundLocalConfigScreen-ConfigDV-DaysTilPurge');
	configDVHandlerClass = PcfTextInput('#NewInboundLocalConfigPopup-NewInboundLocalConfigScreen-ConfigDV-HandlerClass');
	newInboundLocalConfigScreenEdit = PcfButton('#NewInboundLocalConfigPopup-NewInboundLocalConfigScreen-Edit');
	newInboundLocalConfigScreenUpdate = PcfButton('#NewInboundLocalConfigPopup-NewInboundLocalConfigScreen-Update');
	newInboundLocalConfigScreen_msgs = PcfButton('#NewInboundLocalConfigPopup-NewInboundLocalConfigScreen-_msgs');
	newInboundLocalConfigPopup_Paging = PcfButton('#NewInboundLocalConfigPopup-_Paging');
	newInboundLocalConfigPopup__crumb__ = PcfComponent('#NewInboundLocalConfigPopup-__crumb__');
}
