import { PcfButton, PcfTextInput } from '@gtui/gt-ui-framework';
import { AccountDetailInvoiceStreams } from '../../../../../pages/gw/generated/billingsolutions/pages/accountGroup/AccountDetailInvoiceStreams';

export class AccountDetailInvoiceStreams_Ext extends AccountDetailInvoiceStreams {
    accountDetailInvoiceStream_Instrument = PcfButton('#AccountDetailInvoiceStreams-AccountDetailInvoiceStreamsScreen-InvoiceStreamsDetailPanel-AccountInvoiceStreamDetailDV-OverridePaymentInstrument_0 > div');
    overridingPaymentInstrument = PcfButton('#AccountDetailInvoiceStreams-AccountDetailInvoiceStreamsScreen-InvoiceStreamsDetailPanel-AccountInvoiceStreamDetailDV-OverridingPaymentInstrument')
}