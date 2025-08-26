import { PcfButton, PcfComponent } from '@gtui/gt-ui-framework';
import { ClaimSummary } from '../../../../../../pages/gw/generated/claimsolutions/pages/claim/claimSummaryGroup/ClaimSummary'

export class ClaimSummary_Ext extends ClaimSummary {
    summarySelector = PcfButton('#Claim-MenuLinks-Claim_ClaimSummaryGroup');
    summaryHeader = PcfComponent('#ClaimSummary-ClaimSummaryScreen-ttlBar');
    claimStatus = PcfComponent('#ClaimSummary-ClaimSummaryScreen-ClaimClosedText_Input > div[class="gw-label"]')
}
