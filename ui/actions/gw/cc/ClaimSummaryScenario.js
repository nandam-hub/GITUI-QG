import { ClaimStatus } from "../../../pages/gw/generated/claimsolutions/pages/claim/claimSummaryGroup/ClaimStatus";
import { ClaimSummary_Ext } from "./scenarioPages/claim/claimSummaryGroup/ClaimSummary_Ext";
import { ClaimMenuLinks } from '../../../pages/gw/generated/claimsolutions/pages/navigation/menuLinks/ClaimMenuLinks'
import { t } from 'testcafe'
import world from "../../../util/gw/world";

const claimStatus = new ClaimStatus()
const claimMenuLinks = new ClaimMenuLinks();
const claimSummary_Ext = new ClaimSummary_Ext()

export class ClaimSummaryScenario {
    async verifyClaimStatus() {
        await claimMenuLinks.claim_ClaimSummaryGroupClaimSummaryGroup_ClaimStatus.click()
        await t.expect(claimStatus.claimStatusClaimStatus.component.textContent).eql(world.dataMap.get('ClaimStatus'))
    }

    async verifySummaryHeader() {
        await t.expect((claimSummary_Ext.summaryHeader).component.exists).ok();
    }
}