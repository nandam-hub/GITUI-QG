import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class OtherInstructionPopup {
	otherInstructionPopupCancel = PcfButton('#OtherInstructionPopup-Cancel');
	otherInstructionPopupComment = PcfTextInput('#OtherInstructionPopup-Comment');
	otherInstructionPopupEdit = PcfButton('#OtherInstructionPopup-Edit');
	otherInstructionPopupInstructionCategory = PcfSelectInput('#OtherInstructionPopup-InstructionCategory');
	otherInstructionPopupInstructionType = PcfSelectInput('#OtherInstructionPopup-InstructionType');
	otherInstructionPopupLocalizedValuesLocalizedValuesDVLocalizedValuesLV = PcfListView('#OtherInstructionPopup-LocalizedValues-LocalizedValuesDV-LocalizedValuesLV');
	otherInstructionPopupOtherInstructionPopup_UpLink = PcfButton('#OtherInstructionPopup-OtherInstructionPopup_UpLink');
	otherInstructionPopupPolicyType = PcfSelectInput('#OtherInstructionPopup-PolicyType');
	otherInstructionPopupUpdate = PcfButton('#OtherInstructionPopup-Update');
	otherInstructionPopup_Paging = PcfButton('#OtherInstructionPopup-_Paging');
	otherInstructionPopup__crumb__ = PcfComponent('#OtherInstructionPopup-__crumb__');
	otherInstructionPopup_msgs = PcfButton('#OtherInstructionPopup-_msgs');
	otherInstructionPopuppolicyTypeReadOnly = PcfTextInput('#OtherInstructionPopup-policyTypeReadOnly');
}
