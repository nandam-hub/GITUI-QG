import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DelinquencyPlans {
	delinquencyPlansScreenDelinquencyPlansLV = PcfListView('#DelinquencyPlans-DelinquencyPlansScreen-DelinquencyPlansLV');
	delinquencyPlansScreen_msgs = PcfButton('#DelinquencyPlans-DelinquencyPlansScreen-_msgs');
	delinquencyPlansDelinquencyPlans_UpLink = PcfButton('#DelinquencyPlans-DelinquencyPlans_UpLink');
	delinquencyPlans_Paging = PcfButton('#DelinquencyPlans-_Paging');
	delinquencyPlans__crumb__ = PcfComponent('#DelinquencyPlans-__crumb__');
}
