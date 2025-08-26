import { ClaimAssociations } from "../../../pages/gw/generated/claimsolutions/pages/claim/claimLossDetailsGroup/ClaimAssociations"
import { NewClaimAssociation_Ext } from "./scenarioPages/claim/NewClaimAssociation_Ext"
import { ClaimSearchPopup } from "../../../pages/gw/generated/claimsolutions/pages/popup/Claim/ClaimSearchPopup"
import { ClaimSearchPopup_New } from "./scenarioPages/claim/ClaimSearchPopup_New"
import world from "../../../util/gw/world"
import { t } from "testcafe"
import { generateRandomStringFunction, validateTableRecord } from "../../../util/gw/helper"

const claimAssociations = new ClaimAssociations();
const newClaimAssociation_Ext = new NewClaimAssociation_Ext();
const claimSearchPopup = new ClaimSearchPopup();
const claimSearchPopup_New = new ClaimSearchPopup_New();

export class AssociationScenario {
    async addAssociation() {
        await claimAssociations.claimAssociationsScreenClaimAssociations_NewButton.click()
        t.ctx.ClaimsTitle = `${world.dataMap.get('Title')}${generateRandomStringFunction(2)}`;
        await newClaimAssociation_Ext.claimAssociationDetailDVTitle.setValue(await t.ctx.ClaimsTitle)
        await newClaimAssociation_Ext.claimAssociationDetailDVType.selectOptionByLabel(world.dataMap.get('Type'))
        await newClaimAssociation_Ext.editableClaimsInAssociationLV_tbAdd.click()
        await newClaimAssociation_Ext.newClaimAssociationClaimAssociationDetailScreen.click()
    }

    async claimSearchPopUp() {
        await claimSearchPopup.claimSearchPopupClaimSearchScreenClaimSearchDVClaimSearchRequiredInputSetClaimNumber.setValue(world.dataMap.get('Claims'))
        await t.scrollIntoView('#ClaimSearchPopup-ClaimSearchScreen-ClaimSearchDV-ClaimSearchAndResetInputSet-Search')
        await claimSearchPopup.claimSearchPopupClaimSearchScreenClaimSearchDVClaimSearchAndResetInputSetSearch.click()
        await claimSearchPopup_New.claimSearchPopup.click()
    }

    async updateAssociation() {
        await newClaimAssociation_Ext.claimAssociationDetailScreenUpdate.click()
    }

    async validateAssociation() {
        await t.expect(await validateTableRecord("Claims", world.dataMap.get('Claims'), 1)).eql(await t.ctx.ClaimsTitle)
    }
}
