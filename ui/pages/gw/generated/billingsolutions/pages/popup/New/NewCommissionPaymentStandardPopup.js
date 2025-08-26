import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewCommissionPaymentStandardPopup {
	newCommissionPaymentStandardPopupNewCommissionPaymentStandardPopup_UpLink = PcfButton('#NewCommissionPaymentStandardPopup-NewCommissionPaymentStandardPopup_UpLink');
	newCommissionPaymentStandardScreenCancel = PcfButton('#NewCommissionPaymentStandardPopup-NewCommissionPaymentStandardScreen-Cancel');
	newCommissionPaymentStandardScreenEdit = PcfButton('#NewCommissionPaymentStandardPopup-NewCommissionPaymentStandardScreen-Edit');
	newCommissionPaymentDVAllCurrent = PcfTextInput('#NewCommissionPaymentStandardPopup-NewCommissionPaymentStandardScreen-NewCommissionPaymentDV-AllCurrent');
	newCommissionPaymentDVAllCurrentChoice_Choice = PcfButton('#NewCommissionPaymentStandardPopup-NewCommissionPaymentStandardScreen-NewCommissionPaymentDV-AllCurrentChoice_Choice');
	newCommissionPaymentDVOtherAmount = PcfTextInput('#NewCommissionPaymentStandardPopup-NewCommissionPaymentStandardScreen-NewCommissionPaymentDV-OtherAmount');
	newCommissionPaymentDVOtherAmountChoice_Choice = PcfButton('#NewCommissionPaymentStandardPopup-NewCommissionPaymentStandardScreen-NewCommissionPaymentDV-OtherAmountChoice_Choice');
	newCommissionPaymentStandardScreenUpdate = PcfButton('#NewCommissionPaymentStandardPopup-NewCommissionPaymentStandardScreen-Update');
	newCommissionPaymentStandardScreen_msgs = PcfButton('#NewCommissionPaymentStandardPopup-NewCommissionPaymentStandardScreen-_msgs');
	newCommissionPaymentStandardScreenproducercode = PcfSelectInput('#NewCommissionPaymentStandardPopup-NewCommissionPaymentStandardScreen-producercode');
	newCommissionPaymentStandardPopup_Paging = PcfButton('#NewCommissionPaymentStandardPopup-_Paging');
	newCommissionPaymentStandardPopup__crumb__ = PcfComponent('#NewCommissionPaymentStandardPopup-__crumb__');
}
