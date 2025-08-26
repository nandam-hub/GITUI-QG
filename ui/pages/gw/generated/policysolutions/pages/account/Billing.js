import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class Billing {
	accountFileInfoBarAccount = PcfButton('#AccountFile_Billing-AccountFileInfoBar-Account');
	accountFileInfoBarAccountLabel = PcfButton('#AccountFile_Billing-AccountFileInfoBar-AccountLabel');
	accountFileInfoBarAccountName = PcfButton('#AccountFile_Billing-AccountFileInfoBar-AccountName');
	accountFile_BillingAccountFile_Billing_UpLink = PcfButton('#AccountFile_Billing-AccountFile_Billing_UpLink');
	account_BillingScreenAccountBalancesConvertedAlert = PcfTextInput('#AccountFile_Billing-Account_BillingScreen-AccountBalancesConvertedAlert');
	account_BillingScreenBilledOutstanding = PcfTextInput('#AccountFile_Billing-Account_BillingScreen-BilledOutstanding');
	account_BillingScreenBilledOutstandingCurrent = PcfTextInput('#AccountFile_Billing-Account_BillingScreen-BilledOutstandingCurrent');
	account_BillingScreenBilledOutstandingPastDue = PcfTextInput('#AccountFile_Billing-Account_BillingScreen-BilledOutstandingPastDue');
	billedPoliciesBillingPoliciesLV = PcfListView('#AccountFile_Billing-Account_BillingScreen-BilledPolicies-BillingPoliciesLV');
	account_BillingScreenBillingAccounts = PcfSelectInput('#AccountFile_Billing-Account_BillingScreen-BillingAccounts');
	account_BillingScreenBillingInvoicesLV = PcfListView('#AccountFile_Billing-Account_BillingScreen-BillingInvoicesLV');
	account_BillingScreenCollateralConvertedAlert = PcfTextInput('#AccountFile_Billing-Account_BillingScreen-CollateralConvertedAlert');
	account_BillingScreenHeld = PcfTextInput('#AccountFile_Billing-Account_BillingScreen-Held');
	account_BillingScreenInvoicesTab = PcfButton('#AccountFile_Billing-Account_BillingScreen-InvoicesTab');
	ownedPoliciesBillingPoliciesLV = PcfListView('#AccountFile_Billing-Account_BillingScreen-OwnedPolicies-BillingPoliciesLV');
	account_BillingScreenPoliciesTab = PcfButton('#AccountFile_Billing-Account_BillingScreen-PoliciesTab');
	account_BillingScreenPrimaryPayerAddress = PcfTextInput('#AccountFile_Billing-Account_BillingScreen-PrimaryPayerAddress');
	account_BillingScreenPrimaryPayerName = PcfTextInput('#AccountFile_Billing-Account_BillingScreen-PrimaryPayerName');
	account_BillingScreenPrimaryPayerPhone = PcfTextInput('#AccountFile_Billing-Account_BillingScreen-PrimaryPayerPhone');
	account_BillingScreenRequirement = PcfTextInput('#AccountFile_Billing-Account_BillingScreen-Requirement');
	account_BillingScreenUnappliedFunds = PcfTextInput('#AccountFile_Billing-Account_BillingScreen-UnappliedFunds');
	account_BillingScreenUnbilled = PcfTextInput('#AccountFile_Billing-Account_BillingScreen-Unbilled');
	account_BillingScreenViewInBC = PcfButton('#AccountFile_Billing-Account_BillingScreen-ViewInBC');
	account_BillingScreen_msgs = PcfButton('#AccountFile_Billing-Account_BillingScreen-_msgs');
	accountFile_Billing_Paging = PcfButton('#AccountFile_Billing-_Paging');
	accountFile_Billing__crumb__ = PcfComponent('#AccountFile_Billing-__crumb__');
}
