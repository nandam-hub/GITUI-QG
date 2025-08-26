import { AccountsTabBar_Ext } from './scenarioPages/navigation/AccountsTabBar_Ext';
import { AccountGroupMenuLinks_Ext } from './scenarioPages/AccountGroupMenuLinks_Ext.js';
import { t } from "testcafe";
import world from "../../../util/gw/world.js"

const accountsTabBar_Ext = new AccountsTabBar_Ext()
const accountGroupMenuLinks_Ext = new AccountGroupMenuLinks_Ext()

export class AccountScreenScenario {
    async validateAccountScreen(){
      await t.expect(await accountGroupMenuLinks_Ext.accountScreenNumber.component.textContent).eql(world.dataMap.get('AccountNumber'))
}
  }



