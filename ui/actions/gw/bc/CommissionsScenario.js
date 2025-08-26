import { t } from "testcafe";
import { PolicyGroupMenuLinks } from "../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/PolicyGroupMenuLinks";
import world from "../../../util/gw/world";
import { PolicyDetailCommissions_Ext } from "./scenarioPages/PolicyDetailCommissions_Ext";

const policyGroupMenuLinks = new PolicyGroupMenuLinks()
const policyDetailCommissions_Ext = new PolicyDetailCommissions_Ext()

export class CommissionsScenario {
    async validateCommissionRate() {
        await t.expect(await policyDetailCommissions_Ext.policyDetailCommissionsCommissionRate.component.innerText).eql(world.dataMap.get('CommissionRate'))
    }
}