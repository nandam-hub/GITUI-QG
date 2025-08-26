import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class FixPropContentItemPopup {
	editAssessmentContentItemScreenCancel = PcfButton('#FixPropContentItemPopup-EditAssessmentContentItemScreen-Cancel');
	editAssessmentContentItemScreenEdit = PcfButton('#FixPropContentItemPopup-EditAssessmentContentItemScreen-Edit');
	fixPropContentItemDetailsDVAction = PcfSelectInput('#FixPropContentItemPopup-EditAssessmentContentItemScreen-FixPropContentItemDetailsDV-Action');
	fixPropContentItemDetailsDVAssessmentSource = PcfSelectInput('#FixPropContentItemPopup-EditAssessmentContentItemScreen-FixPropContentItemDetailsDV-AssessmentSource');
	fixPropContentItemDetailsDVBrand = PcfTextInput('#FixPropContentItemPopup-EditAssessmentContentItemScreen-FixPropContentItemDetailsDV-Brand');
	fixPropContentItemDetailsDVCategory = PcfSelectInput('#FixPropContentItemPopup-EditAssessmentContentItemScreen-FixPropContentItemDetailsDV-Category');
	fixPropContentItemDetailsDVComment = PcfTextInput('#FixPropContentItemPopup-EditAssessmentContentItemScreen-FixPropContentItemDetailsDV-Comment');
	fixPropContentItemDetailsDVCreateTime = PcfDateValueInput('#FixPropContentItemPopup-EditAssessmentContentItemScreen-FixPropContentItemDetailsDV-CreateTime');
	fixPropContentItemDetailsDVDateAcquired = PcfDateValueInput('#FixPropContentItemPopup-EditAssessmentContentItemScreen-FixPropContentItemDetailsDV-DateAcquired');
	fixPropContentItemDetailsDVDepreciation = PcfTextInput('#FixPropContentItemPopup-EditAssessmentContentItemScreen-FixPropContentItemDetailsDV-Depreciation');
	fixPropContentItemDetailsDVDescription = PcfTextInput('#FixPropContentItemPopup-EditAssessmentContentItemScreen-FixPropContentItemDetailsDV-Description');
	fixPropContentItemDetailsDVItemValue = PcfTextInput('#FixPropContentItemPopup-EditAssessmentContentItemScreen-FixPropContentItemDetailsDV-ItemValue');
	fixPropContentItemDetailsDVNumberOfItems = PcfTextInput('#FixPropContentItemPopup-EditAssessmentContentItemScreen-FixPropContentItemDetailsDV-NumberOfItems');
	fixPropContentItemDetailsDVPurchaseCost = PcfTextInput('#FixPropContentItemPopup-EditAssessmentContentItemScreen-FixPropContentItemDetailsDV-PurchaseCost');
	fixPropContentItemDetailsDVSalvage = PcfTextInput('#FixPropContentItemPopup-EditAssessmentContentItemScreen-FixPropContentItemDetailsDV-Salvage');
	fixPropContentItemDetailsDVSchedule = PcfSelectInput('#FixPropContentItemPopup-EditAssessmentContentItemScreen-FixPropContentItemDetailsDV-Schedule');
	editAssessmentContentItemScreenUpdate = PcfButton('#FixPropContentItemPopup-EditAssessmentContentItemScreen-Update');
	editAssessmentContentItemScreen_msgs = PcfButton('#FixPropContentItemPopup-EditAssessmentContentItemScreen-_msgs');
	fixPropContentItemPopupFixPropContentItemPopup_UpLink = PcfButton('#FixPropContentItemPopup-FixPropContentItemPopup_UpLink');
	fixPropContentItemPopup_Paging = PcfButton('#FixPropContentItemPopup-_Paging');
	fixPropContentItemPopup__crumb__ = PcfComponent('#FixPropContentItemPopup-__crumb__');
}
