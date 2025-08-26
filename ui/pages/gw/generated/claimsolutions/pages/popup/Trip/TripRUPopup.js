import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class TripRUPopup {
	tripRUPopupTripRUPopup_UpLink = PcfButton('#TripRUPopup-TripRUPopup_UpLink');
	tripRUScreenCancel = PcfButton('#TripRUPopup-TripRUScreen-Cancel');
	tripRUScreenEdit = PcfButton('#TripRUPopup-TripRUScreen-Edit');
	tripRUScreenEndDate = PcfDateValueInput('#TripRUPopup-TripRUScreen-EndDate');
	tripRUScreenGeographicalRegion = PcfSelectInput('#TripRUPopup-TripRUScreen-GeographicalRegion');
	tripRUPopupTripRUScreenPolicyTripCoverageLDVPanelPolicyTripCoverageLDVClaimPolicyCovTermsCVClaimPolicyCovTermsLV = PcfListView('#TripRUPopup-TripRUScreen-PolicyTripCoverageLDVPanel-PolicyTripCoverageLDV-ClaimPolicyCovTermsCV-ClaimPolicyCovTermsLV');
	tripRUPopupTripRUScreenPolicyTripCoverageLDVPanelPolicyTripCoverageLDVClaimPolicyCovTermsCVClaimPolicyCovTermsLV_tbAdd = PcfButton('#TripRUPopup-TripRUScreen-PolicyTripCoverageLDVPanel-PolicyTripCoverageLDV-ClaimPolicyCovTermsCV-ClaimPolicyCovTermsLV_tb-Add');
	tripRUPopupTripRUScreenPolicyTripCoverageLDVPanelPolicyTripCoverageLDVClaimPolicyCovTermsCVClaimPolicyCovTermsLV_tbAddCovTerm = PcfButton('#TripRUPopup-TripRUScreen-PolicyTripCoverageLDVPanel-PolicyTripCoverageLDV-ClaimPolicyCovTermsCV-ClaimPolicyCovTermsLV_tb-AddCovTerm');
	tripRUPopupTripRUScreenPolicyTripCoverageLDVPanelPolicyTripCoverageLDVClaimPolicyCovTermsCVClaimPolicyCovTermsLV_tbRemove = PcfButton('#TripRUPopup-TripRUScreen-PolicyTripCoverageLDVPanel-PolicyTripCoverageLDV-ClaimPolicyCovTermsCV-ClaimPolicyCovTermsLV_tb-Remove');
	tripRUPopupTripRUScreenPolicyTripCoverageLDVPanelPolicyTripCoverageLDVClaimPolicyCovTermsCVCovTermsTab = PcfButton('#TripRUPopup-TripRUScreen-PolicyTripCoverageLDVPanel-PolicyTripCoverageLDV-ClaimPolicyCovTermsCV-CovTermsTab');
	tripRUPopupTripRUScreenPolicyTripCoverageLDVPanelPolicyTripCoverageLDVEditableTripCoveragesLV = PcfListView('#TripRUPopup-TripRUScreen-PolicyTripCoverageLDVPanel-PolicyTripCoverageLDV-EditableTripCoveragesLV');
	tripRUPopupTripRUScreenPolicyTripCoverageLDVPanelPolicyTripCoverageLDVEditableTripCoveragesLV_tbAdd = PcfButton('#TripRUPopup-TripRUScreen-PolicyTripCoverageLDVPanel-PolicyTripCoverageLDV-EditableTripCoveragesLV_tb-Add');
	tripRUPopupTripRUScreenPolicyTripCoverageLDVPanelPolicyTripCoverageLDVEditableTripCoveragesLV_tbRemove = PcfButton('#TripRUPopup-TripRUScreen-PolicyTripCoverageLDVPanel-PolicyTripCoverageLDV-EditableTripCoveragesLV_tb-Remove');
	tripRUScreenRUNumber = PcfTextInput('#TripRUPopup-TripRUScreen-RUNumber');
	tripRUScreenStartDate = PcfDateValueInput('#TripRUPopup-TripRUScreen-StartDate');
	tripRUScreenTripDescription = PcfTextInput('#TripRUPopup-TripRUScreen-TripDescription');
	tripRUScreenUpdate = PcfButton('#TripRUPopup-TripRUScreen-Update');
	tripRUScreen_msgs = PcfButton('#TripRUPopup-TripRUScreen-_msgs');
	tripRUPopup_Paging = PcfButton('#TripRUPopup-_Paging');
	tripRUPopup__crumb__ = PcfComponent('#TripRUPopup-__crumb__');
}
