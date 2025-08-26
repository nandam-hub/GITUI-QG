import { PcfComponent } from '@gtui/gt-ui-framework';
import { ClaimLossDetails } from '../../../../../../pages/gw/generated/claimsolutions/pages/claim/claimLossDetailsGroup/ClaimLossDetails'

export class ClaimLossDetails_Ext extends ClaimLossDetails{
catastropheTextValue = PcfComponent('#ClaimLossDetails-ClaimLossDetailsScreen-LossDetailsPanelSet-LossDetailsCardCV-LossDetailsDV-Catastrophe_CatastropheNumber');
propertiesAddressInTabel = PcfComponent('#ClaimLossDetails-ClaimLossDetailsScreen-LossDetailsPanelSet-LossDetailsCardCV-LossDetailsDV-Claim_Properties-EditableFixedPropertyIncidentsLV-0-Address1_button');
injuredNameInTabel = PcfComponent('#ClaimLossDetails-ClaimLossDetailsScreen-LossDetailsPanelSet-LossDetailsCardCV-LossDetailsDV-EditableInjuryIncidentsLV-0-Name_button')
}
