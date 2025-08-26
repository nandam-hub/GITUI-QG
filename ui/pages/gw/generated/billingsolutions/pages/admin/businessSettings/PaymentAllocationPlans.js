import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class PaymentAllocationPlans {
	paymentAllocationPlansScreenPaymentAllocationPlansLV = PcfListView('#PaymentAllocationPlans-PaymentAllocationPlansScreen-PaymentAllocationPlansLV');
	paymentAllocationPlansScreen_msgs = PcfButton('#PaymentAllocationPlans-PaymentAllocationPlansScreen-_msgs');
	paymentAllocationPlansPaymentAllocationPlans_UpLink = PcfButton('#PaymentAllocationPlans-PaymentAllocationPlans_UpLink');
	paymentAllocationPlans_Paging = PcfButton('#PaymentAllocationPlans-_Paging');
	paymentAllocationPlans__crumb__ = PcfComponent('#PaymentAllocationPlans-__crumb__');
}
