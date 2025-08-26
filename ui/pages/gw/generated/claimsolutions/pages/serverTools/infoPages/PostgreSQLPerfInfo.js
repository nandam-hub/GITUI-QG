import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class PostgreSQLPerfInfo {
	postgreSQLPerfInfoScreenCancelBatch = PcfButton('#PostgreSQLPerfInfo-PostgreSQLPerfInfoScreen-CancelBatch');
	postgreSQLPerfInfoScreenLogFilesLV = PcfListView('#PostgreSQLPerfInfo-PostgreSQLPerfInfoScreen-LogFilesLV');
	postgreSQLPerfInfoScreenPerfDownloadLV = PcfListView('#PostgreSQLPerfInfo-PostgreSQLPerfInfoScreen-PerfDownloadLV');
	postgreSQLPerfInfoPostgreSQLPerfInfoScreenPerfDownloadLV_tbToolbarButton = PcfButton('#PostgreSQLPerfInfo-PostgreSQLPerfInfoScreen-PerfDownloadLV_tb-ToolbarButton');
	reportOptionsDVIncludeDatabaseStatistics = PcfCheckBox('#PostgreSQLPerfInfo-PostgreSQLPerfInfoScreen-ReportOptionsDV-IncludeDatabaseStatistics');
	reportOptionsDVReadAutoExplainPlans = PcfCheckBox('#PostgreSQLPerfInfo-PostgreSQLPerfInfoScreen-ReportOptionsDV-ReadAutoExplainPlans');
	postgreSQLPerfInfoScreenSubmitBatch = PcfButton('#PostgreSQLPerfInfo-PostgreSQLPerfInfoScreen-SubmitBatch');
	postgreSQLPerfInfoScreen_msgs = PcfButton('#PostgreSQLPerfInfo-PostgreSQLPerfInfoScreen-_msgs');
	postgreSQLPerfInfoScreenbatchProgress = PcfTextInput('#PostgreSQLPerfInfo-PostgreSQLPerfInfoScreen-batchProgress');
	postgreSQLPerfInfoPostgreSQLPerfInfo_UpLink = PcfButton('#PostgreSQLPerfInfo-PostgreSQLPerfInfo_UpLink');
	postgreSQLPerfInfo_Paging = PcfButton('#PostgreSQLPerfInfo-_Paging');
	postgreSQLPerfInfo__crumb__ = PcfComponent('#PostgreSQLPerfInfo-__crumb__');
}
