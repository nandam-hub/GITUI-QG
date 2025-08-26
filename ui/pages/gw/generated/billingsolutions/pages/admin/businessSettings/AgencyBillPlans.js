import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AgencyBillPlans {
	agencyBillPlansScreenAgencyBillPlansLV = PcfListView('#AgencyBillPlans-AgencyBillPlansScreen-AgencyBillPlansLV');
	agencyBillPlansScreen_msgs = PcfButton('#AgencyBillPlans-AgencyBillPlansScreen-_msgs');
	agencyBillPlansAgencyBillPlans_UpLink = PcfButton('#AgencyBillPlans-AgencyBillPlans_UpLink');
	agencyBillPlans_Paging = PcfButton('#AgencyBillPlans-_Paging');
	agencyBillPlans__crumb__ = PcfComponent('#AgencyBillPlans-__crumb__');
}
