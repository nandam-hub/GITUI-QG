import { PcfComponent } from '@gtui/gt-ui-framework';
import { SearchTabBar } from '../../../../../../pages/gw/generated/policysolutions/pages/navigation/tabBar/SearchTabBar';

export class SearchTabBar_Ext extends SearchTabBar {
	tabBarSearchTab = PcfComponent('#TabBar-SearchTab > div:nth-child(3)');
}