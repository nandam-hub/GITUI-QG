import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class RequestRestorePopup {
	requestRestorePopupCancel = PcfButton('#RequestRestorePopup-Cancel');
	requestRestorePopupEdit = PcfButton('#RequestRestorePopup-Edit');
	requestRestorePopupReasonText = PcfTextInput('#RequestRestorePopup-ReasonText');
	requestRestorePopupRequestRestorePopup_UpLink = PcfButton('#RequestRestorePopup-RequestRestorePopup_UpLink');
	requestRestorePopupUpdate = PcfButton('#RequestRestorePopup-Update');
	requestRestorePopup_Paging = PcfButton('#RequestRestorePopup-_Paging');
	requestRestorePopup__crumb__ = PcfComponent('#RequestRestorePopup-__crumb__');
	requestRestorePopup_msgs = PcfButton('#RequestRestorePopup-_msgs');
}
