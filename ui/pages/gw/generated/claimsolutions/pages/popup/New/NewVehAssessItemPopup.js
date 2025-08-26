import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewVehAssessItemPopup {
	newVehAssessItemPopupEditAssessmentItemScreenCancel = PcfButton('#NewVehAssessItemPopup-EditAssessmentItemScreen-Cancel');
	newVehAssessItemPopupEditAssessmentItemScreenEdit = PcfButton('#NewVehAssessItemPopup-EditAssessmentItemScreen-Edit');
	newVehAssessItemPopupEditAssessmentItemScreenUpdate = PcfButton('#NewVehAssessItemPopup-EditAssessmentItemScreen-Update');
	vehAssessItemDetailsDVAction = PcfSelectInput('#NewVehAssessItemPopup-EditAssessmentItemScreen-VehAssessItemDetailsDV-Action');
	vehAssessItemDetailsDVAssessmentSource = PcfSelectInput('#NewVehAssessItemPopup-EditAssessmentItemScreen-VehAssessItemDetailsDV-AssessmentSource');
	vehAssessItemDetailsDVCategory = PcfSelectInput('#NewVehAssessItemPopup-EditAssessmentItemScreen-VehAssessItemDetailsDV-Category');
	vehAssessItemDetailsDVComment = PcfTextInput('#NewVehAssessItemPopup-EditAssessmentItemScreen-VehAssessItemDetailsDV-Comment');
	vehAssessItemDetailsDVCreateTime = PcfDateValueInput('#NewVehAssessItemPopup-EditAssessmentItemScreen-VehAssessItemDetailsDV-CreateTime');
	vehAssessItemDetailsDVDescription = PcfTextInput('#NewVehAssessItemPopup-EditAssessmentItemScreen-VehAssessItemDetailsDV-Description');
	vehAssessItemDetailsDVEstimateAmount = PcfTextInput('#NewVehAssessItemPopup-EditAssessmentItemScreen-VehAssessItemDetailsDV-EstimateAmount');
	newVehAssessItemPopupEditAssessmentItemScreen_msgs = PcfButton('#NewVehAssessItemPopup-EditAssessmentItemScreen-_msgs');
	newVehAssessItemPopupNewVehAssessItemPopup_UpLink = PcfButton('#NewVehAssessItemPopup-NewVehAssessItemPopup_UpLink');
	newVehAssessItemPopup_Paging = PcfButton('#NewVehAssessItemPopup-_Paging');
	newVehAssessItemPopup__crumb__ = PcfComponent('#NewVehAssessItemPopup-__crumb__');
}
