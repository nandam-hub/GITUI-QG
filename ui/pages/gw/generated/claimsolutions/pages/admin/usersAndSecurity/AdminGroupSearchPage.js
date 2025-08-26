import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AdminGroupSearchPage {
	adminGroupSearchPageAdminGroupSearchPage_UpLink = PcfButton('#AdminGroupSearchPage-AdminGroupSearchPage_UpLink');
	groupSearchDVGroupName = PcfTextInput('#AdminGroupSearchPage-GroupSearchScreen-GroupSearchDV-GroupName');
	groupSearchDVGroupNameKanji = PcfTextInput('#AdminGroupSearchPage-GroupSearchScreen-GroupSearchDV-GroupNameKanji');
	groupSearchDVGroupType = PcfSelectInput('#AdminGroupSearchPage-GroupSearchScreen-GroupSearchDV-GroupType');
	adminGroupSearchPageGroupSearchScreenGroupSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#AdminGroupSearchPage-GroupSearchScreen-GroupSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	adminGroupSearchPageGroupSearchScreenGroupSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#AdminGroupSearchPage-GroupSearchScreen-GroupSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	groupSearchScreenGroupSearchResultsLV = PcfListView('#AdminGroupSearchPage-GroupSearchScreen-GroupSearchResultsLV');
	groupSearchScreen_msgs = PcfButton('#AdminGroupSearchPage-GroupSearchScreen-_msgs');
	adminGroupSearchPage_Paging = PcfButton('#AdminGroupSearchPage-_Paging');
	adminGroupSearchPage__crumb__ = PcfComponent('#AdminGroupSearchPage-__crumb__');
}
