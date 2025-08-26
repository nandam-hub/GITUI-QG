import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class InboundConfigPopup {
	inboundConfigPopupInboundConfigPopup_UpLink = PcfButton('#InboundConfigPopup-InboundConfigPopup_UpLink');
	inboundConfigScreenInboundLocalConfigsLV = PcfListView('#InboundConfigPopup-InboundConfigScreen-InboundLocalConfigsLV');
	inboundConfigScreenInboundLocalFileConfigCardTab = PcfButton('#InboundConfigPopup-InboundConfigScreen-InboundLocalFileConfigCardTab');
	inboundLocalFileConfigToolbarCancel = PcfButton('#InboundConfigPopup-InboundConfigScreen-InboundLocalFileConfigToolbar-Cancel');
	inboundLocalFileConfigToolbarEdit = PcfButton('#InboundConfigPopup-InboundConfigScreen-InboundLocalFileConfigToolbar-Edit');
	inboundLocalFileConfigToolbarLocalConfigsDeleteButton = PcfButton('#InboundConfigPopup-InboundConfigScreen-InboundLocalFileConfigToolbar-LocalConfigsDeleteButton');
	inboundLocalFileConfigToolbarLocalConfigsNewButton = PcfButton('#InboundConfigPopup-InboundConfigScreen-InboundLocalFileConfigToolbar-LocalConfigsNewButton');
	inboundLocalFileConfigToolbarUpdate = PcfButton('#InboundConfigPopup-InboundConfigScreen-InboundLocalFileConfigToolbar-Update');
	inboundConfigScreenInboundS3ConfigsLV = PcfListView('#InboundConfigPopup-InboundConfigScreen-InboundS3ConfigsLV');
	inboundConfigScreenInboundS3FileConfigCardTab = PcfButton('#InboundConfigPopup-InboundConfigScreen-InboundS3FileConfigCardTab');
	inboundS3FileConfigToolbarCancel = PcfButton('#InboundConfigPopup-InboundConfigScreen-InboundS3FileConfigToolbar-Cancel');
	inboundS3FileConfigToolbarEdit = PcfButton('#InboundConfigPopup-InboundConfigScreen-InboundS3FileConfigToolbar-Edit');
	inboundS3FileConfigToolbarS3ConfigsDeleteButton = PcfButton('#InboundConfigPopup-InboundConfigScreen-InboundS3FileConfigToolbar-S3ConfigsDeleteButton');
	inboundS3FileConfigToolbarS3ConfigsNewButton = PcfButton('#InboundConfigPopup-InboundConfigScreen-InboundS3FileConfigToolbar-S3ConfigsNewButton');
	inboundS3FileConfigToolbarUpdate = PcfButton('#InboundConfigPopup-InboundConfigScreen-InboundS3FileConfigToolbar-Update');
	inboundConfigScreen_msgs = PcfButton('#InboundConfigPopup-InboundConfigScreen-_msgs');
	inboundConfigPopup_Paging = PcfButton('#InboundConfigPopup-_Paging');
	inboundConfigPopup__crumb__ = PcfComponent('#InboundConfigPopup-__crumb__');
}
