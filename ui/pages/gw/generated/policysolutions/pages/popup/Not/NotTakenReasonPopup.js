import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NotTakenReasonPopup {
	notTakenReasonPopupNotTakenReasonPopup_UpLink = PcfButton('#NotTakenReasonPopup-NotTakenReasonPopup_UpLink');
	notTakenReasonPopupRejectScreenCancel = PcfButton('#NotTakenReasonPopup-RejectScreen-Cancel');
	notTakenReasonPopupRejectScreenEdit = PcfButton('#NotTakenReasonPopup-RejectScreen-Edit');
	notTakenReasonPopupRejectScreenRejectReasonDVRejectReason = PcfSelectInput('#NotTakenReasonPopup-RejectScreen-RejectReasonDV-RejectReason');
	notTakenReasonPopupRejectScreenRejectReasonDVRejectReasonText = PcfTextInput('#NotTakenReasonPopup-RejectScreen-RejectReasonDV-RejectReasonText');
	notTakenReasonPopupRejectScreenUpdate = PcfButton('#NotTakenReasonPopup-RejectScreen-Update');
	notTakenReasonPopupRejectScreen_msgs = PcfButton('#NotTakenReasonPopup-RejectScreen-_msgs');
	notTakenReasonPopup_Paging = PcfButton('#NotTakenReasonPopup-_Paging');
	notTakenReasonPopup__crumb__ = PcfComponent('#NotTakenReasonPopup-__crumb__');
}
