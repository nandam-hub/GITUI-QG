import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class ChangePaymentPlanPopup {
	changePaymentPlanPopupCancel = PcfButton('#ChangePaymentPlanPopup-Cancel');
	changePaymentPlanPopupChangePaymentPlanPopup_UpLink = PcfButton('#ChangePaymentPlanPopup-ChangePaymentPlanPopup_UpLink');
	changePaymentPlanPopupEdit = PcfButton('#ChangePaymentPlanPopup-Edit');
	changePaymentPlanPopupIncludeDownPaymentItems = PcfCheckBox('#ChangePaymentPlanPopup-IncludeDownPaymentItems');
	changePaymentPlanPopupInvoiceItemFilterType = PcfSelectInput('#ChangePaymentPlanPopup-InvoiceItemFilterType');
	changePaymentPlanPopupInvoiceItemsLV = PcfListView('#ChangePaymentPlanPopup-InvoiceItemsLV');
	changePaymentPlanPopupOriginalPlan = PcfTextInput('#ChangePaymentPlanPopup-OriginalPlan');
	changePaymentPlanPopupPaymentPlan = PcfSelectInput('#ChangePaymentPlanPopup-PaymentPlan');
	changePaymentPlanPopupRedistributePayments = PcfSelectInput('#ChangePaymentPlanPopup-RedistributePayments');
	changePaymentPlanPopupUpdate = PcfButton('#ChangePaymentPlanPopup-Update');
	changePaymentPlanPopup_Paging = PcfButton('#ChangePaymentPlanPopup-_Paging');
	changePaymentPlanPopup__crumb__ = PcfComponent('#ChangePaymentPlanPopup-__crumb__');
	changePaymentPlanPopup_msgs = PcfButton('#ChangePaymentPlanPopup-_msgs');
}
