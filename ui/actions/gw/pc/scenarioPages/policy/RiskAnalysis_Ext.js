import { PcfButton, PcfSelectInput } from "@gtui/gt-ui-framework";
import { RiskAnalysis } from "../../../../../pages/gw/generated/policysolutions/pages/policy/RiskAnalysis";

export class RiskAnalysis_Ext extends RiskAnalysis{
    addUWIssue = PcfButton('#SubmissionWizard-Job_RiskAnalysisScreen-RiskAnalysisCV_tb-AddManualIssue')
    riskValidUntil = PcfSelectInput('#RiskApprovalDetailsPopup-0-IssueDetailsDV-UWApproval-UWApprovalLV-Duration')
}