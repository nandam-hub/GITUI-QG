import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class BillingPlans {
	billingPlansScreenBillingPlansLV = PcfListView('#BillingPlans-BillingPlansScreen-BillingPlansLV');
	billingPlansScreen_msgs = PcfButton('#BillingPlans-BillingPlansScreen-_msgs');
	billingPlansBillingPlans_UpLink = PcfButton('#BillingPlans-BillingPlans_UpLink');
	billingPlans_Paging = PcfButton('#BillingPlans-_Paging');
	billingPlans__crumb__ = PcfComponent('#BillingPlans-__crumb__');
}
