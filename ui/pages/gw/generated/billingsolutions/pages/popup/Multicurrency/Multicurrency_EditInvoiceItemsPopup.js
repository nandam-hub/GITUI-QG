import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class Multicurrency_EditInvoiceItemsPopup {
	multicurrency_EditInvoiceItemsPopupAmount = PcfTextInput('#Multicurrency_EditInvoiceItemsPopup-Amount');
	multicurrency_EditInvoiceItemsPopupCancel = PcfButton('#Multicurrency_EditInvoiceItemsPopup-Cancel');
	multicurrency_EditInvoiceItemsPopupContext = PcfTextInput('#Multicurrency_EditInvoiceItemsPopup-Context');
	multicurrency_EditInvoiceItemsPopupEdit = PcfButton('#Multicurrency_EditInvoiceItemsPopup-Edit');
	multicurrency_EditInvoiceItemsPopupInvoiceItemsLV = PcfListView('#Multicurrency_EditInvoiceItemsPopup-InvoiceItemsLV');
	multicurrency_EditInvoiceItemsPopupInvoiceItemsLV_tbAdd = PcfButton('#Multicurrency_EditInvoiceItemsPopup-InvoiceItemsLV_tb-Add');
	multicurrency_EditInvoiceItemsPopupInvoiceItemsLV_tbRemove = PcfButton('#Multicurrency_EditInvoiceItemsPopup-InvoiceItemsLV_tb-Remove');
	multicurrency_EditInvoiceItemsPopupMulticurrency_EditInvoiceItemsPopup_UpLink = PcfButton('#Multicurrency_EditInvoiceItemsPopup-Multicurrency_EditInvoiceItemsPopup_UpLink');
	multicurrency_EditInvoiceItemsPopupUpdate = PcfButton('#Multicurrency_EditInvoiceItemsPopup-Update');
	multicurrency_EditInvoiceItemsPopup_Paging = PcfButton('#Multicurrency_EditInvoiceItemsPopup-_Paging');
	multicurrency_EditInvoiceItemsPopup__crumb__ = PcfComponent('#Multicurrency_EditInvoiceItemsPopup-__crumb__');
	multicurrency_EditInvoiceItemsPopup_msgs = PcfButton('#Multicurrency_EditInvoiceItemsPopup-_msgs');
	multicurrency_EditInvoiceItemsPopupitemOwner = PcfTextInput('#Multicurrency_EditInvoiceItemsPopup-itemOwner');
}
