import { PcfComponent, PcfTextInput } from '@gtui/gt-ui-framework';

export class PolicyTabBar {
	tabBarPolicyTab = PcfComponent('#TabBar-PolicyTab');
	policyTabPolicyTab_NewSubmission = PcfComponent('#TabBar-PolicyTab-PolicyTab_NewSubmission');
	policyTabPolicyTab_PolicyRetrievalItem = PcfTextInput('#TabBar-PolicyTab-PolicyTab_PolicyRetrievalItem');
	policyTabPolicyTab_SubmissionNumberSearchItem = PcfComponent('#TabBar-PolicyTab-PolicyTab_SubmissionNumberSearchItem');
	tabBarWidgetmoreoptions = PcfComponent('#TabBarWidget--more-options');
}
