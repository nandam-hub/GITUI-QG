import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ClaimPolicyEndorsements {
	claimPolicyEndorsementsScreenAdd = PcfButton('#ClaimPolicyEndorsements-ClaimPolicyEndorsementsScreen-Add');
	claimPolicyEndorsementsScreenClaimPolicyEndorsements_AddMoreEndorsementsButton = PcfButton('#ClaimPolicyEndorsements-ClaimPolicyEndorsementsScreen-ClaimPolicyEndorsements_AddMoreEndorsementsButton');
	claimPolicyEndorsementsScreenEndorsementDetailCardTab = PcfButton('#ClaimPolicyEndorsements-ClaimPolicyEndorsementsScreen-EndorsementDetailCardTab');
	endorsementDetailDVComments = PcfTextInput('#ClaimPolicyEndorsements-ClaimPolicyEndorsementsScreen-EndorsementDetailDV-Comments');
	endorsementDetailDVDescription = PcfTextInput('#ClaimPolicyEndorsements-ClaimPolicyEndorsementsScreen-EndorsementDetailDV-Description');
	endorsementDetailDVEffectiveDate = PcfDateValueInput('#ClaimPolicyEndorsements-ClaimPolicyEndorsementsScreen-EndorsementDetailDV-EffectiveDate');
	endorsementDetailDVExpirationDate = PcfDateValueInput('#ClaimPolicyEndorsements-ClaimPolicyEndorsementsScreen-EndorsementDetailDV-ExpirationDate');
	endorsementDetailDVFormNumber = PcfTextInput('#ClaimPolicyEndorsements-ClaimPolicyEndorsementsScreen-EndorsementDetailDV-FormNumber');
	endorsementDetailDV_tbCancel = PcfButton('#ClaimPolicyEndorsements-ClaimPolicyEndorsementsScreen-EndorsementDetailDV_tb-Cancel');
	endorsementDetailDV_tbClaimPolicyEndorsements_EditButton = PcfButton('#ClaimPolicyEndorsements-ClaimPolicyEndorsementsScreen-EndorsementDetailDV_tb-ClaimPolicyEndorsements_EditButton');
	endorsementDetailDV_tbEdit = PcfButton('#ClaimPolicyEndorsements-ClaimPolicyEndorsementsScreen-EndorsementDetailDV_tb-Edit');
	endorsementDetailDV_tbUpdate = PcfButton('#ClaimPolicyEndorsements-ClaimPolicyEndorsementsScreen-EndorsementDetailDV_tb-Update');
	claimPolicyEndorsementsScreenEndorsementsLV = PcfListView('#ClaimPolicyEndorsements-ClaimPolicyEndorsementsScreen-EndorsementsLV');
	claimPolicyEndorsementsScreenRemove = PcfButton('#ClaimPolicyEndorsements-ClaimPolicyEndorsementsScreen-Remove');
	claimPolicyEndorsementsScreen_msgs = PcfButton('#ClaimPolicyEndorsements-ClaimPolicyEndorsementsScreen-_msgs');
	claimPolicyEndorsementsClaimPolicyEndorsements_UpLink = PcfButton('#ClaimPolicyEndorsements-ClaimPolicyEndorsements_UpLink');
	claimPolicyEndorsements_Paging = PcfButton('#ClaimPolicyEndorsements-_Paging');
	claimPolicyEndorsements__crumb__ = PcfComponent('#ClaimPolicyEndorsements-__crumb__');
}
