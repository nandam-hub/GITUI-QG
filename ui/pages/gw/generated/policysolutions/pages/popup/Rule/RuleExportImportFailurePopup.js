import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class RuleExportImportFailurePopup {
	ruleExportImportFailurePopupMessage = PcfTextInput('#RuleExportImportFailurePopup-Message');
	ruleExportImportFailurePopupNote = PcfTextInput('#RuleExportImportFailurePopup-Note');
	ruleExportImportFailurePopupRuleExportImportFailurePopup_UpLink = PcfButton('#RuleExportImportFailurePopup-RuleExportImportFailurePopup_UpLink');
	ruleExportImportFailurePopup_Paging = PcfButton('#RuleExportImportFailurePopup-_Paging');
	ruleExportImportFailurePopup__crumb__ = PcfComponent('#RuleExportImportFailurePopup-__crumb__');
	ruleExportImportFailurePopup_msgs = PcfButton('#RuleExportImportFailurePopup-_msgs');
}
