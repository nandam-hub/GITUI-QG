import { PcfButton, PcfTextInput} from '@gtui/gt-ui-framework';
import {PoliciesTabBar} from "../../../../../../pages/gw/generated/billingsolutions/pages/navigation/tabBar/PoliciesTabBar"

export class PoliciesTabBar_Ext extends PoliciesTabBar{
	tabBarPolicyDropDown = PcfButton('#TabBar-PoliciesTab > div.gw-action--expand-button');
	searchButton = PcfButton('#TabBar-PoliciesTab-PolicyNumberSearchItem_Button');
    tabBarpolicyNumberSearchItem = PcfTextInput('#TabBar-PoliciesTab-PolicyNumberSearchItem');
}

