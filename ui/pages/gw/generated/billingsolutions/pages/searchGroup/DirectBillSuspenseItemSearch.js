import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DirectBillSuspenseItemSearch {
	directBillSuspenseItemSearchDVCurrencyCriterion = PcfSelectInput('#DirectBillSuspenseItemSearch-DirectBillSuspenseItemSearchScreen-DirectBillSuspenseItemSearchDV-CurrencyCriterion');
	directBillSuspenseItemSearchDVEarliestDateCriterion = PcfDateValueInput('#DirectBillSuspenseItemSearch-DirectBillSuspenseItemSearchScreen-DirectBillSuspenseItemSearchDV-EarliestDateCriterion');
	directBillSuspenseItemSearchDVLatestDateCriterion = PcfDateValueInput('#DirectBillSuspenseItemSearch-DirectBillSuspenseItemSearchScreen-DirectBillSuspenseItemSearchDV-LatestDateCriterion');
	directBillSuspenseItemSearchDVMaxAmountCriterion = PcfTextInput('#DirectBillSuspenseItemSearch-DirectBillSuspenseItemSearchScreen-DirectBillSuspenseItemSearchDV-MaxAmountCriterion');
	directBillSuspenseItemSearchDVMinAmountCriterion = PcfTextInput('#DirectBillSuspenseItemSearch-DirectBillSuspenseItemSearchScreen-DirectBillSuspenseItemSearchDV-MinAmountCriterion');
	directBillSuspenseItemSearchDirectBillSuspenseItemSearchScreenDirectBillSuspenseItemSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#DirectBillSuspenseItemSearch-DirectBillSuspenseItemSearchScreen-DirectBillSuspenseItemSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	directBillSuspenseItemSearchDirectBillSuspenseItemSearchScreenDirectBillSuspenseItemSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#DirectBillSuspenseItemSearch-DirectBillSuspenseItemSearchScreen-DirectBillSuspenseItemSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	directBillSuspenseItemSearchScreenDirectBillSuspenseItemSearchResultsLV = PcfListView('#DirectBillSuspenseItemSearch-DirectBillSuspenseItemSearchScreen-DirectBillSuspenseItemSearchResultsLV');
	directBillSuspenseItemSearchScreen_msgs = PcfButton('#DirectBillSuspenseItemSearch-DirectBillSuspenseItemSearchScreen-_msgs');
	directBillSuspenseItemSearchDirectBillSuspenseItemSearch_UpLink = PcfButton('#DirectBillSuspenseItemSearch-DirectBillSuspenseItemSearch_UpLink');
	directBillSuspenseItemSearch_Paging = PcfButton('#DirectBillSuspenseItemSearch-_Paging');
	directBillSuspenseItemSearch__crumb__ = PcfComponent('#DirectBillSuspenseItemSearch-__crumb__');
}
