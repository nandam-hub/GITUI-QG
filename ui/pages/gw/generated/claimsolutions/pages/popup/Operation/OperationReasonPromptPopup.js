import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class OperationReasonPromptPopup {
	operationReasonPromptPopupCancel = PcfButton('#OperationReasonPromptPopup-Cancel');
	operationReasonPromptPopupEdit = PcfButton('#OperationReasonPromptPopup-Edit');
	operationReasonPromptPopupOperationReasonPromptPopup_UpLink = PcfButton('#OperationReasonPromptPopup-OperationReasonPromptPopup_UpLink');
	operationReasonPromptPopupReasonForOperation = PcfTextInput('#OperationReasonPromptPopup-ReasonForOperation');
	operationReasonPromptPopupUpdate = PcfButton('#OperationReasonPromptPopup-Update');
	operationReasonPromptPopup_Paging = PcfButton('#OperationReasonPromptPopup-_Paging');
	operationReasonPromptPopup__crumb__ = PcfComponent('#OperationReasonPromptPopup-__crumb__');
	operationReasonPromptPopup_msgs = PcfButton('#OperationReasonPromptPopup-_msgs');
}
