import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AgencyBillPolicyDetailsPopup {
	agencyBillPolicyDetailsPopupAgencyBillPolicyDetailsPopup_UpLink = PcfButton('#AgencyBillPolicyDetailsPopup-AgencyBillPolicyDetailsPopup_UpLink');
	agencyBillPolicySummaryDVAccountName = PcfButton('#AgencyBillPolicyDetailsPopup-AgencyBillPolicySummaryDV-AccountName');
	agencyBillPolicySummaryDVAccountNumber = PcfButton('#AgencyBillPolicyDetailsPopup-AgencyBillPolicySummaryDV-AccountNumber');
	agencyBillPolicySummaryDVBilled = PcfTextInput('#AgencyBillPolicyDetailsPopup-AgencyBillPolicySummaryDV-Billed');
	agencyBillPolicySummaryDVBillingMethod = PcfSelectInput('#AgencyBillPolicyDetailsPopup-AgencyBillPolicySummaryDV-BillingMethod');
	agencyBillPolicySummaryDVCommissionAllocated = PcfTextInput('#AgencyBillPolicyDetailsPopup-AgencyBillPolicySummaryDV-CommissionAllocated');
	agencyBillPolicySummaryDVCommissionReserved = PcfTextInput('#AgencyBillPolicyDetailsPopup-AgencyBillPolicySummaryDV-CommissionReserved');
	agencyBillPolicySummaryDVPaid = PcfTextInput('#AgencyBillPolicyDetailsPopup-AgencyBillPolicySummaryDV-Paid');
	agencyBillPolicySummaryDVPastDue = PcfTextInput('#AgencyBillPolicyDetailsPopup-AgencyBillPolicySummaryDV-PastDue');
	agencyBillPolicySummaryDVPolicyNumber = PcfButton('#AgencyBillPolicyDetailsPopup-AgencyBillPolicySummaryDV-PolicyNumber');
	agencyBillPolicySummaryDVPolicyPerEffDate = PcfDateValueInput('#AgencyBillPolicyDetailsPopup-AgencyBillPolicySummaryDV-PolicyPerEffDate');
	agencyBillPolicySummaryDVPolicyPerExpirDate = PcfDateValueInput('#AgencyBillPolicyDetailsPopup-AgencyBillPolicySummaryDV-PolicyPerExpirDate');
	agencyBillPolicySummaryDVPrimaryInsured_Name = PcfTextInput('#AgencyBillPolicyDetailsPopup-AgencyBillPolicySummaryDV-PrimaryInsured_Name');
	agencyBillPolicySummaryDVProducer = PcfButton('#AgencyBillPolicyDetailsPopup-AgencyBillPolicySummaryDV-Producer');
	agencyBillPolicySummaryDVProducerCode = PcfTextInput('#AgencyBillPolicyDetailsPopup-AgencyBillPolicySummaryDV-ProducerCode');
	agencyBillPolicySummaryDVProduct = PcfSelectInput('#AgencyBillPolicyDetailsPopup-AgencyBillPolicySummaryDV-Product');
	agencyBillPolicySummaryDVTotalCommission = PcfTextInput('#AgencyBillPolicyDetailsPopup-AgencyBillPolicySummaryDV-TotalCommission');
	agencyBillPolicySummaryDVTotalGross = PcfTextInput('#AgencyBillPolicyDetailsPopup-AgencyBillPolicySummaryDV-TotalGross');
	agencyBillPolicySummaryDVUnbilled = PcfTextInput('#AgencyBillPolicyDetailsPopup-AgencyBillPolicySummaryDV-Unbilled');
	agencyBillPolicySummaryDVUnpaid = PcfTextInput('#AgencyBillPolicyDetailsPopup-AgencyBillPolicySummaryDV-Unpaid');
	agencyBillPolicyDetailsPopupAgencyBillPolicyTxnsLV = PcfListView('#AgencyBillPolicyDetailsPopup-AgencyBillPolicyTxnsLV');
	agencyBillPolicyDetailsPopup_Paging = PcfButton('#AgencyBillPolicyDetailsPopup-_Paging');
	agencyBillPolicyDetailsPopup__crumb__ = PcfComponent('#AgencyBillPolicyDetailsPopup-__crumb__');
	agencyBillPolicyDetailsPopup_msgs = PcfButton('#AgencyBillPolicyDetailsPopup-_msgs');
}
