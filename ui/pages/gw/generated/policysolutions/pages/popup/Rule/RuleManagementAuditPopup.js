import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class RuleManagementAuditPopup {
	ruleManagementAuditPopupAllVersionsLV = PcfListView('#RuleManagementAuditPopup-AllVersionsLV');
	ruleManagementAuditPopupRuleManagementAuditPopup_UpLink = PcfButton('#RuleManagementAuditPopup-RuleManagementAuditPopup_UpLink');
	ruleManagementAuditPopupVersion = PcfSelectInput('#RuleManagementAuditPopup-Version');
	versionViewPanelSetActivityHeader = PcfButton('#RuleManagementAuditPopup-VersionViewPanelSet-ActivityHeader');
	versionViewPanelSetAvailableToRun = PcfComponent('#RuleManagementAuditPopup-VersionViewPanelSet-AvailableToRun');
	versionViewPanelSetChangesHeader = PcfTextInput('#RuleManagementAuditPopup-VersionViewPanelSet-ChangesHeader');
	versionViewPanelSetDateHeader = PcfButton('#RuleManagementAuditPopup-VersionViewPanelSet-DateHeader');
	versionViewPanelSetImportDateHeader = PcfButton('#RuleManagementAuditPopup-VersionViewPanelSet-ImportDateHeader');
	versionViewPanelSetImportUserHeader = PcfButton('#RuleManagementAuditPopup-VersionViewPanelSet-ImportUserHeader');
	versionViewPanelSetImportedHeader = PcfTextInput('#RuleManagementAuditPopup-VersionViewPanelSet-ImportedHeader');
	versionViewPanelSetName = PcfTextInput('#RuleManagementAuditPopup-VersionViewPanelSet-Name');
	versionViewPanelSetSystemIdHeader = PcfButton('#RuleManagementAuditPopup-VersionViewPanelSet-SystemIdHeader');
	versionViewPanelSetUserHeader = PcfButton('#RuleManagementAuditPopup-VersionViewPanelSet-UserHeader');
	versionViewPanelSet_ListPaging = PcfButton('#RuleManagementAuditPopup-VersionViewPanelSet-_ListPaging');
	versionViewPanelSet_ViewDetail = PcfButton('#RuleManagementAuditPopup-VersionViewPanelSet-_ViewDetail');
	ruleManagementAuditPopup_Paging = PcfButton('#RuleManagementAuditPopup-_Paging');
	ruleManagementAuditPopup__crumb__ = PcfComponent('#RuleManagementAuditPopup-__crumb__');
	ruleManagementAuditPopup_msgs = PcfButton('#RuleManagementAuditPopup-_msgs');
}
