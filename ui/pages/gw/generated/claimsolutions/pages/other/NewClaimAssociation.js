import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewClaimAssociation {
	claimAssociationDetailScreenCancel = PcfButton('#NewClaimAssociation-ClaimAssociationDetailScreen-Cancel');
	claimAssociationDetailDVDescription = PcfTextInput('#NewClaimAssociation-ClaimAssociationDetailScreen-ClaimAssociationDetailDV-Description');
	claimAssociationDetailDVEditableClaimsInAssociationLV = PcfListView('#NewClaimAssociation-ClaimAssociationDetailScreen-ClaimAssociationDetailDV-EditableClaimsInAssociationLV');
	editableClaimsInAssociationLV_tbAdd = PcfButton('#NewClaimAssociation-ClaimAssociationDetailScreen-ClaimAssociationDetailDV-EditableClaimsInAssociationLV_tb-Add');
	editableClaimsInAssociationLV_tbRemove = PcfButton('#NewClaimAssociation-ClaimAssociationDetailScreen-ClaimAssociationDetailDV-EditableClaimsInAssociationLV_tb-Remove');
	claimAssociationDetailDVTitle = PcfTextInput('#NewClaimAssociation-ClaimAssociationDetailScreen-ClaimAssociationDetailDV-Title');
	claimAssociationDetailDVType = PcfSelectInput('#NewClaimAssociation-ClaimAssociationDetailScreen-ClaimAssociationDetailDV-Type');
	claimAssociationDetailScreenEdit = PcfButton('#NewClaimAssociation-ClaimAssociationDetailScreen-Edit');
	claimAssociationDetailScreenUpdate = PcfButton('#NewClaimAssociation-ClaimAssociationDetailScreen-Update');
	claimAssociationDetailScreen_msgs = PcfButton('#NewClaimAssociation-ClaimAssociationDetailScreen-_msgs');
	newClaimAssociationNewClaimAssociation_UpLink = PcfButton('#NewClaimAssociation-NewClaimAssociation_UpLink');
	newClaimAssociation_Paging = PcfButton('#NewClaimAssociation-_Paging');
	newClaimAssociation__crumb__ = PcfComponent('#NewClaimAssociation-__crumb__');
}
