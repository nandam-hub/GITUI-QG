import { Selector, t } from "testcafe"
import { returnDataFromTable } from "../../../util/gw/helper";
import world from "../../../util/gw/world";
import { ClaimMenuLinks } from "../../../pages/gw/generated/claimsolutions/pages/navigation/menuLinks/ClaimMenuLinks";
import { SIDetails } from "../../../pages/gw/generated/claimsolutions/pages/claim/claimLossDetailsGroup/SIDetails";

const claimMenuLinks = new ClaimMenuLinks();
const sIDetails = new SIDetails();
export class SpecialInvestigationDetailsScenario {
    
    async updateSIDDetails() {
        await claimMenuLinks.claim_ClaimLossDetailsGroupClaimLossDetailsGroup_SIDetails.click();
        await sIDetails.sIDetailsScreenEdit.click();
        for (let i = 0; i <= 13; i++) {
          if (i !== 10) { 
            await this.updateGeneralSIDQuestionnaire(i, 'yes');
          }
        }
        await sIDetails.sIUTotalScoreSIinfo_SIescalateSIU.selectOptionByLabel(world.dataMap.get('Review'));
        await sIDetails.sIUTotalScoreSIinfo_SIEscalateSIUNote.setValue(world.dataMap.get('Reason'));
        await sIDetails.sIDetailsScreenUpdate.click();
    }
    
    async validateSID() {
        await t.expect((await returnDataFromTable(6, 2))).contains(world.dataMap.get('SID'));
        await t.wait(1000);
    }
    
    async updateGeneralSIDQuestionnaire(questionNo, radioInput) {
        if (radioInput == 'yes')
            radioInput = 0
        else
            radioInput = 1
        let sIDRadioGroup = (`#SIDetails-SIDetailsScreen-SectionTwo-0-QuestionSetLV-${questionNo}-QuestionRowSet-QuestionRangeRadioInput_${radioInput}`);
        await t.click(sIDRadioGroup)
    }
}