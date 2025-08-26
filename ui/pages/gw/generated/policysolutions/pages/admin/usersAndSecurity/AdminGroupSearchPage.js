import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AdminGroupSearchPage {
	adminGroupSearchPageAdminGroupSearchPage_UpLink = PcfButton('#AdminGroupSearchPage-AdminGroupSearchPage_UpLink');
	globalContactNameInputSetName = PcfTextInput('#AdminGroupSearchPage-GroupSearchScreen-AdminGroupSearchDV-GlobalContactNameInputSet-Name');
	globalContactNameInputSetNameKanji = PcfTextInput('#AdminGroupSearchPage-GroupSearchScreen-AdminGroupSearchDV-GlobalContactNameInputSet-NameKanji');
	globalContactNameInputSetNameSummary = PcfTextInput('#AdminGroupSearchPage-GroupSearchScreen-AdminGroupSearchDV-GlobalContactNameInputSet-NameSummary');
	adminGroupSearchDVGroupType = PcfSelectInput('#AdminGroupSearchPage-GroupSearchScreen-AdminGroupSearchDV-GroupType');
	organizationSelectOrganization = PcfButton('#AdminGroupSearchPage-GroupSearchScreen-AdminGroupSearchDV-Organization-SelectOrganization');
	adminGroupSearchDVProducerCode = PcfTextInput('#AdminGroupSearchPage-GroupSearchScreen-AdminGroupSearchDV-ProducerCode');
	adminGroupSearchPageGroupSearchScreenAdminGroupSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#AdminGroupSearchPage-GroupSearchScreen-AdminGroupSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	adminGroupSearchPageGroupSearchScreenAdminGroupSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#AdminGroupSearchPage-GroupSearchScreen-AdminGroupSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	groupSearchScreenGroupSearchResultsLV = PcfListView('#AdminGroupSearchPage-GroupSearchScreen-GroupSearchResultsLV');
	groupSearchScreen_msgs = PcfButton('#AdminGroupSearchPage-GroupSearchScreen-_msgs');
	adminGroupSearchPage_Paging = PcfButton('#AdminGroupSearchPage-_Paging');
	adminGroupSearchPage__crumb__ = PcfComponent('#AdminGroupSearchPage-__crumb__');
}
