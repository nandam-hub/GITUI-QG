import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AccountDetailJournal {
	accountDetailJournalAccountDetailJournal_UpLink = PcfButton('#AccountDetailJournal-AccountDetailJournal_UpLink');
	journalScreenPolicyArchivedAlert = PcfButton('#AccountDetailJournal-JournalScreen-PolicyArchivedAlert');
	policyArchivedAlertCloseBtn = PcfButton('#AccountDetailJournal-JournalScreen-PolicyArchivedAlert-CloseBtn');
	journalScreenTAccountOwnersLV = PcfListView('#AccountDetailJournal-JournalScreen-TAccountOwnersLV');
	journalScreenTransactionsLV = PcfListView('#AccountDetailJournal-JournalScreen-TransactionsLV');
	journalScreenTransactionsTab = PcfButton('#AccountDetailJournal-JournalScreen-TransactionsTab');
	journalScreen_msgs = PcfButton('#AccountDetailJournal-JournalScreen-_msgs');
	accountDetailJournal_Paging = PcfButton('#AccountDetailJournal-_Paging');
	accountDetailJournal__crumb__ = PcfComponent('#AccountDetailJournal-__crumb__');
}
