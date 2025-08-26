import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ServerPerformance {
	serverPerformanceScreenClearResultsButton = PcfButton('#ServerPerformance-ServerPerformanceScreen-ClearResultsButton');
	serverPerformanceScreenDisableButton = PcfButton('#ServerPerformance-ServerPerformanceScreen-DisableButton');
	serverPerformanceScreenEnableButton = PcfButton('#ServerPerformance-ServerPerformanceScreen-EnableButton');
	serverPerformanceScreenRawDataExportButton = PcfButton('#ServerPerformance-ServerPerformanceScreen-RawDataExportButton');
	serverPerformanceScreenRefreshButton = PcfButton('#ServerPerformance-ServerPerformanceScreen-RefreshButton');
	serverPerformanceScreenServerPerformanceLV = PcfListView('#ServerPerformance-ServerPerformanceScreen-ServerPerformanceLV');
	serverPerformanceScreenSummaryExportButton = PcfButton('#ServerPerformance-ServerPerformanceScreen-SummaryExportButton');
	serverPerformanceScreen_msgs = PcfButton('#ServerPerformance-ServerPerformanceScreen-_msgs');
	serverPerformanceServerPerformance_UpLink = PcfButton('#ServerPerformance-ServerPerformance_UpLink');
	serverPerformance_Paging = PcfButton('#ServerPerformance-_Paging');
	serverPerformance__crumb__ = PcfComponent('#ServerPerformance-__crumb__');
}
