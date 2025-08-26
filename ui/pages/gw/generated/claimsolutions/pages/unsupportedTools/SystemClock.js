import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class SystemClock {
	systemClockScreenAddDay = PcfButton('#SystemClock-SystemClockScreen-AddDay');
	systemClockScreenAddHour = PcfButton('#SystemClock-SystemClockScreen-AddHour');
	systemClockScreenAddMinute = PcfButton('#SystemClock-SystemClockScreen-AddMinute');
	systemClockScreenAddMonth = PcfButton('#SystemClock-SystemClockScreen-AddMonth');
	systemClockScreenAddWeek = PcfButton('#SystemClock-SystemClockScreen-AddWeek');
	systemClockScreenAddYear = PcfButton('#SystemClock-SystemClockScreen-AddYear');
	systemClockScreenChangeDate = PcfButton('#SystemClock-SystemClockScreen-ChangeDate');
	systemClockScreenDate = PcfDateValueInput('#SystemClock-SystemClockScreen-Date');
	systemClockScreenInClusterAlert = PcfButton('#SystemClock-SystemClockScreen-InClusterAlert');
	inClusterAlertCloseBtn = PcfButton('#SystemClock-SystemClockScreen-InClusterAlert-CloseBtn');
	systemClockScreenNotEnabledAlert = PcfButton('#SystemClock-SystemClockScreen-NotEnabledAlert');
	notEnabledAlertCloseBtn = PcfButton('#SystemClock-SystemClockScreen-NotEnabledAlert-CloseBtn');
	systemClockScreenProgress = PcfButton('#SystemClock-SystemClockScreen-Progress');
	systemClockScreen_msgs = PcfButton('#SystemClock-SystemClockScreen-_msgs');
	systemClockSystemClock_UpLink = PcfButton('#SystemClock-SystemClock_UpLink');
	systemClock_Paging = PcfButton('#SystemClock-_Paging');
	systemClock__crumb__ = PcfComponent('#SystemClock-__crumb__');
}
