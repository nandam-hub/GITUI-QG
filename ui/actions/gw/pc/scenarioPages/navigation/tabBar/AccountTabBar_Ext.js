import { PcfButton,PcfTextInput } from '@gtui/gt-ui-framework';
import { AccountTabBar } from '../../../../../../pages/gw/generated/policysolutions/pages/navigation/tabBar/AccountTabBar';

export class AccountTabBar_Ext extends AccountTabBar{
	accountTab = PcfButton('#TabBar-AccountTab > div.gw-action--expand-button > div')
    accountSearch =PcfTextInput('#TabBar-AccountTab-AccountTab_AccountNumberSearchItem > div')
	accountSearch_Button = PcfButton('#TabBar-AccountTab-AccountTab_AccountNumberSearchItem_Button')
}