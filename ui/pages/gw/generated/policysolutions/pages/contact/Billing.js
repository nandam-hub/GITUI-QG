import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class Billing {
	contactFile_BillingAccountBalancesConvertedAlert = PcfTextInput('#ContactFile_Billing-AccountBalancesConvertedAlert');
	contactFile_BillingBillingAccountsLV = PcfListView('#ContactFile_Billing-BillingAccountsLV');
	contactFile_BillingContactFileInfoBarContactLabel = PcfButton('#ContactFile_Billing-ContactFileInfoBar-ContactLabel');
	contactFile_BillingContactFileInfoBarContactName = PcfButton('#ContactFile_Billing-ContactFileInfoBar-ContactName');
	contactFile_BillingContactFile_Billing_UpLink = PcfButton('#ContactFile_Billing-ContactFile_Billing_UpLink');
	contactFile_Billing_Paging = PcfButton('#ContactFile_Billing-_Paging');
	contactFile_Billing__crumb__ = PcfComponent('#ContactFile_Billing-__crumb__');
	contactFile_Billing_msgs = PcfButton('#ContactFile_Billing-_msgs');
	contactFile_BillingbillingConfirm = PcfButton('#ContactFile_Billing-billingConfirm');
	billingConfirmCloseBtn = PcfButton('#ContactFile_Billing-billingConfirm-CloseBtn');
}
