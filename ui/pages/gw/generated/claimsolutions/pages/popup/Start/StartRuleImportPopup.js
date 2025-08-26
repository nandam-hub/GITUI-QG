import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class StartRuleImportPopup {
	startRuleImportPopupCancelButton = PcfButton('#StartRuleImportPopup-CancelButton');
	startRuleImportPopupFile = PcfButton('#StartRuleImportPopup-File');
	startRuleImportPopupImportButton = PcfButton('#StartRuleImportPopup-ImportButton');
	startRuleImportPopupStartRuleImportPopup_UpLink = PcfButton('#StartRuleImportPopup-StartRuleImportPopup_UpLink');
	startRuleImportPopup_Paging = PcfButton('#StartRuleImportPopup-_Paging');
	startRuleImportPopup__crumb__ = PcfComponent('#StartRuleImportPopup-__crumb__');
	startRuleImportPopup_msgs = PcfButton('#StartRuleImportPopup-_msgs');
	startRuleImportPopupfileLabel = PcfTextInput('#StartRuleImportPopup-fileLabel');
}
