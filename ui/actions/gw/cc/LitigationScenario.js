import { t } from "testcafe"
import { validateTableRecord, generateRandomStringFunction, clickTableRecord } from '../../../util/gw/helper'
import { NewMatter } from "../../../pages/gw/generated/claimsolutions/pages/other/NewMatter"
import { ClaimMatters } from "../../../pages/gw/generated/claimsolutions/pages/claim/ClaimMatters"
import { CloseMatterPopup_Ext } from "./scenarioPages/popup/New/Close/CloseMatterPopup_Ext"
import world from "../../../util/gw/world"

const claimMatters = new ClaimMatters()
const newMatter = new NewMatter()
const closeMatterPopup_Ext = new CloseMatterPopup_Ext()

export class LitigationScenario {

    async litigationValidation() {
        await t.expect(await validateTableRecord("Name", t.ctx.Name, 2)).eql(world.dataMap.get('CaseNumber'))
    }

    async addNewLitigation() {
        await claimMatters.claimMatterScreenClaimMatters_NewMatterButton.click();
        t.ctx.Name = generateRandomStringFunction(5);
        await newMatter.newMatterDVMatter_Name.setValue(t.ctx.Name);
        await newMatter.newMatterDVMatter_CaseNumber.setValue(world.dataMap.get('CaseNumber'));
        await newMatter.newMatterScreenUpdate.click();
    }

    async closeLitigation() {
        for (let i = 1; ; i++) {
            if (world.dataMap.has(`Litigation${i}`)) {
                await clickTableRecord("_Checkbox", world.dataMap.get(`Litigation${i}`))
                await claimMatters.claimMatterScreenClaimMatters_CloseMatterButton.click()
                await t.typeText(closeMatterPopup_Ext.closeMatterTextArea.component, world.dataMap.get('CloseLitigationText'))
                await closeMatterPopup_Ext.closeMatterInfoDVResolution.selectOptionByLabel(world.dataMap.get('CloseLitigationResolution'))
                await closeMatterPopup_Ext.closeMatterScreenUpdate.click()
            }
            else {
                break;
            }
        }
    }
}