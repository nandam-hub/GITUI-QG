import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class MarkInvoicePaidPopup {
	markInvoicePaidPopupCancel = PcfButton('#MarkInvoicePaidPopup-Cancel');
	markInvoicePaidPopupClaimChecks = PcfSelectInput('#MarkInvoicePaidPopup-ClaimChecks');
	markInvoicePaidPopupEdit = PcfButton('#MarkInvoicePaidPopup-Edit');
	markInvoicePaidPopupMarkInvoicePaidPopup_UpLink = PcfButton('#MarkInvoicePaidPopup-MarkInvoicePaidPopup_UpLink');
	markInvoicePaidPopupUpdate = PcfButton('#MarkInvoicePaidPopup-Update');
	markInvoicePaidPopup_Paging = PcfButton('#MarkInvoicePaidPopup-_Paging');
	markInvoicePaidPopup__crumb__ = PcfComponent('#MarkInvoicePaidPopup-__crumb__');
	markInvoicePaidPopup_msgs = PcfButton('#MarkInvoicePaidPopup-_msgs');
}
