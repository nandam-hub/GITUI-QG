import { PcfButton, PcfComponent } from "@gtui/gt-ui-framework";
import { PolicySummary } from "../../../../../../pages/gw/generated/billingsolutions/pages/policyGroup/policyOverview/PolicySummary";

export class PolicySummary_Ext extends PolicySummary {
    producerName = PcfComponent('#PolicyGroup-PolicyInfoBar-ProducerName > div.gw-label.gw-infoValue');
    policyInfoBarAccountNumberLink = PcfButton('#PolicyGroup-PolicyInfoBar-AccountNumber > div.gw-label.gw-infoValue')
}