import world from "../../../util/gw/world"
import { t } from "testcafe"
import { validateTableRecord } from "../../../util/gw/helper"

export class ClaimHistoryScenario {
    async validateNewClaimSaved() {
        await t.expect(await validateTableRecord("Type", "Opened", 4)).eql(world.dataMap.get('Description'))
    }

    async validateAssignedTo() {
        await t.expect(await validateTableRecord("Type", "Assigned", 4)).contains(world.dataMap.get('Assigned'))
    }
}