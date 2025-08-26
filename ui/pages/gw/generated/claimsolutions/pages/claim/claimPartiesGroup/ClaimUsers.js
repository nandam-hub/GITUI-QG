import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ClaimUsers {
	claimUserDetailDVClaimUserAssignmentsLV = PcfListView('#ClaimUsers-ClaimUsersScreen-ClaimUserDetailDV-ClaimUserAssignmentsLV');
	claimUserDetailDVEditableClaimUserRolesLV = PcfListView('#ClaimUsers-ClaimUsersScreen-ClaimUserDetailDV-EditableClaimUserRolesLV');
	editableClaimUserRolesLV_tbAdd = PcfButton('#ClaimUsers-ClaimUsersScreen-ClaimUserDetailDV-EditableClaimUserRolesLV_tb-Add');
	editableClaimUserRolesLV_tbRemove = PcfButton('#ClaimUsers-ClaimUsersScreen-ClaimUserDetailDV-EditableClaimUserRolesLV_tb-Remove');
	claimUserDetailDV_tbCancel = PcfButton('#ClaimUsers-ClaimUsersScreen-ClaimUserDetailDV_tb-Cancel');
	claimUserDetailDV_tbEdit = PcfButton('#ClaimUsers-ClaimUsersScreen-ClaimUserDetailDV_tb-Edit');
	claimUserDetailDV_tbUpdate = PcfButton('#ClaimUsers-ClaimUsersScreen-ClaimUserDetailDV_tb-Update');
	claimUsersScreenClaimUsersLV = PcfListView('#ClaimUsers-ClaimUsersScreen-ClaimUsersLV');
	claimUsersScreenClaimUsers_AddUserButton = PcfButton('#ClaimUsers-ClaimUsersScreen-ClaimUsers_AddUserButton');
	claimUsersScreenClaimUsers_ButtonButton = PcfButton('#ClaimUsers-ClaimUsersScreen-ClaimUsers_ButtonButton');
	claimUsersScreenUserDetailsCardTab = PcfButton('#ClaimUsers-ClaimUsersScreen-UserDetailsCardTab');
	claimUsersScreen_msgs = PcfButton('#ClaimUsers-ClaimUsersScreen-_msgs');
	claimUsersClaimUsers_UpLink = PcfButton('#ClaimUsers-ClaimUsers_UpLink');
	claimUsers_Paging = PcfButton('#ClaimUsers-_Paging');
	claimUsers__crumb__ = PcfComponent('#ClaimUsers-__crumb__');
}
