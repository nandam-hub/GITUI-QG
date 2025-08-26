import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class RejectInvoicePopup {
	rejectInvoicePopupCancel = PcfButton('#RejectInvoicePopup-Cancel');
	rejectInvoicePopupEdit = PcfButton('#RejectInvoicePopup-Edit');
	rejectInvoicePopupRejectInvoicePopup_UpLink = PcfButton('#RejectInvoicePopup-RejectInvoicePopup_UpLink');
	rejectInvoicePopupRejectionReason = PcfTextInput('#RejectInvoicePopup-RejectionReason');
	rejectInvoicePopupUpdate = PcfButton('#RejectInvoicePopup-Update');
	rejectInvoicePopup_Paging = PcfButton('#RejectInvoicePopup-_Paging');
	rejectInvoicePopup__crumb__ = PcfComponent('#RejectInvoicePopup-__crumb__');
	rejectInvoicePopup_msgs = PcfButton('#RejectInvoicePopup-_msgs');
}
