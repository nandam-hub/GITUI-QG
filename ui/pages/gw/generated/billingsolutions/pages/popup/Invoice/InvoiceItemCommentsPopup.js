import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class InvoiceItemCommentsPopup {
	invoiceItemCommentsPopupCancel = PcfButton('#InvoiceItemCommentsPopup-Cancel');
	invoiceItemCommentsPopupComments = PcfTextInput('#InvoiceItemCommentsPopup-Comments');
	invoiceItemCommentsPopupEdit = PcfButton('#InvoiceItemCommentsPopup-Edit');
	invoiceItemCommentsPopupInvoiceItemCommentsPopup_UpLink = PcfButton('#InvoiceItemCommentsPopup-InvoiceItemCommentsPopup_UpLink');
	invoiceItemCommentsPopupUpdate = PcfButton('#InvoiceItemCommentsPopup-Update');
	invoiceItemCommentsPopup_Paging = PcfButton('#InvoiceItemCommentsPopup-_Paging');
	invoiceItemCommentsPopup__crumb__ = PcfComponent('#InvoiceItemCommentsPopup-__crumb__');
	invoiceItemCommentsPopup_msgs = PcfButton('#InvoiceItemCommentsPopup-_msgs');
}
