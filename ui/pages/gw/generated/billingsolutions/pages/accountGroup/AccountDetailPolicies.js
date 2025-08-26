import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AccountDetailPolicies {
	accountDetailPoliciesScreenGrandTotalLV = PcfListView('#AccountDetailPolicies-AccountDetailPoliciesScreen-GrandTotalLV');
	accountDetailPoliciesScreenOwnedTabTab = PcfButton('#AccountDetailPolicies-AccountDetailPoliciesScreen-OwnedTabTab');
	payerPolicyPeriodsPolicyPeriodPanelLV = PcfListView('#AccountDetailPolicies-AccountDetailPoliciesScreen-PayerPolicies-PayerPolicyPeriods-PolicyPeriodPanelLV');
	payerPoliciesPoliciesLV = PcfListView('#AccountDetailPolicies-AccountDetailPoliciesScreen-PayerPolicies-PoliciesLV');
	policiesLV_tbPolicyFilterClearButton = PcfButton('#AccountDetailPolicies-AccountDetailPoliciesScreen-PayerPolicies-PoliciesLV_tb-PolicyFilterClearButton');
	policiesLV_tbPolicyFilterGoButton = PcfButton('#AccountDetailPolicies-AccountDetailPoliciesScreen-PayerPolicies-PoliciesLV_tb-PolicyFilterGoButton');
	policiesLV_tbPolicyPeriodFilter = PcfTextInput('#AccountDetailPolicies-AccountDetailPoliciesScreen-PayerPolicies-PoliciesLV_tb-PolicyPeriodFilter');
	payerPoliciesPolicyDetailCardTab = PcfButton('#AccountDetailPolicies-AccountDetailPoliciesScreen-PayerPolicies-PolicyDetailCardTab');
	accountDetailPoliciesScreenPayerTabTab = PcfButton('#AccountDetailPolicies-AccountDetailPoliciesScreen-PayerTabTab');
	accountDetailPoliciesScreen_msgs = PcfButton('#AccountDetailPolicies-AccountDetailPoliciesScreen-_msgs');
	accountDetailPoliciesAccountDetailPolicies_UpLink = PcfButton('#AccountDetailPolicies-AccountDetailPolicies_UpLink');
	accountDetailPolicies_Paging = PcfButton('#AccountDetailPolicies-_Paging');
	accountDetailPolicies__crumb__ = PcfComponent('#AccountDetailPolicies-__crumb__');
}
