import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class RICPTransactionPopup {
	rICPTransactionPopupAgreement = PcfTextInput('#RICPTransactionPopup-Agreement');
	rICPTransactionPopupBasisGNP = PcfTextInput('#RICPTransactionPopup-BasisGNP');
	rICPTransactionPopupCalcTimestamp = PcfDateValueInput('#RICPTransactionPopup-CalcTimestamp');
	rICPTransactionPopupCalculationOrder = PcfTextInput('#RICPTransactionPopup-CalculationOrder');
	rICPTransactionPopupCededPremium = PcfTextInput('#RICPTransactionPopup-CededPremium');
	rICPTransactionPopupCededPremiumMarkup = PcfTextInput('#RICPTransactionPopup-CededPremiumMarkup');
	rICPTransactionPopupCededRiskAmount = PcfTextInput('#RICPTransactionPopup-CededRiskAmount');
	rICPTransactionPopupCedingRate = PcfTextInput('#RICPTransactionPopup-CedingRate');
	rICPTransactionPopupCommission = PcfTextInput('#RICPTransactionPopup-Commission');
	rICPTransactionPopupCommissionRate = PcfTextInput('#RICPTransactionPopup-CommissionRate');
	rICPTransactionPopupDatePosted = PcfDateValueInput('#RICPTransactionPopup-DatePosted');
	rICPTransactionPopupDateWritten = PcfDateValueInput('#RICPTransactionPopup-DateWritten');
	rICPTransactionPopupEffectiveDate = PcfDateValueInput('#RICPTransactionPopup-EffectiveDate');
	rICPTransactionPopupExpirationDate = PcfDateValueInput('#RICPTransactionPopup-ExpirationDate');
	rICPTransactionPopupMarkupRate = PcfTextInput('#RICPTransactionPopup-MarkupRate');
	rICPTransactionPopupProgram = PcfTextInput('#RICPTransactionPopup-Program');
	rICPTransactionPopupRICPTransactionPopup_UpLink = PcfButton('#RICPTransactionPopup-RICPTransactionPopup_UpLink');
	rICPTransactionPopup_Paging = PcfButton('#RICPTransactionPopup-_Paging');
	rICPTransactionPopup__crumb__ = PcfComponent('#RICPTransactionPopup-__crumb__');
	rICPTransactionPopup_msgs = PcfButton('#RICPTransactionPopup-_msgs');
}
