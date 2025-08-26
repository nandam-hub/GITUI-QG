import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class ChangeInvoicingOverridesPopup {
	changeInvoicingOverridesPopupCancel = PcfButton('#ChangeInvoicingOverridesPopup-Cancel');
	changeInvoicingOverridesPopupChangeInvoicingOverridesPopup_UpLink = PcfButton('#ChangeInvoicingOverridesPopup-ChangeInvoicingOverridesPopup_UpLink');
	changeInvoicingOverridesPopupEdit = PcfButton('#ChangeInvoicingOverridesPopup-Edit');
	changeInvoicingOverridesPopupOverridingInvoiceStream = PcfSelectInput('#ChangeInvoicingOverridesPopup-OverridingInvoiceStream');
	changeInvoicingOverridesPopupOverridingPayerAccount = PcfButton('#ChangeInvoicingOverridesPopup-OverridingPayerAccount');
	overridingPayerAccountSelectOverridingPayerAccount = PcfButton('#ChangeInvoicingOverridesPopup-OverridingPayerAccount-SelectOverridingPayerAccount');
	changeInvoicingOverridesPopupUpdate = PcfButton('#ChangeInvoicingOverridesPopup-Update');
	changeInvoicingOverridesPopup_Paging = PcfButton('#ChangeInvoicingOverridesPopup-_Paging');
	changeInvoicingOverridesPopup__crumb__ = PcfComponent('#ChangeInvoicingOverridesPopup-__crumb__');
	changeInvoicingOverridesPopup_msgs = PcfButton('#ChangeInvoicingOverridesPopup-_msgs');
}
