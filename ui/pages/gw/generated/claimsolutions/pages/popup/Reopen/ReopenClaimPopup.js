import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class ReopenClaimPopup {
	reopenClaimPopupReopenClaimPopup_UpLink = PcfButton('#ReopenClaimPopup-ReopenClaimPopup_UpLink');
	reopenClaimScreenCancel = PcfButton('#ReopenClaimPopup-ReopenClaimScreen-Cancel');
	reopenClaimScreenEdit = PcfButton('#ReopenClaimPopup-ReopenClaimScreen-Edit');
	reopenClaimInfoDVNote = PcfTextInput('#ReopenClaimPopup-ReopenClaimScreen-ReopenClaimInfoDV-Note');
	reopenClaimInfoDVReason = PcfSelectInput('#ReopenClaimPopup-ReopenClaimScreen-ReopenClaimInfoDV-Reason');
	reopenClaimScreenUpdate = PcfButton('#ReopenClaimPopup-ReopenClaimScreen-Update');
	reopenClaimScreen_msgs = PcfButton('#ReopenClaimPopup-ReopenClaimScreen-_msgs');
	reopenClaimPopup_Paging = PcfButton('#ReopenClaimPopup-_Paging');
	reopenClaimPopup__crumb__ = PcfComponent('#ReopenClaimPopup-__crumb__');
}
