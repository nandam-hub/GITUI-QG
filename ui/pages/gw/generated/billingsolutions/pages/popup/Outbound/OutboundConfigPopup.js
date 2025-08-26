import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class OutboundConfigPopup {
	outboundConfigPopupOutboundConfigPopup_UpLink = PcfButton('#OutboundConfigPopup-OutboundConfigPopup_UpLink');
	outboundConfigScreenConfigsLocalCardTab = PcfButton('#OutboundConfigPopup-OutboundConfigScreen-ConfigsLocalCardTab');
	outboundConfigScreenConfigsS3CardTab = PcfButton('#OutboundConfigPopup-OutboundConfigScreen-ConfigsS3CardTab');
	localToolbarCancel = PcfButton('#OutboundConfigPopup-OutboundConfigScreen-LocalToolbar-Cancel');
	localToolbarConfigsDeleteButton = PcfButton('#OutboundConfigPopup-OutboundConfigScreen-LocalToolbar-ConfigsDeleteButton');
	localToolbarEdit = PcfButton('#OutboundConfigPopup-OutboundConfigScreen-LocalToolbar-Edit');
	localToolbarOutboundConfigNewButton = PcfButton('#OutboundConfigPopup-OutboundConfigScreen-LocalToolbar-OutboundConfigNewButton');
	localToolbarUpdate = PcfButton('#OutboundConfigPopup-OutboundConfigScreen-LocalToolbar-Update');
	outboundConfigScreenOutboundLocalConfigsLV = PcfListView('#OutboundConfigPopup-OutboundConfigScreen-OutboundLocalConfigsLV');
	outboundConfigScreenOutboundS3ConfigsLV = PcfListView('#OutboundConfigPopup-OutboundConfigScreen-OutboundS3ConfigsLV');
	s3ToolbarCancel = PcfButton('#OutboundConfigPopup-OutboundConfigScreen-S3Toolbar-Cancel');
	s3ToolbarConfigsDeleteButton = PcfButton('#OutboundConfigPopup-OutboundConfigScreen-S3Toolbar-ConfigsDeleteButton');
	s3ToolbarEdit = PcfButton('#OutboundConfigPopup-OutboundConfigScreen-S3Toolbar-Edit');
	s3ToolbarOutboundConfigNewButton = PcfButton('#OutboundConfigPopup-OutboundConfigScreen-S3Toolbar-OutboundConfigNewButton');
	s3ToolbarUpdate = PcfButton('#OutboundConfigPopup-OutboundConfigScreen-S3Toolbar-Update');
	outboundConfigScreen_msgs = PcfButton('#OutboundConfigPopup-OutboundConfigScreen-_msgs');
	outboundConfigPopup_Paging = PcfButton('#OutboundConfigPopup-_Paging');
	outboundConfigPopup__crumb__ = PcfComponent('#OutboundConfigPopup-__crumb__');
}
