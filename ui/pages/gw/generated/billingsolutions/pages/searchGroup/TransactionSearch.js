import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class TransactionSearch {
	transactionSearchDVCurrencyCriterion = PcfSelectInput('#TransactionSearch-TransactionSearchScreen-TransactionSearchDV-CurrencyCriterion');
	transactionSearchDVEarliestDateCriterion = PcfDateValueInput('#TransactionSearch-TransactionSearchScreen-TransactionSearchDV-EarliestDateCriterion');
	transactionSearchDVLatestDateCriterion = PcfDateValueInput('#TransactionSearch-TransactionSearchScreen-TransactionSearchDV-LatestDateCriterion');
	transactionSearchDVMaxAmountCriterion = PcfTextInput('#TransactionSearch-TransactionSearchScreen-TransactionSearchDV-MaxAmountCriterion');
	transactionSearchDVMinAmountCriterion = PcfTextInput('#TransactionSearch-TransactionSearchScreen-TransactionSearchDV-MinAmountCriterion');
	transactionSearchTransactionSearchScreenTransactionSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#TransactionSearch-TransactionSearchScreen-TransactionSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	transactionSearchTransactionSearchScreenTransactionSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#TransactionSearch-TransactionSearchScreen-TransactionSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	transactionSearchDVTransactionNumberCriterion = PcfTextInput('#TransactionSearch-TransactionSearchScreen-TransactionSearchDV-TransactionNumberCriterion');
	transactionSearchDVTransactionTypeCriterion = PcfSelectInput('#TransactionSearch-TransactionSearchScreen-TransactionSearchDV-TransactionTypeCriterion');
	transactionSearchScreenTransactionsLV = PcfListView('#TransactionSearch-TransactionSearchScreen-TransactionsLV');
	transactionSearchScreen_msgs = PcfButton('#TransactionSearch-TransactionSearchScreen-_msgs');
	transactionSearchTransactionSearch_UpLink = PcfButton('#TransactionSearch-TransactionSearch_UpLink');
	transactionSearch_Paging = PcfButton('#TransactionSearch-_Paging');
	transactionSearch__crumb__ = PcfComponent('#TransactionSearch-__crumb__');
}
