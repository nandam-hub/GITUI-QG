import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class Jobs {
	policyFile_JobsPolicyFile_Jobs_UpLink = PcfButton('#PolicyFile_Jobs-PolicyFile_Jobs_UpLink');
	detailPanelDetailsTitleCardTab = PcfButton('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-DetailsTitleCardTab');
	detailPanelJobsLV = PcfListView('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-JobsLV');
	jobsLV_tbPolicy_Jobs_DiffButton = PcfButton('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-JobsLV_tb-Policy_Jobs_DiffButton');
	policy_JobInfoDVCloseDate = PcfDateValueInput('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobInfoDV-CloseDate');
	policy_JobInfoDVCreateDate = PcfDateValueInput('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobInfoDV-CreateDate');
	policy_JobInfoDVExpirationDate = PcfDateValueInput('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobInfoDV-ExpirationDate');
	policy_JobInfoDVJobFile = PcfButton('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobInfoDV-JobFile');
	policy_JobInfoDVPeriodEffDate = PcfDateValueInput('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobInfoDV-PeriodEffDate');
	policy_JobInfoDVPeriodStatus = PcfTextInput('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobInfoDV-PeriodStatus');
	policy_JobInfoDVPolicyPerEffDate = PcfDateValueInput('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobInfoDV-PolicyPerEffDate');
	policy_JobInfoDVStatus = PcfTextInput('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobInfoDV-Status');
	policy_JobInfoDVpolicyfile = PcfButton('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobInfoDV-policyfile');
	policy_JobInfoDVActualAuditMethod = PcfSelectInput('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobInfoDV-ActualAuditMethod');
	policy_JobInfoDVAuditDueDate = PcfDateValueInput('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobInfoDV-AuditDueDate');
	policy_JobInfoDVAuditInitiationDate = PcfDateValueInput('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobInfoDV-AuditInitiationDate');
	policy_JobInfoDVAuditMethod = PcfSelectInput('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobInfoDV-AuditMethod');
	policy_JobInfoDVAuditPeriodEndDate = PcfDateValueInput('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobInfoDV-AuditPeriodEndDate');
	policy_JobInfoDVAuditPeriodStartDate = PcfDateValueInput('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobInfoDV-AuditPeriodStartDate');
	policy_JobDetailsInputSetAccount = PcfTextInput('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobInfoDV-Policy_JobDetailsInputSet-Account');
	policyFile_JobsPolicy_JobsScreenDetailPanelPolicy_JobInfoDVPolicy_JobDetailsInputSetIndustryCodeSelectIndustryCode = PcfButton('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobInfoDV-Policy_JobDetailsInputSet-IndustryCode-SelectIndustryCode');
	policy_JobDetailsInputSetInsured = PcfTextInput('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobInfoDV-Policy_JobDetailsInputSet-Insured');
	policy_JobDetailsInputSetName = PcfTextInput('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobInfoDV-Policy_JobDetailsInputSet-Name');
	policy_JobDetailsInputSetPremium = PcfTextInput('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobInfoDV-Policy_JobDetailsInputSet-Premium');
	policy_JobInfoDVRevisionType = PcfSelectInput('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobInfoDV-RevisionType');
	policy_JobInfoDVType = PcfSelectInput('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobInfoDV-Type');
	detailPanelPolicy_JobUsersLV = PcfListView('#PolicyFile_Jobs-Policy_JobsScreen-DetailPanel-Policy_JobUsersLV');
	policy_JobsScreen_msgs = PcfButton('#PolicyFile_Jobs-Policy_JobsScreen-_msgs');
	policyFile_Jobs_Paging = PcfButton('#PolicyFile_Jobs-_Paging');
	policyFile_Jobs__crumb__ = PcfComponent('#PolicyFile_Jobs-__crumb__');
}
