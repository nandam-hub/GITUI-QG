import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class FormClausePatternSelectionPopup {
	formClausePatternSelectionPopupFormClausePatternSelectionPopup_UpLink = PcfButton('#FormClausePatternSelectionPopup-FormClausePatternSelectionPopup_UpLink');
	formPatternClauseScreenClausePatternSearchResultsLV = PcfListView('#FormClausePatternSelectionPopup-FormPatternClauseScreen-ClausePatternSearchResultsLV');
	formPatternClauseScreenKeyword = PcfTextInput('#FormClausePatternSelectionPopup-FormPatternClauseScreen-Keyword');
	formClausePatternSelectionPopupFormPatternClauseScreenSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#FormClausePatternSelectionPopup-FormPatternClauseScreen-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	formClausePatternSelectionPopupFormPatternClauseScreenSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#FormClausePatternSelectionPopup-FormPatternClauseScreen-SearchAndResetInputSet-SearchLinksInputSet-Search');
	formPatternClauseScreen_msgs = PcfButton('#FormClausePatternSelectionPopup-FormPatternClauseScreen-_msgs');
	formPatternClauseScreensearchType = PcfSelectInput('#FormClausePatternSelectionPopup-FormPatternClauseScreen-searchType');
	formClausePatternSelectionPopup_Paging = PcfButton('#FormClausePatternSelectionPopup-_Paging');
	formClausePatternSelectionPopup__crumb__ = PcfComponent('#FormClausePatternSelectionPopup-__crumb__');
}
