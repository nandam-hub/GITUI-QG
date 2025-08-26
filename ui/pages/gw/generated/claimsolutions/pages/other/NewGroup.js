import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewGroup {
	newGroupDetailScreenCancel = PcfButton('#NewGroup-NewGroupDetailScreen-Cancel');
	newGroupDetailScreenEdit = PcfButton('#NewGroup-NewGroupDetailScreen-Edit');
	newGroupDetailDVGroupUsersLV = PcfListView('#NewGroup-NewGroupDetailScreen-NewGroupDetailDV-GroupUsersLV');
	groupUsersLV_tbAdd = PcfButton('#NewGroup-NewGroupDetailScreen-NewGroupDetailDV-GroupUsersLV_tb-Add');
	groupUsersLV_tbRemove = PcfButton('#NewGroup-NewGroupDetailScreen-NewGroupDetailDV-GroupUsersLV_tb-Remove');
	newGroupDetailDVLoadFactor = PcfTextInput('#NewGroup-NewGroupDetailScreen-NewGroupDetailDV-LoadFactor');
	newGroupDetailDVLocalizedValuesLV = PcfListView('#NewGroup-NewGroupDetailScreen-NewGroupDetailDV-LocalizedValuesLV');
	newGroupNewGroupDetailScreenNewGroupDetailDVLocalizedValuesLV_tbAdd = PcfButton('#NewGroup-NewGroupDetailScreen-NewGroupDetailDV-LocalizedValuesLV_tb-Add');
	newGroupNewGroupDetailScreenNewGroupDetailDVLocalizedValuesLV_tbRemove = PcfButton('#NewGroup-NewGroupDetailScreen-NewGroupDetailDV-LocalizedValuesLV_tb-Remove');
	newGroupDetailDVName = PcfTextInput('#NewGroup-NewGroupDetailScreen-NewGroupDetailDV-Name');
	newGroupDetailDVNameKanji = PcfTextInput('#NewGroup-NewGroupDetailScreen-NewGroupDetailDV-NameKanji');
	parentGroupPickerMenuIcon = PcfButton('#NewGroup-NewGroupDetailScreen-NewGroupDetailDV-Parent-GroupPickerMenuIcon');
	parentGroupSearchMenuIcon = PcfButton('#NewGroup-NewGroupDetailScreen-NewGroupDetailDV-Parent-GroupSearchMenuIcon');
	newGroupDetailDVSecurityZone = PcfSelectInput('#NewGroup-NewGroupDetailScreen-NewGroupDetailDV-SecurityZone');
	supervisorSupervisorUserSearchMenuItem = PcfComponent('#NewGroup-NewGroupDetailScreen-NewGroupDetailDV-Supervisor-SupervisorUserSearchMenuItem');
	supervisorSupervisorUserSelectMenuItem = PcfComponent('#NewGroup-NewGroupDetailScreen-NewGroupDetailDV-Supervisor-SupervisorUserSelectMenuItem');
	newGroupDetailDVType = PcfSelectInput('#NewGroup-NewGroupDetailScreen-NewGroupDetailDV-Type');
	newGroupDetailScreenUpdate = PcfButton('#NewGroup-NewGroupDetailScreen-Update');
	newGroupDetailScreen_msgs = PcfButton('#NewGroup-NewGroupDetailScreen-_msgs');
	newGroupNewGroup_UpLink = PcfButton('#NewGroup-NewGroup_UpLink');
	newGroup_Paging = PcfButton('#NewGroup-_Paging');
	newGroup__crumb__ = PcfComponent('#NewGroup-__crumb__');
}
