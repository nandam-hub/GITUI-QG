import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class IncidentAssessItemPopup {
	incidentAssessItemPopupEditAssessmentItemScreenCancel = PcfButton('#IncidentAssessItemPopup-EditAssessmentItemScreen-Cancel');
	incidentAssessItemPopupEditAssessmentItemScreenEdit = PcfButton('#IncidentAssessItemPopup-EditAssessmentItemScreen-Edit');
	incidentAssessItemDetailsDVAction = PcfSelectInput('#IncidentAssessItemPopup-EditAssessmentItemScreen-IncidentAssessItemDetailsDV-Action');
	incidentAssessItemDetailsDVAssessmentSource = PcfSelectInput('#IncidentAssessItemPopup-EditAssessmentItemScreen-IncidentAssessItemDetailsDV-AssessmentSource');
	incidentAssessItemDetailsDVCategory = PcfSelectInput('#IncidentAssessItemPopup-EditAssessmentItemScreen-IncidentAssessItemDetailsDV-Category');
	incidentAssessItemDetailsDVComment = PcfTextInput('#IncidentAssessItemPopup-EditAssessmentItemScreen-IncidentAssessItemDetailsDV-Comment');
	incidentAssessItemDetailsDVCreateTime = PcfDateValueInput('#IncidentAssessItemPopup-EditAssessmentItemScreen-IncidentAssessItemDetailsDV-CreateTime');
	incidentAssessItemDetailsDVDescription = PcfTextInput('#IncidentAssessItemPopup-EditAssessmentItemScreen-IncidentAssessItemDetailsDV-Description');
	incidentAssessItemDetailsDVEstimateAmount = PcfTextInput('#IncidentAssessItemPopup-EditAssessmentItemScreen-IncidentAssessItemDetailsDV-EstimateAmount');
	incidentAssessItemPopupEditAssessmentItemScreenUpdate = PcfButton('#IncidentAssessItemPopup-EditAssessmentItemScreen-Update');
	incidentAssessItemPopupEditAssessmentItemScreen_msgs = PcfButton('#IncidentAssessItemPopup-EditAssessmentItemScreen-_msgs');
	incidentAssessItemPopupIncidentAssessItemPopup_UpLink = PcfButton('#IncidentAssessItemPopup-IncidentAssessItemPopup_UpLink');
	incidentAssessItemPopup_Paging = PcfButton('#IncidentAssessItemPopup-_Paging');
	incidentAssessItemPopup__crumb__ = PcfComponent('#IncidentAssessItemPopup-__crumb__');
}
