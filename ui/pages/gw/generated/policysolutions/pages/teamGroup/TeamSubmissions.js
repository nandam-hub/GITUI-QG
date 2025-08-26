import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class TeamSubmissions {
	teamSubmissionsScreenTeamSubmissionsLV = PcfListView('#TeamSubmissions-TeamSubmissionsScreen-TeamSubmissionsLV');
	teamSubmissionsTeamSubmissionsScreenTeamSubmissionsToolbarReassignmentButton = PcfButton('#TeamSubmissions-TeamSubmissionsScreen-TeamSubmissionsToolbar-ReassignmentButton');
	teamSubmissionsScreen_msgs = PcfButton('#TeamSubmissions-TeamSubmissionsScreen-_msgs');
	teamSubmissionsScreenFederatedTeamSubmissionsLV = PcfListView('#TeamSubmissions-TeamSubmissionsScreen-FederatedTeamSubmissionsLV');
	teamSubmissionsTeamSubmissions_UpLink = PcfButton('#TeamSubmissions-TeamSubmissions_UpLink');
	teamSubmissions_Paging = PcfButton('#TeamSubmissions-_Paging');
	teamSubmissions__crumb__ = PcfComponent('#TeamSubmissions-__crumb__');
}
