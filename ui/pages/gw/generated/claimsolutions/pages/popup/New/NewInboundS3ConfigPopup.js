import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewInboundS3ConfigPopup {
	newInboundS3ConfigPopupNewInboundS3ConfigPopup_UpLink = PcfButton('#NewInboundS3ConfigPopup-NewInboundS3ConfigPopup_UpLink');
	newInboundS3ConfigScreenCancel = PcfButton('#NewInboundS3ConfigPopup-NewInboundS3ConfigScreen-Cancel');
	newInboundS3ConfigPopupNewInboundS3ConfigScreenConfigDVConfigChunkSize = PcfTextInput('#NewInboundS3ConfigPopup-NewInboundS3ConfigScreen-ConfigDV-ConfigChunkSize');
	newInboundS3ConfigPopupNewInboundS3ConfigScreenConfigDVConfigName = PcfTextInput('#NewInboundS3ConfigPopup-NewInboundS3ConfigScreen-ConfigDV-ConfigName');
	newInboundS3ConfigPopupNewInboundS3ConfigScreenConfigDVDaysTilPurge = PcfTextInput('#NewInboundS3ConfigPopup-NewInboundS3ConfigScreen-ConfigDV-DaysTilPurge');
	newInboundS3ConfigPopupNewInboundS3ConfigScreenConfigDVHandlerClass = PcfTextInput('#NewInboundS3ConfigPopup-NewInboundS3ConfigScreen-ConfigDV-HandlerClass');
	newInboundS3ConfigScreenEdit = PcfButton('#NewInboundS3ConfigPopup-NewInboundS3ConfigScreen-Edit');
	newInboundS3ConfigScreenUpdate = PcfButton('#NewInboundS3ConfigPopup-NewInboundS3ConfigScreen-Update');
	newInboundS3ConfigScreen_msgs = PcfButton('#NewInboundS3ConfigPopup-NewInboundS3ConfigScreen-_msgs');
	newInboundS3ConfigPopup_Paging = PcfButton('#NewInboundS3ConfigPopup-_Paging');
	newInboundS3ConfigPopup__crumb__ = PcfComponent('#NewInboundS3ConfigPopup-__crumb__');
}
