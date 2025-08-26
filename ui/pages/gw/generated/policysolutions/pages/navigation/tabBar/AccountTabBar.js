import { PcfComponent,PcfButton,PcfTextInput } from '@gtui/gt-ui-framework';
import { Selector } from 'testcafe';

export class AccountTabBar {
	accountTabAccountTab_AccountNumberSearchItem = PcfComponent('#TabBar-AccountTab-AccountTab_AccountNumberSearchItem');
	accountTabAccountTab_NewAccount = PcfComponent('#TabBar-AccountTab-AccountTab_NewAccount');
	tabBarAccountTab = PcfComponent('#TabBar-AccountTab');
	tabBarWidgetmoreoptions = PcfComponent('#TabBarWidget--more-options');
}
