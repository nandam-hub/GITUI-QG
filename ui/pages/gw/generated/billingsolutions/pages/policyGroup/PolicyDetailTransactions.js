import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class PolicyDetailTransactions {
	policyDetailJournalScreenArchivedAlert = PcfButton('#PolicyDetailTransactions-PolicyDetailJournalScreen-ArchivedAlert');
	policyDetailTransactionsPolicyDetailJournalScreenArchivedAlertCloseBtn = PcfButton('#PolicyDetailTransactions-PolicyDetailJournalScreen-ArchivedAlert-CloseBtn');
	policyDetailJournalScreenTransactionDetailsLV = PcfListView('#PolicyDetailTransactions-PolicyDetailJournalScreen-TransactionDetailsLV');
	policyDetailJournalScreen_msgs = PcfButton('#PolicyDetailTransactions-PolicyDetailJournalScreen-_msgs');
	policyDetailTransactionsPolicyDetailTransactions_UpLink = PcfButton('#PolicyDetailTransactions-PolicyDetailTransactions_UpLink');
	policyDetailTransactions_Paging = PcfButton('#PolicyDetailTransactions-_Paging');
	policyDetailTransactions__crumb__ = PcfComponent('#PolicyDetailTransactions-__crumb__');
}
