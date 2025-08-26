import { PcfComponent} from '@gtui/gt-ui-framework';
import { SearchTabBar} from '../../../../../../pages/gw/generated/claimsolutions/pages/navigation/tabBar/SearchTabBar'

export class SearchTabBar_Ext extends SearchTabBar{
	tabBarSearchTabChevron = PcfComponent('#TabBar-SearchTab > div:nth-child(3)');
	claimSearchesExpandButton = PcfComponent('#TabBar-SearchTab-Search_ClaimSearchesGroup > div.gw-action--expand-button');
}