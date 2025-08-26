import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class AdminUserSearchPage {
	adminUserSearchPageAdminUserSearchPage_UpLink = PcfButton('#AdminUserSearchPage-AdminUserSearchPage_UpLink');
	globalPersonNameInputSetFirstName = PcfTextInput('#AdminUserSearchPage-UserSearchScreen-UserSearchDV-ContactInputSet-GlobalPersonNameInputSet-FirstName');
	globalPersonNameInputSetFirstNameKanji = PcfTextInput('#AdminUserSearchPage-UserSearchScreen-UserSearchDV-ContactInputSet-GlobalPersonNameInputSet-FirstNameKanji');
	globalPersonNameInputSetLastName = PcfTextInput('#AdminUserSearchPage-UserSearchScreen-UserSearchDV-ContactInputSet-GlobalPersonNameInputSet-LastName');
	globalPersonNameInputSetLastNameKanji = PcfTextInput('#AdminUserSearchPage-UserSearchScreen-UserSearchDV-ContactInputSet-GlobalPersonNameInputSet-LastNameKanji');
	globalPersonNameInputSetNameSummary = PcfTextInput('#AdminUserSearchPage-UserSearchScreen-UserSearchDV-ContactInputSet-GlobalPersonNameInputSet-NameSummary');
	globalPersonNameInputSetMiddleName = PcfTextInput('#AdminUserSearchPage-UserSearchScreen-UserSearchDV-ContactInputSet-GlobalPersonNameInputSet-MiddleName');
	globalPersonNameInputSetParticle = PcfTextInput('#AdminUserSearchPage-UserSearchScreen-UserSearchDV-ContactInputSet-GlobalPersonNameInputSet-Particle');
	globalPersonNameInputSetPrefix = PcfSelectInput('#AdminUserSearchPage-UserSearchScreen-UserSearchDV-ContactInputSet-GlobalPersonNameInputSet-Prefix');
	globalPersonNameInputSetSuffix = PcfSelectInput('#AdminUserSearchPage-UserSearchScreen-UserSearchDV-ContactInputSet-GlobalPersonNameInputSet-Suffix');
	adminUserSearchPageUserSearchScreenUserSearchDVGroupNameInputSetGlobalContactNameInputSetName = PcfTextInput('#AdminUserSearchPage-UserSearchScreen-UserSearchDV-GroupNameInputSet-GlobalContactNameInputSet-Name');
	adminUserSearchPageUserSearchScreenUserSearchDVGroupNameInputSetGlobalContactNameInputSetNameKanji = PcfTextInput('#AdminUserSearchPage-UserSearchScreen-UserSearchDV-GroupNameInputSet-GlobalContactNameInputSet-NameKanji');
	adminUserSearchPageUserSearchScreenUserSearchDVGroupNameInputSetGlobalContactNameInputSetNameSummary = PcfTextInput('#AdminUserSearchPage-UserSearchScreen-UserSearchDV-GroupNameInputSet-GlobalContactNameInputSet-NameSummary');
	userSearchDVNotInAnyGroup = PcfCheckBox('#AdminUserSearchPage-UserSearchScreen-UserSearchDV-NotInAnyGroup');
	adminUserSearchPageUserSearchScreenUserSearchDVOrganizationSelectOrganization = PcfButton('#AdminUserSearchPage-UserSearchScreen-UserSearchDV-Organization-SelectOrganization');
	userSearchDVProducerCode = PcfTextInput('#AdminUserSearchPage-UserSearchScreen-UserSearchDV-ProducerCode');
	userSearchDVRole = PcfSelectInput('#AdminUserSearchPage-UserSearchScreen-UserSearchDV-Role');
	adminUserSearchPageUserSearchScreenUserSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#AdminUserSearchPage-UserSearchScreen-UserSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	adminUserSearchPageUserSearchScreenUserSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#AdminUserSearchPage-UserSearchScreen-UserSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	userSearchDVUserType = PcfSelectInput('#AdminUserSearchPage-UserSearchScreen-UserSearchDV-UserType');
	userSearchDVUsername = PcfTextInput('#AdminUserSearchPage-UserSearchScreen-UserSearchDV-Username');
	userSearchScreenUserSearchResultsLV = PcfListView('#AdminUserSearchPage-UserSearchScreen-UserSearchResultsLV');
	userSearchScreen_msgs = PcfButton('#AdminUserSearchPage-UserSearchScreen-_msgs');
	adminUserSearchPage_Paging = PcfButton('#AdminUserSearchPage-_Paging');
	adminUserSearchPage__crumb__ = PcfComponent('#AdminUserSearchPage-__crumb__');
}
