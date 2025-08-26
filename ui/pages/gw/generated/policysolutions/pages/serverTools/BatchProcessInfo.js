import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class BatchProcessInfo {
	batchProcessInfoBatchProcessInfo_UpLink = PcfButton('#BatchProcessInfo-BatchProcessInfo_UpLink');
	batchProcessScreenBatchProcessesLV = PcfListView('#BatchProcessInfo-BatchProcessScreen-BatchProcessesLV');
	batchProcessesLV_tbdownload = PcfButton('#BatchProcessInfo-BatchProcessScreen-BatchProcessesLV_tb-download');
	batchProcessesLV_tbrefresh = PcfButton('#BatchProcessInfo-BatchProcessScreen-BatchProcessesLV_tb-refresh');
	batchProcessesLV_tbresumeScheduler = PcfButton('#BatchProcessInfo-BatchProcessScreen-BatchProcessesLV_tb-resumeScheduler');
	batchProcessesLV_tbsuspendScheduler = PcfButton('#BatchProcessInfo-BatchProcessScreen-BatchProcessesLV_tb-suspendScheduler');
	procuessHistoryCVBatchProcessInfo_ProcessHistoryLV = PcfListView('#BatchProcessInfo-BatchProcessScreen-ProcuessHistoryCV-BatchProcessInfo_ProcessHistoryLV');
	procuessHistoryCVProcessHistoryChartTabTab = PcfButton('#BatchProcessInfo-BatchProcessScreen-ProcuessHistoryCV-ProcessHistoryChartTabTab');
	procuessHistoryCVProcessHistoryTabTab = PcfButton('#BatchProcessInfo-BatchProcessScreen-ProcuessHistoryCV-ProcessHistoryTabTab');
	batchProcessScreenSchedulerSuspendedAlert = PcfButton('#BatchProcessInfo-BatchProcessScreen-SchedulerSuspendedAlert');
	schedulerSuspendedAlertCloseBtn = PcfButton('#BatchProcessInfo-BatchProcessScreen-SchedulerSuspendedAlert-CloseBtn');
	batchProcessScreen_msgs = PcfButton('#BatchProcessInfo-BatchProcessScreen-_msgs');
	batchProcessInfo_Paging = PcfButton('#BatchProcessInfo-_Paging');
	batchProcessInfo__crumb__ = PcfComponent('#BatchProcessInfo-__crumb__');
}
