import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class FixPropAssessItemPopup {
	editAssessmentItemScreenCancel = PcfButton('#FixPropAssessItemPopup-EditAssessmentItemScreen-Cancel');
	editAssessmentItemScreenEdit = PcfButton('#FixPropAssessItemPopup-EditAssessmentItemScreen-Edit');
	fixPropAssessItemDetailsDVAction = PcfSelectInput('#FixPropAssessItemPopup-EditAssessmentItemScreen-FixPropAssessItemDetailsDV-Action');
	fixPropAssessItemDetailsDVAssessmentSource = PcfSelectInput('#FixPropAssessItemPopup-EditAssessmentItemScreen-FixPropAssessItemDetailsDV-AssessmentSource');
	fixPropAssessItemDetailsDVCategory = PcfSelectInput('#FixPropAssessItemPopup-EditAssessmentItemScreen-FixPropAssessItemDetailsDV-Category');
	fixPropAssessItemDetailsDVComment = PcfTextInput('#FixPropAssessItemPopup-EditAssessmentItemScreen-FixPropAssessItemDetailsDV-Comment');
	fixPropAssessItemDetailsDVCreateTime = PcfDateValueInput('#FixPropAssessItemPopup-EditAssessmentItemScreen-FixPropAssessItemDetailsDV-CreateTime');
	fixPropAssessItemDetailsDVDescription = PcfTextInput('#FixPropAssessItemPopup-EditAssessmentItemScreen-FixPropAssessItemDetailsDV-Description');
	fixPropAssessItemDetailsDVEstimateAmount = PcfTextInput('#FixPropAssessItemPopup-EditAssessmentItemScreen-FixPropAssessItemDetailsDV-EstimateAmount');
	editAssessmentItemScreenUpdate = PcfButton('#FixPropAssessItemPopup-EditAssessmentItemScreen-Update');
	editAssessmentItemScreen_msgs = PcfButton('#FixPropAssessItemPopup-EditAssessmentItemScreen-_msgs');
	fixPropAssessItemPopupFixPropAssessItemPopup_UpLink = PcfButton('#FixPropAssessItemPopup-FixPropAssessItemPopup_UpLink');
	fixPropAssessItemPopup_Paging = PcfButton('#FixPropAssessItemPopup-_Paging');
	fixPropAssessItemPopup__crumb__ = PcfComponent('#FixPropAssessItemPopup-__crumb__');
}
