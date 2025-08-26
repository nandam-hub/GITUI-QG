import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class TeamGroupSummary {
	teamGroupSummaryScreenAsOf = PcfTextInput('#TeamGroupSummary-TeamGroupSummaryScreen-AsOf');
	teamGroupSummaryScreenGroupStatisticsLV = PcfListView('#TeamGroupSummary-TeamGroupSummaryScreen-GroupStatisticsLV');
	teamGroupSummaryScreenPrintButton = PcfButton('#TeamGroupSummary-TeamGroupSummaryScreen-PrintButton');
	teamGroupSummaryScreen_msgs = PcfButton('#TeamGroupSummary-TeamGroupSummaryScreen-_msgs');
	teamGroupSummaryTeamGroupSummary_UpLink = PcfButton('#TeamGroupSummary-TeamGroupSummary_UpLink');
	teamGroupSummary_Paging = PcfButton('#TeamGroupSummary-_Paging');
	teamGroupSummary__crumb__ = PcfComponent('#TeamGroupSummary-__crumb__');
}
