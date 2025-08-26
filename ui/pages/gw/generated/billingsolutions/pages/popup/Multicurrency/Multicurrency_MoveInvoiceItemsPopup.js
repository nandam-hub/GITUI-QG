import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class Multicurrency_MoveInvoiceItemsPopup {
	invoiceItemsMulticurrency_InvoiceItemsLV = PcfListView('#Multicurrency_MoveInvoiceItemsPopup-InvoiceItems-Multicurrency_InvoiceItemsLV');
	multicurrency_MoveInvoiceItemsPopupInvoiceSelectorSimpleLV = PcfListView('#Multicurrency_MoveInvoiceItemsPopup-InvoiceSelectorSimpleLV');
	multicurrency_MoveInvoiceItemsPopupMulticurrency_MoveInvoiceItemsPopup_UpLink = PcfButton('#Multicurrency_MoveInvoiceItemsPopup-Multicurrency_MoveInvoiceItemsPopup_UpLink');
	multicurrency_MoveInvoiceItemsPopup_Paging = PcfButton('#Multicurrency_MoveInvoiceItemsPopup-_Paging');
	multicurrency_MoveInvoiceItemsPopup__crumb__ = PcfComponent('#Multicurrency_MoveInvoiceItemsPopup-__crumb__');
	multicurrency_MoveInvoiceItemsPopup_msgs = PcfButton('#Multicurrency_MoveInvoiceItemsPopup-_msgs');
}
