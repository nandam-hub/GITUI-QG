import { PolicyTabBar_Ext } from "./scenarioPages/navigation/tabBar/PolicyTabBar_Ext";
import { NextSubmissionWizard } from "../../../pages/gw/generated/policysolutions/pages/navigation/submissionWizard/NextSubmissionWizard";
import { AccountTabBar_Ext } from './scenarioPages/navigation/tabBar/AccountTabBar_Ext'
import { Renewal_New } from "./scenarioPages/renewalWizard/Renewal_New.js";
import { NewAccount_Ext } from "./scenarioPages/account/NewAccount_Ext.js";
import { SearchTabBar_Ext } from "./scenarioPages/navigation/tabBar/SearchTabBar_Ext";
import { ContactTabBar } from "../../../pages/gw/generated/policysolutions/pages/navigation/tabBar/ContactTabBar"
import { ContactSearch_Ext } from "./scenarioPages/search/ContactSearch_Ext"
import { SubmissionWizard_New } from "./scenarioPages/navigation/submissionWizard/SubmissionWizard_New"
import { CLLLocationPopup_New } from "./scenarioPages/popup/CLLCP/CLLLocationPopup_New.js";
import { Summary_Ext } from "../../../actions/gw/pc/scenarioPages/policy/Summary_Ext"
import { PolicyChangeWizard_New } from "./scenarioPages/policy/PolicyChangeWizard_New"
import { AccountMenuActions } from "../../../../ui/pages/gw/generated/policysolutions/pages/navigation/menuActions/AccountMenuActions.js"
import { PolicyMenuLinks } from "../../../pages/gw/generated/policysolutions/pages/navigation/menuLinks/PolicyMenuLinks";
import { RiskAnalysis_Ext } from "./scenarioPages/policy/RiskAnalysis_Ext";
import { PolicyMenuActions_Ext } from "./scenarioPages/navigation/menuActions/PolicyMenuActions_Ext";
import { checkBox} from "../../../util/gw/ActionHelper.js";

import { t } from "testcafe";
import { navigateAndClickSubmenu } from "../../../util/gw/helper";

const summary_Ext = new Summary_Ext()
const policyChangeWizard_New = new PolicyChangeWizard_New()
const policyTabBar_Ext = new PolicyTabBar_Ext()
const nextSubmissionWizard = new NextSubmissionWizard()
const accountTabBar_Ext = new AccountTabBar_Ext()
const renewal_New = new Renewal_New();
const newAccount_Ext = new NewAccount_Ext();
const searchTabBar_Ext = new SearchTabBar_Ext();
const submissionWizard_New = new SubmissionWizard_New()
const contactTabBar = new ContactTabBar();
const contactSearch_Ext = new ContactSearch_Ext()
const accountMenuActions = new AccountMenuActions()
const cllLocationPopup_New = new CLLLocationPopup_New()
const policyMenuLinks = new PolicyMenuLinks()
const riskAnalysis_Ext = new RiskAnalysis_Ext()
const policyMenuActions_Ext = new PolicyMenuActions_Ext()

export class NavigationScenario {

  async openPolicy(policyNumber) {
    await policyTabBar_Ext.tabBarPolicyTab.click()
    await policyTabBar_Ext.policyTabPolicyTab_PolicyRetrievalItem.setValue(policyNumber)
    await policyTabBar_Ext.tabBar_PolicyRetrievalItem_Button.click()
  }

  async clickNext() {
    await nextSubmissionWizard.submissionWizardNext.click()
  }

  async openAccount(accountNumber) {
    await accountTabBar_Ext.accountTab.click();
    await accountTabBar_Ext.accountSearch.setValue(accountNumber);
    await accountTabBar_Ext.accountSearch_Button.click();
  }

  async renewalNext() {
    await renewal_New.NextRenewalWizard.click()
  }

  async navigateNewAccountScreen() {
    console.log("On Enter Account Information Screen")
    await newAccount_Ext.account_dropdown.click()
    await newAccount_Ext.acc_NewAccount.click()
  }

  async navigateSearchAccountScreen() {
    await searchTabBar_Ext.tabBarSearchTab.click()
    await searchTabBar_Ext.searchTabSearch_AccountSearch.click()
    console.log('On Search Accounts Screen')
  }

  async navigateSearchPolicyScreen() {
    await searchTabBar_Ext.tabBarSearchTab.click()
    await searchTabBar_Ext.searchTabSearch_PolicySearch.click()
    console.log('On Search Policy Screen')
  }

