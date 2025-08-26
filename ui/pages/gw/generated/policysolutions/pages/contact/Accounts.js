import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class Accounts {
	contactFile_AccountsAssociatedAccountsLV = PcfListView('#ContactFile_Accounts-AssociatedAccountsLV');
	contactFileInfoBarContactLabel = PcfButton('#ContactFile_Accounts-ContactFileInfoBar-ContactLabel');
	contactFileInfoBarContactName = PcfButton('#ContactFile_Accounts-ContactFileInfoBar-ContactName');
	contactFile_AccountsContactFile_Accounts_UpLink = PcfButton('#ContactFile_Accounts-ContactFile_Accounts_UpLink');
	contactFile_Accounts_Paging = PcfButton('#ContactFile_Accounts-_Paging');
	contactFile_Accounts__crumb__ = PcfComponent('#ContactFile_Accounts-__crumb__');
	contactFile_Accounts_msgs = PcfButton('#ContactFile_Accounts-_msgs');
}
