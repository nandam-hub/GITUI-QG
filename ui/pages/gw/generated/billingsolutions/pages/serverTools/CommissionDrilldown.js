import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class CommissionDrilldown {
	commissionDrilldownCommissionDrilldown_UpLink = PcfButton('#CommissionDrilldown-CommissionDrilldown_UpLink');
	policyDetailCommissionsScreenPolicyCommissionTreeLV = PcfListView('#CommissionDrilldown-PolicyDetailCommissionsScreen-PolicyCommissionTreeLV');
	policyPeriodSelectPolicyPeriod = PcfButton('#CommissionDrilldown-PolicyDetailCommissionsScreen-PolicyPeriod-SelectPolicyPeriod');
	policyDetailCommissionsScreenRole = PcfSelectInput('#CommissionDrilldown-PolicyDetailCommissionsScreen-Role');
	commissionDrilldownPolicyDetailCommissionsScreen_msgs = PcfButton('#CommissionDrilldown-PolicyDetailCommissionsScreen-_msgs');
	commissionDrilldown_Paging = PcfButton('#CommissionDrilldown-_Paging');
	commissionDrilldown__crumb__ = PcfComponent('#CommissionDrilldown-__crumb__');
}
