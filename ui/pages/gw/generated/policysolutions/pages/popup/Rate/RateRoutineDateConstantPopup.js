import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class RateRoutineDateConstantPopup {
	rateRoutineDateConstantPopupDate = PcfDateValueInput('#RateRoutineDateConstantPopup-Date');
	rateRoutineDateConstantPopupRateRoutineConstantEditCancel = PcfButton('#RateRoutineDateConstantPopup-RateRoutineConstantEditCancel');
	rateRoutineDateConstantPopupRateRoutineConstantEditUpdate = PcfButton('#RateRoutineDateConstantPopup-RateRoutineConstantEditUpdate');
	rateRoutineDateConstantPopupRateRoutineDateConstantPopup_UpLink = PcfButton('#RateRoutineDateConstantPopup-RateRoutineDateConstantPopup_UpLink');
	rateRoutineDateConstantPopupUsage = PcfTextInput('#RateRoutineDateConstantPopup-Usage');
	rateRoutineDateConstantPopup_Paging = PcfButton('#RateRoutineDateConstantPopup-_Paging');
	rateRoutineDateConstantPopup__crumb__ = PcfComponent('#RateRoutineDateConstantPopup-__crumb__');
	rateRoutineDateConstantPopup_msgs = PcfButton('#RateRoutineDateConstantPopup-_msgs');
}
