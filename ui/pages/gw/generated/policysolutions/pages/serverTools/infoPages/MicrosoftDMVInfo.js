import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class MicrosoftDMVInfo {
	microsoftDMVInfoScreenCancelBatch = PcfButton('#MicrosoftDMVInfo-MicrosoftDMVInfoScreen-CancelBatch');
	dBCatStatsRequestDVFetchQueryStoreRows = PcfCheckBox('#MicrosoftDMVInfo-MicrosoftDMVInfoScreen-DBCatStatsRequestDV-FetchQueryStoreRows');
	dBCatStatsRequestDVIncludeDatabaseStatistics = PcfCheckBox('#MicrosoftDMVInfo-MicrosoftDMVInfoScreen-DBCatStatsRequestDV-IncludeDatabaseStatistics');
	microsoftDMVInfoScreenIntervalsLV = PcfListView('#MicrosoftDMVInfo-MicrosoftDMVInfoScreen-IntervalsLV');
	microsoftDMVInfoScreenPerfDownloadLV = PcfListView('#MicrosoftDMVInfo-MicrosoftDMVInfoScreen-PerfDownloadLV');
	perfDownloadLV_tbToolbarButton = PcfButton('#MicrosoftDMVInfo-MicrosoftDMVInfoScreen-PerfDownloadLV_tb-ToolbarButton');
	microsoftDMVInfoScreenSubmitBatch = PcfButton('#MicrosoftDMVInfo-MicrosoftDMVInfoScreen-SubmitBatch');
	microsoftDMVInfoScreen_msgs = PcfButton('#MicrosoftDMVInfo-MicrosoftDMVInfoScreen-_msgs');
	microsoftDMVInfoScreenbatchProgress = PcfTextInput('#MicrosoftDMVInfo-MicrosoftDMVInfoScreen-batchProgress');
	snapshotPanelTBRefreshIntervals = PcfButton('#MicrosoftDMVInfo-MicrosoftDMVInfoScreen-snapshotPanelTB-RefreshIntervals');
	microsoftDMVInfoMicrosoftDMVInfo_UpLink = PcfButton('#MicrosoftDMVInfo-MicrosoftDMVInfo_UpLink');
	microsoftDMVInfo_Paging = PcfButton('#MicrosoftDMVInfo-_Paging');
	microsoftDMVInfo__crumb__ = PcfComponent('#MicrosoftDMVInfo-__crumb__');
}
