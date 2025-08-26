import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewFixPropAssessItemPopup {
	newFixPropAssessItemPopupEditAssessmentItemScreenCancel = PcfButton('#NewFixPropAssessItemPopup-EditAssessmentItemScreen-Cancel');
	newFixPropAssessItemPopupEditAssessmentItemScreenEdit = PcfButton('#NewFixPropAssessItemPopup-EditAssessmentItemScreen-Edit');
	newFixPropAssessItemPopupEditAssessmentItemScreenFixPropAssessItemDetailsDVAction = PcfSelectInput('#NewFixPropAssessItemPopup-EditAssessmentItemScreen-FixPropAssessItemDetailsDV-Action');
	newFixPropAssessItemPopupEditAssessmentItemScreenFixPropAssessItemDetailsDVAssessmentSource = PcfSelectInput('#NewFixPropAssessItemPopup-EditAssessmentItemScreen-FixPropAssessItemDetailsDV-AssessmentSource');
	newFixPropAssessItemPopupEditAssessmentItemScreenFixPropAssessItemDetailsDVCategory = PcfSelectInput('#NewFixPropAssessItemPopup-EditAssessmentItemScreen-FixPropAssessItemDetailsDV-Category');
	newFixPropAssessItemPopupEditAssessmentItemScreenFixPropAssessItemDetailsDVComment = PcfTextInput('#NewFixPropAssessItemPopup-EditAssessmentItemScreen-FixPropAssessItemDetailsDV-Comment');
	newFixPropAssessItemPopupEditAssessmentItemScreenFixPropAssessItemDetailsDVCreateTime = PcfDateValueInput('#NewFixPropAssessItemPopup-EditAssessmentItemScreen-FixPropAssessItemDetailsDV-CreateTime');
	newFixPropAssessItemPopupEditAssessmentItemScreenFixPropAssessItemDetailsDVDescription = PcfTextInput('#NewFixPropAssessItemPopup-EditAssessmentItemScreen-FixPropAssessItemDetailsDV-Description');
	newFixPropAssessItemPopupEditAssessmentItemScreenFixPropAssessItemDetailsDVEstimateAmount = PcfTextInput('#NewFixPropAssessItemPopup-EditAssessmentItemScreen-FixPropAssessItemDetailsDV-EstimateAmount');
	newFixPropAssessItemPopupEditAssessmentItemScreenUpdate = PcfButton('#NewFixPropAssessItemPopup-EditAssessmentItemScreen-Update');
	newFixPropAssessItemPopupEditAssessmentItemScreen_msgs = PcfButton('#NewFixPropAssessItemPopup-EditAssessmentItemScreen-_msgs');
	newFixPropAssessItemPopupNewFixPropAssessItemPopup_UpLink = PcfButton('#NewFixPropAssessItemPopup-NewFixPropAssessItemPopup_UpLink');
	newFixPropAssessItemPopup_Paging = PcfButton('#NewFixPropAssessItemPopup-_Paging');
	newFixPropAssessItemPopup__crumb__ = PcfComponent('#NewFixPropAssessItemPopup-__crumb__');
}
