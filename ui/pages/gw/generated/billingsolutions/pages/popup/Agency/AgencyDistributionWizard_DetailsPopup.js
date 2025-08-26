import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AgencyDistributionWizard_DetailsPopup {
	agencyDistributionWizard_DetailsPopupAgencyDistributionWizard_DetailsPopup_UpLink = PcfButton('#AgencyDistributionWizard_DetailsPopup-AgencyDistributionWizard_DetailsPopup_UpLink');
	agencyDistributionWizard_DetailsPopupAvailable = PcfTextInput('#AgencyDistributionWizard_DetailsPopup-Available');
	agencyDistributionWizard_DetailsPopupCancel = PcfButton('#AgencyDistributionWizard_DetailsPopup-Cancel');
	agencyDistributionWizard_DetailsPopupDistItemsLV = PcfListView('#AgencyDistributionWizard_DetailsPopup-DistItemsLV');
	distItemsLV_tbAutodistribute = PcfButton('#AgencyDistributionWizard_DetailsPopup-DistItemsLV_tb-Autodistribute');
	distItemsLV_tbClearAllAmounts = PcfButton('#AgencyDistributionWizard_DetailsPopup-DistItemsLV_tb-ClearAllAmounts');
	agencyDistributionWizard_DetailsPopupDistributed = PcfTextInput('#AgencyDistributionWizard_DetailsPopup-Distributed');
	agencyDistributionWizard_DetailsPopupEdit = PcfButton('#AgencyDistributionWizard_DetailsPopup-Edit');
	agencyDistributionWizard_DetailsPopupOwnerAccount = PcfTextInput('#AgencyDistributionWizard_DetailsPopup-OwnerAccount');
	agencyDistributionWizard_DetailsPopupPolicyNumber = PcfTextInput('#AgencyDistributionWizard_DetailsPopup-PolicyNumber');
	agencyDistributionWizard_DetailsPopupRemaining = PcfTextInput('#AgencyDistributionWizard_DetailsPopup-Remaining');
	agencyDistributionWizard_DetailsPopupUpdate = PcfButton('#AgencyDistributionWizard_DetailsPopup-Update');
	agencyDistributionWizard_DetailsPopup_Paging = PcfButton('#AgencyDistributionWizard_DetailsPopup-_Paging');
	agencyDistributionWizard_DetailsPopup__crumb__ = PcfComponent('#AgencyDistributionWizard_DetailsPopup-__crumb__');
	agencyDistributionWizard_DetailsPopup_msgs = PcfButton('#AgencyDistributionWizard_DetailsPopup-_msgs');
}
