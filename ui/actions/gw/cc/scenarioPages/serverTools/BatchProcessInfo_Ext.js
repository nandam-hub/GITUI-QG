import { PcfComponent } from '@gtui/gt-ui-framework';
import { BatchProcessInfo } from '../../../../../pages/gw/generated/claimsolutions/pages/serverTools/BatchProcessInfo';

export class BatchProcessInfo_Ext extends BatchProcessInfo{
	financialsEscalation = PcfComponent('#BatchProcessInfo-BatchProcessScreen-BatchProcessesLV-22-RunBatchWithoutNotify')
	batchProcessTitleBar = PcfComponent('#BatchProcessInfo-BatchProcessScreen-ttlBar > div.gw-TitleBar--titles--container')
}
