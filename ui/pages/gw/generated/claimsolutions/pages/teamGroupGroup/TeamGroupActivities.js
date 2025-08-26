import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class TeamGroupActivities {
	teamGroupActivitiesScreenTeamGroupActivitiesLV = PcfListView('#TeamGroupActivities-TeamGroupActivitiesScreen-TeamGroupActivitiesLV');
	teamGroupActivitiesScreenTeamGroupActivities_Assign = PcfButton('#TeamGroupActivities-TeamGroupActivitiesScreen-TeamGroupActivities_Assign');
	teamGroupActivitiesScreenTeamGroupActivities_Print = PcfButton('#TeamGroupActivities-TeamGroupActivitiesScreen-TeamGroupActivities_Print');
	teamGroupActivitiesScreen_msgs = PcfButton('#TeamGroupActivities-TeamGroupActivitiesScreen-_msgs');
	teamGroupActivitiesTeamGroupActivities_UpLink = PcfButton('#TeamGroupActivities-TeamGroupActivities_UpLink');
	teamGroupActivities_Paging = PcfButton('#TeamGroupActivities-_Paging');
	teamGroupActivities__crumb__ = PcfComponent('#TeamGroupActivities-__crumb__');
}
