import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewIncidentAssessItemPopup {
	newIncidentAssessItemPopupCancel = PcfButton('#NewIncidentAssessItemPopup-Cancel');
	newIncidentAssessItemPopupEdit = PcfButton('#NewIncidentAssessItemPopup-Edit');
	newIncidentAssessItemPopupIncidentAssessItemDetailsDVAction = PcfSelectInput('#NewIncidentAssessItemPopup-IncidentAssessItemDetailsDV-Action');
	newIncidentAssessItemPopupIncidentAssessItemDetailsDVAssessmentSource = PcfSelectInput('#NewIncidentAssessItemPopup-IncidentAssessItemDetailsDV-AssessmentSource');
	newIncidentAssessItemPopupIncidentAssessItemDetailsDVCategory = PcfSelectInput('#NewIncidentAssessItemPopup-IncidentAssessItemDetailsDV-Category');
	newIncidentAssessItemPopupIncidentAssessItemDetailsDVComment = PcfTextInput('#NewIncidentAssessItemPopup-IncidentAssessItemDetailsDV-Comment');
	newIncidentAssessItemPopupIncidentAssessItemDetailsDVCreateTime = PcfDateValueInput('#NewIncidentAssessItemPopup-IncidentAssessItemDetailsDV-CreateTime');
	newIncidentAssessItemPopupIncidentAssessItemDetailsDVDescription = PcfTextInput('#NewIncidentAssessItemPopup-IncidentAssessItemDetailsDV-Description');
	newIncidentAssessItemPopupIncidentAssessItemDetailsDVEstimateAmount = PcfTextInput('#NewIncidentAssessItemPopup-IncidentAssessItemDetailsDV-EstimateAmount');
	newIncidentAssessItemPopupNewIncidentAssessItemPopup_UpLink = PcfButton('#NewIncidentAssessItemPopup-NewIncidentAssessItemPopup_UpLink');
	newIncidentAssessItemPopupUpdate = PcfButton('#NewIncidentAssessItemPopup-Update');
	newIncidentAssessItemPopup_Paging = PcfButton('#NewIncidentAssessItemPopup-_Paging');
	newIncidentAssessItemPopup__crumb__ = PcfComponent('#NewIncidentAssessItemPopup-__crumb__');
	newIncidentAssessItemPopup_msgs = PcfButton('#NewIncidentAssessItemPopup-_msgs');
}
