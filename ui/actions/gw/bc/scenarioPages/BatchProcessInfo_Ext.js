import { PcfComponent } from "@gtui/gt-ui-framework";
import { BatchProcessInfo } from "../../../../pages/gw/generated/billingsolutions/pages/serverTools/BatchProcessInfo";

export class BatchProcessInfo_Ext extends BatchProcessInfo {
    automaticDisbursementJob = PcfComponent('#BatchProcessInfo-BatchProcessScreen-BatchProcessesLV-7-RunBatchWithoutNotify')
    batchProcessScreenTtlBar = PcfComponent('#BatchProcessInfo-BatchProcessScreen-ttlBar')
    automaticDisbursementLastRunStatus = PcfComponent('#BatchProcessInfo-BatchProcessScreen-BatchProcessesLV-7-LastRunStatus')
}