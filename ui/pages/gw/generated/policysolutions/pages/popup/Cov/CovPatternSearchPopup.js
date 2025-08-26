import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class CovPatternSearchPopup {
	covPatternSearchPopupCovPatternSearchPopup_UpLink = PcfButton('#CovPatternSearchPopup-CovPatternSearchPopup_UpLink');
	covPatternSearchScreenCovPatternSearchResultsLV = PcfListView('#CovPatternSearchPopup-CovPatternSearchScreen-CovPatternSearchResultsLV');
	coveragePatternSearchDVCoverageCategory = PcfSelectInput('#CovPatternSearchPopup-CovPatternSearchScreen-CoveragePatternSearchDV-CoverageCategory');
	coveragePatternSearchDVKeyword = PcfTextInput('#CovPatternSearchPopup-CovPatternSearchScreen-CoveragePatternSearchDV-Keyword');
	covPatternSearchPopupCovPatternSearchScreenCoveragePatternSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#CovPatternSearchPopup-CovPatternSearchScreen-CoveragePatternSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	covPatternSearchPopupCovPatternSearchScreenCoveragePatternSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#CovPatternSearchPopup-CovPatternSearchScreen-CoveragePatternSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	coveragePatternSearchDVSearchType = PcfSelectInput('#CovPatternSearchPopup-CovPatternSearchScreen-CoveragePatternSearchDV-SearchType');
	covPatternSearchScreen_msgs = PcfButton('#CovPatternSearchPopup-CovPatternSearchScreen-_msgs');
	covPatternSearchPopup_Paging = PcfButton('#CovPatternSearchPopup-_Paging');
	covPatternSearchPopup__crumb__ = PcfComponent('#CovPatternSearchPopup-__crumb__');
}
