import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class WorkflowDetail {
	workflowDetailDVCurrentAction = PcfSelectInput('#WorkflowDetail-WorkflowDetailScreen-WorkflowDetailDV-CurrentAction');
	workflowDetailDVCurrentStep = PcfTextInput('#WorkflowDetail-WorkflowDetailScreen-WorkflowDetailDV-CurrentStep');
	workflowDetailDVHandler = PcfSelectInput('#WorkflowDetail-WorkflowDetailScreen-WorkflowDetailDV-Handler');
	workflowDetailDVParent = PcfButton('#WorkflowDetail-WorkflowDetailScreen-WorkflowDetailDV-Parent');
	workflowDetailDVPrevStep = PcfTextInput('#WorkflowDetail-WorkflowDetailScreen-WorkflowDetailDV-PrevStep');
	workflowDetailDVProcessVersion = PcfTextInput('#WorkflowDetail-WorkflowDetailScreen-WorkflowDetailDV-ProcessVersion');
	workflowDetailDVStatus = PcfSelectInput('#WorkflowDetail-WorkflowDetailScreen-WorkflowDetailDV-Status');
	workflowDetailDVType = PcfSelectInput('#WorkflowDetail-WorkflowDetailScreen-WorkflowDetailDV-Type');
	workflowDetailDVWorkflowActivitiesLV = PcfListView('#WorkflowDetail-WorkflowDetailScreen-WorkflowDetailDV-WorkflowActivitiesLV');
	workflowDetailInputSetJobNumber = PcfButton('#WorkflowDetail-WorkflowDetailScreen-WorkflowDetailDV-WorkflowDetailInputSet-JobNumber');
	workflowDetailInputSetMainAccountContact = PcfTextInput('#WorkflowDetail-WorkflowDetailScreen-WorkflowDetailDV-WorkflowDetailInputSet-MainAccountContact');
	workflowDetailInputSetPolicyNumber = PcfButton('#WorkflowDetail-WorkflowDetailScreen-WorkflowDetailDV-WorkflowDetailInputSet-PolicyNumber');
	workflowDetailInputSetProduct = PcfTextInput('#WorkflowDetail-WorkflowDetailScreen-WorkflowDetailDV-WorkflowDetailInputSet-Product');
	workflowDetailDVWorkflowLogLV = PcfListView('#WorkflowDetail-WorkflowDetailScreen-WorkflowDetailDV-WorkflowLogLV');
	workflowDetailDVWorkflowWorkItemsLV = PcfListView('#WorkflowDetail-WorkflowDetailScreen-WorkflowDetailDV-WorkflowWorkItemsLV');
	workflowDetailScreenWorkflowDetail_ManageButton = PcfButton('#WorkflowDetail-WorkflowDetailScreen-WorkflowDetail_ManageButton');
	workflowDetailScreenWorkflowDetail_RefreshButton = PcfButton('#WorkflowDetail-WorkflowDetailScreen-WorkflowDetail_RefreshButton');
	workflowDetailScreenWorkflowDetail_ResumeButton = PcfButton('#WorkflowDetail-WorkflowDetailScreen-WorkflowDetail_ResumeButton');
	workflowDetailScreenWorkflowDetail_SuspendButtonButton = PcfButton('#WorkflowDetail-WorkflowDetailScreen-WorkflowDetail_SuspendButtonButton');
	workflowDetailScreenWorkflowsLV = PcfListView('#WorkflowDetail-WorkflowDetailScreen-WorkflowsLV');
	workflowDetailScreen_msgs = PcfButton('#WorkflowDetail-WorkflowDetailScreen-_msgs');
	workflowDetailWorkflowDetail_UpLink = PcfButton('#WorkflowDetail-WorkflowDetail_UpLink');
	workflowDetail_Paging = PcfButton('#WorkflowDetail-_Paging');
	workflowDetail__crumb__ = PcfComponent('#WorkflowDetail-__crumb__');
}
