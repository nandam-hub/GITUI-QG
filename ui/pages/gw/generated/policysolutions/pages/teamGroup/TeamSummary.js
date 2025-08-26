import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class TeamSummary {
	teamSummaryLVActivitiesGroup = PcfTextInput('#TeamSummary-TeamSummaryScreen-TeamSummaryLV-ActivitiesGroup');
	teamSummaryLVApprovedPolicyChangesHeader = PcfComponent('#TeamSummary-TeamSummaryScreen-TeamSummaryLV-ApprovedPolicyChangesHeader');
	teamSummaryLVBoundSubmissionsHeader = PcfComponent('#TeamSummary-TeamSummaryScreen-TeamSummaryLV-BoundSubmissionsHeader');
	teamSummaryLVCompletedActivitiesHeader = PcfComponent('#TeamSummary-TeamSummaryScreen-TeamSummaryLV-CompletedActivitiesHeader');
	teamSummaryLVNameGroup = PcfTextInput('#TeamSummary-TeamSummaryScreen-TeamSummaryLV-NameGroup');
	teamSummaryLVNameHeader = PcfTextInput('#TeamSummary-TeamSummaryScreen-TeamSummaryLV-NameHeader');
	teamSummaryLVNewPolicyChangesHeader = PcfComponent('#TeamSummary-TeamSummaryScreen-TeamSummaryLV-NewPolicyChangesHeader');
	teamSummaryLVNewRenewalsHeader = PcfComponent('#TeamSummary-TeamSummaryScreen-TeamSummaryLV-NewRenewalsHeader');
	teamSummaryLVNewSubmissionsHeader = PcfComponent('#TeamSummary-TeamSummaryScreen-TeamSummaryLV-NewSubmissionsHeader');
	teamSummaryLVNonRenewedRenewalsHeader = PcfComponent('#TeamSummary-TeamSummaryScreen-TeamSummaryLV-NonRenewedRenewalsHeader');
	teamSummaryLVNotTakenRenewalsHeader = PcfComponent('#TeamSummary-TeamSummaryScreen-TeamSummaryLV-NotTakenRenewalsHeader');
	teamSummaryLVOpenActivitiesHeader = PcfComponent('#TeamSummary-TeamSummaryScreen-TeamSummaryLV-OpenActivitiesHeader');
	teamSummaryLVOpenPolicyChangesHeader = PcfComponent('#TeamSummary-TeamSummaryScreen-TeamSummaryLV-OpenPolicyChangesHeader');
	teamSummaryLVOpenRenewalsHeader = PcfComponent('#TeamSummary-TeamSummaryScreen-TeamSummaryLV-OpenRenewalsHeader');
	teamSummaryLVOpenSubmissionsHeader = PcfComponent('#TeamSummary-TeamSummaryScreen-TeamSummaryLV-OpenSubmissionsHeader');
	teamSummaryLVOverdueActivitiesHeader = PcfComponent('#TeamSummary-TeamSummaryScreen-TeamSummaryLV-OverdueActivitiesHeader');
	teamSummaryLVPolicyChangesGroup = PcfTextInput('#TeamSummary-TeamSummaryScreen-TeamSummaryLV-PolicyChangesGroup');
	teamSummaryLVRenewalsGroup = PcfTextInput('#TeamSummary-TeamSummaryScreen-TeamSummaryLV-RenewalsGroup');
	teamSummaryLVRenewedRenewalsHeader = PcfComponent('#TeamSummary-TeamSummaryScreen-TeamSummaryLV-RenewedRenewalsHeader');
	teamSummaryLVSubmissionsGroup = PcfTextInput('#TeamSummary-TeamSummaryScreen-TeamSummaryLV-SubmissionsGroup');
	teamSummaryLV_ListPaging = PcfButton('#TeamSummary-TeamSummaryScreen-TeamSummaryLV-_ListPaging');
	teamSummaryLV_ViewDetail = PcfButton('#TeamSummary-TeamSummaryScreen-TeamSummaryLV-_ViewDetail');
	teamSummaryLV_tbTeamSummaryStatsType = PcfSelectInput('#TeamSummary-TeamSummaryScreen-TeamSummaryLV_tb-TeamSummaryStatsType');
	teamSummaryLV_tbviewJobsLabel = PcfTextInput('#TeamSummary-TeamSummaryScreen-TeamSummaryLV_tb-viewJobsLabel');
	teamSummaryScreen_msgs = PcfButton('#TeamSummary-TeamSummaryScreen-_msgs');
	teamSummaryTeamSummary_UpLink = PcfButton('#TeamSummary-TeamSummary_UpLink');
	teamSummary_Paging = PcfButton('#TeamSummary-_Paging');
	teamSummary__crumb__ = PcfComponent('#TeamSummary-__crumb__');
}
