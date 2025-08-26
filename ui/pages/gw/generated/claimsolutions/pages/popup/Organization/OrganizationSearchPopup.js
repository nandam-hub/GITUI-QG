import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class OrganizationSearchPopup {
	organizationSearchDVContactCity = PcfTextInput('#OrganizationSearchPopup-OrganizationSearchPopupScreen-OrganizationSearchDV-ContactCity');
	organizationSearchDVContactName = PcfTextInput('#OrganizationSearchPopup-OrganizationSearchPopupScreen-OrganizationSearchDV-ContactName');
	organizationSearchDVContactPostal = PcfTextInput('#OrganizationSearchPopup-OrganizationSearchPopupScreen-OrganizationSearchDV-ContactPostal');
	organizationSearchDVContactState = PcfSelectInput('#OrganizationSearchPopup-OrganizationSearchPopupScreen-OrganizationSearchDV-ContactState');
	organizationSearchDVName = PcfTextInput('#OrganizationSearchPopup-OrganizationSearchPopupScreen-OrganizationSearchDV-Name');
	organizationSearchPopupOrganizationSearchPopupScreenOrganizationSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#OrganizationSearchPopup-OrganizationSearchPopupScreen-OrganizationSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	organizationSearchPopupOrganizationSearchPopupScreenOrganizationSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#OrganizationSearchPopup-OrganizationSearchPopupScreen-OrganizationSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	organizationSearchDVType = PcfSelectInput('#OrganizationSearchPopup-OrganizationSearchPopupScreen-OrganizationSearchDV-Type');
	organizationSearchPopupScreenOrganizationSearchResultsLV = PcfListView('#OrganizationSearchPopup-OrganizationSearchPopupScreen-OrganizationSearchResultsLV');
	organizationSearchPopupScreen_msgs = PcfButton('#OrganizationSearchPopup-OrganizationSearchPopupScreen-_msgs');
	organizationSearchPopupOrganizationSearchPopup_UpLink = PcfButton('#OrganizationSearchPopup-OrganizationSearchPopup_UpLink');
	organizationSearchPopup_Paging = PcfButton('#OrganizationSearchPopup-_Paging');
	organizationSearchPopup__crumb__ = PcfComponent('#OrganizationSearchPopup-__crumb__');
}
