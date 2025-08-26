import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewCreditCardPopup {
	newCreditCardPopupCancel = PcfButton('#NewCreditCardPopup-Cancel');
	newCreditCardPopupEdit = PcfButton('#NewCreditCardPopup-Edit');
	newCreditCardPopupNewCreditCardPopup_UpLink = PcfButton('#NewCreditCardPopup-NewCreditCardPopup_UpLink');
	newCreditCardPopupUpdate = PcfButton('#NewCreditCardPopup-Update');
	newCreditCardPopup_Paging = PcfButton('#NewCreditCardPopup-_Paging');
	newCreditCardPopup__crumb__ = PcfComponent('#NewCreditCardPopup-__crumb__');
	newCreditCardPopup_msgs = PcfButton('#NewCreditCardPopup-_msgs');
	newCreditCardPopupbillingInfo = PcfTextInput('#NewCreditCardPopup-billingInfo');
}
