import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ContainsExpressionPopup {
	containsExpressionPopupCancel = PcfButton('#ContainsExpressionPopup-Cancel');
	conditionBuilderPanelSetAdvancedConditionsLV = PcfListView('#ContainsExpressionPopup-ConditionBuilderPanelSet-AdvancedConditionsLV');
	validationErrorsInputSetLabel = PcfButton('#ContainsExpressionPopup-ConditionBuilderPanelSet-ConditionValidationErrorsWhenReadOnlyDV-ValidationErrorsInputSet-Label');
	validationErrorsInputSetValidationErrorIcon = PcfButton('#ContainsExpressionPopup-ConditionBuilderPanelSet-ConditionValidationErrorsWhenReadOnlyDV-ValidationErrorsInputSet-ValidationErrorIcon');
	ruleConditionTypeDVConditionType = PcfSelectInput('#ContainsExpressionPopup-ConditionBuilderPanelSet-RuleConditionTypeDV-ConditionType');
	conditionBuilderPanelSetSimpleConditionsLV = PcfListView('#ContainsExpressionPopup-ConditionBuilderPanelSet-SimpleConditionsLV');
	containsExpressionPopupConditionBuilderPanelSetValidationErrorsDVValidationErrorsInputSetLabel = PcfButton('#ContainsExpressionPopup-ConditionBuilderPanelSet-ValidationErrorsDV-ValidationErrorsInputSet-Label');
	containsExpressionPopupConditionBuilderPanelSetValidationErrorsDVValidationErrorsInputSetValidationErrorIcon = PcfButton('#ContainsExpressionPopup-ConditionBuilderPanelSet-ValidationErrorsDV-ValidationErrorsInputSet-ValidationErrorIcon');
	conditionValidationToolbarButtonSetHideValidation = PcfButton('#ContainsExpressionPopup-ConditionValidationToolbarButtonSet-HideValidation');
	conditionValidationToolbarButtonSetShowValidation = PcfButton('#ContainsExpressionPopup-ConditionValidationToolbarButtonSet-ShowValidation');
	containsExpressionPopupContainsExpressionPopup_UpLink = PcfButton('#ContainsExpressionPopup-ContainsExpressionPopup_UpLink');
	containsExpressionPopupEdit = PcfButton('#ContainsExpressionPopup-Edit');
	containsExpressionPopupUpdate = PcfButton('#ContainsExpressionPopup-Update');
	containsExpressionPopup_Paging = PcfButton('#ContainsExpressionPopup-_Paging');
	containsExpressionPopup__crumb__ = PcfComponent('#ContainsExpressionPopup-__crumb__');
	containsExpressionPopup_msgs = PcfButton('#ContainsExpressionPopup-_msgs');
}
