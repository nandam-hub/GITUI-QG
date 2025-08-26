import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class Roles {
	rolesScreenRolesLV = PcfListView('#Roles-RolesScreen-RolesLV');
	rolesLV_tbRoles_DeleteButton = PcfButton('#Roles-RolesScreen-RolesLV_tb-Roles_DeleteButton');
	rolesLV_tbRoles_NewRoleButton = PcfButton('#Roles-RolesScreen-RolesLV_tb-Roles_NewRoleButton');
	rolesScreen_msgs = PcfButton('#Roles-RolesScreen-_msgs');
	rolesRoles_UpLink = PcfButton('#Roles-Roles_UpLink');
	roles_Paging = PcfButton('#Roles-_Paging');
	roles__crumb__ = PcfComponent('#Roles-__crumb__');
}
