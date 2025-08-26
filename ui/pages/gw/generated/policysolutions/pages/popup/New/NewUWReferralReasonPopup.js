import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewUWReferralReasonPopup {
	newUWReferralReasonPopupCancel = PcfButton('#NewUWReferralReasonPopup-Cancel');
	newUWReferralReasonPopupEdit = PcfButton('#NewUWReferralReasonPopup-Edit');
	newUWReferralReasonPopupNewUWIssueDelegateDVIssueType = PcfSelectInput('#NewUWReferralReasonPopup-NewUWIssueDelegateDV-IssueType');
	newUWReferralReasonPopupNewUWIssueDelegateDVLongDescription = PcfTextInput('#NewUWReferralReasonPopup-NewUWIssueDelegateDV-LongDescription');
	newUWReferralReasonPopupNewUWIssueDelegateDVShortDescription = PcfTextInput('#NewUWReferralReasonPopup-NewUWIssueDelegateDV-ShortDescription');
	newUWReferralReasonPopupNewUWIssueDelegateDVValue = PcfTextInput('#NewUWReferralReasonPopup-NewUWIssueDelegateDV-Value');
	newUWReferralReasonPopupNewUWReferralReasonPopup_UpLink = PcfButton('#NewUWReferralReasonPopup-NewUWReferralReasonPopup_UpLink');
	newUWReferralReasonPopupUpdate = PcfButton('#NewUWReferralReasonPopup-Update');
	newUWReferralReasonPopup_Paging = PcfButton('#NewUWReferralReasonPopup-_Paging');
	newUWReferralReasonPopup__crumb__ = PcfComponent('#NewUWReferralReasonPopup-__crumb__');
	newUWReferralReasonPopup_msgs = PcfButton('#NewUWReferralReasonPopup-_msgs');
}
