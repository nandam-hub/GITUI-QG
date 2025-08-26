import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class TeamGroupClaims {
	teamGroupClaimsScreenTeamClaimsLV = PcfListView('#TeamGroupClaims-TeamGroupClaimsScreen-TeamClaimsLV');
	teamGroupClaimsScreenTeamGroupClaims_Assign = PcfButton('#TeamGroupClaims-TeamGroupClaimsScreen-TeamGroupClaims_Assign');
	teamGroupClaimsScreenTeamGroupClaims_Print = PcfButton('#TeamGroupClaims-TeamGroupClaimsScreen-TeamGroupClaims_Print');
	teamGroupClaimsScreenTeamGroupClaims_RemoveFlag = PcfButton('#TeamGroupClaims-TeamGroupClaimsScreen-TeamGroupClaims_RemoveFlag');
	teamGroupClaimsScreen_msgs = PcfButton('#TeamGroupClaims-TeamGroupClaimsScreen-_msgs');
	teamGroupClaimsTeamGroupClaims_UpLink = PcfButton('#TeamGroupClaims-TeamGroupClaims_UpLink');
	teamGroupClaims_Paging = PcfButton('#TeamGroupClaims-_Paging');
	teamGroupClaims__crumb__ = PcfComponent('#TeamGroupClaims-__crumb__');
}
