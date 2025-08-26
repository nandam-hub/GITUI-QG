import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class WorkflowSearch {
	workflowSearchResultPanelSetPolicyPeriodWorkflowsLV = PcfListView('#WorkflowSearch-WorkflowSearchScreen-WorkflowSearchResultPanelSet-PolicyPeriodWorkflowsLV');
	policyPeriodWorkflowsLV_tbWorkflows_ManageAllButton = PcfButton('#WorkflowSearch-WorkflowSearchScreen-WorkflowSearchResultPanelSet-PolicyPeriodWorkflowsLV_tb-Workflows_ManageAllButton');
	policyPeriodWorkflowsLV_tbWorkflows_ManageButton = PcfButton('#WorkflowSearch-WorkflowSearchScreen-WorkflowSearchResultPanelSet-PolicyPeriodWorkflowsLV_tb-Workflows_ManageButton');
	workflowSearchResultPanelSetWorkflowsLV = PcfListView('#WorkflowSearch-WorkflowSearchScreen-WorkflowSearchResultPanelSet-WorkflowsLV');
	workflowsLV_tbWorkflows_ManageAllButton = PcfButton('#WorkflowSearch-WorkflowSearchScreen-WorkflowSearchResultPanelSet-WorkflowsLV_tb-Workflows_ManageAllButton');
	workflowsLV_tbWorkflows_ManageButton = PcfButton('#WorkflowSearch-WorkflowSearchScreen-WorkflowSearchResultPanelSet-WorkflowsLV_tb-Workflows_ManageButton');
	workflowsDVActiveState = PcfSelectInput('#WorkflowSearch-WorkflowSearchScreen-WorkflowsDV-ActiveState');
	workflowsDVCurrentStep = PcfSelectInput('#WorkflowSearch-WorkflowSearchScreen-WorkflowsDV-CurrentStep');
	workflowsDVHandler = PcfSelectInput('#WorkflowSearch-WorkflowSearchScreen-WorkflowsDV-Handler');
	workflowSearchWorkflowSearchScreenWorkflowsDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#WorkflowSearch-WorkflowSearchScreen-WorkflowsDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	workflowSearchWorkflowSearchScreenWorkflowsDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#WorkflowSearch-WorkflowSearchScreen-WorkflowsDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	workflowsDVStartDateFrom = PcfDateValueInput('#WorkflowSearch-WorkflowSearchScreen-WorkflowsDV-StartDateFrom');
	workflowsDVStartDateTo = PcfDateValueInput('#WorkflowSearch-WorkflowSearchScreen-WorkflowsDV-StartDateTo');
	workflowsDVState = PcfSelectInput('#WorkflowSearch-WorkflowSearchScreen-WorkflowsDV-State');
	workflowsDVType = PcfSelectInput('#WorkflowSearch-WorkflowSearchScreen-WorkflowsDV-Type');
	workflowsDVUpdateDateFrom = PcfDateValueInput('#WorkflowSearch-WorkflowSearchScreen-WorkflowsDV-UpdateDateFrom');
	workflowsDVUpdateDateTo = PcfDateValueInput('#WorkflowSearch-WorkflowSearchScreen-WorkflowsDV-UpdateDateTo');
	workflowsDVVersion = PcfSelectInput('#WorkflowSearch-WorkflowSearchScreen-WorkflowsDV-Version');
	workflowsInputSetJobNumber = PcfTextInput('#WorkflowSearch-WorkflowSearchScreen-WorkflowsDV-WorkflowsInputSet-JobNumber');
	workflowsInputSetJobType = PcfSelectInput('#WorkflowSearch-WorkflowSearchScreen-WorkflowsDV-WorkflowsInputSet-JobType');
	workflowsInputSetPolicyNumber = PcfTextInput('#WorkflowSearch-WorkflowSearchScreen-WorkflowsDV-WorkflowsInputSet-PolicyNumber');
	workflowsInputSetProduct = PcfSelectInput('#WorkflowSearch-WorkflowSearchScreen-WorkflowsDV-WorkflowsInputSet-Product');
	workflowSearchScreen_msgs = PcfButton('#WorkflowSearch-WorkflowSearchScreen-_msgs');
	workflowSearchWorkflowSearch_UpLink = PcfButton('#WorkflowSearch-WorkflowSearch_UpLink');
	workflowSearch_Paging = PcfButton('#WorkflowSearch-_Paging');
	workflowSearch__crumb__ = PcfComponent('#WorkflowSearch-__crumb__');
}
