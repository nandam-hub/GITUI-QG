import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class DesktopAccounts {
	desktopAccountsLVAccountNumberHeader = PcfButton('#DesktopAccounts-DesktopAccountsScreen-DesktopAccountsLV-AccountNumberHeader');
	desktopAccountsLVAddressHeader = PcfButton('#DesktopAccounts-DesktopAccountsScreen-DesktopAccountsLV-AddressHeader');
	desktopAccountsLVNameHeader = PcfButton('#DesktopAccounts-DesktopAccountsScreen-DesktopAccountsLV-NameHeader');
	desktopAccountsLVStatusHeader = PcfButton('#DesktopAccounts-DesktopAccountsScreen-DesktopAccountsLV-StatusHeader');
	desktopAccountsLV_ListPaging = PcfButton('#DesktopAccounts-DesktopAccountsScreen-DesktopAccountsLV-_ListPaging');
	desktopAccountsLVaccountsFilter = PcfSelectInput('#DesktopAccounts-DesktopAccountsScreen-DesktopAccountsLV-accountsFilter');
	desktopAccountsLVaccountFilter = PcfSelectInput('#DesktopAccounts-DesktopAccountsScreen-DesktopAccountsLV-accountFilter');
	desktopAccountsScreen_msgs = PcfButton('#DesktopAccounts-DesktopAccountsScreen-_msgs');
	desktopAccountsDesktopAccounts_UpLink = PcfButton('#DesktopAccounts-DesktopAccounts_UpLink');
	desktopAccounts_Paging = PcfButton('#DesktopAccounts-_Paging');
	desktopAccounts__crumb__ = PcfComponent('#DesktopAccounts-__crumb__');
}
