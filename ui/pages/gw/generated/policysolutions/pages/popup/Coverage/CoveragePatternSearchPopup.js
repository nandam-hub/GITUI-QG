import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class CoveragePatternSearchPopup {
	coveragePatternSearchPopupCoveragePatternSearchPopup_UpLink = PcfButton('#CoveragePatternSearchPopup-CoveragePatternSearchPopup_UpLink');
	coveragePatternSearchPopupCoveragePatternSearchScreenCoveragePatternSearchDVCoverageCategory = PcfSelectInput('#CoveragePatternSearchPopup-CoveragePatternSearchScreen-CoveragePatternSearchDV-CoverageCategory');
	coveragePatternSearchPopupCoveragePatternSearchScreenCoveragePatternSearchDVKeyword = PcfTextInput('#CoveragePatternSearchPopup-CoveragePatternSearchScreen-CoveragePatternSearchDV-Keyword');
	coveragePatternSearchPopupCoveragePatternSearchScreenCoveragePatternSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#CoveragePatternSearchPopup-CoveragePatternSearchScreen-CoveragePatternSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	coveragePatternSearchPopupCoveragePatternSearchScreenCoveragePatternSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#CoveragePatternSearchPopup-CoveragePatternSearchScreen-CoveragePatternSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	coveragePatternSearchPopupCoveragePatternSearchScreenCoveragePatternSearchDVSearchType = PcfSelectInput('#CoveragePatternSearchPopup-CoveragePatternSearchScreen-CoveragePatternSearchDV-SearchType');
	coveragePatternSearchScreenCoveragePatternSearchResultsLV = PcfListView('#CoveragePatternSearchPopup-CoveragePatternSearchScreen-CoveragePatternSearchResultsLV');
	coveragePatternSearchResultsLV_tbAddCoverageButton = PcfButton('#CoveragePatternSearchPopup-CoveragePatternSearchScreen-CoveragePatternSearchResultsLV_tb-AddCoverageButton');
	coveragePatternSearchPopupCoveragePatternSearchScreen_msgs = PcfButton('#CoveragePatternSearchPopup-CoveragePatternSearchScreen-_msgs');
	coveragePatternSearchPopup_Paging = PcfButton('#CoveragePatternSearchPopup-_Paging');
	coveragePatternSearchPopup__crumb__ = PcfComponent('#CoveragePatternSearchPopup-__crumb__');
}
