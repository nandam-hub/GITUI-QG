import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ScheduleCreditPopup {
	scheduleCreditPopupCancel = PcfButton('#ScheduleCreditPopup-Cancel');
	scheduleCreditPopupEdit = PcfButton('#ScheduleCreditPopup-Edit');
	scheduleCreditDVScheduleRateLV = PcfListView('#ScheduleCreditPopup-ScheduleCreditDV-ScheduleRateLV');
	scheduleCreditPopupScheduleCreditPopup_UpLink = PcfButton('#ScheduleCreditPopup-ScheduleCreditPopup_UpLink');
	scheduleCreditPopupUpdate = PcfButton('#ScheduleCreditPopup-Update');
	scheduleCreditPopup_Paging = PcfButton('#ScheduleCreditPopup-_Paging');
	scheduleCreditPopup__crumb__ = PcfComponent('#ScheduleCreditPopup-__crumb__');
	scheduleCreditPopup_msgs = PcfButton('#ScheduleCreditPopup-_msgs');
}
