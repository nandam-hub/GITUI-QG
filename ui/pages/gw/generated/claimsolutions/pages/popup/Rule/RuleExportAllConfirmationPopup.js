import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class RuleExportAllConfirmationPopup {
	ruleExportAllConfirmationPopupCancel = PcfButton('#RuleExportAllConfirmationPopup-Cancel');
	ruleExportAllConfirmationPopupContinue = PcfButton('#RuleExportAllConfirmationPopup-Continue');
	exportExclusionsPanelSetLV = PcfListView('#RuleExportAllConfirmationPopup-DraftsWithDeploymentUncertainty-ExportExclusionsPanelSet-LV');
	exportExclusionsPanelSetTitle = PcfTextInput('#RuleExportAllConfirmationPopup-DraftsWithDeploymentUncertainty-ExportExclusionsPanelSet-Title');
	ruleExportAllConfirmationPopupNoDeployedDraftsExportExclusionsPanelSetLV = PcfListView('#RuleExportAllConfirmationPopup-NoDeployedDrafts-ExportExclusionsPanelSet-LV');
	ruleExportAllConfirmationPopupNoDeployedDraftsExportExclusionsPanelSetTitle = PcfTextInput('#RuleExportAllConfirmationPopup-NoDeployedDrafts-ExportExclusionsPanelSet-Title');
	ruleExportAllConfirmationPopupPreviouslyDeployedDraftsExportExclusionsPanelSetLV = PcfListView('#RuleExportAllConfirmationPopup-PreviouslyDeployedDrafts-ExportExclusionsPanelSet-LV');
	ruleExportAllConfirmationPopupPreviouslyDeployedDraftsExportExclusionsPanelSetTitle = PcfTextInput('#RuleExportAllConfirmationPopup-PreviouslyDeployedDrafts-ExportExclusionsPanelSet-Title');
	ruleExportAllConfirmationPopupRuleExportAllConfirmationPopup_UpLink = PcfButton('#RuleExportAllConfirmationPopup-RuleExportAllConfirmationPopup_UpLink');
	ruleExportAllConfirmationPopup_Paging = PcfButton('#RuleExportAllConfirmationPopup-_Paging');
	ruleExportAllConfirmationPopup__crumb__ = PcfComponent('#RuleExportAllConfirmationPopup-__crumb__');
	ruleExportAllConfirmationPopup_msgs = PcfButton('#RuleExportAllConfirmationPopup-_msgs');
}
