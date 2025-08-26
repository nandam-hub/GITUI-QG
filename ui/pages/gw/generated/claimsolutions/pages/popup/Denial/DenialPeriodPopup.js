import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class DenialPeriodPopup {
	acceptDocumentTemplateSelectAcceptDocumentTemplate = PcfButton('#DenialPeriodPopup-DenialPeriodDV-AcceptDocumentTemplate-SelectAcceptDocumentTemplate');
	denialPeriodDVBenefitPaymentAcceptance = PcfComponent('#DenialPeriodPopup-DenialPeriodDV-BenefitPaymentAcceptance');
	denialPeriodDVDueDateFormula = PcfSelectInput('#DenialPeriodPopup-DenialPeriodDV-DueDateFormula');
	denialPeriodDVEffectiveDate = PcfDateValueInput('#DenialPeriodPopup-DenialPeriodDV-EffectiveDate');
	denialPeriodDVExpiryDate = PcfDateValueInput('#DenialPeriodPopup-DenialPeriodDV-ExpiryDate');
	denialPeriodDVJurisdictionState = PcfSelectInput('#DenialPeriodPopup-DenialPeriodDV-JurisdictionState');
	rejectDocumentTemplateSelectRejectDocumentTemplate = PcfButton('#DenialPeriodPopup-DenialPeriodDV-RejectDocumentTemplate-SelectRejectDocumentTemplate');
	denialPeriodDVTargetDaysFromLoss = PcfTextInput('#DenialPeriodPopup-DenialPeriodDV-TargetDaysFromLoss');
	denialPeriodDVTargetDaysFromNotice = PcfTextInput('#DenialPeriodPopup-DenialPeriodDV-TargetDaysFromNotice');
	denialPeriodDVTargetIncludeDays = PcfSelectInput('#DenialPeriodPopup-DenialPeriodDV-TargetIncludeDays');
	denialPeriodDV_tbCancel = PcfButton('#DenialPeriodPopup-DenialPeriodDV_tb-Cancel');
	denialPeriodDV_tbEdit = PcfButton('#DenialPeriodPopup-DenialPeriodDV_tb-Edit');
	denialPeriodDV_tbUpdate = PcfButton('#DenialPeriodPopup-DenialPeriodDV_tb-Update');
	denialPeriodPopupDenialPeriodPopup_UpLink = PcfButton('#DenialPeriodPopup-DenialPeriodPopup_UpLink');
	denialPeriodPopup_Paging = PcfButton('#DenialPeriodPopup-_Paging');
	denialPeriodPopup__crumb__ = PcfComponent('#DenialPeriodPopup-__crumb__');
	denialPeriodPopup_msgs = PcfButton('#DenialPeriodPopup-_msgs');
}
