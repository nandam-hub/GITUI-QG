import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ClaimKeyMetrics {
	claimKeyMetricsScreenMetricLV = PcfListView('#ClaimKeyMetrics-ClaimKeyMetricsScreen-MetricLV');
	claimKeyMetricsScreen_msgs = PcfButton('#ClaimKeyMetrics-ClaimKeyMetricsScreen-_msgs');
	claimKeyMetricsClaimKeyMetrics_UpLink = PcfButton('#ClaimKeyMetrics-ClaimKeyMetrics_UpLink');
	claimKeyMetrics_Paging = PcfButton('#ClaimKeyMetrics-_Paging');
	claimKeyMetrics__crumb__ = PcfComponent('#ClaimKeyMetrics-__crumb__');
}
