import { PcfComponent, PcfButton } from '@gtui/gt-ui-framework';
import { PolicyTabBar } from '../../../../../../pages/gw/generated/policysolutions/pages/navigation/tabBar/PolicyTabBar';

export class PolicyTabBar_Ext extends PolicyTabBar{
	tabBarPolicyTab = PcfComponent('#TabBar-PolicyTab > div:nth-child(3)');
	tabBar_PolicyRetrievalItem_Button = PcfButton('#TabBar-PolicyTab-PolicyTab_PolicyRetrievalItem_Button');
	tabBar_Header = PcfComponent('#NewSubmission-NewSubmissionScreen-ttlBar')
}