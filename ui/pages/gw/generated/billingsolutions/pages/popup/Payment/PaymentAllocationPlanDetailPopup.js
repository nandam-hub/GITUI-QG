import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class PaymentAllocationPlanDetailPopup {
	paymentAllocationPlanDetailPopupPaymentAllocationPlanDetailPopup_UpLink = PcfButton('#PaymentAllocationPlanDetailPopup-PaymentAllocationPlanDetailPopup_UpLink');
	paymentAllocationPlanDetailScreenCancel = PcfButton('#PaymentAllocationPlanDetailPopup-PaymentAllocationPlanDetailScreen-Cancel');
	paymentAllocationPlanDetailScreenClone = PcfButton('#PaymentAllocationPlanDetailPopup-PaymentAllocationPlanDetailScreen-Clone');
	paymentAllocationPlanDetailScreenDistributionFilterLV = PcfListView('#PaymentAllocationPlanDetailPopup-PaymentAllocationPlanDetailScreen-DistributionFilterLV');
	distributionFilterLV_tbAddDistributionFilter = PcfButton('#PaymentAllocationPlanDetailPopup-PaymentAllocationPlanDetailScreen-DistributionFilterLV_tb-AddDistributionFilter');
	distributionFilterLV_tbRemoveDistributionFilter = PcfButton('#PaymentAllocationPlanDetailPopup-PaymentAllocationPlanDetailScreen-DistributionFilterLV_tb-RemoveDistributionFilter');
	paymentAllocationPlanDetailScreenEdit = PcfButton('#PaymentAllocationPlanDetailPopup-PaymentAllocationPlanDetailScreen-Edit');
	paymentAllocationPlanDetailScreenInvoiceItemOrderingLV = PcfListView('#PaymentAllocationPlanDetailPopup-PaymentAllocationPlanDetailScreen-InvoiceItemOrderingLV');
	invoiceItemOrderingLV_tbAddInvoiceItemOrdering = PcfButton('#PaymentAllocationPlanDetailPopup-PaymentAllocationPlanDetailScreen-InvoiceItemOrderingLV_tb-AddInvoiceItemOrdering');
	invoiceItemOrderingLV_tbRemoveInvoiceItemOrdering = PcfButton('#PaymentAllocationPlanDetailPopup-PaymentAllocationPlanDetailScreen-InvoiceItemOrderingLV_tb-RemoveInvoiceItemOrdering');
	paymentAllocationPlanDetailPopupPaymentAllocationPlanDetailScreenLocalizedValuesDVLocalizedValuesLV = PcfListView('#PaymentAllocationPlanDetailPopup-PaymentAllocationPlanDetailScreen-LocalizedValuesDV-LocalizedValuesLV');
	paymentAllocationPlanDetailDVDescription = PcfTextInput('#PaymentAllocationPlanDetailPopup-PaymentAllocationPlanDetailScreen-PaymentAllocationPlanDetailDV-Description');
	paymentAllocationPlanDetailDVEffectiveDate = PcfDateValueInput('#PaymentAllocationPlanDetailPopup-PaymentAllocationPlanDetailScreen-PaymentAllocationPlanDetailDV-EffectiveDate');
	paymentAllocationPlanDetailDVExpirationDate = PcfDateValueInput('#PaymentAllocationPlanDetailPopup-PaymentAllocationPlanDetailScreen-PaymentAllocationPlanDetailDV-ExpirationDate');
	paymentAllocationPlanDetailDVName = PcfTextInput('#PaymentAllocationPlanDetailPopup-PaymentAllocationPlanDetailScreen-PaymentAllocationPlanDetailDV-Name');
	paymentAllocationPlanDetailScreenUpdate = PcfButton('#PaymentAllocationPlanDetailPopup-PaymentAllocationPlanDetailScreen-Update');
	paymentAllocationPlanDetailScreen_msgs = PcfButton('#PaymentAllocationPlanDetailPopup-PaymentAllocationPlanDetailScreen-_msgs');
	paymentAllocationPlanDetailPopup_Paging = PcfButton('#PaymentAllocationPlanDetailPopup-_Paging');
	paymentAllocationPlanDetailPopup__crumb__ = PcfComponent('#PaymentAllocationPlanDetailPopup-__crumb__');
}
