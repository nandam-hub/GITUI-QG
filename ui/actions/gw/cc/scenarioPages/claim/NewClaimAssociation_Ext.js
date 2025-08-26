import { PcfComponent, PcfSelectInput, PcfButton, PcfTextInput } from '@gtui/gt-ui-framework';
import { NewClaimAssociation } from '../../../../../pages/gw/generated/claimsolutions/pages/other/NewClaimAssociation';

export class NewClaimAssociation_Ext extends NewClaimAssociation {
    newClaimAssociationClaimAssociationDetailScreen = PcfTextInput ('#NewClaimAssociation-ClaimAssociationDetailScreen-ClaimAssociationDetailDV-EditableClaimsInAssociationLV-1-Claim-SelectClaim')
    claimAssociateScreen = PcfComponent ('#ClaimAssociations-ClaimAssociationsScreen-AssociatedClaimsLV-0-Association')
}