import { PcfComponent } from '@gtui/gt-ui-framework';
import { AccountDetailInvoices } from '../../../../../pages/gw/generated/billingsolutions/pages/accountGroup/AccountDetailInvoices';

export class AccountDetailInvoices_Ext extends AccountDetailInvoices {
	accountDetailInvoices_BilledDateUpdated = PcfComponent('#AccountDetailInvoices-AccountDetailInvoicesScreen-DetailPanel-InvoiceDetailDV-AccountInvoiceInformationInputSet-InvoiceDate>div>div');
	invoiceHeader = PcfComponent('#AccountDetailInvoices-AccountDetailInvoicesScreen-ttlBar > div.gw-TitleBar--titles--container')
}