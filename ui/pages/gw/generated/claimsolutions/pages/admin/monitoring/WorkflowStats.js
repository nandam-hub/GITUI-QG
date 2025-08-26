import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class WorkflowStats {
	workflowStatsDVDateFrom = PcfDateValueInput('#WorkflowStats-WorkflowStatsScreen-WorkflowStatsDV-DateFrom');
	workflowStatsDVDateTo = PcfDateValueInput('#WorkflowStats-WorkflowStatsScreen-WorkflowStatsDV-DateTo');
	workflowStatsWorkflowStatsScreenWorkflowStatsDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#WorkflowStats-WorkflowStatsScreen-WorkflowStatsDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	workflowStatsWorkflowStatsScreenWorkflowStatsDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#WorkflowStats-WorkflowStatsScreen-WorkflowStatsDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	workflowStatsDVType = PcfSelectInput('#WorkflowStats-WorkflowStatsScreen-WorkflowStatsDV-Type');
	workflowStatsScreenWorkflowStatsLV = PcfListView('#WorkflowStats-WorkflowStatsScreen-WorkflowStatsLV');
	workflowStatsScreen_msgs = PcfButton('#WorkflowStats-WorkflowStatsScreen-_msgs');
	workflowStatsWorkflowStats_UpLink = PcfButton('#WorkflowStats-WorkflowStats_UpLink');
	workflowStats_Paging = PcfButton('#WorkflowStats-_Paging');
	workflowStats__crumb__ = PcfComponent('#WorkflowStats-__crumb__');
}
