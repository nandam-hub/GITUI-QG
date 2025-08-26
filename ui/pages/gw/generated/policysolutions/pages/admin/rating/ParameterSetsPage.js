import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class ParameterSetsPage {
	parameterSetsPageParameterSetsPage_UpLink = PcfButton('#ParameterSetsPage-ParameterSetsPage_UpLink');
	calcRoutineParameterSetsLDVCalcRoutineParameterSetsLV = PcfListView('#ParameterSetsPage-RatingParameterSetScreen-CalcRoutineParameterSetsLDV-CalcRoutineParameterSetsLV');
	paramSetToolbarAdd = PcfButton('#ParameterSetsPage-RatingParameterSetScreen-CalcRoutineParameterSetsLDV-ParamSetToolbar-Add');
	paramSetToolbarRemove = PcfButton('#ParameterSetsPage-RatingParameterSetScreen-CalcRoutineParameterSetsLDV-ParamSetToolbar-Remove');
	parameterCVCancel = PcfButton('#ParameterSetsPage-RatingParameterSetScreen-CalcRoutineParameterSetsLDV-ParameterCV-Cancel');
	parameterCVEdit = PcfButton('#ParameterSetsPage-RatingParameterSetScreen-CalcRoutineParameterSetsLDV-ParameterCV-Edit');
	parameterSetsPageRatingParameterSetScreenCalcRoutineParameterSetsLDVParameterCVLocalizedValuesDVLocalizedValuesLV = PcfListView('#ParameterSetsPage-RatingParameterSetScreen-CalcRoutineParameterSetsLDV-ParameterCV-LocalizedValuesDV-LocalizedValuesLV');
	parameterCVParamSetContainsCost = PcfCheckBox('#ParameterSetsPage-RatingParameterSetScreen-CalcRoutineParameterSetsLDV-ParameterCV-ParamSetContainsCost');
	parameterCVParamSetName = PcfTextInput('#ParameterSetsPage-RatingParameterSetScreen-CalcRoutineParameterSetsLDV-ParameterCV-ParamSetName');
	parameterCVParamSetPolicyLine = PcfSelectInput('#ParameterSetsPage-RatingParameterSetScreen-CalcRoutineParameterSetsLDV-ParameterCV-ParamSetPolicyLine');
	parameterCVParameterLV = PcfListView('#ParameterSetsPage-RatingParameterSetScreen-CalcRoutineParameterSetsLDV-ParameterCV-ParameterLV');
	parameterToolbarAdd = PcfButton('#ParameterSetsPage-RatingParameterSetScreen-CalcRoutineParameterSetsLDV-ParameterCV-ParameterToolbar-Add');
	parameterToolbarRemove = PcfButton('#ParameterSetsPage-RatingParameterSetScreen-CalcRoutineParameterSetsLDV-ParameterCV-ParameterToolbar-Remove');
	parameterCVParamsetCode = PcfTextInput('#ParameterSetsPage-RatingParameterSetScreen-CalcRoutineParameterSetsLDV-ParameterCV-ParamsetCode');
	parameterCVUpdate = PcfButton('#ParameterSetsPage-RatingParameterSetScreen-CalcRoutineParameterSetsLDV-ParameterCV-Update');
	parameterCVparamSetUpdate = PcfButton('#ParameterSetsPage-RatingParameterSetScreen-CalcRoutineParameterSetsLDV-ParameterCV-paramSetUpdate');
	parameterCVparametersTab = PcfButton('#ParameterSetsPage-RatingParameterSetScreen-CalcRoutineParameterSetsLDV-ParameterCV-parametersTab');
	ratingParameterSetScreenPolicyLineSelection = PcfSelectInput('#ParameterSetsPage-RatingParameterSetScreen-PolicyLineSelection');
	ratingParameterSetScreen_msgs = PcfButton('#ParameterSetsPage-RatingParameterSetScreen-_msgs');
	parameterSetsPage_Paging = PcfButton('#ParameterSetsPage-_Paging');
	parameterSetsPage__crumb__ = PcfComponent('#ParameterSetsPage-__crumb__');
}
