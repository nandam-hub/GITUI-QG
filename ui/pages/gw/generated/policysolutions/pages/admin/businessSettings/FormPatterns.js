import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class FormPatterns {
	formPatternSearchDVFormName = PcfTextInput('#FormPatterns-FormPatternSearchScreen-FormPatternSearchDV-FormName');
	formPatternSearchDVFormNumber = PcfTextInput('#FormPatterns-FormPatternSearchScreen-FormPatternSearchDV-FormNumber');
	formPatternSearchDVGroupCode = PcfTextInput('#FormPatterns-FormPatternSearchScreen-FormPatternSearchDV-GroupCode');
	formPatternSearchDVProduct = PcfSelectInput('#FormPatterns-FormPatternSearchScreen-FormPatternSearchDV-Product');
	formPatternsFormPatternSearchScreenFormPatternSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#FormPatterns-FormPatternSearchScreen-FormPatternSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	formPatternsFormPatternSearchScreenFormPatternSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#FormPatterns-FormPatternSearchScreen-FormPatternSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	formPatternSearchScreenFormPatternSearchResultsLV = PcfListView('#FormPatterns-FormPatternSearchScreen-FormPatternSearchResultsLV');
	formPatternSearchResultsLV_tbAddButton = PcfButton('#FormPatterns-FormPatternSearchScreen-FormPatternSearchResultsLV_tb-AddButton');
	formPatternSearchResultsLV_tbDeleteButton = PcfButton('#FormPatterns-FormPatternSearchScreen-FormPatternSearchResultsLV_tb-DeleteButton');
	formPatternSearchResultsLV_tbDuplicateButton = PcfButton('#FormPatterns-FormPatternSearchScreen-FormPatternSearchResultsLV_tb-DuplicateButton');
	formPatternSearchScreen_msgs = PcfButton('#FormPatterns-FormPatternSearchScreen-_msgs');
	formPatternsFormPatterns_UpLink = PcfButton('#FormPatterns-FormPatterns_UpLink');
	formPatterns_Paging = PcfButton('#FormPatterns-_Paging');
	formPatterns__crumb__ = PcfComponent('#FormPatterns-__crumb__');
}
