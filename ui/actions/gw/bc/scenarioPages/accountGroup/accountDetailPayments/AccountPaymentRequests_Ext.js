import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton, PcfTextInput } from '@gtui/gt-ui-framework';
import { AccountPaymentRequests } from '../../../../../../pages/gw/generated/billingsolutions/pages/accountGroup/accountDetailPayments/AccountPaymentRequests';

export class AccountPaymentRequests_Ext extends AccountPaymentRequests {
	accountDetailNewPayment_Amount = PcfTextInput('#AccountDetailNewPaymentRequestWizard-NewPaymentRequestScreen-PaymentRequestDV-amount');
    accountDetailNewPayment_PaymentInstrument = PcfComponent ('#AccountDetailNewPaymentRequestWizard-NewPaymentRequestScreen-PaymentRequestDV-PaymentInstrument-CreateNewPaymentInstrument')
    accountDetailNewPayment_Next = PcfButton('#AccountDetailNewPaymentRequestWizard-Next')
    accountDetailNewPayment_Finish = PcfButton('#AccountDetailNewPaymentRequestWizard-Finish')
}