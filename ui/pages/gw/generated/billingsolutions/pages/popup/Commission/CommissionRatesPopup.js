import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class CommissionRatesPopup {
	commissionRatesPopupCommissionRatesPopup_UpLink = PcfButton('#CommissionRatesPopup-CommissionRatesPopup_UpLink');
	commissionRatesScreenCancel = PcfButton('#CommissionRatesPopup-CommissionRatesScreen-Cancel');
	commissionRatesScreenChargesLV = PcfListView('#CommissionRatesPopup-CommissionRatesScreen-ChargesLV');
	commissionRatesScreenEdit = PcfButton('#CommissionRatesPopup-CommissionRatesScreen-Edit');
	commissionRatesScreenUpdate = PcfButton('#CommissionRatesPopup-CommissionRatesScreen-Update');
	commissionRatesScreen_msgs = PcfButton('#CommissionRatesPopup-CommissionRatesScreen-_msgs');
	commissionRatesPopup_Paging = PcfButton('#CommissionRatesPopup-_Paging');
	commissionRatesPopup__crumb__ = PcfComponent('#CommissionRatesPopup-__crumb__');
}
