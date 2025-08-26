import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class VehAssessItemPopup {
	vehAssessItemPopupEditAssessmentItemScreenCancel = PcfButton('#VehAssessItemPopup-EditAssessmentItemScreen-Cancel');
	vehAssessItemPopupEditAssessmentItemScreenEdit = PcfButton('#VehAssessItemPopup-EditAssessmentItemScreen-Edit');
	vehAssessItemPopupEditAssessmentItemScreenUpdate = PcfButton('#VehAssessItemPopup-EditAssessmentItemScreen-Update');
	vehAssessItemPopupEditAssessmentItemScreenVehAssessItemDetailsDVAction = PcfSelectInput('#VehAssessItemPopup-EditAssessmentItemScreen-VehAssessItemDetailsDV-Action');
	vehAssessItemPopupEditAssessmentItemScreenVehAssessItemDetailsDVAssessmentSource = PcfSelectInput('#VehAssessItemPopup-EditAssessmentItemScreen-VehAssessItemDetailsDV-AssessmentSource');
	vehAssessItemPopupEditAssessmentItemScreenVehAssessItemDetailsDVCategory = PcfSelectInput('#VehAssessItemPopup-EditAssessmentItemScreen-VehAssessItemDetailsDV-Category');
	vehAssessItemPopupEditAssessmentItemScreenVehAssessItemDetailsDVComment = PcfTextInput('#VehAssessItemPopup-EditAssessmentItemScreen-VehAssessItemDetailsDV-Comment');
	vehAssessItemPopupEditAssessmentItemScreenVehAssessItemDetailsDVCreateTime = PcfDateValueInput('#VehAssessItemPopup-EditAssessmentItemScreen-VehAssessItemDetailsDV-CreateTime');
	vehAssessItemPopupEditAssessmentItemScreenVehAssessItemDetailsDVDescription = PcfTextInput('#VehAssessItemPopup-EditAssessmentItemScreen-VehAssessItemDetailsDV-Description');
	vehAssessItemPopupEditAssessmentItemScreenVehAssessItemDetailsDVEstimateAmount = PcfTextInput('#VehAssessItemPopup-EditAssessmentItemScreen-VehAssessItemDetailsDV-EstimateAmount');
	vehAssessItemPopupEditAssessmentItemScreen_msgs = PcfButton('#VehAssessItemPopup-EditAssessmentItemScreen-_msgs');
	vehAssessItemPopupVehAssessItemPopup_UpLink = PcfButton('#VehAssessItemPopup-VehAssessItemPopup_UpLink');
	vehAssessItemPopup_Paging = PcfButton('#VehAssessItemPopup-_Paging');
	vehAssessItemPopup__crumb__ = PcfComponent('#VehAssessItemPopup-__crumb__');
}
