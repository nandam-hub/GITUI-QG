import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DashboardCurrentFinancials {
	dashboardCurrentFinancialsScreenCurrentFinancialsByCoverageTypeLV = PcfListView('#DashboardCurrentFinancials-DashboardCurrentFinancialsScreen-CurrentFinancialsByCoverageTypeLV');
	dashboardCurrentFinancialsScreenCurrentFinancialsByLOBLV = PcfListView('#DashboardCurrentFinancials-DashboardCurrentFinancialsScreen-CurrentFinancialsByLOBLV');
	dashboardCurrentFinancialsScreenCurrentFinancialsByLossTypeLV = PcfListView('#DashboardCurrentFinancials-DashboardCurrentFinancialsScreen-CurrentFinancialsByLossTypeLV');
	dashboardCurrentFinancialsScreenCurrentFinancialsByOrgLevelLV = PcfListView('#DashboardCurrentFinancials-DashboardCurrentFinancialsScreen-CurrentFinancialsByOrgLevelLV');
	dashboardCurrentFinancialsScreenPrintButton = PcfButton('#DashboardCurrentFinancials-DashboardCurrentFinancialsScreen-PrintButton');
	dashboardCurrentFinancialsScreen_msgs = PcfButton('#DashboardCurrentFinancials-DashboardCurrentFinancialsScreen-_msgs');
	dashboardCurrentFinancialsScreendollarTip = PcfTextInput('#DashboardCurrentFinancials-DashboardCurrentFinancialsScreen-dollarTip');
	dashboardCurrentFinancialsScreenlabel = PcfTextInput('#DashboardCurrentFinancials-DashboardCurrentFinancialsScreen-label');
	dashboardCurrentFinancialsDashboardCurrentFinancials_UpLink = PcfButton('#DashboardCurrentFinancials-DashboardCurrentFinancials_UpLink');
	dashboardCurrentFinancials_Paging = PcfButton('#DashboardCurrentFinancials-_Paging');
	dashboardCurrentFinancials__crumb__ = PcfComponent('#DashboardCurrentFinancials-__crumb__');
}
