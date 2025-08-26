import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AgencyBillPlanSearchPopup {
	agencyBillPlanSearchPanelAgencyBillPlanSearchResultsLV = PcfListView('#AgencyBillPlanSearchPopup-AgencyBillPlanSearchPanel-AgencyBillPlanSearchResultsLV');
	agencyBillPlanSearchPanelPlanName = PcfTextInput('#AgencyBillPlanSearchPopup-AgencyBillPlanSearchPanel-PlanName');
	agencyBillPlanSearchPopupAgencyBillPlanSearchPanelSearchOnlyInputSetSearchLinksInputSetReset = PcfButton('#AgencyBillPlanSearchPopup-AgencyBillPlanSearchPanel-SearchOnlyInputSet-SearchLinksInputSet-Reset');
	agencyBillPlanSearchPopupAgencyBillPlanSearchPanelSearchOnlyInputSetSearchLinksInputSetSearch = PcfButton('#AgencyBillPlanSearchPopup-AgencyBillPlanSearchPanel-SearchOnlyInputSet-SearchLinksInputSet-Search');
	agencyBillPlanSearchPopupAgencyBillPlanSearchPopup_UpLink = PcfButton('#AgencyBillPlanSearchPopup-AgencyBillPlanSearchPopup_UpLink');
	agencyBillPlanSearchPopup_Paging = PcfButton('#AgencyBillPlanSearchPopup-_Paging');
	agencyBillPlanSearchPopup__crumb__ = PcfComponent('#AgencyBillPlanSearchPopup-__crumb__');
	agencyBillPlanSearchPopup_msgs = PcfButton('#AgencyBillPlanSearchPopup-_msgs');
}
