import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class CommissionPlanSearchPopup {
	commissionPlanSearchPopupCommissionPlanSearchPopup_UpLink = PcfButton('#CommissionPlanSearchPopup-CommissionPlanSearchPopup_UpLink');
	commissionPlanSearchPopupCommissionPlanSearchResultsLV = PcfListView('#CommissionPlanSearchPopup-CommissionPlanSearchResultsLV');
	commissionPlanSearchPopupSearchOnlyInputSetSearchLinksInputSetReset = PcfButton('#CommissionPlanSearchPopup-SearchOnlyInputSet-SearchLinksInputSet-Reset');
	commissionPlanSearchPopupSearchOnlyInputSetSearchLinksInputSetSearch = PcfButton('#CommissionPlanSearchPopup-SearchOnlyInputSet-SearchLinksInputSet-Search');
	commissionPlanSearchPopup_Paging = PcfButton('#CommissionPlanSearchPopup-_Paging');
	commissionPlanSearchPopup__crumb__ = PcfComponent('#CommissionPlanSearchPopup-__crumb__');
	commissionPlanSearchPopup_msgs = PcfButton('#CommissionPlanSearchPopup-_msgs');
	commissionPlanSearchPopupnameInput = PcfTextInput('#CommissionPlanSearchPopup-nameInput');
}
