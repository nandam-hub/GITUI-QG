import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class TeamGroupAging {
	teamGroupAgingScreenAsOf = PcfTextInput('#TeamGroupAging-TeamGroupAgingScreen-AsOf');
	teamGroupAgingScreenGroupAgingStatisticsLV = PcfListView('#TeamGroupAging-TeamGroupAgingScreen-GroupAgingStatisticsLV');
	teamGroupAgingScreenPrintButton = PcfButton('#TeamGroupAging-TeamGroupAgingScreen-PrintButton');
	teamGroupAgingScreen_msgs = PcfButton('#TeamGroupAging-TeamGroupAgingScreen-_msgs');
	teamGroupAgingTeamGroupAging_UpLink = PcfButton('#TeamGroupAging-TeamGroupAging_UpLink');
	teamGroupAging_Paging = PcfButton('#TeamGroupAging-_Paging');
	teamGroupAging__crumb__ = PcfComponent('#TeamGroupAging-__crumb__');
}
