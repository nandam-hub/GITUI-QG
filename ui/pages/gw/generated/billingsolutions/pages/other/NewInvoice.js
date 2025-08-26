import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewInvoice {
	newInvoiceAccountNumber = PcfTextInput('#NewInvoice-AccountNumber');
	newInvoiceCancel = PcfButton('#NewInvoice-Cancel');
	newInvoiceDueDate = PcfDateValueInput('#NewInvoice-DueDate');
	newInvoiceEdit = PcfButton('#NewInvoice-Edit');
	newInvoiceInvoiceDate = PcfDateValueInput('#NewInvoice-InvoiceDate');
	newInvoiceIsAdHoc = PcfComponent('#NewInvoice-IsAdHoc');
	newInvoiceNewInvoice_UpLink = PcfButton('#NewInvoice-NewInvoice_UpLink');
	newInvoiceUpdate = PcfButton('#NewInvoice-Update');
	newInvoice_Paging = PcfButton('#NewInvoice-_Paging');
	newInvoice__crumb__ = PcfComponent('#NewInvoice-__crumb__');
	newInvoice_msgs = PcfButton('#NewInvoice-_msgs');
}
