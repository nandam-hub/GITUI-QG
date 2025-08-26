import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class RuleExportDetailsPopup {
	ruleExportDetailsPopupCreated = PcfDateValueInput('#RuleExportDetailsPopup-Created');
	ruleExportDetailsPopupDownload = PcfButton('#RuleExportDetailsPopup-Download');
	ruleExportDetailsPopupRuleExportDetailsPopup_UpLink = PcfButton('#RuleExportDetailsPopup-RuleExportDetailsPopup_UpLink');
	ruleExportDetailsPopupRuleListPanelSetDescription = PcfTextInput('#RuleExportDetailsPopup-RuleListPanelSet-Description');
	ruleExportDetailsPopupRuleListPanelSetLV = PcfListView('#RuleExportDetailsPopup-RuleListPanelSet-LV');
	ruleExportDetailsPopupRuleType = PcfSelectInput('#RuleExportDetailsPopup-RuleType');
	ruleExportDetailsPopupStartedBy = PcfTextInput('#RuleExportDetailsPopup-StartedBy');
	ruleExportDetailsPopupStatus = PcfTextInput('#RuleExportDetailsPopup-Status');
	ruleExportDetailsPopup_Paging = PcfButton('#RuleExportDetailsPopup-_Paging');
	ruleExportDetailsPopup__crumb__ = PcfComponent('#RuleExportDetailsPopup-__crumb__');
	ruleExportDetailsPopup_msgs = PcfButton('#RuleExportDetailsPopup-_msgs');
}
