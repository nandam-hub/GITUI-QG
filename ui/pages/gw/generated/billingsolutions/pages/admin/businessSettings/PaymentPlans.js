import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class PaymentPlans {
	paymentPlansScreenPaymentPlansLV = PcfListView('#PaymentPlans-PaymentPlansScreen-PaymentPlansLV');
	paymentPlansScreen_msgs = PcfButton('#PaymentPlans-PaymentPlansScreen-_msgs');
	paymentPlansPaymentPlans_UpLink = PcfButton('#PaymentPlans-PaymentPlans_UpLink');
	paymentPlans_Paging = PcfButton('#PaymentPlans-_Paging');
	paymentPlans__crumb__ = PcfComponent('#PaymentPlans-__crumb__');
}
