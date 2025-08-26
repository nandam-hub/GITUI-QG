import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AgencyBillAddInvoiceItemsPopup {
	agencyBillAddInvoiceItemsPopupAgencyBillAddInvoiceItemsPopup_UpLink = PcfButton('#AgencyBillAddInvoiceItemsPopup-AgencyBillAddInvoiceItemsPopup_UpLink');
	invoiceItemSearchDVAccountOrProducerPayer = PcfComponent('#AgencyBillAddInvoiceItemsPopup-InvoiceItemSearchPanelSet-InvoiceItemSearchDV-AccountOrProducerPayer');
	invoiceItemSearchDVChargeGroup = PcfTextInput('#AgencyBillAddInvoiceItemsPopup-InvoiceItemSearchPanelSet-InvoiceItemSearchDV-ChargeGroup');
	invoiceItemSearchDVChargePattern = PcfSelectInput('#AgencyBillAddInvoiceItemsPopup-InvoiceItemSearchPanelSet-InvoiceItemSearchDV-ChargePattern');
	invoiceItemSearchDVInvoiceStatus = PcfSelectInput('#AgencyBillAddInvoiceItemsPopup-InvoiceItemSearchPanelSet-InvoiceItemSearchDV-InvoiceStatus');
	ownerAccountSelectOwnerAccount = PcfButton('#AgencyBillAddInvoiceItemsPopup-InvoiceItemSearchPanelSet-InvoiceItemSearchDV-OwnerAccount-SelectOwnerAccount');
	payerAccountSelectPayerAccount = PcfButton('#AgencyBillAddInvoiceItemsPopup-InvoiceItemSearchPanelSet-InvoiceItemSearchDV-PayerAccount-SelectPayerAccount');
	payerProducerSelectPayerProducer = PcfButton('#AgencyBillAddInvoiceItemsPopup-InvoiceItemSearchPanelSet-InvoiceItemSearchDV-PayerProducer-SelectPayerProducer');
	payerProducerKanjiSelectPayerProducerKanji = PcfButton('#AgencyBillAddInvoiceItemsPopup-InvoiceItemSearchPanelSet-InvoiceItemSearchDV-PayerProducerKanji-SelectPayerProducerKanji');
	agencyBillAddInvoiceItemsPopupInvoiceItemSearchPanelSetInvoiceItemSearchDVPolicyPeriodSelectPolicyPeriod = PcfButton('#AgencyBillAddInvoiceItemsPopup-InvoiceItemSearchPanelSet-InvoiceItemSearchDV-PolicyPeriod-SelectPolicyPeriod');
	invoiceItemSearchPanelSetInvoiceItemsLV = PcfListView('#AgencyBillAddInvoiceItemsPopup-InvoiceItemSearchPanelSet-InvoiceItemsLV');
	agencyBillAddInvoiceItemsPopupInvoiceItemSearchPanelSetSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#AgencyBillAddInvoiceItemsPopup-InvoiceItemSearchPanelSet-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	agencyBillAddInvoiceItemsPopupInvoiceItemSearchPanelSetSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#AgencyBillAddInvoiceItemsPopup-InvoiceItemSearchPanelSet-SearchAndResetInputSet-SearchLinksInputSet-Search');
	agencyBillAddInvoiceItemsPopupPrefill = PcfSelectInput('#AgencyBillAddInvoiceItemsPopup-Prefill');
	agencyBillAddInvoiceItemsPopupSelectInvoiceItems = PcfButton('#AgencyBillAddInvoiceItemsPopup-SelectInvoiceItems');
	agencyBillAddInvoiceItemsPopup_Paging = PcfButton('#AgencyBillAddInvoiceItemsPopup-_Paging');
	agencyBillAddInvoiceItemsPopup__crumb__ = PcfComponent('#AgencyBillAddInvoiceItemsPopup-__crumb__');
	agencyBillAddInvoiceItemsPopup_msgs = PcfButton('#AgencyBillAddInvoiceItemsPopup-_msgs');
	agencyBillAddInvoiceItemsPopupcancel = PcfButton('#AgencyBillAddInvoiceItemsPopup-cancel');
}
