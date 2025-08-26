import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AccountDetailHistory {
	accountDetailHistoryScreenAccountDetailHistoryLV = PcfListView('#AccountDetailHistory-AccountDetailHistoryScreen-AccountDetailHistoryLV');
	accountDetailHistoryScreen_msgs = PcfButton('#AccountDetailHistory-AccountDetailHistoryScreen-_msgs');
	accountDetailHistoryAccountDetailHistory_UpLink = PcfButton('#AccountDetailHistory-AccountDetailHistory_UpLink');
	accountDetailHistory_Paging = PcfButton('#AccountDetailHistory-_Paging');
	accountDetailHistory__crumb__ = PcfComponent('#AccountDetailHistory-__crumb__');
}
