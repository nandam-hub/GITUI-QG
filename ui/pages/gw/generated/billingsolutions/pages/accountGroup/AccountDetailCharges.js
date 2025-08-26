import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AccountDetailCharges {
	accountDetailChargesListDetailPanelChargeBreakdownCardTab = PcfButton('#AccountDetailCharges-AccountDetailChargesScreen-AccountDetailChargesListDetailPanel-ChargeBreakdownCardTab');
	accountDetailChargesListDetailPanelChargeBreakdownItemsDisplayLV = PcfListView('#AccountDetailCharges-AccountDetailChargesScreen-AccountDetailChargesListDetailPanel-ChargeBreakdownItemsDisplayLV');
	accountDetailChargesListDetailPanelChargesLV = PcfListView('#AccountDetailCharges-AccountDetailChargesScreen-AccountDetailChargesListDetailPanel-ChargesLV');
	chargesLV_tbAssignInvoiceItemsFromCharge = PcfButton('#AccountDetailCharges-AccountDetailChargesScreen-AccountDetailChargesListDetailPanel-ChargesLV_tb-AssignInvoiceItemsFromCharge');
	assignInvoiceItemsFromChargeAccountPayerChoice = PcfButton('#AccountDetailCharges-AccountDetailChargesScreen-AccountDetailChargesListDetailPanel-ChargesLV_tb-AssignInvoiceItemsFromCharge-AccountPayerChoice');
	assignInvoiceItemsFromChargeProducerPayerChoice = PcfButton('#AccountDetailCharges-AccountDetailChargesScreen-AccountDetailChargesListDetailPanel-ChargesLV_tb-AssignInvoiceItemsFromCharge-ProducerPayerChoice');
	chargesLV_tbEditCommissionRates = PcfButton('#AccountDetailCharges-AccountDetailChargesScreen-AccountDetailChargesListDetailPanel-ChargesLV_tb-EditCommissionRates');
	chargesLV_tbEditHolds = PcfButton('#AccountDetailCharges-AccountDetailChargesScreen-AccountDetailChargesListDetailPanel-ChargesLV_tb-EditHolds');
	chargesLV_tbFilterTypeSelector = PcfSelectInput('#AccountDetailCharges-AccountDetailChargesScreen-AccountDetailChargesListDetailPanel-ChargesLV_tb-FilterTypeSelector');
	chargesLV_tbReverseButton = PcfButton('#AccountDetailCharges-AccountDetailChargesScreen-AccountDetailChargesListDetailPanel-ChargesLV_tb-ReverseButton');
	accountDetailChargesListDetailPanelInvoiceItemsLV = PcfListView('#AccountDetailCharges-AccountDetailChargesScreen-AccountDetailChargesListDetailPanel-InvoiceItemsLV');
	invoiceItemsLV_tbAssignInvoiceItems = PcfButton('#AccountDetailCharges-AccountDetailChargesScreen-AccountDetailChargesListDetailPanel-InvoiceItemsLV_tb-AssignInvoiceItems');
	assignInvoiceItemsAccountPayerChoiceInvoiceItems = PcfButton('#AccountDetailCharges-AccountDetailChargesScreen-AccountDetailChargesListDetailPanel-InvoiceItemsLV_tb-AssignInvoiceItems-AccountPayerChoiceInvoiceItems');
	assignInvoiceItemsProducerPayerChoiceInvoiceItems = PcfButton('#AccountDetailCharges-AccountDetailChargesScreen-AccountDetailChargesListDetailPanel-InvoiceItemsLV_tb-AssignInvoiceItems-ProducerPayerChoiceInvoiceItems');
	invoiceItemsLV_tbEditInvoiceItems = PcfButton('#AccountDetailCharges-AccountDetailChargesScreen-AccountDetailChargesListDetailPanel-InvoiceItemsLV_tb-EditInvoiceItems');
	invoiceItemsLV_tbMoveInvoiceItems = PcfButton('#AccountDetailCharges-AccountDetailChargesScreen-AccountDetailChargesListDetailPanel-InvoiceItemsLV_tb-MoveInvoiceItems');
	accountDetailChargesListDetailPanelInvoiceItemsTab = PcfButton('#AccountDetailCharges-AccountDetailChargesScreen-AccountDetailChargesListDetailPanel-InvoiceItemsTab');
	accountDetailChargesScreenMissingArchivedCharges = PcfButton('#AccountDetailCharges-AccountDetailChargesScreen-MissingArchivedCharges');
	missingArchivedChargesCloseBtn = PcfButton('#AccountDetailCharges-AccountDetailChargesScreen-MissingArchivedCharges-CloseBtn');
	accountDetailChargesScreen_msgs = PcfButton('#AccountDetailCharges-AccountDetailChargesScreen-_msgs');
	accountDetailChargesAccountDetailCharges_UpLink = PcfButton('#AccountDetailCharges-AccountDetailCharges_UpLink');
	accountDetailCharges_Paging = PcfButton('#AccountDetailCharges-_Paging');
	accountDetailCharges__crumb__ = PcfComponent('#AccountDetailCharges-__crumb__');
}
