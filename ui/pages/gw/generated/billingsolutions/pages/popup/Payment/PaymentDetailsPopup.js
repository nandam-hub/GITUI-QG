import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class PaymentDetailsPopup {
	paymentDetailsPopupScreenAmount = PcfTextInput('#PaymentDetailsPopup-PaymentDetailsPopupScreen-Amount');
	paymentDetailsPopupScreenMethod = PcfSelectInput('#PaymentDetailsPopup-PaymentDetailsPopupScreen-Method');
	paymentDetailsPopupScreenRefNumber = PcfTextInput('#PaymentDetailsPopup-PaymentDetailsPopupScreen-RefNumber');
	paymentDetailsPopupScreen_msgs = PcfButton('#PaymentDetailsPopup-PaymentDetailsPopupScreen-_msgs');
	paymentDetailsPopupPaymentDetailsPopup_UpLink = PcfButton('#PaymentDetailsPopup-PaymentDetailsPopup_UpLink');
	paymentDetailsPopup_Paging = PcfButton('#PaymentDetailsPopup-_Paging');
	paymentDetailsPopup__crumb__ = PcfComponent('#PaymentDetailsPopup-__crumb__');
}
