import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class Billing {
	policyFile_BillingPolicyFile_Billing_UpLink = PcfButton('#PolicyFile_Billing-PolicyFile_Billing_UpLink');
	policy_BillingScreenAltBillingAccount = PcfTextInput('#PolicyFile_Billing-Policy_BillingScreen-AltBillingAccount');
	policy_BillingScreenAmountHeader = PcfButton('#PolicyFile_Billing-Policy_BillingScreen-AmountHeader');
	policy_BillingScreenBilledHeader = PcfButton('#PolicyFile_Billing-Policy_BillingScreen-BilledHeader');
	billedOutstandingInputGroupCurrent = PcfTextInput('#PolicyFile_Billing-Policy_BillingScreen-BilledOutstandingInputGroup-Current');
	billedOutstandingInputGroupPastDue = PcfTextInput('#PolicyFile_Billing-Policy_BillingScreen-BilledOutstandingInputGroup-PastDue');
	billedOutstandingInputGroup_checkbox = PcfCheckBox('#PolicyFile_Billing-Policy_BillingScreen-BilledOutstandingInputGroup-_checkbox');
	policy_BillingScreenBillingMethod = PcfSelectInput('#PolicyFile_Billing-Policy_BillingScreen-BillingMethod');
	policy_BillingScreenBillingPeriod = PcfSelectInput('#PolicyFile_Billing-Policy_BillingScreen-BillingPeriod');
	policy_BillingScreenDepositReq = PcfTextInput('#PolicyFile_Billing-Policy_BillingScreen-DepositReq');
	policy_BillingScreenDueDateHeader = PcfButton('#PolicyFile_Billing-Policy_BillingScreen-DueDateHeader');
	policy_BillingScreenInvoicing = PcfTextInput('#PolicyFile_Billing-Policy_BillingScreen-Invoicing');
	policy_BillingScreenIsArchived = PcfButton('#PolicyFile_Billing-Policy_BillingScreen-IsArchived');
	isArchivedCloseBtn = PcfButton('#PolicyFile_Billing-Policy_BillingScreen-IsArchived-CloseBtn');
	policy_BillingScreenPaid = PcfTextInput('#PolicyFile_Billing-Policy_BillingScreen-Paid');
	policy_BillingScreenPaidHeader = PcfButton('#PolicyFile_Billing-Policy_BillingScreen-PaidHeader');
	policy_BillingScreenPastDueHeader = PcfButton('#PolicyFile_Billing-Policy_BillingScreen-PastDueHeader');
	policy_BillingScreenPaymentPlan = PcfTextInput('#PolicyFile_Billing-Policy_BillingScreen-PaymentPlan');
	policy_BillingScreenStatementDateHeader = PcfButton('#PolicyFile_Billing-Policy_BillingScreen-StatementDateHeader');
	policy_BillingScreenTotalBilled = PcfTextInput('#PolicyFile_Billing-Policy_BillingScreen-TotalBilled');
	policy_BillingScreenTotalCharges = PcfTextInput('#PolicyFile_Billing-Policy_BillingScreen-TotalCharges');
	policy_BillingScreenUnbilled = PcfTextInput('#PolicyFile_Billing-Policy_BillingScreen-Unbilled');
	policy_BillingScreenViewAccount = PcfButton('#PolicyFile_Billing-Policy_BillingScreen-ViewAccount');
	policy_BillingScreenViewInBC = PcfButton('#PolicyFile_Billing-Policy_BillingScreen-ViewInBC');
	policy_BillingScreenWrittenOff = PcfTextInput('#PolicyFile_Billing-Policy_BillingScreen-WrittenOff');
	policy_BillingScreen_ListPaging = PcfButton('#PolicyFile_Billing-Policy_BillingScreen-_ListPaging');
	policy_BillingScreen_msgs = PcfButton('#PolicyFile_Billing-Policy_BillingScreen-_msgs');
	policyFile_Billing_Paging = PcfButton('#PolicyFile_Billing-_Paging');
	policyFile_Billing__crumb__ = PcfComponent('#PolicyFile_Billing-__crumb__');
}
