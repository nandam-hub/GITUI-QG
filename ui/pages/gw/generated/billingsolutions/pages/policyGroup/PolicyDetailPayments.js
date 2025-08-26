import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class PolicyDetailPayments {
	policyDetailPaymentsScreenAccountDBA = PcfButton('#PolicyDetailPayments-PolicyDetailPaymentsScreen-AccountDBA');
	policyDetailPaymentsScreenAccountName = PcfButton('#PolicyDetailPayments-PolicyDetailPaymentsScreen-AccountName');
	policyDetailPaymentsScreenAccountNumber = PcfButton('#PolicyDetailPayments-PolicyDetailPaymentsScreen-AccountNumber');
	policyDetailPaymentsScreenActualPaymentsCardTab = PcfButton('#PolicyDetailPayments-PolicyDetailPaymentsScreen-ActualPaymentsCardTab');
	policyDetailPaymentsScreenAmountReceived = PcfTextInput('#PolicyDetailPayments-PolicyDetailPaymentsScreen-AmountReceived');
	policyDetailPaymentsScreenAverageInstallmentAmount = PcfTextInput('#PolicyDetailPayments-PolicyDetailPaymentsScreen-AverageInstallmentAmount');
	policyDetailPaymentsScreenBalance = PcfTextInput('#PolicyDetailPayments-PolicyDetailPaymentsScreen-Balance');
	policyDetailPaymentsScreenChangePaymentPlan = PcfButton('#PolicyDetailPayments-PolicyDetailPaymentsScreen-ChangePaymentPlan');
	policyDetailPaymentsScreenDeposit = PcfTextInput('#PolicyDetailPayments-PolicyDetailPaymentsScreen-Deposit');
	policyDetailPaymentsScreenDepositPercent = PcfTextInput('#PolicyDetailPayments-PolicyDetailPaymentsScreen-DepositPercent');
	policyDetailPaymentsScreenDistItemsDetailLV = PcfListView('#PolicyDetailPayments-PolicyDetailPaymentsScreen-DistItemsDetailLV');
	policyDetailPaymentsScreenInvoiceItemsLV = PcfListView('#PolicyDetailPayments-PolicyDetailPaymentsScreen-InvoiceItemsLV');
	policyDetailPaymentsScreenLatestLastInvoiceSent = PcfTextInput('#PolicyDetailPayments-PolicyDetailPaymentsScreen-LatestLastInvoiceSent');
	policyDetailPaymentsScreenNumPayments = PcfTextInput('#PolicyDetailPayments-PolicyDetailPaymentsScreen-NumPayments');
	policyDetailPaymentsScreenPaymentPlan = PcfTextInput('#PolicyDetailPayments-PolicyDetailPaymentsScreen-PaymentPlan');
	policyDetailPaymentsScreenScheduledPaymentsCardTab = PcfButton('#PolicyDetailPayments-PolicyDetailPaymentsScreen-ScheduledPaymentsCardTab');
	policyDetailPaymentsScreenTotalScheduledPayments = PcfTextInput('#PolicyDetailPayments-PolicyDetailPaymentsScreen-TotalScheduledPayments');
	policyDetailPaymentsScreenUnbilledBalance = PcfTextInput('#PolicyDetailPayments-PolicyDetailPaymentsScreen-UnbilledBalance');
	policyDetailPaymentsScreen_msgs = PcfButton('#PolicyDetailPayments-PolicyDetailPaymentsScreen-_msgs');
	policyDetailPaymentsPolicyDetailPayments_UpLink = PcfButton('#PolicyDetailPayments-PolicyDetailPayments_UpLink');
	policyDetailPayments_Paging = PcfButton('#PolicyDetailPayments-_Paging');
	policyDetailPayments__crumb__ = PcfComponent('#PolicyDetailPayments-__crumb__');
}
