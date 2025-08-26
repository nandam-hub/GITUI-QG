import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class AccountsTabBar {
	accountsTab_ExpandButton = PcfComponent('#TabBar-AccountsTab > div.gw-action--expand-button');
	accountsTab_AccountNumberSearchInput = PcfTextInput('#TabBar-AccountsTab-AccountNumberSearchItem > div');
    accountsTab_AccountNumber_SearchItem_Icon = PcfButton("#TabBar-AccountsTab-AccountNumberSearchItem_Button>span.gw-icon");
	accountsTabAccountNumberSearchItem = PcfComponent('#TabBar-AccountsTab-AccountNumberSearchItem');
	tabBarAccountsTab = PcfComponent('#TabBar-AccountsTab');
	tabBarWidgetmoreoptions = PcfComponent('#TabBarWidget--more-options');
}
