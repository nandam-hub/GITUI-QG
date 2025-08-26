import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class RDMRecordSearchPopup {
	externalRDMSearchDVJurisdiction = PcfTextInput('#RDMRecordSearchPopup-ExternalRDMRecordSearchScreen-ExternalRDMSearchDV-Jurisdiction');
	externalRDMSearchDVRDMDatasetId = PcfTextInput('#RDMRecordSearchPopup-ExternalRDMRecordSearchScreen-ExternalRDMSearchDV-RDMDatasetId');
	externalRDMSearchDVReferenceDate = PcfDateValueInput('#RDMRecordSearchPopup-ExternalRDMRecordSearchScreen-ExternalRDMSearchDV-ReferenceDate');
	externalRDMRecordSearchScreenRDMSearchResultsLV = PcfListView('#RDMRecordSearchPopup-ExternalRDMRecordSearchScreen-RDMSearchResultsLV');
	rDMSearchTBSearchBar = PcfTextInput('#RDMRecordSearchPopup-ExternalRDMRecordSearchScreen-RDMSearchTB-SearchBar');
	rDMSearchTBSearchButton = PcfButton('#RDMRecordSearchPopup-ExternalRDMRecordSearchScreen-RDMSearchTB-SearchButton');
	rDMSearchTBSearchResetButton = PcfButton('#RDMRecordSearchPopup-ExternalRDMRecordSearchScreen-RDMSearchTB-SearchResetButton');
	externalRDMRecordSearchScreen_msgs = PcfButton('#RDMRecordSearchPopup-ExternalRDMRecordSearchScreen-_msgs');
	rDMRecordSearchPopupRDMRecordSearchPopup_UpLink = PcfButton('#RDMRecordSearchPopup-RDMRecordSearchPopup_UpLink');
	rDMRecordSearchPopup_Paging = PcfButton('#RDMRecordSearchPopup-_Paging');
	rDMRecordSearchPopup__crumb__ = PcfComponent('#RDMRecordSearchPopup-__crumb__');
}
