import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class RateRoutineFunctionPopup {
	rateRoutineFunctionPopupFunctions = PcfSelectInput('#RateRoutineFunctionPopup-Functions');
	rateRoutineFunctionPopupOperandHeader = PcfButton('#RateRoutineFunctionPopup-OperandHeader');
	rateRoutineFunctionPopupRateRoutineFunctionEditCancel = PcfButton('#RateRoutineFunctionPopup-RateRoutineFunctionEditCancel');
	rateRoutineFunctionPopupRateRoutineFunctionEditUpdate = PcfButton('#RateRoutineFunctionPopup-RateRoutineFunctionEditUpdate');
	rateRoutineFunctionPopupRateRoutineFunctionPopup_UpLink = PcfButton('#RateRoutineFunctionPopup-RateRoutineFunctionPopup_UpLink');
	rateRoutineFunctionPopupReturns = PcfButton('#RateRoutineFunctionPopup-Returns');
	rateRoutineFunctionPopupUsage = PcfTextInput('#RateRoutineFunctionPopup-Usage');
	rateRoutineFunctionPopup_Paging = PcfButton('#RateRoutineFunctionPopup-_Paging');
	rateRoutineFunctionPopup__crumb__ = PcfComponent('#RateRoutineFunctionPopup-__crumb__');
	rateRoutineFunctionPopup_msgs = PcfButton('#RateRoutineFunctionPopup-_msgs');
	rateRoutineFunctionPopuprateRoutineParamHeader = PcfButton('#RateRoutineFunctionPopup-rateRoutineParamHeader');
}
