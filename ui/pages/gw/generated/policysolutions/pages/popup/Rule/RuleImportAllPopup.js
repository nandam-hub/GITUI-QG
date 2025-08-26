import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class RuleImportAllPopup {
	ruleImportAllPopupCancelButton = PcfButton('#RuleImportAllPopup-CancelButton');
	ruleImportAllPopupDescription = PcfTextInput('#RuleImportAllPopup-Description');
	ruleImportAllPopupImportButton = PcfButton('#RuleImportAllPopup-ImportButton');
	ruleImportAllPopupRuleImportAllPopup_UpLink = PcfButton('#RuleImportAllPopup-RuleImportAllPopup_UpLink');
	ruleImportAllPopup_Paging = PcfButton('#RuleImportAllPopup-_Paging');
	ruleImportAllPopup__crumb__ = PcfComponent('#RuleImportAllPopup-__crumb__');
	ruleImportAllPopup_msgs = PcfButton('#RuleImportAllPopup-_msgs');
}
