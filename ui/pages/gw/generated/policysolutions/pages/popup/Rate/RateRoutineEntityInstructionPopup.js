import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class RateRoutineEntityInstructionPopup {
	dataTypeFilterToolbarDataTypesFilter = PcfSelectInput('#RateRoutineEntityInstructionPopup-DataTypeFilterToolbar-DataTypesFilter');
	rateRoutineEntityInstructionPopupDataTypeFilterToolbarRateRoutineInstructionTextFilter = PcfTextInput('#RateRoutineEntityInstructionPopup-DataTypeFilterToolbar-RateRoutineInstructionTextFilter');
	rateRoutineEntityInstructionPopupRateRoutineEntityEditCancel = PcfButton('#RateRoutineEntityInstructionPopup-RateRoutineEntityEditCancel');
	rateRoutineEntityInstructionPopupRateRoutineEntityEditUpdate = PcfButton('#RateRoutineEntityInstructionPopup-RateRoutineEntityEditUpdate');
	rateRoutineEntityInstructionPopupRateRoutineEntityInstructionLV = PcfListView('#RateRoutineEntityInstructionPopup-RateRoutineEntityInstructionLV');
	rateRoutineEntityInstructionPopupRateRoutineEntityInstructionPopup_UpLink = PcfButton('#RateRoutineEntityInstructionPopup-RateRoutineEntityInstructionPopup_UpLink');
	rateRoutineEntityInstructionPopupUsage = PcfTextInput('#RateRoutineEntityInstructionPopup-Usage');
	rateRoutineEntityInstructionPopup_Paging = PcfButton('#RateRoutineEntityInstructionPopup-_Paging');
	rateRoutineEntityInstructionPopup__crumb__ = PcfComponent('#RateRoutineEntityInstructionPopup-__crumb__');
	rateRoutineEntityInstructionPopup_msgs = PcfButton('#RateRoutineEntityInstructionPopup-_msgs');
	rateRoutineEntityInstructionPopupinScopeParamName = PcfSelectInput('#RateRoutineEntityInstructionPopup-inScopeParamName');
}
