import { AccountGroupMenuLinks } from '../../../../ui/pages/gw/generated/billingsolutions/pages/navigation/menuLinks/AccountGroupMenuLinks'
import { SearchTabBar } from '../../../pages/gw/generated/billingsolutions/pages/navigation/tabBar/SearchTabBar';
import { SearchGroupMenuLinks } from '../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/SearchGroupMenuLinks';
import { PolicyGroupMenuLinks } from '../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/PolicyGroupMenuLinks';
import world from "../../../util/gw/world.js"
import { AccountsTabBar_Ext } from './scenarioPages/navigation/AccountsTabBar_Ext';
import { AccountGroupMenuActions } from '../../../pages/gw/generated/billingsolutions/pages/navigation/menuActions/AccountGroupMenuActions.js';
import { t } from 'testcafe';
import { navigateAndClickSubmenu, dateFunction } from "../../../util/gw/helper.js";
import { PolicyDetailPayments } from '../../../pages/gw/generated/billingsolutions/pages/policyGroup/PolicyDetailPayments.js';
import { PoliciesTabBar_Ext } from './scenarioPages/navigation/tabBar/PoliciesTabBar_Ext.js';
import { BatchProcessInfo_Ext } from './scenarioPages/BatchProcessInfo_Ext.js';
import { PolicySummary_Ext } from './scenarioPages/policyGroup/policyOverview/PolicySummary_Ext';
import { DesktopTabBar } from '../../../pages/gw/generated/billingsolutions/pages/navigation/tabBar/DesktopTabBar.js';

const accountGroupMenuLinks = new AccountGroupMenuLinks();
const searchTabBar = new SearchTabBar()
const searchGroupMenuLinks = new SearchGroupMenuLinks()
const policyGroupMenuLinks = new PolicyGroupMenuLinks()
const accountsTabBar_Ext = new AccountsTabBar_Ext()
const accountGroupMenuActions = new AccountGroupMenuActions();
const policyDetailPayments = new PolicyDetailPayments()
const policiesTabBar_Ext = new PoliciesTabBar_Ext()
const batchProcessInfo_Ext = new BatchProcessInfo_Ext()
const policySummary_Ext = new PolicySummary_Ext()
const desktopTabBar =  new DesktopTabBar();

export class NavigationScenario {
  async navigateToInvoices() {
    await accountGroupMenuLinks.menuLinksAccountGroup_AccountDetailInvoices.click();
  }

  async navigateSearchPolicyScreen() {
    await searchTabBar.tabBarSearchTab.click()
    await searchGroupMenuLinks.menuLinksSearchGroup_PolicySearch.click()
    console.log('On Search Policy Screen')
  }
  async navigateToCommissionsScreen() {
    await policyGroupMenuLinks.menuLinksPolicyGroup_PolicyDetailCommissions.click()
  }

  async navigateToAccountScreen() {
    await accountsTabBar_Ext.accountsTab_ExpandButton.click()
    await accountsTabBar_Ext.accountsTab_AccountNumberSearchInput.setValue('9444150680')
    await accountsTabBar_Ext.accountSearch_Button.click()
  }

  async navigateToAccountScreenWithNewPolicy(accountNumber) {
    await accountsTabBar_Ext.accountsTab_ExpandButton.click()
    await accountsTabBar_Ext.accountsTab_AccountNumberSearchInput.setValue(accountNumber)
    await accountsTabBar_Ext.accountSearch_Button.click()
  }

  async navigateToNewpaymet() {
    await accountGroupMenuActions.accountGroupAccountDetailMenuActions.click();
    await navigateAndClickSubmenu(['New Payment'], 'New Direct Bill Payment');
  }

  async navigateToDisbursement() {
    await accountGroupMenuActions.accountGroupAccountDetailMenuActions.click();
    await navigateAndClickSubmenu(['New Transaction'], 'Disbursement');
  }

  async navigateToChangePaymentPlan() {
    await policyGroupMenuLinks.menuLinksPolicyGroup_PolicyDetailPayments.click()
    await policyDetailPayments.policyDetailPaymentsScreenChangePaymentPlan.click()
  }

  async navigateToPaymentsScreen() {
    await accountGroupMenuLinks.menuLinksAccountGroup_AccountDetailPayments.click()
  }

  async openPolicy(policyNumber) {
    await policiesTabBar_Ext.tabBarPolicyDropDown.click()
    await policiesTabBar_Ext.tabBarpolicyNumberSearchItem.setValue(policyNumber)
    await policiesTabBar_Ext.searchButton.click()
  }
  
  async navigateToNewPaymetRequest() {
    await accountGroupMenuActions.accountGroupAccountDetailMenuActions.click();
    await navigateAndClickSubmenu(['New Payment'], 'Payment Request');
  }

  async navigateToBatchProcessInfoScreen() {
    await t.wait(5000)
    await t.pressKey('alt+shift+t')
    await t.wait(5000)
    await t.expect(await batchProcessInfo_Ext.batchProcessScreenTtlBar.component.exists).ok()
  }

  async accountLinkFromSummary() {
    await policySummary_Ext.policyInfoBarAccountNumberLink.click()
  }
  async navigateToDesktopScreen(){
    await desktopTabBar.tabBarDesktopTab.click();
  }
}