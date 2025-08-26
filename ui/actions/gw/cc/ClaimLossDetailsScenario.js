import { ClaimLossDetails_Ext } from "../../../actions/gw/cc/scenarioPages/claim/claimLossDetailsGroup/ClaimLossDetails_Ext";
import { t } from 'testcafe'
import world from "../../../util/gw/world";

const claimLossDetails_Ext = new ClaimLossDetails_Ext()

export class ClaimLossDetailsScenario {
    async verifyCatastropheDetails() {
        await t.expect(claimLossDetails_Ext.catastropheTextValue.component.textContent).eql(world.dataMap.get('Catastrophe'))
    }
}