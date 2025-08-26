import { PcfComponent } from "@gtui/gt-ui-framework";
import { PolicyDetailPayments } from "../../../../pages/gw/generated/billingsolutions/pages/policyGroup/PolicyDetailPayments";

export class PolicyDetailPayments_Ext extends PolicyDetailPayments {
    paymentPlan = PcfComponent('#PolicyDetailPayments-PolicyDetailPaymentsScreen-PaymentPlan');
}