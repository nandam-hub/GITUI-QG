import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class OutboundRecordPopup {
	outboundRecordDVOutboundRecordDVConfig = PcfTextInput('#OutboundRecordPopup-OutboundRecordDV-OutboundRecordDVConfig');
	outboundRecordDVOutboundRecordDVContent = PcfTextInput('#OutboundRecordPopup-OutboundRecordDV-OutboundRecordDVContent');
	outboundRecordDVOutboundRecordDVCreateDate = PcfDateValueInput('#OutboundRecordPopup-OutboundRecordDV-OutboundRecordDVCreateDate');
	outboundRecordDVOutboundRecordDVErrorMessage = PcfTextInput('#OutboundRecordPopup-OutboundRecordDV-OutboundRecordDVErrorMessage');
	outboundRecordDVOutboundRecordDVLastModifiedUser = PcfTextInput('#OutboundRecordPopup-OutboundRecordDV-OutboundRecordDVLastModifiedUser');
	outboundRecordDVOutboundRecordDVStatus = PcfSelectInput('#OutboundRecordPopup-OutboundRecordDV-OutboundRecordDVStatus');
	outboundRecordDV_tbCancel = PcfButton('#OutboundRecordPopup-OutboundRecordDV_tb-Cancel');
	outboundRecordDV_tbEdit = PcfButton('#OutboundRecordPopup-OutboundRecordDV_tb-Edit');
	outboundRecordDV_tbOutboundRecordPopupSkipButton = PcfButton('#OutboundRecordPopup-OutboundRecordDV_tb-OutboundRecordPopupSkipButton');
	outboundRecordDV_tbUpdate = PcfButton('#OutboundRecordPopup-OutboundRecordDV_tb-Update');
	outboundRecordPopupOutboundRecordPopup_UpLink = PcfButton('#OutboundRecordPopup-OutboundRecordPopup_UpLink');
	outboundRecordPopup_Paging = PcfButton('#OutboundRecordPopup-_Paging');
	outboundRecordPopup__crumb__ = PcfComponent('#OutboundRecordPopup-__crumb__');
	outboundRecordPopup_msgs = PcfButton('#OutboundRecordPopup-_msgs');
}
