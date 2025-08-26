import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DeployConfirmationPopup {
	ruleListPanelSetDescription = PcfTextInput('#DeployConfirmationPopup-AlreadyDeployedVersions-RuleListPanelSet-Description');
	ruleListPanelSetLV = PcfListView('#DeployConfirmationPopup-AlreadyDeployedVersions-RuleListPanelSet-LV');
	deployConfirmationPopupCancel = PcfButton('#DeployConfirmationPopup-Cancel');
	deployConfirmationPopupContinue = PcfButton('#DeployConfirmationPopup-Continue');
	deployConfirmationPopupDeployConfirmationPopup_UpLink = PcfButton('#DeployConfirmationPopup-DeployConfirmationPopup_UpLink');
	deployConfirmationPopupInvalidVersionsRuleListPanelSetDescription = PcfTextInput('#DeployConfirmationPopup-InvalidVersions-RuleListPanelSet-Description');
	deployConfirmationPopupInvalidVersionsRuleListPanelSetLV = PcfListView('#DeployConfirmationPopup-InvalidVersions-RuleListPanelSet-LV');
	deployConfirmationPopupOutdatedVersionsRuleListPanelSetDescription = PcfTextInput('#DeployConfirmationPopup-OutdatedVersions-RuleListPanelSet-Description');
	deployConfirmationPopupOutdatedVersionsRuleListPanelSetLV = PcfListView('#DeployConfirmationPopup-OutdatedVersions-RuleListPanelSet-LV');
	deployConfirmationPopupReadyVersionsRuleListPanelSetDescription = PcfTextInput('#DeployConfirmationPopup-ReadyVersions-RuleListPanelSet-Description');
	deployConfirmationPopupReadyVersionsRuleListPanelSetLV = PcfListView('#DeployConfirmationPopup-ReadyVersions-RuleListPanelSet-LV');
	deployConfirmationPopupRollingUpgradeAlertbar = PcfButton('#DeployConfirmationPopup-RollingUpgradeAlertbar');
	rollingUpgradeAlertbarCloseBtn = PcfButton('#DeployConfirmationPopup-RollingUpgradeAlertbar-CloseBtn');
	deployConfirmationPopupUnapprovedVersionsRuleListPanelSetDescription = PcfTextInput('#DeployConfirmationPopup-UnapprovedVersions-RuleListPanelSet-Description');
	deployConfirmationPopupUnapprovedVersionsRuleListPanelSetLV = PcfListView('#DeployConfirmationPopup-UnapprovedVersions-RuleListPanelSet-LV');
	deployConfirmationPopup_Paging = PcfButton('#DeployConfirmationPopup-_Paging');
	deployConfirmationPopup__crumb__ = PcfComponent('#DeployConfirmationPopup-__crumb__');
	deployConfirmationPopup_msgs = PcfButton('#DeployConfirmationPopup-_msgs');
}
