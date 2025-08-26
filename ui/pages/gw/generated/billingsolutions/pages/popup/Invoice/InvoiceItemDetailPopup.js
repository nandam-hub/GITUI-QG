import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class InvoiceItemDetailPopup {
	invoiceItemDetailPopupInvoiceItemDetailPopup_UpLink = PcfButton('#InvoiceItemDetailPopup-InvoiceItemDetailPopup_UpLink');
	invoiceItemBreakdownPanelSetInvoiceItemBreakdownItemsLV = PcfListView('#InvoiceItemDetailPopup-ItemEventDetailScreen-InvoiceItemBreakdownPanelSet-InvoiceItemBreakdownItemsLV');
	itemEventDetailScreen_msgs = PcfButton('#InvoiceItemDetailPopup-ItemEventDetailScreen-_msgs');
	itemEventDetailScreenamount = PcfTextInput('#InvoiceItemDetailPopup-ItemEventDetailScreen-amount');
	itemEventDetailScreeneventDate = PcfDateValueInput('#InvoiceItemDetailPopup-ItemEventDetailScreen-eventDate');
	itemEventDetailScreeninvoice = PcfTextInput('#InvoiceItemDetailPopup-ItemEventDetailScreen-invoice');
	itemEventPanelSetItemEventsLV = PcfListView('#InvoiceItemDetailPopup-ItemEventDetailScreen-itemEvents-ItemEventPanelSet-ItemEventsLV');
	itemEventsLV_tbPolicyRoleFilter = PcfSelectInput('#InvoiceItemDetailPopup-ItemEventDetailScreen-itemEvents-ItemEventPanelSet-ItemEventsLV_tb-PolicyRoleFilter');
	itemEventDetailScreenowner = PcfButton('#InvoiceItemDetailPopup-ItemEventDetailScreen-owner');
	itemEventDetailScreenpayer = PcfButton('#InvoiceItemDetailPopup-ItemEventDetailScreen-payer');
	invoiceItemDetailPopup_Paging = PcfButton('#InvoiceItemDetailPopup-_Paging');
	invoiceItemDetailPopup__crumb__ = PcfComponent('#InvoiceItemDetailPopup-__crumb__');
}
