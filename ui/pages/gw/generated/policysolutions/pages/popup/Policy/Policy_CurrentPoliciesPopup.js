import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class Policy_CurrentPoliciesPopup {
	policy_CurrentPoliciesScreenAssociatedPoliciesLV = PcfListView('#Policy_CurrentPoliciesPopup-CurrentPoliciesScreen-Policy_CurrentPoliciesScreen-AssociatedPoliciesLV');
	policy_CurrentPoliciesScreenLossRatioWarning = PcfButton('#Policy_CurrentPoliciesPopup-CurrentPoliciesScreen-Policy_CurrentPoliciesScreen-LossRatioWarning');
	policy_CurrentPoliciesPopupCurrentPoliciesScreenPolicy_CurrentPoliciesScreenLossRatioWarningCloseBtn = PcfButton('#Policy_CurrentPoliciesPopup-CurrentPoliciesScreen-Policy_CurrentPoliciesScreen-LossRatioWarning-CloseBtn');
	policy_CurrentPoliciesScreenRecalculateLossRatio = PcfButton('#Policy_CurrentPoliciesPopup-CurrentPoliciesScreen-Policy_CurrentPoliciesScreen-RecalculateLossRatio');
	policy_CurrentPoliciesScreen_msgs = PcfButton('#Policy_CurrentPoliciesPopup-CurrentPoliciesScreen-Policy_CurrentPoliciesScreen-_msgs');
	policy_CurrentPoliciesPopupPolicy_CurrentPoliciesPopup_UpLink = PcfButton('#Policy_CurrentPoliciesPopup-Policy_CurrentPoliciesPopup_UpLink');
	policy_CurrentPoliciesPopup_Paging = PcfButton('#Policy_CurrentPoliciesPopup-_Paging');
	policy_CurrentPoliciesPopup__crumb__ = PcfComponent('#Policy_CurrentPoliciesPopup-__crumb__');
}
