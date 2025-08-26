import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class ChargeHoldsPopup {
	chargeHoldsPopupChargeHoldsPopup_UpLink = PcfButton('#ChargeHoldsPopup-ChargeHoldsPopup_UpLink');
	chargeHoldsScreenCancel = PcfButton('#ChargeHoldsPopup-ChargeHoldsScreen-Cancel');
	chargeHoldsScreenChargesLV = PcfListView('#ChargeHoldsPopup-ChargeHoldsScreen-ChargesLV');
	chargeHoldsScreenEdit = PcfButton('#ChargeHoldsPopup-ChargeHoldsScreen-Edit');
	chargeHoldsScreenUpdate = PcfButton('#ChargeHoldsPopup-ChargeHoldsScreen-Update');
	chargeHoldsScreen_msgs = PcfButton('#ChargeHoldsPopup-ChargeHoldsScreen-_msgs');
	chargeHoldsScreencarryForwardExceptions = PcfCheckBox('#ChargeHoldsPopup-ChargeHoldsScreen-carryForwardExceptions');
	chargeHoldsPopup_Paging = PcfButton('#ChargeHoldsPopup-_Paging');
	chargeHoldsPopup__crumb__ = PcfComponent('#ChargeHoldsPopup-__crumb__');
}
