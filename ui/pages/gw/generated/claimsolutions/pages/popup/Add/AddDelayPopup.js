import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class AddDelayPopup {
	addDelayPopupAddDelayPopup_UpLink = PcfButton('#AddDelayPopup-AddDelayPopup_UpLink');
	addDelayPopupCancel = PcfButton('#AddDelayPopup-Cancel');
	addDelayPopupEdit = PcfButton('#AddDelayPopup-Edit');
	addDelayPopupExpectedCompletionDate = PcfDateValueInput('#AddDelayPopup-ExpectedCompletionDate');
	addDelayPopupReasonForAddingDelay = PcfTextInput('#AddDelayPopup-ReasonForAddingDelay');
	addDelayPopupUpdate = PcfButton('#AddDelayPopup-Update');
	addDelayPopup_Paging = PcfButton('#AddDelayPopup-_Paging');
	addDelayPopup__crumb__ = PcfComponent('#AddDelayPopup-__crumb__');
	addDelayPopup_msgs = PcfButton('#AddDelayPopup-_msgs');
}
