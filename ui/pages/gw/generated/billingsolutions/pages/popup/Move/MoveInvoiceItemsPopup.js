import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class MoveInvoiceItemsPopup {
	invoiceItemsInvoiceItemsLV = PcfListView('#MoveInvoiceItemsPopup-InvoiceItems-InvoiceItemsLV');
	moveInvoiceItemsPopupInvoiceSelectorSimpleLV = PcfListView('#MoveInvoiceItemsPopup-InvoiceSelectorSimpleLV');
	moveInvoiceItemsPopupMoveInvoiceItemsPopup_UpLink = PcfButton('#MoveInvoiceItemsPopup-MoveInvoiceItemsPopup_UpLink');
	moveInvoiceItemsPopup_Paging = PcfButton('#MoveInvoiceItemsPopup-_Paging');
	moveInvoiceItemsPopup__crumb__ = PcfComponent('#MoveInvoiceItemsPopup-__crumb__');
	moveInvoiceItemsPopup_msgs = PcfButton('#MoveInvoiceItemsPopup-_msgs');
}
