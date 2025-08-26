import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ClusterComponents {
	clusterComponentsClusterComponents_UpLink = PcfButton('#ClusterComponents-ClusterComponents_UpLink');
	clusterComponentsComponentsLV = PcfListView('#ClusterComponents-ComponentsLV');
	clusterComponentsDownloadReport = PcfButton('#ClusterComponents-DownloadReport');
	clusterComponentsFilterByComponent = PcfButton('#ClusterComponents-FilterByComponent');
	clusterComponentsRefreshButton = PcfButton('#ClusterComponents-RefreshButton');
	clusterComponentsStateFilter = PcfSelectInput('#ClusterComponents-StateFilter');
	clusterComponentsTypeFilter = PcfSelectInput('#ClusterComponents-TypeFilter');
	clusterComponents_Paging = PcfButton('#ClusterComponents-_Paging');
	clusterComponents__crumb__ = PcfComponent('#ClusterComponents-__crumb__');
	clusterComponents_msgs = PcfButton('#ClusterComponents-_msgs');
}
