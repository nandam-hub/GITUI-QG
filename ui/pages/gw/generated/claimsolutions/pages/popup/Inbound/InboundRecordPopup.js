import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class InboundRecordPopup {
	inboundRecordDVInboundRecordDVContent = PcfTextInput('#InboundRecordPopup-InboundRecordDV-InboundRecordDVContent');
	inboundRecordDVInboundRecordDVErrorMessage = PcfTextInput('#InboundRecordPopup-InboundRecordDV-InboundRecordDVErrorMessage');
	inboundRecordDVInboundRecordDVHandlerName = PcfTextInput('#InboundRecordPopup-InboundRecordDV-InboundRecordDVHandlerName');
	inboundRecordDVInboundRecordDVLastModifiedUser = PcfTextInput('#InboundRecordPopup-InboundRecordDV-InboundRecordDVLastModifiedUser');
	inboundRecordDVInboundRecordDVLineNumber = PcfTextInput('#InboundRecordPopup-InboundRecordDV-InboundRecordDVLineNumber');
	inboundRecordDVInboundRecordDVStatus = PcfSelectInput('#InboundRecordPopup-InboundRecordDV-InboundRecordDVStatus');
	inboundRecordDV_tbCancel = PcfButton('#InboundRecordPopup-InboundRecordDV_tb-Cancel');
	inboundRecordDV_tbEdit = PcfButton('#InboundRecordPopup-InboundRecordDV_tb-Edit');
	inboundRecordDV_tbInboundRecordPopupSkipButton = PcfButton('#InboundRecordPopup-InboundRecordDV_tb-InboundRecordPopupSkipButton');
	inboundRecordDV_tbUpdate = PcfButton('#InboundRecordPopup-InboundRecordDV_tb-Update');
	inboundRecordPopupInboundRecordPopup_UpLink = PcfButton('#InboundRecordPopup-InboundRecordPopup_UpLink');
	inboundRecordPopup_Paging = PcfButton('#InboundRecordPopup-_Paging');
	inboundRecordPopup__crumb__ = PcfComponent('#InboundRecordPopup-__crumb__');
	inboundRecordPopup_msgs = PcfButton('#InboundRecordPopup-_msgs');
}
