import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DashboardPeriodFinancials {
	dashboardPeriodFinancialsScreenPeriodFinancialsByCoverageTypeLV = PcfListView('#DashboardPeriodFinancials-DashboardPeriodFinancialsScreen-PeriodFinancialsByCoverageTypeLV');
	dashboardPeriodFinancialsScreenPeriodFinancialsByLOBLV = PcfListView('#DashboardPeriodFinancials-DashboardPeriodFinancialsScreen-PeriodFinancialsByLOBLV');
	dashboardPeriodFinancialsScreenPeriodFinancialsByLossTypeLV = PcfListView('#DashboardPeriodFinancials-DashboardPeriodFinancialsScreen-PeriodFinancialsByLossTypeLV');
	dashboardPeriodFinancialsScreenPeriodFinancialsByOrgLevelLV = PcfListView('#DashboardPeriodFinancials-DashboardPeriodFinancialsScreen-PeriodFinancialsByOrgLevelLV');
	dashboardPeriodFinancialsScreenPrintButton = PcfButton('#DashboardPeriodFinancials-DashboardPeriodFinancialsScreen-PrintButton');
	dashboardPeriodFinancialsScreen_msgs = PcfButton('#DashboardPeriodFinancials-DashboardPeriodFinancialsScreen-_msgs');
	dashboardPeriodFinancialsScreendollarTip = PcfTextInput('#DashboardPeriodFinancials-DashboardPeriodFinancialsScreen-dollarTip');
	dashboardPeriodFinancialsScreenlabel = PcfTextInput('#DashboardPeriodFinancials-DashboardPeriodFinancialsScreen-label');
	dashboardPeriodFinancialsDashboardPeriodFinancials_UpLink = PcfButton('#DashboardPeriodFinancials-DashboardPeriodFinancials_UpLink');
	dashboardPeriodFinancials_Paging = PcfButton('#DashboardPeriodFinancials-_Paging');
	dashboardPeriodFinancials__crumb__ = PcfComponent('#DashboardPeriodFinancials-__crumb__');
}
