import { NewRecoveryReserveSet_Ext } from "./scenarioPages/other/NewRecoveryReserveSet_Ext";
import { NewReserveSet_Ext } from "./scenarioPages/other/NewReserveSet_Ext";
import world from "../../../util/gw/world"
import { t } from 'testcafe';
import { validateTableRecord, selectDropdownInTable, enterDataInTable } from "../../../util/gw/helper";
import { ClaimMenuActions_Ext } from "./scenarioPages/navigation/menuActions/ClaimMenuActions_Ext"

const newRecoveryReserveSet_Ext = new NewRecoveryReserveSet_Ext()
const newReserveSet_Ext = new NewReserveSet_Ext()
const claimMenuActions_Ext = new ClaimMenuActions_Ext()

export class ReserveScenario {

    async addRecoveryReserve() {
        newRecoveryReserveSet_Ext.newReserveSetScreenAdd.click()
        newRecoveryReserveSet_Ext.newRecoveryEditableRecoveryReserves.click()
        newRecoveryReserveSet_Ext.newReserveSetScreenCostType.selectOptionByLabel(world.dataMap.get('CostType'))
        newRecoveryReserveSet_Ext.newReserveSetScreenCostCategory.selectOptionByLabel(world.dataMap.get('CostCategory'))
        newRecoveryReserveSet_Ext.newReserveSetScreenRecoveryCategory.selectOptionByLabel(world.dataMap.get('RecoveryCategory'))
        newRecoveryReserveSet_Ext.newReserveSetScreenNewOpenRecoveryReserves.setValue(world.dataMap.get('NewOpenRecoveryReserves'))
        newRecoveryReserveSet_Ext.newReserveSetScreenUpdate.click()
    }

    async validateRecoveryReserve() {
        await t.expect(await validateTableRecord("Cost Type", "Unspecified Cost Type", 5)).contains(world.dataMap.get('CostType'))
        await t.expect(await validateTableRecord("Cost Category", "Unspecified Cost Category", 6)).contains(world.dataMap.get('CostCategory'))
        await t.expect(await validateTableRecord("Recovery Category", "Credit to expense", 7)).contains(world.dataMap.get('RecoveryCategory'))
    }

    /** To create n number of reserves
     * @param {Number} reserveCount - count of reserves to be created
     */
    async createReserve(reserveCount = 1) {
        t.ctx.TableIdentifier = "Exposure";
        for (let i = 1; i <= reserveCount; i++) {
            await selectDropdownInTable(newReserveSet_Ext.newReserveSetScreenExposure, world.dataMap.get(`Exposure${i}`), i)
            await selectDropdownInTable(newReserveSet_Ext.newReserveSetScreenCostType, world.dataMap.get(`CostType${i}`), i)
            await selectDropdownInTable(newReserveSet_Ext.newReserveSetScreenCostCategory, world.dataMap.get(`CostCategory${i}`), i)
            await enterDataInTable(newReserveSet_Ext.newReserveSetScreenNewAmount, world.dataMap.get(`NewAvailableReserves${i}`), i)
            if (i < reserveCount) {
                await newReserveSet_Ext.newReserveSetNewReserveSetScreenAdd.click()
            }
        }
        newReserveSet_Ext.newReserveSetNewReserveSetScreenUpdate.click()
    }

    async validateReserve(reserveCount = 1) {
        for (let i = 1; i <= reserveCount; i++) {
            await t.expect(await validateTableRecord("Cost Category", world.dataMap.get(`CostCategory${i}`), 5)).contains(world.dataMap.get(`CostType${i}`))
            await t.expect(await validateTableRecord("Cost Category", world.dataMap.get(`CostCategory${i}`), 6)).contains(world.dataMap.get(`CostCategory${i}`))
        }
    }

    async validateAutomaticeReserve() {
        await t.expect(await validateTableRecord("Cost Category", world.dataMap.get(`CostCategory`), 1)).contains(world.dataMap.get(`Exposure`))
    }

    async validateNewReserve() {
        await t.expect((claimMenuActions_Ext.claimMenuActions_NewTransactionClaimMenuActions_NewTransaction_ReserveSet).component.exists).notOk();
    }
}