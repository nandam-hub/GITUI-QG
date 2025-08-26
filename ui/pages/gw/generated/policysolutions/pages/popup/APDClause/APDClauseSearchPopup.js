import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class APDClauseSearchPopup {
	aPDClauseSearchPopupAPDClauseSearchPopup_UpLink = PcfButton('#APDClauseSearchPopup-APDClauseSearchPopup_UpLink');
	aPDClauseSearchDVCoverageCategory = PcfSelectInput('#APDClauseSearchPopup-CoveragePatternSearchScreen-APDClauseSearchDV-CoverageCategory');
	aPDClauseSearchDVKeyword = PcfTextInput('#APDClauseSearchPopup-CoveragePatternSearchScreen-APDClauseSearchDV-Keyword');
	aPDClauseSearchPopupCoveragePatternSearchScreenAPDClauseSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#APDClauseSearchPopup-CoveragePatternSearchScreen-APDClauseSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	aPDClauseSearchPopupCoveragePatternSearchScreenAPDClauseSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#APDClauseSearchPopup-CoveragePatternSearchScreen-APDClauseSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	aPDClauseSearchDVSearchType = PcfSelectInput('#APDClauseSearchPopup-CoveragePatternSearchScreen-APDClauseSearchDV-SearchType');
	coveragePatternSearchScreenAPDClauseSearchResultsLV = PcfListView('#APDClauseSearchPopup-CoveragePatternSearchScreen-APDClauseSearchResultsLV');
	aPDClauseSearchResultsLV_tbAddConditionDefinition = PcfButton('#APDClauseSearchPopup-CoveragePatternSearchScreen-APDClauseSearchResultsLV_tb-AddConditionDefinition');
	aPDClauseSearchResultsLV_tbAddCoverageButton = PcfButton('#APDClauseSearchPopup-CoveragePatternSearchScreen-APDClauseSearchResultsLV_tb-AddCoverageButton');
	aPDClauseSearchResultsLV_tbAddCoverageDefinition = PcfButton('#APDClauseSearchPopup-CoveragePatternSearchScreen-APDClauseSearchResultsLV_tb-AddCoverageDefinition');
	aPDClauseSearchResultsLV_tbAddExclusionDefinition = PcfButton('#APDClauseSearchPopup-CoveragePatternSearchScreen-APDClauseSearchResultsLV_tb-AddExclusionDefinition');
	aPDClauseSearchResultsLV_tbRemoveClauseButton = PcfButton('#APDClauseSearchPopup-CoveragePatternSearchScreen-APDClauseSearchResultsLV_tb-RemoveClauseButton');
	coveragePatternSearchScreen_msgs = PcfButton('#APDClauseSearchPopup-CoveragePatternSearchScreen-_msgs');
	aPDClauseSearchPopup_Paging = PcfButton('#APDClauseSearchPopup-_Paging');
	aPDClauseSearchPopup__crumb__ = PcfComponent('#APDClauseSearchPopup-__crumb__');
}
