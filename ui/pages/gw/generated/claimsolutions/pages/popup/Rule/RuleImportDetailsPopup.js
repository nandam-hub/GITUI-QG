import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class RuleImportDetailsPopup {
	ruleImportDetailsPopupDiscardAllRemaining = PcfButton('#RuleImportDetailsPopup-DiscardAllRemaining');
	ruleImportDetailsPopupDiscardSelected = PcfButton('#RuleImportDetailsPopup-DiscardSelected');
	ruleImportDetailsPopupDispositionLV = PcfListView('#RuleImportDetailsPopup-DispositionLV');
	ruleImportDetailsPopupEntriesFilter = PcfSelectInput('#RuleImportDetailsPopup-EntriesFilter');
	ruleImportDetailsPopupExistingVersionHeader = PcfButton('#RuleImportDetailsPopup-ExistingVersionHeader');
	ruleImportDetailsPopupImportAllRemaining = PcfButton('#RuleImportDetailsPopup-ImportAllRemaining');
	ruleImportDetailsPopupImportCompletedAlert = PcfButton('#RuleImportDetailsPopup-ImportCompletedAlert');
	importCompletedAlertCloseBtn = PcfButton('#RuleImportDetailsPopup-ImportCompletedAlert-CloseBtn');
	ruleImportDetailsPopupImportSelected = PcfButton('#RuleImportDetailsPopup-ImportSelected');
	ruleImportDetailsPopupImportingVersionHeader = PcfButton('#RuleImportDetailsPopup-ImportingVersionHeader');
	ruleImportDetailsPopupNameContainerHeader = PcfButton('#RuleImportDetailsPopup-NameContainerHeader');
	ruleImportDetailsPopupRuleImportDetailsPopup_UpLink = PcfButton('#RuleImportDetailsPopup-RuleImportDetailsPopup_UpLink');
	ruleImportDetailsPopupRuleValidationInfoHeader = PcfButton('#RuleImportDetailsPopup-RuleValidationInfoHeader');
	ruleImportDetailsPopupSourceName = PcfTextInput('#RuleImportDetailsPopup-SourceName');
	ruleImportDetailsPopup_ListPaging = PcfButton('#RuleImportDetailsPopup-_ListPaging');
	ruleImportDetailsPopup_Paging = PcfButton('#RuleImportDetailsPopup-_Paging');
	ruleImportDetailsPopup__crumb__ = PcfComponent('#RuleImportDetailsPopup-__crumb__');
	ruleImportDetailsPopup_msgs = PcfButton('#RuleImportDetailsPopup-_msgs');
}
