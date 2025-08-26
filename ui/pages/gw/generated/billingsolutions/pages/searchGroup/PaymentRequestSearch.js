import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class PaymentRequestSearch {
	paymentRequestSearchPaymentRequestSearchScreenPaymentRequestSearchDVAccountNumberCriterionSelectAccountNumberCriterion = PcfButton('#PaymentRequestSearch-PaymentRequestSearchScreen-PaymentRequestSearchDV-AccountNumberCriterion-SelectAccountNumberCriterion');
	paymentRequestSearchDVCurrencyCriterion = PcfSelectInput('#PaymentRequestSearch-PaymentRequestSearchScreen-PaymentRequestSearchDV-CurrencyCriterion');
	paymentRequestSearchDVEarliestDraftDateCriterion = PcfDateValueInput('#PaymentRequestSearch-PaymentRequestSearchScreen-PaymentRequestSearchDV-EarliestDraftDateCriterion');
	paymentRequestSearchDVEarliestRequestDateCriterion = PcfDateValueInput('#PaymentRequestSearch-PaymentRequestSearchScreen-PaymentRequestSearchDV-EarliestRequestDateCriterion');
	paymentRequestSearchDVEarliestStatusDateCriterion = PcfDateValueInput('#PaymentRequestSearch-PaymentRequestSearchScreen-PaymentRequestSearchDV-EarliestStatusDateCriterion');
	paymentRequestSearchDVLatestDraftDateCriterion = PcfDateValueInput('#PaymentRequestSearch-PaymentRequestSearchScreen-PaymentRequestSearchDV-LatestDraftDateCriterion');
	paymentRequestSearchDVLatestRequestDateCriterion = PcfDateValueInput('#PaymentRequestSearch-PaymentRequestSearchScreen-PaymentRequestSearchDV-LatestRequestDateCriterion');
	paymentRequestSearchDVLatestStatusDateCriterion = PcfDateValueInput('#PaymentRequestSearch-PaymentRequestSearchScreen-PaymentRequestSearchDV-LatestStatusDateCriterion');
	paymentRequestSearchDVMaxAmountCriterion = PcfTextInput('#PaymentRequestSearch-PaymentRequestSearchScreen-PaymentRequestSearchDV-MaxAmountCriterion');
	paymentRequestSearchDVMethodCriterion = PcfSelectInput('#PaymentRequestSearch-PaymentRequestSearchScreen-PaymentRequestSearchDV-MethodCriterion');
	paymentRequestSearchDVMinAmountCriterion = PcfTextInput('#PaymentRequestSearch-PaymentRequestSearchScreen-PaymentRequestSearchDV-MinAmountCriterion');
	paymentRequestSearchPaymentRequestSearchScreenPaymentRequestSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#PaymentRequestSearch-PaymentRequestSearchScreen-PaymentRequestSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	paymentRequestSearchPaymentRequestSearchScreenPaymentRequestSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#PaymentRequestSearch-PaymentRequestSearchScreen-PaymentRequestSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	paymentRequestSearchDVStatusCriterion = PcfSelectInput('#PaymentRequestSearch-PaymentRequestSearchScreen-PaymentRequestSearchDV-StatusCriterion');
	paymentRequestSearchDVTokenCriterion = PcfTextInput('#PaymentRequestSearch-PaymentRequestSearchScreen-PaymentRequestSearchDV-TokenCriterion');
	paymentRequestSearchScreenPaymentRequestSearchResultsLV = PcfListView('#PaymentRequestSearch-PaymentRequestSearchScreen-PaymentRequestSearchResultsLV');
	paymentRequestSearchScreen_msgs = PcfButton('#PaymentRequestSearch-PaymentRequestSearchScreen-_msgs');
	paymentRequestSearchPaymentRequestSearch_UpLink = PcfButton('#PaymentRequestSearch-PaymentRequestSearch_UpLink');
	paymentRequestSearch_Paging = PcfButton('#PaymentRequestSearch-_Paging');
	paymentRequestSearch__crumb__ = PcfComponent('#PaymentRequestSearch-__crumb__');
}
