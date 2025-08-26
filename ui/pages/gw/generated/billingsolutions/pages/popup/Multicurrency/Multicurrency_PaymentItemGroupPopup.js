import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class Multicurrency_PaymentItemGroupPopup {
	multicurrency_PaymentItemGroupPopupDirectBillDistItemsLV = PcfListView('#Multicurrency_PaymentItemGroupPopup-DirectBillDistItemsLV');
	multicurrency_PaymentItemGroupPopupMulticurrency_PaymentItemGroupPopup_UpLink = PcfButton('#Multicurrency_PaymentItemGroupPopup-Multicurrency_PaymentItemGroupPopup_UpLink');
	multicurrency_PaymentItemGroupPopupPaymentItemGroupArchiveWarning = PcfButton('#Multicurrency_PaymentItemGroupPopup-PaymentItemGroupArchiveWarning');
	paymentItemGroupArchiveWarningCloseBtn = PcfButton('#Multicurrency_PaymentItemGroupPopup-PaymentItemGroupArchiveWarning-CloseBtn');
	multicurrency_PaymentItemGroupPopup_Paging = PcfButton('#Multicurrency_PaymentItemGroupPopup-_Paging');
	multicurrency_PaymentItemGroupPopup__crumb__ = PcfComponent('#Multicurrency_PaymentItemGroupPopup-__crumb__');
	multicurrency_PaymentItemGroupPopup_msgs = PcfButton('#Multicurrency_PaymentItemGroupPopup-_msgs');
	multicurrency_PaymentItemGroupPopuppaymentItemGroupDisplayName = PcfTextInput('#Multicurrency_PaymentItemGroupPopup-paymentItemGroupDisplayName');
	multicurrency_PaymentItemGroupPopuppolicyPeriodDisplayName = PcfButton('#Multicurrency_PaymentItemGroupPopup-policyPeriodDisplayName');
}
