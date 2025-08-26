import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class RequestRequotePopup {
	requestRequotePopupCancel = PcfButton('#RequestRequotePopup-Cancel');
	requestRequotePopupEdit = PcfButton('#RequestRequotePopup-Edit');
	requestRequotePopupReasonForRequestingRequote = PcfTextInput('#RequestRequotePopup-ReasonForRequestingRequote');
	requestRequotePopupRequestRequotePopup_UpLink = PcfButton('#RequestRequotePopup-RequestRequotePopup_UpLink');
	requestRequotePopupRequestedQuoteCompletionDate = PcfDateValueInput('#RequestRequotePopup-RequestedQuoteCompletionDate');
	requestRequotePopupUpdate = PcfButton('#RequestRequotePopup-Update');
	requestRequotePopup_Paging = PcfButton('#RequestRequotePopup-_Paging');
	requestRequotePopup__crumb__ = PcfComponent('#RequestRequotePopup-__crumb__');
	requestRequotePopup_msgs = PcfButton('#RequestRequotePopup-_msgs');
}
