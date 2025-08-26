import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class DeclineReasonPopup {
	declineReasonPopupDeclineReasonPopup_UpLink = PcfButton('#DeclineReasonPopup-DeclineReasonPopup_UpLink');
	rejectScreenCancel = PcfButton('#DeclineReasonPopup-RejectScreen-Cancel');
	rejectScreenEdit = PcfButton('#DeclineReasonPopup-RejectScreen-Edit');
	rejectReasonDVRejectReason = PcfSelectInput('#DeclineReasonPopup-RejectScreen-RejectReasonDV-RejectReason');
	rejectReasonDVRejectReasonText = PcfTextInput('#DeclineReasonPopup-RejectScreen-RejectReasonDV-RejectReasonText');
	rejectScreenUpdate = PcfButton('#DeclineReasonPopup-RejectScreen-Update');
	rejectScreen_msgs = PcfButton('#DeclineReasonPopup-RejectScreen-_msgs');
	declineReasonPopup_Paging = PcfButton('#DeclineReasonPopup-_Paging');
	declineReasonPopup__crumb__ = PcfComponent('#DeclineReasonPopup-__crumb__');
}
