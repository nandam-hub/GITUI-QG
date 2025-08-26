import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class UserSearch {
	globalPersonNameInputSetFirstName = PcfTextInput('#UserSearch-UserSearchScreen-UserSearchDV-GlobalPersonNameInputSet-FirstName');
	globalPersonNameInputSetFirstNameKanji = PcfTextInput('#UserSearch-UserSearchScreen-UserSearchDV-GlobalPersonNameInputSet-FirstNameKanji');
	globalPersonNameInputSetLastName = PcfTextInput('#UserSearch-UserSearchScreen-UserSearchDV-GlobalPersonNameInputSet-LastName');
	globalPersonNameInputSetLastNameKanji = PcfTextInput('#UserSearch-UserSearchScreen-UserSearchDV-GlobalPersonNameInputSet-LastNameKanji');
	globalPersonNameInputSetNameSummary = PcfTextInput('#UserSearch-UserSearchScreen-UserSearchDV-GlobalPersonNameInputSet-NameSummary');
	globalPersonNameInputSetMiddleName = PcfTextInput('#UserSearch-UserSearchScreen-UserSearchDV-GlobalPersonNameInputSet-MiddleName');
	globalPersonNameInputSetParticle = PcfTextInput('#UserSearch-UserSearchScreen-UserSearchDV-GlobalPersonNameInputSet-Particle');
	globalPersonNameInputSetPrefix = PcfSelectInput('#UserSearch-UserSearchScreen-UserSearchDV-GlobalPersonNameInputSet-Prefix');
	globalPersonNameInputSetSuffix = PcfSelectInput('#UserSearch-UserSearchScreen-UserSearchDV-GlobalPersonNameInputSet-Suffix');
	userSearchDVGroupNameCriterion = PcfTextInput('#UserSearch-UserSearchScreen-UserSearchDV-GroupNameCriterion');
	userSearchDVGroupNameCriterionKanji = PcfTextInput('#UserSearch-UserSearchScreen-UserSearchDV-GroupNameCriterionKanji');
	userSearchDVNotInAnyGroupCriterion = PcfComponent('#UserSearch-UserSearchScreen-UserSearchDV-NotInAnyGroupCriterion');
	userSearchDVRole = PcfSelectInput('#UserSearch-UserSearchScreen-UserSearchDV-Role');
	userSearchUserSearchScreenUserSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#UserSearch-UserSearchScreen-UserSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	userSearchUserSearchScreenUserSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#UserSearch-UserSearchScreen-UserSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	userSearchDVUsernameCriterion = PcfTextInput('#UserSearch-UserSearchScreen-UserSearchDV-UsernameCriterion');
	userSearchScreenUserSearchResultsLV = PcfListView('#UserSearch-UserSearchScreen-UserSearchResultsLV');
	userSearchScreen_msgs = PcfButton('#UserSearch-UserSearchScreen-_msgs');
	userSearchUserSearch_UpLink = PcfButton('#UserSearch-UserSearch_UpLink');
	userSearch_Paging = PcfButton('#UserSearch-_Paging');
	userSearch__crumb__ = PcfComponent('#UserSearch-__crumb__');
}
