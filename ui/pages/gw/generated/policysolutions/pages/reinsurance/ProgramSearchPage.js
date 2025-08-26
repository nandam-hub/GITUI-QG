import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ProgramSearchPage {
	programSearchPageProgramSearchPage_UpLink = PcfButton('#ProgramSearchPage-ProgramSearchPage_UpLink');
	programSearchScreenCoverageGroup = PcfSelectInput('#ProgramSearchPage-ProgramSearchScreen-CoverageGroup');
	programSearchScreenCurrency = PcfSelectInput('#ProgramSearchPage-ProgramSearchScreen-Currency');
	programSearchPageProgramSearchScreenEffectivePeriodInputSetEffectiveDate = PcfDateValueInput('#ProgramSearchPage-ProgramSearchScreen-EffectivePeriodInputSet-EffectiveDate');
	programSearchPageProgramSearchScreenEffectivePeriodInputSetExpirationDate = PcfDateValueInput('#ProgramSearchPage-ProgramSearchScreen-EffectivePeriodInputSet-ExpirationDate');
	programSearchPageProgramSearchScreenEffectivePeriodInputSetPeriodType = PcfSelectInput('#ProgramSearchPage-ProgramSearchScreen-EffectivePeriodInputSet-PeriodType');
	programSearchScreenName = PcfTextInput('#ProgramSearchPage-ProgramSearchScreen-Name');
	programSearchScreenProgramSearchResultsLV = PcfListView('#ProgramSearchPage-ProgramSearchScreen-ProgramSearchResultsLV');
	programSearchResultsLV_tbPrintMe = PcfButton('#ProgramSearchPage-ProgramSearchScreen-ProgramSearchResultsLV_tb-PrintMe');
	programSearchPageProgramSearchScreenSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#ProgramSearchPage-ProgramSearchScreen-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	programSearchPageProgramSearchScreenSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#ProgramSearchPage-ProgramSearchScreen-SearchAndResetInputSet-SearchLinksInputSet-Search');
	programSearchScreenStatus = PcfSelectInput('#ProgramSearchPage-ProgramSearchScreen-Status');
	programSearchScreen_msgs = PcfButton('#ProgramSearchPage-ProgramSearchScreen-_msgs');
	programSearchPage_Paging = PcfButton('#ProgramSearchPage-_Paging');
	programSearchPage__crumb__ = PcfComponent('#ProgramSearchPage-__crumb__');
}
