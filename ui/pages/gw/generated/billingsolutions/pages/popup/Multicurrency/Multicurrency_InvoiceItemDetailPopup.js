import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class Multicurrency_InvoiceItemDetailPopup {
	multicurrency_InvoiceItemDetailPopupItemEventDetailScreenInvoiceItemBreakdownPanelSetInvoiceItemBreakdownItemsLV = PcfListView('#Multicurrency_InvoiceItemDetailPopup-ItemEventDetailScreen-InvoiceItemBreakdownPanelSet-InvoiceItemBreakdownItemsLV');
	multicurrency_InvoiceItemDetailPopupItemEventDetailScreen_msgs = PcfButton('#Multicurrency_InvoiceItemDetailPopup-ItemEventDetailScreen-_msgs');
	multicurrency_InvoiceItemDetailPopupItemEventDetailScreenamount = PcfTextInput('#Multicurrency_InvoiceItemDetailPopup-ItemEventDetailScreen-amount');
	multicurrency_InvoiceItemDetailPopupItemEventDetailScreeneventDate = PcfDateValueInput('#Multicurrency_InvoiceItemDetailPopup-ItemEventDetailScreen-eventDate');
	multicurrency_InvoiceItemDetailPopupItemEventDetailScreeninvoice = PcfTextInput('#Multicurrency_InvoiceItemDetailPopup-ItemEventDetailScreen-invoice');
	multicurrency_InvoiceItemDetailPopupItemEventDetailScreenitemEventsItemEventPanelSetItemEventsLV = PcfListView('#Multicurrency_InvoiceItemDetailPopup-ItemEventDetailScreen-itemEvents-ItemEventPanelSet-ItemEventsLV');
	multicurrency_InvoiceItemDetailPopupItemEventDetailScreenitemEventsItemEventPanelSetItemEventsLV_tbPolicyRoleFilter = PcfSelectInput('#Multicurrency_InvoiceItemDetailPopup-ItemEventDetailScreen-itemEvents-ItemEventPanelSet-ItemEventsLV_tb-PolicyRoleFilter');
	multicurrency_InvoiceItemDetailPopupItemEventDetailScreenowner = PcfButton('#Multicurrency_InvoiceItemDetailPopup-ItemEventDetailScreen-owner');
	multicurrency_InvoiceItemDetailPopupItemEventDetailScreenpayer = PcfButton('#Multicurrency_InvoiceItemDetailPopup-ItemEventDetailScreen-payer');
	multicurrency_InvoiceItemDetailPopupMulticurrency_InvoiceItemDetailPopup_UpLink = PcfButton('#Multicurrency_InvoiceItemDetailPopup-Multicurrency_InvoiceItemDetailPopup_UpLink');
	multicurrency_InvoiceItemDetailPopup_Paging = PcfButton('#Multicurrency_InvoiceItemDetailPopup-_Paging');
	multicurrency_InvoiceItemDetailPopup__crumb__ = PcfComponent('#Multicurrency_InvoiceItemDetailPopup-__crumb__');
}
