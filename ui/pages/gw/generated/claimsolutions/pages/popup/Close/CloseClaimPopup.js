import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class CloseClaimPopup {
	closeClaimPopupCloseClaimPopup_UpLink = PcfButton('#CloseClaimPopup-CloseClaimPopup_UpLink');
	closeClaimScreenCancel = PcfButton('#CloseClaimPopup-CloseClaimScreen-Cancel');
	closeClaimInfoDVNote = PcfTextInput('#CloseClaimPopup-CloseClaimScreen-CloseClaimInfoDV-Note');
	closeClaimInfoDVOutcome = PcfSelectInput('#CloseClaimPopup-CloseClaimScreen-CloseClaimInfoDV-Outcome');
	closeClaimScreenEdit = PcfButton('#CloseClaimPopup-CloseClaimScreen-Edit');
	closeClaimScreenUpdate = PcfButton('#CloseClaimPopup-CloseClaimScreen-Update');
	closeClaimScreen_msgs = PcfButton('#CloseClaimPopup-CloseClaimScreen-_msgs');
	closeClaimPopup_Paging = PcfButton('#CloseClaimPopup-_Paging');
	closeClaimPopup__crumb__ = PcfComponent('#CloseClaimPopup-__crumb__');
}
