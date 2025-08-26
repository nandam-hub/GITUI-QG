import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewRole {
	newRoleNewRole_UpLink = PcfButton('#NewRole-NewRole_UpLink');
	roleDetailScreenCancel = PcfButton('#NewRole-RoleDetailScreen-Cancel');
	roleDetailScreenEdit = PcfButton('#NewRole-RoleDetailScreen-Edit');
	newRoleRoleDetailScreenLocalizedValuesDVLocalizedValuesLV = PcfListView('#NewRole-RoleDetailScreen-LocalizedValuesDV-LocalizedValuesLV');
	roleDetailDVDescription = PcfTextInput('#NewRole-RoleDetailScreen-RoleDetailDV-Description');
	roleDetailDVName = PcfTextInput('#NewRole-RoleDetailScreen-RoleDetailDV-Name');
	roleDetailDVRolePrivilegesLV = PcfListView('#NewRole-RoleDetailScreen-RoleDetailDV-RolePrivilegesLV');
	rolePrivilegesLV_tbAdd = PcfButton('#NewRole-RoleDetailScreen-RoleDetailDV-RolePrivilegesLV_tb-Add');
	rolePrivilegesLV_tbRemove = PcfButton('#NewRole-RoleDetailScreen-RoleDetailDV-RolePrivilegesLV_tb-Remove');
	roleDetailScreenRoleDetail_RolesCardTab = PcfButton('#NewRole-RoleDetailScreen-RoleDetail_RolesCardTab');
	roleDetailScreenRoleDetail_UserCardTab = PcfButton('#NewRole-RoleDetailScreen-RoleDetail_UserCardTab');
	roleDetailScreenRoleUsersLV = PcfListView('#NewRole-RoleDetailScreen-RoleUsersLV');
	roleUsersLV_tbAdd = PcfButton('#NewRole-RoleDetailScreen-RoleUsersLV_tb-Add');
	roleUsersLV_tbRemove = PcfButton('#NewRole-RoleDetailScreen-RoleUsersLV_tb-Remove');
	roleDetailScreenUpdate = PcfButton('#NewRole-RoleDetailScreen-Update');
	roleDetailScreen_msgs = PcfButton('#NewRole-RoleDetailScreen-_msgs');
	newRole_Paging = PcfButton('#NewRole-_Paging');
	newRole__crumb__ = PcfComponent('#NewRole-__crumb__');
}
