import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AccountDetailTransactions {
	accountDetailTransactionsScreenAccountDetailTransactionsLV = PcfListView('#AccountDetailTransactions-AccountDetailTransactionsScreen-AccountDetailTransactionsLV');
	accountDetailTransactionsScreenMissingArchivedTransactions = PcfButton('#AccountDetailTransactions-AccountDetailTransactionsScreen-MissingArchivedTransactions');
	missingArchivedTransactionsCloseBtn = PcfButton('#AccountDetailTransactions-AccountDetailTransactionsScreen-MissingArchivedTransactions-CloseBtn');
	transactionsToolbarTransactionsFilter = PcfSelectInput('#AccountDetailTransactions-AccountDetailTransactionsScreen-TransactionsToolbar-TransactionsFilter');
	accountDetailTransactionsScreen_msgs = PcfButton('#AccountDetailTransactions-AccountDetailTransactionsScreen-_msgs');
	accountDetailTransactionsAccountDetailTransactions_UpLink = PcfButton('#AccountDetailTransactions-AccountDetailTransactions_UpLink');
	accountDetailTransactions_Paging = PcfButton('#AccountDetailTransactions-_Paging');
	accountDetailTransactions__crumb__ = PcfComponent('#AccountDetailTransactions-__crumb__');
}
