import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewGroup {
	newGroupDetailScreenCancel = PcfButton('#NewGroup-NewGroupDetailScreen-Cancel');
	newGroupDetailScreenEdit = PcfButton('#NewGroup-NewGroupDetailScreen-Edit');
	groupDetailDVGroupUsersLV = PcfListView('#NewGroup-NewGroupDetailScreen-GroupDetailDV-GroupUsersLV');
	groupUsersLV_tbAdd = PcfButton('#NewGroup-NewGroupDetailScreen-GroupDetailDV-GroupUsersLV_tb-Add');
	groupUsersLV_tbGroupDetailDV_ClearBackupUserButton = PcfButton('#NewGroup-NewGroupDetailScreen-GroupDetailDV-GroupUsersLV_tb-GroupDetailDV_ClearBackupUserButton');
	groupUsersLV_tbRemove = PcfButton('#NewGroup-NewGroupDetailScreen-GroupDetailDV-GroupUsersLV_tb-Remove');
	groupDetailDVName = PcfTextInput('#NewGroup-NewGroupDetailScreen-GroupDetailDV-Name');
	groupDetailDVNameKanji = PcfTextInput('#NewGroup-NewGroupDetailScreen-GroupDetailDV-NameKanji');
	groupDetailDVParent = PcfButton('#NewGroup-NewGroupDetailScreen-GroupDetailDV-Parent');
	parentGroupPickerMenuIcon = PcfButton('#NewGroup-NewGroupDetailScreen-GroupDetailDV-Parent-GroupPickerMenuIcon');
	parentGroupSearchMenuIcon = PcfButton('#NewGroup-NewGroupDetailScreen-GroupDetailDV-Parent-GroupSearchMenuIcon');
	groupDetailDVSecurityZone = PcfButton('#NewGroup-NewGroupDetailScreen-GroupDetailDV-SecurityZone');
	groupDetailDVSupervisor = PcfButton('#NewGroup-NewGroupDetailScreen-GroupDetailDV-Supervisor');
	supervisorSupervisorUserSearchMenuItem = PcfComponent('#NewGroup-NewGroupDetailScreen-GroupDetailDV-Supervisor-SupervisorUserSearchMenuItem');
	supervisorSupervisorUserSelectMenuItem = PcfComponent('#NewGroup-NewGroupDetailScreen-GroupDetailDV-Supervisor-SupervisorUserSelectMenuItem');
	newGroupNewGroupDetailScreenLocalizedValuesDVLocalizedValuesLV = PcfListView('#NewGroup-NewGroupDetailScreen-LocalizedValuesDV-LocalizedValuesLV');
	newGroupDetailScreenUpdate = PcfButton('#NewGroup-NewGroupDetailScreen-Update');
	newGroupDetailScreen_msgs = PcfButton('#NewGroup-NewGroupDetailScreen-_msgs');
	newGroupNewGroup_UpLink = PcfButton('#NewGroup-NewGroup_UpLink');
	newGroup_Paging = PcfButton('#NewGroup-_Paging');
	newGroup__crumb__ = PcfComponent('#NewGroup-__crumb__');
}
