import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class UserSearchPopup {
	userSearchPopupUserSearchPopup_UpLink = PcfButton('#UserSearchPopup-UserSearchPopup_UpLink');
	userSearchPopupUserSearchScreenUserSearchDVGlobalPersonNameInputSetFirstName = PcfTextInput('#UserSearchPopup-UserSearchScreen-UserSearchDV-GlobalPersonNameInputSet-FirstName');
	userSearchPopupUserSearchScreenUserSearchDVGlobalPersonNameInputSetFirstNameKanji = PcfTextInput('#UserSearchPopup-UserSearchScreen-UserSearchDV-GlobalPersonNameInputSet-FirstNameKanji');
	userSearchPopupUserSearchScreenUserSearchDVGlobalPersonNameInputSetLastName = PcfTextInput('#UserSearchPopup-UserSearchScreen-UserSearchDV-GlobalPersonNameInputSet-LastName');
	userSearchPopupUserSearchScreenUserSearchDVGlobalPersonNameInputSetLastNameKanji = PcfTextInput('#UserSearchPopup-UserSearchScreen-UserSearchDV-GlobalPersonNameInputSet-LastNameKanji');
	userSearchPopupUserSearchScreenUserSearchDVGlobalPersonNameInputSetNameSummary = PcfTextInput('#UserSearchPopup-UserSearchScreen-UserSearchDV-GlobalPersonNameInputSet-NameSummary');
	userSearchPopupUserSearchScreenUserSearchDVGlobalPersonNameInputSetMiddleName = PcfTextInput('#UserSearchPopup-UserSearchScreen-UserSearchDV-GlobalPersonNameInputSet-MiddleName');
	userSearchPopupUserSearchScreenUserSearchDVGlobalPersonNameInputSetParticle = PcfTextInput('#UserSearchPopup-UserSearchScreen-UserSearchDV-GlobalPersonNameInputSet-Particle');
	userSearchPopupUserSearchScreenUserSearchDVGlobalPersonNameInputSetPrefix = PcfSelectInput('#UserSearchPopup-UserSearchScreen-UserSearchDV-GlobalPersonNameInputSet-Prefix');
	userSearchPopupUserSearchScreenUserSearchDVGlobalPersonNameInputSetSuffix = PcfSelectInput('#UserSearchPopup-UserSearchScreen-UserSearchDV-GlobalPersonNameInputSet-Suffix');
	userSearchPopupUserSearchScreenUserSearchDVGroupNameCriterion = PcfTextInput('#UserSearchPopup-UserSearchScreen-UserSearchDV-GroupNameCriterion');
	userSearchPopupUserSearchScreenUserSearchDVGroupNameCriterionKanji = PcfTextInput('#UserSearchPopup-UserSearchScreen-UserSearchDV-GroupNameCriterionKanji');
	userSearchPopupUserSearchScreenUserSearchDVNotInAnyGroupCriterion = PcfComponent('#UserSearchPopup-UserSearchScreen-UserSearchDV-NotInAnyGroupCriterion');
	userSearchPopupUserSearchScreenUserSearchDVRole = PcfSelectInput('#UserSearchPopup-UserSearchScreen-UserSearchDV-Role');
	userSearchPopupUserSearchScreenUserSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#UserSearchPopup-UserSearchScreen-UserSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	userSearchPopupUserSearchScreenUserSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#UserSearchPopup-UserSearchScreen-UserSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	userSearchPopupUserSearchScreenUserSearchDVUsernameCriterion = PcfTextInput('#UserSearchPopup-UserSearchScreen-UserSearchDV-UsernameCriterion');
	userSearchPopupUserSearchScreenUserSearchResultsLV = PcfListView('#UserSearchPopup-UserSearchScreen-UserSearchResultsLV');
	userSearchPopupUserSearchScreen_msgs = PcfButton('#UserSearchPopup-UserSearchScreen-_msgs');
	userSearchPopup_Paging = PcfButton('#UserSearchPopup-_Paging');
	userSearchPopup__crumb__ = PcfComponent('#UserSearchPopup-__crumb__');
}
