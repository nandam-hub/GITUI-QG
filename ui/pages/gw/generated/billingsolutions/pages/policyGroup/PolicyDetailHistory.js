import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class PolicyDetailHistory {
	policyDetailHistoryScreenPolicyDetailHistoryLV = PcfListView('#PolicyDetailHistory-PolicyDetailHistoryScreen-PolicyDetailHistoryLV');
	policyDetailHistoryScreen_msgs = PcfButton('#PolicyDetailHistory-PolicyDetailHistoryScreen-_msgs');
	policyDetailHistoryPolicyDetailHistory_UpLink = PcfButton('#PolicyDetailHistory-PolicyDetailHistory_UpLink');
	policyDetailHistory_Paging = PcfButton('#PolicyDetailHistory-_Paging');
	policyDetailHistory__crumb__ = PcfComponent('#PolicyDetailHistory-__crumb__');
}
