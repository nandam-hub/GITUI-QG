import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ClaimAssociations {
	claimAssociationsScreenAssociatedClaimsLV = PcfListView('#ClaimAssociations-ClaimAssociationsScreen-AssociatedClaimsLV');
	claimAssociationsScreenClaimAssociations_DeleteButton = PcfButton('#ClaimAssociations-ClaimAssociationsScreen-ClaimAssociations_DeleteButton');
	claimAssociationsScreenClaimAssociations_FindButton = PcfButton('#ClaimAssociations-ClaimAssociationsScreen-ClaimAssociations_FindButton');
	claimAssociationsScreenClaimAssociations_NewButton = PcfButton('#ClaimAssociations-ClaimAssociationsScreen-ClaimAssociations_NewButton');
	claimAssociationsScreen_msgs = PcfButton('#ClaimAssociations-ClaimAssociationsScreen-_msgs');
	claimAssociationsClaimAssociations_UpLink = PcfButton('#ClaimAssociations-ClaimAssociations_UpLink');
	claimAssociations_Paging = PcfButton('#ClaimAssociations-_Paging');
	claimAssociations__crumb__ = PcfComponent('#ClaimAssociations-__crumb__');
}
