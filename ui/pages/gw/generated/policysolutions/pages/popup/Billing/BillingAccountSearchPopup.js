import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class BillingAccountSearchPopup {
	billingAccountSearchPopupAccountName = PcfTextInput('#BillingAccountSearchPopup-AccountName');
	billingAccountSearchPopupAccountNameHeader = PcfButton('#BillingAccountSearchPopup-AccountNameHeader');
	billingAccountSearchPopupAccountNameKanji = PcfTextInput('#BillingAccountSearchPopup-AccountNameKanji');
	billingAccountSearchPopupAccountNameKanjiHeader = PcfButton('#BillingAccountSearchPopup-AccountNameKanjiHeader');
	billingAccountSearchPopupAccountNumber = PcfTextInput('#BillingAccountSearchPopup-AccountNumber');
	billingAccountSearchPopupAccountNumberHeader = PcfButton('#BillingAccountSearchPopup-AccountNumberHeader');
	billingAccountSearchPopupBillingAccountSearchPopup_UpLink = PcfButton('#BillingAccountSearchPopup-BillingAccountSearchPopup_UpLink');
	billingAccountSearchPopupPrimaryPayerHeader = PcfButton('#BillingAccountSearchPopup-PrimaryPayerHeader');
	billingAccountSearchPopupSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#BillingAccountSearchPopup-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	billingAccountSearchPopupSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#BillingAccountSearchPopup-SearchAndResetInputSet-SearchLinksInputSet-Search');
	billingAccountSearchPopup_ListPaging = PcfButton('#BillingAccountSearchPopup-_ListPaging');
	billingAccountSearchPopup_Paging = PcfButton('#BillingAccountSearchPopup-_Paging');
	billingAccountSearchPopup__crumb__ = PcfComponent('#BillingAccountSearchPopup-__crumb__');
	billingAccountSearchPopup_msgs = PcfButton('#BillingAccountSearchPopup-_msgs');
}
