import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class PaymentTransferPopup {
	paymentTransferPopupScreenCancel = PcfButton('#PaymentTransferPopup-PaymentTransferPopupScreen-Cancel');
	paymentTransferPopupScreenEdit = PcfButton('#PaymentTransferPopup-PaymentTransferPopupScreen-Edit');
	paymentTransferDVAvailableReserves = PcfTextInput('#PaymentTransferPopup-PaymentTransferPopupScreen-PaymentTransferDV-AvailableReserves');
	editTransactionInputSetComments = PcfTextInput('#PaymentTransferPopup-PaymentTransferPopupScreen-PaymentTransferDV-EditTransactionInputSet-Comments');
	reserveLineInputSetCostCategory = PcfSelectInput('#PaymentTransferPopup-PaymentTransferPopupScreen-PaymentTransferDV-EditTransactionInputSet-ReserveLineInputSet-CostCategory');
	reserveLineInputSetCostType = PcfSelectInput('#PaymentTransferPopup-PaymentTransferPopupScreen-PaymentTransferDV-EditTransactionInputSet-ReserveLineInputSet-CostType');
	reserveLineInputSetCoverage = PcfSelectInput('#PaymentTransferPopup-PaymentTransferPopupScreen-PaymentTransferDV-EditTransactionInputSet-ReserveLineInputSet-Coverage');
	reserveLineInputSetExposure = PcfSelectInput('#PaymentTransferPopup-PaymentTransferPopupScreen-PaymentTransferDV-EditTransactionInputSet-ReserveLineInputSet-Exposure');
	reserveLineInputSetMatter = PcfSelectInput('#PaymentTransferPopup-PaymentTransferPopupScreen-PaymentTransferDV-EditTransactionInputSet-ReserveLineInputSet-Matter');
	reserveLineInputSetReserveLine = PcfSelectInput('#PaymentTransferPopup-PaymentTransferPopupScreen-PaymentTransferDV-EditTransactionInputSet-ReserveLineInputSet-ReserveLine');
	reserveLineInputSetReservingCurrency = PcfSelectInput('#PaymentTransferPopup-PaymentTransferPopupScreen-PaymentTransferDV-EditTransactionInputSet-ReserveLineInputSet-ReservingCurrency');
	paymentTransferDVNetTotalIncurred = PcfTextInput('#PaymentTransferPopup-PaymentTransferPopupScreen-PaymentTransferDV-NetTotalIncurred');
	paymentTransferDVPaymentTransferLineItemsLV = PcfListView('#PaymentTransferPopup-PaymentTransferPopupScreen-PaymentTransferDV-PaymentTransferLineItemsLV');
	paymentTransferDVPaymentType = PcfSelectInput('#PaymentTransferPopup-PaymentTransferPopupScreen-PaymentTransferDV-PaymentType');
	paymentTransferPopupScreenUpdate = PcfButton('#PaymentTransferPopup-PaymentTransferPopupScreen-Update');
	paymentTransferPopupScreen_msgs = PcfButton('#PaymentTransferPopup-PaymentTransferPopupScreen-_msgs');
	paymentTransferPopupPaymentTransferPopup_UpLink = PcfButton('#PaymentTransferPopup-PaymentTransferPopup_UpLink');
	paymentTransferPopup_Paging = PcfButton('#PaymentTransferPopup-_Paging');
	paymentTransferPopup__crumb__ = PcfComponent('#PaymentTransferPopup-__crumb__');
}
