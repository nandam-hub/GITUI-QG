import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class NewPaymentInstrumentPopup {
	newPaymentInstrumentPopupCancel = PcfButton('#NewPaymentInstrumentPopup-Cancel');
	newPaymentInstrumentPopupCreditCardLink = PcfButton('#NewPaymentInstrumentPopup-CreditCardLink');
	newPaymentInstrumentPopupDetail = PcfTextInput('#NewPaymentInstrumentPopup-Detail');
	newPaymentInstrumentPopupEdit = PcfButton('#NewPaymentInstrumentPopup-Edit');
	newPaymentInstrumentPopupNewPaymentInstrumentPopup_UpLink = PcfButton('#NewPaymentInstrumentPopup-NewPaymentInstrumentPopup_UpLink');
	newPaymentInstrumentPopupOneTime = PcfCheckBox('#NewPaymentInstrumentPopup-OneTime');
	newPaymentInstrumentPopupPaymentMethod = PcfSelectInput('#NewPaymentInstrumentPopup-PaymentMethod');
	newPaymentInstrumentPopupToken = PcfTextInput('#NewPaymentInstrumentPopup-Token');
	newPaymentInstrumentPopupUpdate = PcfButton('#NewPaymentInstrumentPopup-Update');
	newPaymentInstrumentPopup_Paging = PcfButton('#NewPaymentInstrumentPopup-_Paging');
	newPaymentInstrumentPopup__crumb__ = PcfComponent('#NewPaymentInstrumentPopup-__crumb__');
	newPaymentInstrumentPopup_msgs = PcfButton('#NewPaymentInstrumentPopup-_msgs');
}
