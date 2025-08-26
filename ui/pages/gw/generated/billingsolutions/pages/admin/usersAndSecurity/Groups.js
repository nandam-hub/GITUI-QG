import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class Groups {
	groupsScreenGroupsLV = PcfListView('#Groups-GroupsScreen-GroupsLV');
	groupsLV_tbGroups_NewGroupButton = PcfButton('#Groups-GroupsScreen-GroupsLV_tb-Groups_NewGroupButton');
	groupsScreen_msgs = PcfButton('#Groups-GroupsScreen-_msgs');
	groupsGroups_UpLink = PcfButton('#Groups-Groups_UpLink');
	groups_Paging = PcfButton('#Groups-_Paging');
	groups__crumb__ = PcfComponent('#Groups-__crumb__');
}
