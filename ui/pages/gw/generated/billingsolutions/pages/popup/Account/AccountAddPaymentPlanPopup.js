import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AccountAddPaymentPlanPopup {
	accountAddPaymentPlanPopupAccountAddPaymentPlanPopup_UpLink = PcfButton('#AccountAddPaymentPlanPopup-AccountAddPaymentPlanPopup_UpLink');
	accountAddPaymentPlanPopupAddSelectedPaymentPlans = PcfButton('#AccountAddPaymentPlanPopup-AddSelectedPaymentPlans');
	accountAddPaymentPlanPopupCancel = PcfButton('#AccountAddPaymentPlanPopup-Cancel');
	accountAddPaymentPlanPopupEdit = PcfButton('#AccountAddPaymentPlanPopup-Edit');
	accountAddPaymentPlanPopupPaymentPlansLV = PcfListView('#AccountAddPaymentPlanPopup-PaymentPlansLV');
	accountAddPaymentPlanPopupUpdate = PcfButton('#AccountAddPaymentPlanPopup-Update');
	accountAddPaymentPlanPopup_Paging = PcfButton('#AccountAddPaymentPlanPopup-_Paging');
	accountAddPaymentPlanPopup__crumb__ = PcfComponent('#AccountAddPaymentPlanPopup-__crumb__');
	accountAddPaymentPlanPopup_msgs = PcfButton('#AccountAddPaymentPlanPopup-_msgs');
}
