import { PcfButton, PcfTextInput } from '@gtui/gt-ui-framework';
import { AccountsTabBar } from '../../../../../../ui/pages/gw/generated/billingsolutions/pages/navigation/tabBar/AccountsTabBar'
export class AccountsTabBar_Ext extends AccountsTabBar {
	accountsTab_ExpandButton = PcfButton('#TabBar-AccountsTab > div.gw-action--expand-button > div')
	accountSearch = PcfTextInput('#TabBar-AccountsTab-AccountNumberSearchItem > div')
	accountSearch_Button = PcfButton('#TabBar-AccountsTab-AccountNumberSearchItem_Button')
}