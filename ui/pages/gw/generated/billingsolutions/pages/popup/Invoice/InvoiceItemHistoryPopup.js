import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class InvoiceItemHistoryPopup {
	agencyItemBalanceInputSetCommissionBasis = PcfTextInput('#InvoiceItemHistoryPopup-AgencyItemBalanceInputSet-CommissionBasis');
	agencyItemBalanceInputSetCommissionPercentage = PcfTextInput('#InvoiceItemHistoryPopup-AgencyItemBalanceInputSet-CommissionPercentage');
	agencyItemBalanceInputSetNet = PcfTextInput('#InvoiceItemHistoryPopup-AgencyItemBalanceInputSet-Net');
	agencyItemBalanceInputSetUnpaidAmount = PcfTextInput('#InvoiceItemHistoryPopup-AgencyItemBalanceInputSet-UnpaidAmount');
	agencyItemBalanceInputSetUnsettledCommission = PcfTextInput('#InvoiceItemHistoryPopup-AgencyItemBalanceInputSet-UnsettledCommission');
	agencyItemCreditsInputSetAgencyBillRetained = PcfTextInput('#InvoiceItemHistoryPopup-AgencyItemCreditsInputSet-AgencyBillRetained');
	agencyItemCreditsInputSetCommissionBasis = PcfTextInput('#InvoiceItemHistoryPopup-AgencyItemCreditsInputSet-CommissionBasis');
	agencyItemCreditsInputSetCommissionPercentage = PcfTextInput('#InvoiceItemHistoryPopup-AgencyItemCreditsInputSet-CommissionPercentage');
	agencyItemCreditsInputSetNetPaidAmount = PcfTextInput('#InvoiceItemHistoryPopup-AgencyItemCreditsInputSet-NetPaidAmount');
	agencyItemCreditsInputSetPaidAmount = PcfTextInput('#InvoiceItemHistoryPopup-AgencyItemCreditsInputSet-PaidAmount');
	agencyItemInputSetCommissionAmount = PcfTextInput('#InvoiceItemHistoryPopup-AgencyItemInputSet-CommissionAmount');
	agencyItemInputSetCommissionBasis = PcfTextInput('#InvoiceItemHistoryPopup-AgencyItemInputSet-CommissionBasis');
	agencyItemInputSetCommissionPercentage = PcfTextInput('#InvoiceItemHistoryPopup-AgencyItemInputSet-CommissionPercentage');
	agencyItemInputSetGrossAmount = PcfTextInput('#InvoiceItemHistoryPopup-AgencyItemInputSet-GrossAmount');
	agencyItemInputSetNetAmount = PcfTextInput('#InvoiceItemHistoryPopup-AgencyItemInputSet-NetAmount');
	invoiceItemHistoryPopupCarriedForwardHistory = PcfButton('#InvoiceItemHistoryPopup-CarriedForwardHistory');
	carriedForwardHistoryCloseBtn = PcfButton('#InvoiceItemHistoryPopup-CarriedForwardHistory-CloseBtn');
	chargeInputSetChargeDate = PcfDateValueInput('#InvoiceItemHistoryPopup-ChargeInputSet-ChargeDate');
	chargeInputSetIssured = PcfTextInput('#InvoiceItemHistoryPopup-ChargeInputSet-Issured');
	chargeInputSetPolicy = PcfTextInput('#InvoiceItemHistoryPopup-ChargeInputSet-Policy');
	chargeInputSetinvoice = PcfTextInput('#InvoiceItemHistoryPopup-ChargeInputSet-invoice');
	chargeInputSetowner = PcfTextInput('#InvoiceItemHistoryPopup-ChargeInputSet-owner');
	invoiceItemHistoryPopupExceptionComments = PcfTextInput('#InvoiceItemHistoryPopup-ExceptionComments');
	invoiceItemHistoryPopupInvoiceItemBreakdownPanelSetInvoiceItemBreakdownItemsLV = PcfListView('#InvoiceItemHistoryPopup-InvoiceItemBreakdownPanelSet-InvoiceItemBreakdownItemsLV');
	invoiceItemHistoryPopupInvoiceItemHistoryPopup_UpLink = PcfButton('#InvoiceItemHistoryPopup-InvoiceItemHistoryPopup_UpLink');
	invoiceItemHistoryPopup_Paging = PcfButton('#InvoiceItemHistoryPopup-_Paging');
	invoiceItemHistoryPopup__crumb__ = PcfComponent('#InvoiceItemHistoryPopup-__crumb__');
	invoiceItemHistoryPopup_msgs = PcfButton('#InvoiceItemHistoryPopup-_msgs');
	invoiceItemHistoryPopupitemEventsItemEventPanelSetItemEventsLV = PcfListView('#InvoiceItemHistoryPopup-itemEvents-ItemEventPanelSet-ItemEventsLV');
	invoiceItemHistoryPopupitemEventsItemEventPanelSetItemEventsLV_tbPolicyRoleFilter = PcfSelectInput('#InvoiceItemHistoryPopup-itemEvents-ItemEventPanelSet-ItemEventsLV_tb-PolicyRoleFilter');
}
