import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class CommissionPlanSearchPopup {
	commissionPlanSearchPopupCommissionPlanSearchPopup_UpLink = PcfButton('#CommissionPlanSearchPopup-CommissionPlanSearchPopup_UpLink');
	commissionPlanSearchDVNameCriterion = PcfTextInput('#CommissionPlanSearchPopup-CommissionPlanSearchScreen-CommissionPlanSearchDV-NameCriterion');
	commissionPlanSearchPopupCommissionPlanSearchScreenCommissionPlanSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#CommissionPlanSearchPopup-CommissionPlanSearchScreen-CommissionPlanSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	commissionPlanSearchPopupCommissionPlanSearchScreenCommissionPlanSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#CommissionPlanSearchPopup-CommissionPlanSearchScreen-CommissionPlanSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	commissionPlanSearchScreenCommissionPlanSearchResultsLV = PcfListView('#CommissionPlanSearchPopup-CommissionPlanSearchScreen-CommissionPlanSearchResultsLV');
	commissionPlanSearchScreen_msgs = PcfButton('#CommissionPlanSearchPopup-CommissionPlanSearchScreen-_msgs');
	commissionPlanSearchPopup_Paging = PcfButton('#CommissionPlanSearchPopup-_Paging');
	commissionPlanSearchPopup__crumb__ = PcfComponent('#CommissionPlanSearchPopup-__crumb__');
}
