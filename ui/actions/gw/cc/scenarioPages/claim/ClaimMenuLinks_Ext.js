import { PcfComponent, PcfSelectInput, PcfButton } from '@gtui/gt-ui-framework';
import { ClaimMenuLinks } from "../../../../../pages/gw/generated/claimsolutions/pages/navigation/menuLinks/ClaimMenuLinks"

export class ClaimMenuLinks_Ext extends ClaimMenuLinks {
    claimLossDetailsGroup = PcfComponent ('#Claim-MenuLinks-Claim_ClaimLossDetailsGroup > div.gw-action--inner')
}