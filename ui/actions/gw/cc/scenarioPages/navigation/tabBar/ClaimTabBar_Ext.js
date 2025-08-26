import { PcfComponent, PcfTextInput } from '@gtui/gt-ui-framework';
import { ClaimTabBar} from '../../../../../../pages/gw/generated/claimsolutions/pages/navigation/tabBar/ClaimTabBar'

export class ClaimTabBar_Ext extends ClaimTabBar{
	tabBarClaimChevron= PcfComponent('#TabBar-ClaimTab > div:nth-child(3)');
	claimTabClaimTab_FNOLWizard = PcfComponent('#TabBar-ClaimTab-ClaimTab_FNOLWizard');
	claimTabClaimTab_FindClaim = PcfTextInput('#TabBar-ClaimTab-ClaimTab_FindClaim');
	claimTabSearch = PcfComponent('#TabBar-ClaimTab-ClaimTab_FindClaim_Button')
}