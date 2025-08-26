import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class RateRoutineEntityPopup {
	rateRoutineEntityPopupDataTypeFilterToolbarDataTypesFilter = PcfSelectInput('#RateRoutineEntityPopup-DataTypeFilterToolbar-DataTypesFilter');
	dataTypeFilterToolbarIsModifierRangeInput = PcfSelectInput('#RateRoutineEntityPopup-DataTypeFilterToolbar-IsModifierRangeInput');
	rateRoutineEntityPopupDataTypeFilterToolbarRateRoutineInstructionTextFilter = PcfTextInput('#RateRoutineEntityPopup-DataTypeFilterToolbar-RateRoutineInstructionTextFilter');
	dataTypeFilterToolbarForLoopDataTypesFilter = PcfSelectInput('#RateRoutineEntityPopup-DataTypeFilterToolbarForLoop-DataTypesFilter');
	dataTypeFilterToolbarForLoopIsModifierRangeInputForLoop = PcfSelectInput('#RateRoutineEntityPopup-DataTypeFilterToolbarForLoop-IsModifierRangeInputForLoop');
	dataTypeFilterToolbarForLoopRateRoutineInstructionTextFilterForLoop = PcfTextInput('#RateRoutineEntityPopup-DataTypeFilterToolbarForLoop-RateRoutineInstructionTextFilterForLoop');
	rateRoutineEntityPopupRateRoutineEntityEditCancel = PcfButton('#RateRoutineEntityPopup-RateRoutineEntityEditCancel');
	rateRoutineEntityPopupRateRoutineEntityEditUpdate = PcfButton('#RateRoutineEntityPopup-RateRoutineEntityEditUpdate');
	rateRoutineEntityPopupRateRoutineEntityForLoopLV = PcfListView('#RateRoutineEntityPopup-RateRoutineEntityForLoopLV');
	rateRoutineEntityPopupRateRoutineEntityLV = PcfListView('#RateRoutineEntityPopup-RateRoutineEntityLV');
	rateRoutineEntityPopupRateRoutineEntityPopup_UpLink = PcfButton('#RateRoutineEntityPopup-RateRoutineEntityPopup_UpLink');
	rateRoutineEntityPopupUsage = PcfTextInput('#RateRoutineEntityPopup-Usage');
	rateRoutineEntityPopup_Paging = PcfButton('#RateRoutineEntityPopup-_Paging');
	rateRoutineEntityPopup__crumb__ = PcfComponent('#RateRoutineEntityPopup-__crumb__');
	rateRoutineEntityPopup_msgs = PcfButton('#RateRoutineEntityPopup-_msgs');
	rateRoutineEntityPopupinScopeParamName = PcfSelectInput('#RateRoutineEntityPopup-inScopeParamName');
}
