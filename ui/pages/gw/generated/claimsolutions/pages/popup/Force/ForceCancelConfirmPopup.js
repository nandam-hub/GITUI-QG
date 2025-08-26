import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class ForceCancelConfirmPopup {
	forceCancelConfirmPopupForceCancelConfirmPopup_UpLink = PcfButton('#ForceCancelConfirmPopup-ForceCancelConfirmPopup_UpLink');
	forceCancelConfirmScreenCancel = PcfButton('#ForceCancelConfirmPopup-ForceCancelConfirmScreen-Cancel');
	forceCancelConfirmScreenChecked = PcfCheckBox('#ForceCancelConfirmPopup-ForceCancelConfirmScreen-Checked');
	forceCancelConfirmScreenConfirm = PcfTextInput('#ForceCancelConfirmPopup-ForceCancelConfirmScreen-Confirm');
	forceCancelConfirmScreenContinue = PcfButton('#ForceCancelConfirmPopup-ForceCancelConfirmScreen-Continue');
	forceCancelConfirmScreenServerId = PcfTextInput('#ForceCancelConfirmPopup-ForceCancelConfirmScreen-ServerId');
	forceCancelConfirmScreenWarning = PcfTextInput('#ForceCancelConfirmPopup-ForceCancelConfirmScreen-Warning');
	forceCancelConfirmScreen_ViewDetail = PcfButton('#ForceCancelConfirmPopup-ForceCancelConfirmScreen-_ViewDetail');
	forceCancelConfirmScreen_msgs = PcfButton('#ForceCancelConfirmPopup-ForceCancelConfirmScreen-_msgs');
	forceCancelConfirmPopup_Paging = PcfButton('#ForceCancelConfirmPopup-_Paging');
	forceCancelConfirmPopup__crumb__ = PcfComponent('#ForceCancelConfirmPopup-__crumb__');
}