  async navigateNewSubmissionScreen() {
    await policyTabBar_Ext.tabBarPolicyTab.click()
    await policyTabBar_Ext.policyTabPolicyTab_NewSubmission.click()
    await t.expect((policyTabBar_Ext.tabBar_Header).component.exists).ok();
  }
  async navigateNewSubmissionScreenActionsMenu() {
    await accountMenuActions.accountFileAccountFileMenuActions.click()
    await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click()
  }

  async navigateContactSearchScreen() {
    await contactSearch_Ext.contactMenu.click()
    await contactTabBar.contactTabSearch.click()
  }

  async navigateSmallBusinessTabSelection(tabSection) {
    switch (tabSection) {
      case ('SmallBusiness'):
        await submissionWizard_New.submissionWizardSmallBusienssTab.click()
        break;
      case ('SmallBusinessLineCoverages'):
        await submissionWizard_New.submissionWizardSmallBusinessLineCoveragesTab.click()
        break;
      case ('SmallBusinessLineAdditionalCoverages'):
        await submissionWizard_New.submissionWizardSmallBusinessLineAdditionalCoveragesTab.click()
        break;
      case ('Exclusions&Conditions'):
        await submissionWizard_New.submissionWizardExclusionsConditionsTabSb.click()
        break;
      default:
        throw new Error('No matching tab found. Check input string.')
    }
  }

  async navigateGWHomeownersLineTab(tabSection) {    
    switch (tabSection) {
      case ('AdditionalCoverges'):
        await submissionWizard_New.submissionWizardAdditionalCoverage.click()  
        break;
      case ('SectionIICoverages'):
        await submissionWizard_New.submissionWizardSectionIICoverages.click()
        break;
      case ('Optional Coverages'):
        await submissionWizard_New.submissionWizardOptionalCoverages.click()
        break;
      case ('Exclusions&Conditions'):
        await submissionWizard_New.submissionWizardExclusionsConditions.click()
        break;
      default:
        await submissionWizard_New.submissionWizardGWHomeownersLine.click()
    }
  }

  async initiateReinstate() {
    await summary_Ext.newTransactionTab.click()
    await summary_Ext.policyDetailsDetailViewTileReinstatePolicy.click()
  }

  async navigatePolicyChange() {
    await summary_Ext.newTransactionTab.click()
    await summary_Ext.policyDetailsDetailViewTileChangePolicy.click()
    await policyChangeWizard_New.changePolicyNext.click()
    await t.scrollIntoView('#PolicyChangeWizard-LOBWizardStepGroup-PolicyChangeWizard_PolicyInfoScreen-PolicyChangeWizard_PolicyInfoDV-AccountInfoInputSet-ChangePolicyAddressButton_Input')
  }

  async clickNewSubmissionOk() {
    await cllLocationPopup_New.cllLocationPopupOk.click()
  }

  async navigatePolicyFilePersonalAutoScreen() {
    await policyMenuActions_Ext.policyFileUALPersonalAutoLine.click()
    await policyMenuActions_Ext.policyFileUALPersonalAutoMenu.click()
  }

  async editPolicyCommercialNavigation() {
    await submissionWizard_New.submissionWizardEditPolicy.click()
    await submissionWizard_New.submissionWizardLOBCommercial1.click()
    t.ctx.module = 'Coverage'
    console.log(`The current module is ${t.ctx.module}`)
    await checkBox("ForAnyOneTreeShrubOrPlant");
  }

  async navigateToPolicyFileRiskAnalysis() {
    await policyMenuLinks.menuLinksPolicyFile_PolicyFile_RiskAnalysis.click()
  }

  async navigateRiskAnalysisTab(tabSection) {
    switch (tabSection) {
      case ('UWIssues'):
        await riskAnalysis_Ext.policyFile_RiskAnalysisCVPolicyFile_EvaluationIssuesCardTab.click()
        break;
      default:
        await riskAnalysis_Ext.policyFile_RiskAnalysisCVPolicyFile_UWReferralReasonCardTab.click()
    }
  }

  async navigatePreRenewalScreen() {
    await policyMenuActions_Ext.policyFilePolicyFileMenuActions.click()
    await navigateAndClickSubmenu((['Pre-Renewal Direction']))
  }

  async navigateToNewActivity() {
    await navigateAndClickSubmenu(['New Activity', 'Interview'], 'Meet with Insured')
  }
}
