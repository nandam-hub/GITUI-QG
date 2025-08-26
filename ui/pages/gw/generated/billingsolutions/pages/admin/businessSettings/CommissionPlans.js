import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class CommissionPlans {
	commissionPlansScreenCommissionPlansLV = PcfListView('#CommissionPlans-CommissionPlansScreen-CommissionPlansLV');
	commissionPlansScreen_msgs = PcfButton('#CommissionPlans-CommissionPlansScreen-_msgs');
	commissionPlansCommissionPlans_UpLink = PcfButton('#CommissionPlans-CommissionPlans_UpLink');
	commissionPlans_Paging = PcfButton('#CommissionPlans-_Paging');
	commissionPlans__crumb__ = PcfComponent('#CommissionPlans-__crumb__');
}
