import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ClaimWorkplan {
	claimWorkplanScreenClaimWorkplan_ApproveButton = PcfButton('#ClaimWorkplan-ClaimWorkplanScreen-ClaimWorkplan_ApproveButton');
	claimWorkplanScreenClaimWorkplan_AssignButton = PcfButton('#ClaimWorkplan-ClaimWorkplanScreen-ClaimWorkplan_AssignButton');
	claimWorkplanScreenClaimWorkplan_CompleteButton = PcfButton('#ClaimWorkplan-ClaimWorkplanScreen-ClaimWorkplan_CompleteButton');
	claimWorkplanScreenClaimWorkplan_RejectButton = PcfButton('#ClaimWorkplan-ClaimWorkplanScreen-ClaimWorkplan_RejectButton');
	claimWorkplanScreenClaimWorkplan_SkipButton = PcfButton('#ClaimWorkplan-ClaimWorkplanScreen-ClaimWorkplan_SkipButton');
	claimWorkplanScreenWorkplanLV = PcfListView('#ClaimWorkplan-ClaimWorkplanScreen-WorkplanLV');
	claimWorkplanScreen_msgs = PcfButton('#ClaimWorkplan-ClaimWorkplanScreen-_msgs');
	claimWorkplanClaimWorkplan_UpLink = PcfButton('#ClaimWorkplan-ClaimWorkplan_UpLink');
	claimWorkplan_Paging = PcfButton('#ClaimWorkplan-_Paging');
	claimWorkplan__crumb__ = PcfComponent('#ClaimWorkplan-__crumb__');
}
