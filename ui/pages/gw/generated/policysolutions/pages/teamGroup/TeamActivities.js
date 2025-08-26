import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class TeamActivities {
	teamActivitiesScreenTeamActivitiesLV = PcfListView('#TeamActivities-TeamActivitiesScreen-TeamActivitiesLV');
	teamActivitiesLV_tbTeamGroupActivities_Assign = PcfButton('#TeamActivities-TeamActivitiesScreen-TeamActivitiesLV_tb-TeamGroupActivities_Assign');
	teamActivitiesScreen_msgs = PcfButton('#TeamActivities-TeamActivitiesScreen-_msgs');
	teamActivitiesScreenFederatedTeamActivitiesLV = PcfListView('#TeamActivities-TeamActivitiesScreen-FederatedTeamActivitiesLV');
	federatedTeamActivitiesLV_tbTeamGroupActivities_Assign = PcfButton('#TeamActivities-TeamActivitiesScreen-FederatedTeamActivitiesLV_tb-TeamGroupActivities_Assign');
	teamActivitiesTeamActivities_UpLink = PcfButton('#TeamActivities-TeamActivities_UpLink');
	teamActivities_Paging = PcfButton('#TeamActivities-_Paging');
	teamActivities__crumb__ = PcfComponent('#TeamActivities-__crumb__');
}
