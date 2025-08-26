import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AccountPaymentRequests {
	accountDetailPaymentsScreenRequestsListLV = PcfListView('#AccountPaymentRequests-AccountDetailPaymentsScreen-RequestsListLV');
	requestsListLV_tbPaymentsReceivedFilter = PcfSelectInput('#AccountPaymentRequests-AccountDetailPaymentsScreen-RequestsListLV_tb-PaymentsReceivedFilter');
	requestsListLV_tbRequestsFilter = PcfSelectInput('#AccountPaymentRequests-AccountDetailPaymentsScreen-RequestsListLV_tb-RequestsFilter');
	requestsListLV_tbcloseRequest = PcfButton('#AccountPaymentRequests-AccountDetailPaymentsScreen-RequestsListLV_tb-closeRequest');
	requestsListLV_tbeditRequest = PcfButton('#AccountPaymentRequests-AccountDetailPaymentsScreen-RequestsListLV_tb-editRequest');
	accountPaymentRequestsAccountDetailPaymentsScreen_msgs = PcfButton('#AccountPaymentRequests-AccountDetailPaymentsScreen-_msgs');
	accountPaymentRequestsAccountPaymentRequests_UpLink = PcfButton('#AccountPaymentRequests-AccountPaymentRequests_UpLink');
	accountPaymentRequests_Paging = PcfButton('#AccountPaymentRequests-_Paging');
	accountPaymentRequests__crumb__ = PcfComponent('#AccountPaymentRequests-__crumb__');
}
