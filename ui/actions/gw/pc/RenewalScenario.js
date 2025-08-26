import { t } from "testcafe";
import { NavigationScenario } from "./NavigationScenario.js";
import { Renewal_New } from "./scenarioPages/renewalWizard/Renewal_New.js";
import { RenewalWizard_RenewalPopup } from "../../../pages/gw/generated/policysolutions/pages/popup/Renewal/RenewalWizard_RenewalPopup.js";
import { JobComplete_New } from "../../../../ui/actions/gw/pc/scenarioPages/other/JobComplete_New.js";
import { checkBox, setInputValueIfExists} from "../../../util/gw/ActionHelper.js";
import { PolicyMenuActions_Ext } from "./scenarioPages/navigation/menuActions/PolicyMenuActions_Ext.js";
import { LOBWizardStepGroupSubmissionWizard_Ext } from "./scenarioPages/navigation/submissionWizard/LOBWizardStepGroupSubmissionWizard_Ext"
import world from "../../../../ui/util/gw/world"

const navigationScenario = new NavigationScenario()
const renewal_New = new Renewal_New()
const renewalWizard_RenewalPopup = new RenewalWizard_RenewalPopup()
const jobComplete_New = new JobComplete_New()
const policyMenuActions_Ext = new PolicyMenuActions_Ext()
const lOBWizardStepGroupSubmissionWizard_Ext = new LOBWizardStepGroupSubmissionWizard_Ext()
export class RenewalScenario {

  async initiatePolicyRenewal() {
    await policyMenuActions_Ext.policyFilePolicyFileMenuActions.click()
    await policyMenuActions_Ext.policyFileMenuActions_NewWorkOrderPolicyFileMenuActions_RenewPolicy.click()
    await t.eval(() => location.reload(true))
  }

  async editPolicyTransaction() {
    await renewal_New.RenewalWizard_EditPolicyTransaction.click()
    await navigationScenario.renewalNext()
  }

  async clickRenew() {
    await renewal_New.RenewalWizard_BindOptions.click()
    await renewal_New.RenewalWizard_Renew.click()
  }

  async renewalQuote() {
    await renewal_New.RenewalWizard_Quote.click()
  }

  async selectRenewalCode() {
    await renewalWizard_RenewalPopup.renewalWizard_RenewalScreenRenewalCode.selectOptionByLabel(world.dataMap.get('RenewalCode'))
    await renewalWizard_RenewalPopup.renewalWizard_RenewalScreenUpdate.click()
  }

  async verifyRenewal() {
    await t.expect(jobComplete_New.jobComplete_Title.component.innerText).eql("Renewal Renewing")
    console.log("Renewal is Successful")
  }

  async navigategwHomeownersLineTabSection(section) {
    t.ctx.module = 'Coverage'
    console.log(`The current module is ${t.ctx.module}`)
    switch (section) {
      case ('AdditionalCoverges'):
        await renewal_New.RenewalWizardAdditionalCoverage.click()
        break;
      case ('SectionIICoverages'):
        await renewal_New.RenewalWizardSectionIICoverages.click()
        break;
      case ('Optional Coverages'):
        await renewal_New.RenewalWizardOptionalCoverages.click()
        break;
      case ('Exclusions&Conditions'):
        await renewal_New.RenewalWizardExclusionsConditions.click()
        break;
      default:
        await renewal_New.RenewalWizardGWHomeownersLine.click()
    }
  }

  async smallBusinessTabSelection(tabSection) {
    switch (tabSection) {
      case ('SmallBusiness'):
        await renewal_New.RenewalWizardSmallBusienssTab.click()
        break;
      case ('SmallBusinessLineCoverages'):
        await renewal_New.RenewalWizardSmallBusinessLineCoveragesTab.click()
        break;
      case ('SmallBusinessLineAdditionalCoverages'):
        await renewal_New.RenewalWizardSmallBusinessLineAdditionalCoveragesTab.click()
        break;
      case ('Exclusions&Conditions'):
        await renewal_New.RenewalWizardExclusionsConditionsTabSb.click()
        break;
      default:
        throw new Error('No matching tab found. Check input string.')
    }
  }

  async renewalCoverage() {
    t.ctx.module = 'Coverage'
    console.log(`The current module is ${t.ctx.module}`)
    await checkBox("OutsideObjectsAndStructures")
    await checkBox("EachLossCausedByWind")
    await setInputValueIfExists(lOBWizardStepGroupSubmissionWizard_Ext.eachLossCausedByWindLimit, "EachLossCausedByWindLimit", world.coverageDataMap)
    await checkBox("Terrorism")
  }

  async updatePreRenewalDirection() {
    await renewal_New.preRenewalEditButton.click()
    await renewal_New.preRenewalDirectionDropdown.selectOptionByValue(world.dataMap.get('Direction'))
    await renewal_New.preRenewalAssignTo.selectOptionByLabel(world.dataMap.get('AssignTo'))
    await t.typeText(renewal_New.preRenewalTextArea.component, world.dataMap.get('PreRenewalText'))
    await renewal_New.preRenewalUpdate.click()
  }

  async validatePreRenewalDirection() {
    await t.expect(await policyMenuActions_Ext.policyFilePreRenewalDirectionText.component.textContent).eql(world.dataMap.get('PreRenwalValidationText'))

  }
}