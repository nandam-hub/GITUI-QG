import { AccountsTabBar_Ext } from '../../../../ui/actions/gw/bc/scenarioPages/navigation/AccountsTabBar_Ext'

const accountsTabBar_Ext = new AccountsTabBar_Ext();

export class AccountsTabBarScenario {
    async openExistingAccount(accountNumber) {
        await accountsTabBar_Ext.accountsTab_ExpandButton.click();
        await accountsTabBar_Ext.accountSearch.setValue(accountNumber);
        await accountsTabBar_Ext.accountSearch_Button.click();
    }
}