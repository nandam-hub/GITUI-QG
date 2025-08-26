import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ClaimHistory {
	claimHistoryScreenClaimHistory_RefreshButton = PcfButton('#ClaimHistory-ClaimHistoryScreen-ClaimHistory_RefreshButton');
	claimHistoryScreenHistoryLV = PcfListView('#ClaimHistory-ClaimHistoryScreen-HistoryLV');
	claimHistoryScreen_msgs = PcfButton('#ClaimHistory-ClaimHistoryScreen-_msgs');
	claimHistoryClaimHistory_UpLink = PcfButton('#ClaimHistory-ClaimHistory_UpLink');
	claimHistory_Paging = PcfButton('#ClaimHistory-_Paging');
	claimHistory__crumb__ = PcfComponent('#ClaimHistory-__crumb__');
}
