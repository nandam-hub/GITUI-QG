import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DashboardClaimActivity {
	dashboardClaimActivityScreenClaimActivityByCoverageTypeLV = PcfListView('#DashboardClaimActivity-DashboardClaimActivityScreen-ClaimActivityByCoverageTypeLV');
	dashboardClaimActivityScreenClaimActivityByLOBLV = PcfListView('#DashboardClaimActivity-DashboardClaimActivityScreen-ClaimActivityByLOBLV');
	dashboardClaimActivityScreenClaimActivityByLossTypeLV = PcfListView('#DashboardClaimActivity-DashboardClaimActivityScreen-ClaimActivityByLossTypeLV');
	dashboardClaimActivityScreenClaimActivityByOrgLevelLV = PcfListView('#DashboardClaimActivity-DashboardClaimActivityScreen-ClaimActivityByOrgLevelLV');
	dashboardClaimActivityScreenPrintButton = PcfButton('#DashboardClaimActivity-DashboardClaimActivityScreen-PrintButton');
	dashboardClaimActivityScreen_msgs = PcfButton('#DashboardClaimActivity-DashboardClaimActivityScreen-_msgs');
	dashboardClaimActivityScreenlabel = PcfTextInput('#DashboardClaimActivity-DashboardClaimActivityScreen-label');
	dashboardClaimActivityDashboardClaimActivity_UpLink = PcfButton('#DashboardClaimActivity-DashboardClaimActivity_UpLink');
	dashboardClaimActivity_Paging = PcfButton('#DashboardClaimActivity-_Paging');
	dashboardClaimActivity__crumb__ = PcfComponent('#DashboardClaimActivity-__crumb__');
}
