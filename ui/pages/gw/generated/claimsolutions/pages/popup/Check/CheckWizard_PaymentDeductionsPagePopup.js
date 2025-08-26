import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class CheckWizard_PaymentDeductionsPagePopup {
	checkWizard_AddPayeeScreenCancel = PcfButton('#CheckWizard_PaymentDeductionsPagePopup-CheckWizard_AddPayeeScreen-Cancel');
	checkWizard_AddPayeeScreenCheckWizard_PaymentDeductionsPagePopup_RecalculateButton = PcfButton('#CheckWizard_PaymentDeductionsPagePopup-CheckWizard_AddPayeeScreen-CheckWizard_PaymentDeductionsPagePopup_RecalculateButton');
	checkWizard_AddPayeeScreenEdit = PcfButton('#CheckWizard_PaymentDeductionsPagePopup-CheckWizard_AddPayeeScreen-Edit');
	paymentDeductionsDVAmount_Gross = PcfTextInput('#CheckWizard_PaymentDeductionsPagePopup-CheckWizard_AddPayeeScreen-PaymentDeductionsDV-Amount_Gross');
	paymentDeductionsDVAmount_Net = PcfTextInput('#CheckWizard_PaymentDeductionsPagePopup-CheckWizard_AddPayeeScreen-PaymentDeductionsDV-Amount_Net');
	paymentDeductionsDVAmount_Reportable = PcfTextInput('#CheckWizard_PaymentDeductionsPagePopup-CheckWizard_AddPayeeScreen-PaymentDeductionsDV-Amount_Reportable');
	paymentDeductionsDVPaymentDeductionsLV = PcfListView('#CheckWizard_PaymentDeductionsPagePopup-CheckWizard_AddPayeeScreen-PaymentDeductionsDV-PaymentDeductionsLV');
	paymentDeductionsDVVendor = PcfTextInput('#CheckWizard_PaymentDeductionsPagePopup-CheckWizard_AddPayeeScreen-PaymentDeductionsDV-Vendor');
	checkWizard_AddPayeeScreenUpdate = PcfButton('#CheckWizard_PaymentDeductionsPagePopup-CheckWizard_AddPayeeScreen-Update');
	checkWizard_AddPayeeScreen_msgs = PcfButton('#CheckWizard_PaymentDeductionsPagePopup-CheckWizard_AddPayeeScreen-_msgs');
	checkWizard_PaymentDeductionsPagePopupCheckWizard_PaymentDeductionsPagePopup_UpLink = PcfButton('#CheckWizard_PaymentDeductionsPagePopup-CheckWizard_PaymentDeductionsPagePopup_UpLink');
	checkWizard_PaymentDeductionsPagePopup_Paging = PcfButton('#CheckWizard_PaymentDeductionsPagePopup-_Paging');
	checkWizard_PaymentDeductionsPagePopup__crumb__ = PcfComponent('#CheckWizard_PaymentDeductionsPagePopup-__crumb__');
}
