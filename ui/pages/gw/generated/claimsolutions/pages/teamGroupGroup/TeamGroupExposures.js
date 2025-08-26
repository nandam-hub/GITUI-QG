import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class TeamGroupExposures {
	teamGroupExposuresScreenTeamExposuresLV = PcfListView('#TeamGroupExposures-TeamGroupExposuresScreen-TeamExposuresLV');
	teamGroupExposuresScreenTeamGroupExposures_Assign = PcfButton('#TeamGroupExposures-TeamGroupExposuresScreen-TeamGroupExposures_Assign');
	teamGroupExposuresScreenTeamGroupExposures_Print = PcfButton('#TeamGroupExposures-TeamGroupExposuresScreen-TeamGroupExposures_Print');
	teamGroupExposuresScreen_msgs = PcfButton('#TeamGroupExposures-TeamGroupExposuresScreen-_msgs');
	teamGroupExposuresTeamGroupExposures_UpLink = PcfButton('#TeamGroupExposures-TeamGroupExposures_UpLink');
	teamGroupExposures_Paging = PcfButton('#TeamGroupExposures-_Paging');
	teamGroupExposures__crumb__ = PcfComponent('#TeamGroupExposures-__crumb__');
}
