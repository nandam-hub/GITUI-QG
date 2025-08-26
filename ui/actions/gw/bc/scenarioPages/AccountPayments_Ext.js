import { AccountPayments } from "../../../../pages/gw/generated/billingsolutions/pages/accountGroup/accountDetailPayments/AccountPayments";
import { PcfComponent } from "@gtui/gt-ui-framework";

export class AccountPayments_Ext extends AccountPayments {
   paymentAction = '[id*="-ActionButton"]'
   reversePayment = PcfComponent('#AccountPayments-AccountDetailPaymentsScreen-DirectBillPaymentsListDetail-AccountDBPaymentsLV-0-ActionButton-ReversePayment')
}