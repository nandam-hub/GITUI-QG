import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class Roles {
	rolesScreenRolesLV = PcfListView('#Roles-RolesScreen-RolesLV');
	rolesScreenRoles_AddRoleButton = PcfButton('#Roles-RolesScreen-Roles_AddRoleButton');
	rolesScreenRoles_DeleteButton = PcfButton('#Roles-RolesScreen-Roles_DeleteButton');
	rolesScreen_msgs = PcfButton('#Roles-RolesScreen-_msgs');
	rolesRoles_UpLink = PcfButton('#Roles-Roles_UpLink');
	roles_Paging = PcfButton('#Roles-_Paging');
	roles__crumb__ = PcfComponent('#Roles-__crumb__');
}
