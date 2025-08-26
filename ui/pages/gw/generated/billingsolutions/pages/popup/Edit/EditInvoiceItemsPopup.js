import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class EditInvoiceItemsPopup {
	editInvoiceItemsPopupAmount = PcfTextInput('#EditInvoiceItemsPopup-Amount');
	editInvoiceItemsPopupCancel = PcfButton('#EditInvoiceItemsPopup-Cancel');
	editInvoiceItemsPopupContext = PcfTextInput('#EditInvoiceItemsPopup-Context');
	editInvoiceItemsPopupEdit = PcfButton('#EditInvoiceItemsPopup-Edit');
	editInvoiceItemsPopupEditInvoiceItemsPopup_UpLink = PcfButton('#EditInvoiceItemsPopup-EditInvoiceItemsPopup_UpLink');
	editInvoiceItemsPopupInvoiceItemsLV = PcfListView('#EditInvoiceItemsPopup-InvoiceItemsLV');
	invoiceItemsLV_tbAdd = PcfButton('#EditInvoiceItemsPopup-InvoiceItemsLV_tb-Add');
	invoiceItemsLV_tbRemove = PcfButton('#EditInvoiceItemsPopup-InvoiceItemsLV_tb-Remove');
	editInvoiceItemsPopupUpdate = PcfButton('#EditInvoiceItemsPopup-Update');
	editInvoiceItemsPopup_Paging = PcfButton('#EditInvoiceItemsPopup-_Paging');
	editInvoiceItemsPopup__crumb__ = PcfComponent('#EditInvoiceItemsPopup-__crumb__');
	editInvoiceItemsPopup_msgs = PcfButton('#EditInvoiceItemsPopup-_msgs');
	editInvoiceItemsPopupitemOwner = PcfTextInput('#EditInvoiceItemsPopup-itemOwner');
}
