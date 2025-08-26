import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ReturnPremiumPlans {
	returnPremiumPlansScreenReturnPremiumPlansLV = PcfListView('#ReturnPremiumPlans-ReturnPremiumPlansScreen-ReturnPremiumPlansLV');
	returnPremiumPlansScreen_msgs = PcfButton('#ReturnPremiumPlans-ReturnPremiumPlansScreen-_msgs');
	returnPremiumPlansReturnPremiumPlans_UpLink = PcfButton('#ReturnPremiumPlans-ReturnPremiumPlans_UpLink');
	returnPremiumPlans_Paging = PcfButton('#ReturnPremiumPlans-_Paging');
	returnPremiumPlans__crumb__ = PcfComponent('#ReturnPremiumPlans-__crumb__');
}
