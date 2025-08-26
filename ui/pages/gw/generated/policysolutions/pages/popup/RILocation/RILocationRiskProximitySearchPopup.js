import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class RILocationRiskProximitySearchPopup {
	rILocationRiskProximitySearchPopupLocationRiskSearchResultsLV = PcfListView('#RILocationRiskProximitySearchPopup-LocationRiskSearchResultsLV');
	locationRiskSearchResultsLV_tbAssignButton = PcfButton('#RILocationRiskProximitySearchPopup-LocationRiskSearchResultsLV_tb-AssignButton');
	locationRiskSearchResultsLV_tbLocationGroupName = PcfTextInput('#RILocationRiskProximitySearchPopup-LocationRiskSearchResultsLV_tb-LocationGroupName');
	proximitySearchDVAddress = PcfTextInput('#RILocationRiskProximitySearchPopup-ProximitySearchDV-Address');
	proximitySearchDVCoverageEffectiveDate = PcfDateValueInput('#RILocationRiskProximitySearchPopup-ProximitySearchDV-CoverageEffectiveDate');
	proximitySearchDVCoverageGroup = PcfSelectInput('#RILocationRiskProximitySearchPopup-ProximitySearchDV-CoverageGroup');
	proximitySearchDVLocationCode = PcfTextInput('#RILocationRiskProximitySearchPopup-ProximitySearchDV-LocationCode');
	proximitySearchDVLocationGroup = PcfTextInput('#RILocationRiskProximitySearchPopup-ProximitySearchDV-LocationGroup');
	proximitySearchDVRadius = PcfTextInput('#RILocationRiskProximitySearchPopup-ProximitySearchDV-Radius');
	rILocationRiskProximitySearchPopupProximitySearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#RILocationRiskProximitySearchPopup-ProximitySearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	rILocationRiskProximitySearchPopupProximitySearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#RILocationRiskProximitySearchPopup-ProximitySearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	proximitySearchDVSearchLocationGroup = PcfTextInput('#RILocationRiskProximitySearchPopup-ProximitySearchDV-SearchLocationGroup');
	proximitySearchDVUnits = PcfSelectInput('#RILocationRiskProximitySearchPopup-ProximitySearchDV-Units');
	rILocationRiskProximitySearchPopupRILocationRiskProximitySearchPopup_UpLink = PcfButton('#RILocationRiskProximitySearchPopup-RILocationRiskProximitySearchPopup_UpLink');
	rILocationRiskProximitySearchPopup_Paging = PcfButton('#RILocationRiskProximitySearchPopup-_Paging');
	rILocationRiskProximitySearchPopup__crumb__ = PcfComponent('#RILocationRiskProximitySearchPopup-__crumb__');
	rILocationRiskProximitySearchPopup_msgs = PcfButton('#RILocationRiskProximitySearchPopup-_msgs');
}
