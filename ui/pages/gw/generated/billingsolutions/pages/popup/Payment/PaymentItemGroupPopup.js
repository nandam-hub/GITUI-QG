import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class PaymentItemGroupPopup {
	paymentItemGroupPopupDirectBillDistItemsLV = PcfListView('#PaymentItemGroupPopup-DirectBillDistItemsLV');
	paymentItemGroupPopupPaymentItemGroupArchiveWarning = PcfButton('#PaymentItemGroupPopup-PaymentItemGroupArchiveWarning');
	paymentItemGroupPopupPaymentItemGroupArchiveWarningCloseBtn = PcfButton('#PaymentItemGroupPopup-PaymentItemGroupArchiveWarning-CloseBtn');
	paymentItemGroupPopupPaymentItemGroupPopup_UpLink = PcfButton('#PaymentItemGroupPopup-PaymentItemGroupPopup_UpLink');
	paymentItemGroupPopup_Paging = PcfButton('#PaymentItemGroupPopup-_Paging');
	paymentItemGroupPopup__crumb__ = PcfComponent('#PaymentItemGroupPopup-__crumb__');
	paymentItemGroupPopup_msgs = PcfButton('#PaymentItemGroupPopup-_msgs');
	paymentItemGroupPopuppaymentItemGroupDisplayName = PcfTextInput('#PaymentItemGroupPopup-paymentItemGroupDisplayName');
	paymentItemGroupPopuppolicyPeriodDisplayName = PcfButton('#PaymentItemGroupPopup-policyPeriodDisplayName');
}
