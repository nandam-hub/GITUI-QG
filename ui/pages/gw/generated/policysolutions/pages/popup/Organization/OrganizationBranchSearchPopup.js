import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';

export class OrganizationBranchSearchPopup {
	organizationBranchSearchPopupOrganizationBranchSearchPopup_UpLink = PcfButton('#OrganizationBranchSearchPopup-OrganizationBranchSearchPopup_UpLink');
	organizationBranchSearchScreenBranchesSearchLV = PcfListView('#OrganizationBranchSearchPopup-OrganizationBranchSearchScreen-BranchesSearchLV');
	organizationBranchSearchDVBranchCode = PcfTextInput('#OrganizationBranchSearchPopup-OrganizationBranchSearchScreen-OrganizationBranchSearchDV-BranchCode');
	organizationBranchSearchDVName = PcfTextInput('#OrganizationBranchSearchPopup-OrganizationBranchSearchScreen-OrganizationBranchSearchDV-Name');
	organizationBranchSearchPopupOrganizationBranchSearchScreenOrganizationBranchSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#OrganizationBranchSearchPopup-OrganizationBranchSearchScreen-OrganizationBranchSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	organizationBranchSearchPopupOrganizationBranchSearchScreenOrganizationBranchSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-Producer-SelectOrganization');
	organizationBranchSearchScreen_msgs = PcfButton('#OrganizationBranchSearchPopup-OrganizationBranchSearchScreen-_msgs');
	organizationBranchSearchPopup_Paging = PcfButton('#OrganizationBranchSearchPopup-_Paging');
	organizationBranchSearchPopup__crumb__ = PcfComponent('#OrganizationBranchSearchPopup-__crumb__');
	organizationSearchPopupOrganizationSearchPopupScreenOrganizationSearchDVGlobalContactNameInputSetName = PcfTextInput('#OrganizationSearchPopup-OrganizationSearchPopupScreen-OrganizationSearchDV-GlobalContactNameInputSet-Name');
}
