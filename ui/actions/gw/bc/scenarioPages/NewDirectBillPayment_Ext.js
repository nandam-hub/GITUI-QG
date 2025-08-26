import { PcfButton, PcfCheckBox, PcfComponent, PcfSelectInput,PcfTextInput } from "@gtui/gt-ui-framework";
//import { AccountGroupMenuLinks } from "../../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/AccountGroupMenuLinks";
import { NewDirectBillPayment } from "../../../../pages/gw/generated/billingsolutions/pages/other/NewDirectBillPayment";


export class NewDirectBillPayment_Ext extends NewDirectBillPayment {
    overrideNewDirectBillPayment = PcfComponent('#NewDirectBillPayment-EditDBPaymentScreen-OverrideToolbar');
    overrideDistributionAmount_0 = PcfTextInput ('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV-groups-0-0-OverrideAmount')
    overrideDistributionAmount_1 = PcfTextInput ('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV-groups-1-0-OverrideAmount')
    overrideDistributionAmount_2 = PcfTextInput ('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV-groups-2-0-OverrideAmount')
    overrideDistributionAmount_3 = PcfTextInput ('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV-groups-3-0-OverrideAmount')
    overrideDistributionAmount_4 = PcfTextInput ('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV-groups-4-0-OverrideAmount')
    overrideDistributionAmount_5 = PcfTextInput ('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV-groups-5-0-OverrideAmount')
    overrideDistributionAmount_6 = PcfTextInput ('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV-groups-6-0-OverrideAmount')
    overrideDistributionAmount_7 = PcfTextInput ('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV-groups-7-0-OverrideAmount')
    overrideDistributionAmount_8 = PcfTextInput ('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV-groups-8-0-OverrideAmount')
    newDirectBillPayment_Instrument =PcfSelectInput('#NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-PaymentInstrument')

}