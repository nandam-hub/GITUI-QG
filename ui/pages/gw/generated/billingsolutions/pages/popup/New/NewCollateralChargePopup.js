import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewCollateralChargePopup {
	newCollateralChargePopupCancel = PcfButton('#NewCollateralChargePopup-Cancel');
	newCollateralChargePopupEdit = PcfButton('#NewCollateralChargePopup-Edit');
	newCollateralChargePopupNewCollateralChargePopup_UpLink = PcfButton('#NewCollateralChargePopup-NewCollateralChargePopup_UpLink');
	newCollateralChargePopupUpdate = PcfButton('#NewCollateralChargePopup-Update');
	newCollateralChargePopup_Paging = PcfButton('#NewCollateralChargePopup-_Paging');
	newCollateralChargePopup__crumb__ = PcfComponent('#NewCollateralChargePopup-__crumb__');
	newCollateralChargePopup_msgs = PcfButton('#NewCollateralChargePopup-_msgs');
	newCollateralChargePopupamount = PcfTextInput('#NewCollateralChargePopup-amount');
	newCollateralChargePopupchargeType = PcfSelectInput('#NewCollateralChargePopup-chargeType');
}
