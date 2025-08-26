import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class RateRoutineConstantPopup {
	rateRoutineConstantPopupConstantValueRange = PcfSelectInput('#RateRoutineConstantPopup-ConstantValueRange');
	rateRoutineConstantPopupRateRoutineConstantEditCancel = PcfButton('#RateRoutineConstantPopup-RateRoutineConstantEditCancel');
	rateRoutineConstantPopupRateRoutineConstantEditUpdate = PcfButton('#RateRoutineConstantPopup-RateRoutineConstantEditUpdate');
	rateRoutineConstantPopupRateRoutineConstantPopup_UpLink = PcfButton('#RateRoutineConstantPopup-RateRoutineConstantPopup_UpLink');
	rateRoutineConstantPopup_Paging = PcfButton('#RateRoutineConstantPopup-_Paging');
	rateRoutineConstantPopup__crumb__ = PcfComponent('#RateRoutineConstantPopup-__crumb__');
	rateRoutineConstantPopup_msgs = PcfButton('#RateRoutineConstantPopup-_msgs');
}
