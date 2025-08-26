import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class ReferSubrogationPopup {
	referSubrogationPopupCancel = PcfButton('#ReferSubrogationPopup-Cancel');
	referSubrogationPopupEdit = PcfButton('#ReferSubrogationPopup-Edit');
	referSubrogationPopupReferSubrogationPopup_UpLink = PcfButton('#ReferSubrogationPopup-ReferSubrogationPopup_UpLink');
	referSubrogationPopupSubroReferralComment = PcfTextInput('#ReferSubrogationPopup-SubroReferralComment');
	referSubrogationPopupSubroReferralDate = PcfDateValueInput('#ReferSubrogationPopup-SubroReferralDate');
	referSubrogationPopupUpdate = PcfButton('#ReferSubrogationPopup-Update');
	referSubrogationPopup_Paging = PcfButton('#ReferSubrogationPopup-_Paging');
	referSubrogationPopup__crumb__ = PcfComponent('#ReferSubrogationPopup-__crumb__');
	referSubrogationPopup_msgs = PcfButton('#ReferSubrogationPopup-_msgs');
}
