import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class TimeSearchPopup {
	timeSearchPopupCancel = PcfButton('#TimeSearchPopup-Cancel');
	timeSearchPopupEdit = PcfButton('#TimeSearchPopup-Edit');
	timeSearchPopupEndTime = PcfDateValueInput('#TimeSearchPopup-EndTime');
	timeSearchPopupStartTime = PcfDateValueInput('#TimeSearchPopup-StartTime');
	timeSearchPopupTimeSearchPopup_UpLink = PcfButton('#TimeSearchPopup-TimeSearchPopup_UpLink');
	timeSearchPopupUpdate = PcfButton('#TimeSearchPopup-Update');
	timeSearchPopup_Paging = PcfButton('#TimeSearchPopup-_Paging');
	timeSearchPopup__crumb__ = PcfComponent('#TimeSearchPopup-__crumb__');
	timeSearchPopup_msgs = PcfButton('#TimeSearchPopup-_msgs');
}
