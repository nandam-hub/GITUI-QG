import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ProducerAgencyBillCycles {
	producerAgencyBillCyclesLDVAgencyBillCycleEventsLV = PcfListView('#ProducerAgencyBillCycles-ProducerAgencyBillCyclesScreen-ProducerAgencyBillCyclesLDV-AgencyBillCycleEventsLV');
	producerAgencyBillCyclesLDVClearCommissionDifferencesLogic = PcfTextInput('#ProducerAgencyBillCycles-ProducerAgencyBillCyclesScreen-ProducerAgencyBillCyclesLDV-ClearCommissionDifferencesLogic');
	producerAgencyBillCyclesLDVClearGrossDifferencesLogic = PcfTextInput('#ProducerAgencyBillCycles-ProducerAgencyBillCyclesScreen-ProducerAgencyBillCyclesLDV-ClearGrossDifferencesLogic');
	producerAgencyBillCyclesLDVCycleDetailCardTab = PcfButton('#ProducerAgencyBillCycles-ProducerAgencyBillCyclesScreen-ProducerAgencyBillCyclesLDV-CycleDetailCardTab');
	producerAgencyBillCyclesLDVMostRecentPromiseAmount = PcfTextInput('#ProducerAgencyBillCycles-ProducerAgencyBillCyclesScreen-ProducerAgencyBillCyclesLDV-MostRecentPromiseAmount');
	producerAgencyBillCyclesLDVMostRecentPromiseDate = PcfDateValueInput('#ProducerAgencyBillCycles-ProducerAgencyBillCyclesScreen-ProducerAgencyBillCyclesLDV-MostRecentPromiseDate');
	producerAgencyBillCyclesLDVPaymentType = PcfButton('#ProducerAgencyBillCycles-ProducerAgencyBillCyclesScreen-ProducerAgencyBillCyclesLDV-PaymentType');
	producerAgencyBillCyclesLDVProducerCycleLV = PcfListView('#ProducerAgencyBillCycles-ProducerAgencyBillCyclesScreen-ProducerAgencyBillCyclesLDV-ProducerCycleLV');
	producerCycleLV_tbInvoiceStreamFilter = PcfSelectInput('#ProducerAgencyBillCycles-ProducerAgencyBillCyclesScreen-ProducerAgencyBillCyclesLDV-ProducerCycleLV_tb-InvoiceStreamFilter');
	producerAgencyBillCyclesLDVPromisedAmount = PcfTextInput('#ProducerAgencyBillCycles-ProducerAgencyBillCyclesScreen-ProducerAgencyBillCyclesLDV-PromisedAmount');
	producerAgencyBillCyclesLDVUnpromisedAmount = PcfTextInput('#ProducerAgencyBillCycles-ProducerAgencyBillCyclesScreen-ProducerAgencyBillCyclesLDV-UnpromisedAmount');
	producerAgencyBillCyclesScreen_msgs = PcfButton('#ProducerAgencyBillCycles-ProducerAgencyBillCyclesScreen-_msgs');
	producerAgencyBillCyclesProducerAgencyBillCycles_UpLink = PcfButton('#ProducerAgencyBillCycles-ProducerAgencyBillCycles_UpLink');
	producerAgencyBillCycles_Paging = PcfButton('#ProducerAgencyBillCycles-_Paging');
	producerAgencyBillCycles__crumb__ = PcfComponent('#ProducerAgencyBillCycles-__crumb__');
}
