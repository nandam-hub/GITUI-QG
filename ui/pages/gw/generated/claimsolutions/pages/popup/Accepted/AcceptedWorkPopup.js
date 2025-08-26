import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class AcceptedWorkPopup {
	acceptedWorkPopupAcceptedWorkPopup_UpLink = PcfButton('#AcceptedWorkPopup-AcceptedWorkPopup_UpLink');
	acceptedWorkPopupCancel = PcfButton('#AcceptedWorkPopup-Cancel');
	acceptedWorkPopupEdit = PcfButton('#AcceptedWorkPopup-Edit');
	acceptedWorkPopupExpectedCompletionDate = PcfDateValueInput('#AcceptedWorkPopup-ExpectedCompletionDate');
	acceptedWorkPopupUpdate = PcfButton('#AcceptedWorkPopup-Update');
	acceptedWorkPopup_Paging = PcfButton('#AcceptedWorkPopup-_Paging');
	acceptedWorkPopup__crumb__ = PcfComponent('#AcceptedWorkPopup-__crumb__');
	acceptedWorkPopup_msgs = PcfButton('#AcceptedWorkPopup-_msgs');
}
