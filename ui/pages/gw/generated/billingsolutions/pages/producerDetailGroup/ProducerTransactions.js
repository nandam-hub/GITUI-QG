import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ProducerTransactions {
	producerTransactionsScreenCombinedCardTab = PcfButton('#ProducerTransactions-ProducerTransactionsScreen-CombinedCardTab');
	producerTransactionsScreenCombinedLV = PcfListView('#ProducerTransactions-ProducerTransactionsScreen-CombinedLV');
	producerTransactionsScreenEarningsCardTab = PcfButton('#ProducerTransactions-ProducerTransactionsScreen-EarningsCardTab');
	producerTransactionsScreenEarningsLV = PcfListView('#ProducerTransactions-ProducerTransactionsScreen-EarningsLV');
	producerTransactionsScreenPaymentsCardTab = PcfButton('#ProducerTransactions-ProducerTransactionsScreen-PaymentsCardTab');
	producerTransactionsScreenPaymentsLV = PcfListView('#ProducerTransactions-ProducerTransactionsScreen-PaymentsLV');
	producerTransactionsScreenPolicyFilterClearButton = PcfButton('#ProducerTransactions-ProducerTransactionsScreen-PolicyFilterClearButton');
	producerTransactionsScreenPolicyFilterGoButton = PcfButton('#ProducerTransactions-ProducerTransactionsScreen-PolicyFilterGoButton');
	producerTransactionsScreenPolicyPeriodFilter = PcfTextInput('#ProducerTransactions-ProducerTransactionsScreen-PolicyPeriodFilter');
	producerTransactionsScreenProducerTransactions_TroubleTicketAlertAlertBar = PcfButton('#ProducerTransactions-ProducerTransactionsScreen-ProducerTransactions_TroubleTicketAlertAlertBar');
	producerTransactions_TroubleTicketAlertAlertBarCloseBtn = PcfButton('#ProducerTransactions-ProducerTransactionsScreen-ProducerTransactions_TroubleTicketAlertAlertBar-CloseBtn');
	producerTransactionsScreenReservesCardTab = PcfButton('#ProducerTransactions-ProducerTransactionsScreen-ReservesCardTab');
	producerTransactionsScreenReservesLV = PcfListView('#ProducerTransactions-ProducerTransactionsScreen-ReservesLV');
	producerTransactionsScreen_msgs = PcfButton('#ProducerTransactions-ProducerTransactionsScreen-_msgs');
	producerTransactionsProducerTransactions_UpLink = PcfButton('#ProducerTransactions-ProducerTransactions_UpLink');
	producerTransactions_Paging = PcfButton('#ProducerTransactions-_Paging');
	producerTransactions__crumb__ = PcfComponent('#ProducerTransactions-__crumb__');
}
