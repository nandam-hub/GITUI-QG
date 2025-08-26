import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class CollateralChargePopup {
	collateralChargePopupCollateralChargePopup_UpLink = PcfButton('#CollateralChargePopup-CollateralChargePopup_UpLink');
	collateralChargesListDetailPanelChargesLV = PcfListView('#CollateralChargePopup-CollateralChargesListDetailPanel-ChargesLV');
	chargesLV_tbeditHold = PcfButton('#CollateralChargePopup-CollateralChargesListDetailPanel-ChargesLV_tb-editHold');
	collateralChargesListDetailPanelInvoiceItemsLV = PcfListView('#CollateralChargePopup-CollateralChargesListDetailPanel-InvoiceItemsLV');
	collateralChargePopupCollateralChargesListDetailPanelInvoiceItemsLV_tbEditInvoiceItems = PcfButton('#CollateralChargePopup-CollateralChargesListDetailPanel-InvoiceItemsLV_tb-EditInvoiceItems');
	collateralChargesListDetailPanelInvoiceItemsTab = PcfButton('#CollateralChargePopup-CollateralChargesListDetailPanel-InvoiceItemsTab');
	collateralChargePopup_Paging = PcfButton('#CollateralChargePopup-_Paging');
	collateralChargePopup__crumb__ = PcfComponent('#CollateralChargePopup-__crumb__');
	collateralChargePopup_msgs = PcfButton('#CollateralChargePopup-_msgs');
	collateralChargePopupchargePatternType = PcfTextInput('#CollateralChargePopup-chargePatternType');
	collateralChargePopupremainingAmount = PcfTextInput('#CollateralChargePopup-remainingAmount');
}
