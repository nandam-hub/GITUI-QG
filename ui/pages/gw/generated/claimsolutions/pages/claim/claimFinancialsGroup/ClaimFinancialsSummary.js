import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ClaimFinancialsSummary {
	claimFinancialsSummaryScreen_msgs = PcfButton('#ClaimFinancialsSummary-ClaimFinancialsSummaryScreen-_msgs');
	financialsSummaryPanelSetFinancialsSummaryLV = PcfListView('#ClaimFinancialsSummary-ClaimFinancialsSummaryScreen-financialsPanel-FinancialsSummaryPanelSet-FinancialsSummaryLV');
	financialsSummaryPanelSetFinancialsSummaryRecoveriesLV = PcfListView('#ClaimFinancialsSummary-ClaimFinancialsSummaryScreen-financialsPanel-FinancialsSummaryPanelSet-FinancialsSummaryRecoveriesLV');
	financialsSummaryPanelSet_tbFinancialsSummaryRangeInput = PcfSelectInput('#ClaimFinancialsSummary-ClaimFinancialsSummaryScreen-financialsPanel-FinancialsSummaryPanelSet_tb-FinancialsSummaryRangeInput');
	financialsSummaryPanelSet_tbfloatingFinancialsInputWidget = PcfSelectInput('#ClaimFinancialsSummary-ClaimFinancialsSummaryScreen-financialsPanel-FinancialsSummaryPanelSet_tb-floatingFinancialsInputWidget');
	claimFinancialsSummaryClaimFinancialsSummary_UpLink = PcfButton('#ClaimFinancialsSummary-ClaimFinancialsSummary_UpLink');
	claimFinancialsSummary_Paging = PcfButton('#ClaimFinancialsSummary-_Paging');
	claimFinancialsSummary__crumb__ = PcfComponent('#ClaimFinancialsSummary-__crumb__');
}
