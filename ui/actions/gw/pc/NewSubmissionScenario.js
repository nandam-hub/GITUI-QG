import { Selector } from "testcafe";
import { NextSubmissionWizard_Ext } from "./scenarioPages/navigation/submissionWizard/NextSubmissionWizard_Ext.js";
import { t } from "testcafe";
import { PolicyInfoScreen } from "../../../pages/gw/generated/policysolutions/pages/lOBWizardStepGroup/policyInfo/PolicyInfoScreen.js";
import { UALPersonalVehiclePopup_New } from "./scenarioPages/other/UALPersonalVehiclePopup_New.js";
import { NewAPDPolicyInvolvedPartyPopup } from "../../../pages/gw/generated/policysolutions/pages/popup/New/NewAPDPolicyInvolvedPartyPopup.js";
import { NewSubmission_Ext } from "./scenarioPages/policy/NewSubmission_Ext.js";
import { generateRandomStringFunction, validateTableRecord, enterDataInTable, performClickInTable, performHoverInTable } from '../../../util/gw/helper'
import { LOBWizardStepGroupSubmissionWizard_Ext } from "./scenarioPages/navigation/submissionWizard/LOBWizardStepGroupSubmissionWizard_Ext"
import { CLLCpBlanketPopup_New } from "./scenarioPages/navigation/submissionWizard/CLLCpBlanketPopup_New"
import { SubmissionWizard_New } from "./scenarioPages/navigation/submissionWizard/SubmissionWizard_New"
import { JobWizardInfoBarSubmissionWizard_Ext } from "./scenarioPages/navigation/submissionWizard/JobWizardInfoBarSubmissionWizard_Ext";
import { JobComplete_New } from "./scenarioPages/other/JobComplete_New"
import { RatingCostDetailPopup } from "../../../../ui/pages/gw/generated/policysolutions/pages/popup/Rating/RatingCostDetailPopup"
import { CLLLocationPopup_New } from "./scenarioPages/popup/CLLCP/CLLLocationPopup_New.js";
import world from "../../../util/gw/world"
import { WebMessageWorksheet_New } from "./scenarioPages/popup/Organization/WebMessageWorksheet_New.js";
import { PolicyInfoScreen_Ext } from "./scenarioPages/IOBWizardStepGroup/policyInfo/PolicyInfoScreen_Ext.js";
import { checkBox, setInputValueIfExists, selectOptionByLabelIfExists } from "../../../util/gw/ActionHelper.js";
import { CoveragePatternSearchPopup_Ext } from "./scenarioPages/popup/Coverage/CoveragePatternSearchPopup_Ext.js"
import { FormsSubmissionWizard } from "../../../../ui/pages/gw/generated/policysolutions/pages/navigation/submissionWizard/FormsSubmissionWizard.js"
import { NewAdditionalNamedInsuredPopup_Ext } from "./scenarioPages/popup/New/NewAdditionalNamedInsuredPopup_Ext.js";

const nextSubmissionWizard_Ext = new NextSubmissionWizard_Ext()
const policyInfoScreen = new PolicyInfoScreen()
const ualPersonalVehiclePopup_New = new UALPersonalVehiclePopup_New()
const newAPDPolicyInvolvedPartyPopup = new NewAPDPolicyInvolvedPartyPopup()
const newSubmission_Ext = new NewSubmission_Ext()
const lOBWizardStepGroupSubmissionWizard_Ext = new LOBWizardStepGroupSubmissionWizard_Ext()
const cLLCpBlanketPopup_New = new CLLCpBlanketPopup_New()
const submissionWizard_New = new SubmissionWizard_New()
const jobWizardInfoBarSubmissionWizard_Ext = new JobWizardInfoBarSubmissionWizard_Ext()
const jobComplete_New = new JobComplete_New()
const ratingCostDetailPopup = new RatingCostDetailPopup()
const webMessageWorksheet_New = new WebMessageWorksheet_New()
const cllLocationPopup_New = new CLLLocationPopup_New()
const policyInfoScreen_Ext = new PolicyInfoScreen_Ext()
const coveragePatternSearchPopup_Ext = new CoveragePatternSearchPopup_Ext()
const formsSubmissionWizard = new FormsSubmissionWizard()
const newAdditionalNamedInsuredPopup_Ext = new NewAdditionalNamedInsuredPopup_Ext()

export class NewSubmissionScenario {
  async selectProduct() {
    await t.click(Selector('td').withExactText(world.dataMap.get('ProductName')).parent().child('td:nth-child(1)'))
  }
  async clickNext() {
    await t.setNativeDialogHandler(() => true);
    await nextSubmissionWizard_Ext.submissionWizardNext.click()
  }

  async policyInfo() {
    console.log("On Policy Info screen")
    await policyInfoScreen.accountInfoInputSetOrganizationType.selectOptionByLabel(world.dataMap.get('OrganizationType'))
  }

  async usaPersonalAutoStandardCoverages() {
    await submissionWizard_New.SubmissionWizard_LineStandardCoveragesTab.click()
    if (!(world.coverageDataMap === undefined) && Array.from(world.coverageDataMap.keys()).length > 0) {
      t.ctx.module = 'Coverage'
      console.log(`The current module is ${t.ctx.module}`)
      await checkBox("LiabilityBodilyInjuryAndPropertyDamage")
      await selectOptionByLabelIfExists(lOBWizardStepGroupSubmissionWizard_Ext.liabilityBodilyInjuryAndPropertyDamageAutoLiabilityPackage, "LiabilityBodilyInjuryAndPropertyDamageAutoLiabilityPackage", world.coverageDataMap)
      await checkBox("medicalPayments")
      await selectOptionByLabelIfExists(lOBWizardStepGroupSubmissionWizard_Ext.medicalLimit, "MedicalLimit", world.coverageDataMap)
    }
  }

  async personalVehicle(vehicleNum = "1") {
    await submissionWizard_New.SubmissionWizard_AddPersonalVehicle.click()
    await this.addVehicle()
    console.log(`Added ${vehicleNum} vehicle(s) successfully`)
  }

  async vehicleDriver() {
    await ualPersonalVehiclePopup_New.UALPersonalVehiclePopup_VehicleDriverExposureCardTab.click()
    await ualPersonalVehiclePopup_New.UALPersonalVehiclePopup_AddDriver.click()
    await ualPersonalVehiclePopup_New.UALPersonalVehiclePopup_PolicyDriverMenuIcon.click()
    await ualPersonalVehiclePopup_New.UALPersonalVehiclePopup_NewPerson.click()
    await newAPDPolicyInvolvedPartyPopup.newAPDPolicyInvolvedPartyPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetGlobalPersonNameInputSetFirstName.setValue(generateRandomStringFunction(5))
    await newAPDPolicyInvolvedPartyPopup.newAPDPolicyInvolvedPartyPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetGlobalPersonNameInputSetLastName.setValue(generateRandomStringFunction(5))
    await newAPDPolicyInvolvedPartyPopup.NewAPDPolicyInvolvedPartyPopup_LinkAddressMenuMenuIcon.click()
    await t.hover(newAPDPolicyInvolvedPartyPopup.NewAPDPolicyInvolvedPartyPopup_Address)
      .click(newAPDPolicyInvolvedPartyPopup.NewAPDPolicyInvolvedPartyPopup_PrimaryAddress)
    await nextSubmissionWizard_Ext.ok_Button.click()
    console.log('Added Driver in Personal Vehicle screen')
    await nextSubmissionWizard_Ext.ok_Button.click()
  }

  async verifyQuote() {
    await t.wait(3000)
    let status = await nextSubmissionWizard_Ext.Quotedstatus.component.textContent
    console.log(status)
    await t.expect(status).eql('Submission (Quoted)')
  }

  async saveQuote() {
    t.ctx.QuoteNumber = await submissionWizard_New.submissionWizard_QuoteNumber.component.textContent
    console.log(t.ctx.QuoteNumber, 'Submission is quoted successfully')
  }

  async bindPolicy() {
    await t.wait(2000)
    await submissionWizard_New.submissionWizard_Bind.click()
    await t.setNativeDialogHandler(() => true);
    await submissionWizard_New.submissionWizard_BindOptions.click()
  }
  async verifyIssue() {
    const status = await jobWizardInfoBarSubmissionWizard_Ext.jobWizardInfoBar_IssueStatus.component.textContent
    console.log(status)
    await t.expect(status).eql('Submission Bound')
  }

  async viewSubmission() {
    await jobWizardInfoBarSubmissionWizard_Ext.jobWizardInfoBar_Viewsubmission.click()
    await t.wait(1000)
    await t.takeScreenshot()
  }

  async viewPolicy() {
    await jobComplete_New.jobComplete_ViewPolicyHyperLink.click()
    await t.wait(1000)
  }

  async initiateNewSubmissionPolicy(accountNumber) {
    console.log("On New Submissions screen")
    await newSubmission_Ext.newSubmissionAccountNumber.setValue(accountNumber)
    await newSubmission_Ext.accountSelectAccount.click()
  }

  async addCpBlanket(nthOption = 1) {
    await submissionWizard_New.submissionWizard_AddCPBlanket.click()
    await cLLCpBlanketPopup_New.CLLCpBlanketPopup_Location.selectNthOption(nthOption)
    await cLLCpBlanketPopup_New.CLLCpBlanketPopup_ok.click()
    await nextSubmissionWizard_Ext.submissionWizardNext.click()
    await t.wait(2000)
  }

  async quote() {
    await t.wait(2000)
    await submissionWizard_New.submissionWizard_Quote.click()
  }

  async returnToQuote() {
    await submissionWizard_New.submissionWizard_Premium.click()
    await ratingCostDetailPopup.ratingCostDetailPopup__crumb__.click()
  }

  async verifyQuote() {
    await t.wait(2000)
    const status = await submissionWizard_New.submissionWizard_QuoteStatus.component.textContent
    console.log(status)
    await t.expect(status).eql('Submission (Quoted)')
  }

  async issuePolicy() {
    if (await submissionWizard_New.submissionWizard_Bind.component.exists)
      await submissionWizard_New.submissionWizard_Bind.click()
    await t.setNativeDialogHandler(() => true);
    await submissionWizard_New.submissionWizard_IssuePolicy.click()
    t.ctx.PolicyNumber = await jobWizardInfoBarSubmissionWizard_Ext.jobWizardInfoBar_PolicyNumber.component.textContent
    console.log("The newly created policy number is: " + t.ctx.PolicyNumber)
  }

  async policyRenewal() {
    await newSubmission_Ext.policyMenuAction_Renewal.click()
    await t.eval(() => location.reload(true))
    await newSubmission_Ext.editPolicyTransaction_Btn.click()
  }

  async gWHomeownersLineScreen() {
    await submissionWizard_New.submissionWizardRefusalType.selectOptionByLabel(world.dataMap.get('RefusalType'))
  }

  async addHomeOwnersAdditionalCoverages() {
    t.ctx.module = 'Coverage'
    console.log(`The current module is ${t.ctx.module}`)
    await checkBox("IdentityTheftProtection")
    await selectOptionByLabelIfExists(lOBWizardStepGroupSubmissionWizard_Ext.identityTheftProtectionLimit, "IdentityTheftProtectionLimit", world.coverageDataMap)
    await selectOptionByLabelIfExists(lOBWizardStepGroupSubmissionWizard_Ext.identityTheftProtectionDeductible, "IdentityTheftProtectionDeductible", world.coverageDataMap)
    await checkBox("FirstAid")
    await checkBox("LossAssessment")
    await selectOptionByLabelIfExists(lOBWizardStepGroupSubmissionWizard_Ext.lossAssessmentLimit, "LossAssessmentLimit", world.coverageDataMap)
  }

  async addHomeOwnerSectionIICoverages() {
    t.ctx.module = 'Coverage'
    console.log(`The current module is ${t.ctx.module}`)
    await checkBox("CoverageEPersonalLiability")
    await selectOptionByLabelIfExists(lOBWizardStepGroupSubmissionWizard_Ext.coverageEPersonalLiabilityLimit, "CoverageEPersonalLiabilityLimit", world.coverageDataMap)
    await checkBox("CoverageFMedicalPayments")
    await selectOptionByLabelIfExists(lOBWizardStepGroupSubmissionWizard_Ext.coverageFMedicalPaymentsLimit, "CoverageFMedicalPaymentsLimit", world.coverageDataMap)
  }

  async homeOwnersAddExclusionOrConditionScreen() {
    await submissionWizard_New.submissionWizardAddExclusionsOrCondition.click()
    await coveragePatternSearchPopup_Ext.coveragePatternSearchPopupCoveragePatternSearchScreenCoveragePatternSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
    await coveragePatternSearchPopup_Ext.fireDepartmentSubscription.click()
    await coveragePatternSearchPopup_Ext.computerDamageExclusion.click()
    await coveragePatternSearchPopup_Ext.addSelectedExclusionsAndConditions.click()
  }

  async formsValidation() {
    await formsSubmissionWizard.submissionWizardForms.click()
    console.log("Forms HO DP 00, HOP 08 FL are added successfully");
    await t.expect(await validateTableRecord("Form #", "HO DP 00", 1)).contains(world.dataMap.get('Form1Description'))
    await t.expect(await validateTableRecord("Form #", "HOP 08 FL", 1)).contains(world.dataMap.get('Form2Description'))
  }

  async commercialUmbrellaAccessliability() {
    console.log("On Commercial Umbrella And Excess Liability screen")
    await lOBWizardStepGroupSubmissionWizard_Ext.umbrellaLiabilityorExcessLiability.selectOptionByLabel(world.dataMap.get('UmbrellaLiabilityorExcessLiability'))
    await lOBWizardStepGroupSubmissionWizard_Ext.umbrellaLiabilityUmbrellaCoverages.click()
    if (!(world.coverageDataMap === undefined) && Array.from(world.coverageDataMap.keys()).length > 0) {
      t.ctx.module = 'Coverage'
      console.log(`The current module is ${t.ctx.module}`)
      await checkBox("UmbrellaLiability")
      await selectOptionByLabelIfExists(lOBWizardStepGroupSubmissionWizard_Ext.umbrellaLiabilityOccurrenceLimit, "UmbrellaLiabilityOccurrenceLimit", world.coverageDataMap)
      await selectOptionByLabelIfExists(lOBWizardStepGroupSubmissionWizard_Ext.umbrellaLiabilityAggregateLimit, "UmbrellaLiabilityAggregateLimit", world.coverageDataMap)
      await selectOptionByLabelIfExists(lOBWizardStepGroupSubmissionWizard_Ext.umbrellaLiabilityProductandCompletedOperationsAggregateLImit, "UmbrellaLiabilityProductandCompletedOperationsAggregateLImit", world.coverageDataMap)
      await selectOptionByLabelIfExists(lOBWizardStepGroupSubmissionWizard_Ext.umbrellaLiabilityUmbrellaCoverageForm, "UmbrellaLiabilityUmbrellaCoverageForm", world.coverageDataMap)
      await selectOptionByLabelIfExists(lOBWizardStepGroupSubmissionWizard_Ext.umbrellaLiabilitySelfInsuredRetention, "UmbrellaLiabilitySelfInsuredRetention", world.coverageDataMap)
    }
  }

  async smallBusinessBusinessType() {
    console.log("On Small Business screen")
    await submissionWizard_New.submissionWizardBusinessType.selectOptionByLabel(world.dataMap.get('BusinessType'))
  }

  async addSmallBusinessLineCoverages() {
    t.ctx.module = 'Coverage'
    console.log(`The current module is ${t.ctx.module}`)
    await checkBox("GeneralLiability");
    await selectOptionByLabelIfExists(lOBWizardStepGroupSubmissionWizard_Ext.generalLiabilityOccurrenceLImit, "GeneralLiabilityOccurrenceLImit", world.coverageDataMap)
    await selectOptionByLabelIfExists(lOBWizardStepGroupSubmissionWizard_Ext.generalLiabilityAggregateLimit, "GeneralLiabilityAggregateLimit", world.coverageDataMap)
  }

  async verifyingRefusalTypeErrorMsg() {
    await t.expect(await submissionWizard_New.submissionWizard_RefusalType_ErrorMsg.component.innerText).contains(world.dataMap.get('RefusalTypeErrorMessage'))
  }

  async verifyingHomeownersCoverageErrorMsg() {
    await t.expect(await webMessageWorksheet_New.webMessageWorksheet_NoCoverageError.component.innerText).eql(world.dataMap.get('CoverageErrorMessage'))
  }
  async addLocation(locationNum = "1") {
    await submissionWizard_New.submissionWizardAddLocation.click()
    await cllLocationPopup_New.cllLocationPopupAddress.selectOptionByLabel(world.dataMap.get('Address1'))
    await cllLocationPopup_New.cllLocationPopupAddLocationMenu.click()
    await cllLocationPopup_New.cllLocationPopupNewLocation.click()
    await this.addNewLocation();
    console.log(`Added ${locationNum} location(s) successfully`)
  }

  async addBuilding(buildingNum = "1") {
    await cllLocationPopup_New.cllLocationPopupAddBuilding.click()
    await this.addNewBuilding()
    console.log(`Added ${buildingNum} buidling(s) successfully`)
    await cllLocationPopup_New.cllLocationPopupOk.click()
  }

  async addDrivers(driverNum = "1") {
    await policyInfoScreen.namedInsuredsLV_tbAddContactsButton.click()
    await policyInfoScreen_Ext.newPersonMenuItem.click()
    await this.addDriver()
    console.log(`Added ${driverNum} driver(s) successfully`)
  }

  async addDriversInPersonalAutoScreen(driverNum = 1) {
    if (typeof (driverNum) !== 'number')
      driverNum = Number.parseInt(driverNum.replace(/["]/g, ""))
    for (let i = 1; i <= driverNum; i++) {
      await submissionWizard_New.submissionWizardUALPolicyDriverMVRListAdd.click()
      t.ctx.TableIdentifier = "Internal Request ID"
      await enterDataInTable(submissionWizard_New.submissionWizardInternetRequestId, i.toString())
      await performClickInTable(submissionWizard_New.submissionWizardPolicyDriverMenuIcon)
      await performHoverInTable(submissionWizard_New.submissionWizardAvailableContacts)
      await performClickInTable(`[aria-label*=${t.ctx['drFirstName' + i]}]`)
    }
  }

  async validatedAddedDriversInPolicyFile(driverNum) {
    if (typeof (driverNum) !== 'number')
      driverNum = Number.parseInt(driverNum.replace(/["]/g, ""))
    for (let i = 1; i <= driverNum; i++) {
      await t.expect(await validateTableRecord(world.dataMap.get('ColumnIdentifier'), `${i}`, 6)).contains(`${t.ctx['drFirstName' + i]}`)
    }
  }

  async commercialPropertyCoverage() {
    if (!(world.coverageDataMap === undefined) && Array.from(world.coverageDataMap.keys()).length > 0) {
      t.ctx.module = 'Coverage'
      console.log(`The current module is ${t.ctx.module}`)
      await checkBox("EachLossCausedByWind")
      await setInputValueIfExists(lOBWizardStepGroupSubmissionWizard_Ext.eachLossCausedByWindLimit, "EachLossCausedByWindLimit", world.coverageDataMap)
      await setInputValueIfExists(lOBWizardStepGroupSubmissionWizard_Ext.eachLossCausedByWindDeductible, "EachLossCausedByWindDeductible", world.coverageDataMap)
      await checkBox("ContentsOfOtherStructures")
      await selectOptionByLabelIfExists(lOBWizardStepGroupSubmissionWizard_Ext.contentsOfOtherStructuresLimit, "ContentsOfOtherStructuresLimit", world.coverageDataMap)
      await setInputValueIfExists(lOBWizardStepGroupSubmissionWizard_Ext.contentsOfOtherStructuresDeductible, "ContentsOfOtherStructuresDeductible", world.coverageDataMap)
      await checkBox("OutsideObjectsAndStructures")
      await setInputValueIfExists(lOBWizardStepGroupSubmissionWizard_Ext.outsideObjectsAndStructuresLimit, "OutsideObjectsAndStructuresLimit", world.coverageDataMap)
      await setInputValueIfExists(lOBWizardStepGroupSubmissionWizard_Ext.outsideObjectsAndStructuresDeductible, "OutsideObjectsAndStructuresDeductible", world.coverageDataMap)
    }
  }

  async addNewLocation() {
    if (!(world.locationDataMap === undefined) && Array.from(world.locationDataMap.keys()).length > 0) {
      let i = 0
      for (const [key, value] of world.locationDataMap) {
        const currentLocationMap = new Map(Object.entries(value))
        await cllLocationPopup_New.cllLocationPopupAddress1.setValue(currentLocationMap.get('CllLocationPopupAddress1'))
        await cllLocationPopup_New.cllLocationPopupCity.setValue(currentLocationMap.get('CllLocationPopupCity'))
        await cllLocationPopup_New.cllLocationPopupZipCode.setValue(currentLocationMap.get('CllLocationPopupCity'))
        await cllLocationPopup_New.cllLocationPopupLocationOk.click()
        i++
        if (i < world.locationDataMap.size) {
          await cllLocationPopup_New.cllLocationPopupAddLocationMenu.click()
          await cllLocationPopup_New.cllLocationPopupNewLocation.click()
          console.log("ADDING NEXT LOCATION")
        }
      }
    }
    else {
      console.log(`Location Data is ${world.locationDataMap}`)
      throw new Error('world.locationDataMap is undefined or empty')
    }
  }

  //To load building data from json input and add single or multiple building
  async addNewBuilding() {
    if (!(world.buildingDataMap === undefined) && Array.from(world.buildingDataMap.keys()).length > 0) {
      let i = 0
      for (const [key, value] of world.buildingDataMap) {
        const currentBuildingMap = new Map(Object.entries(value))
        await cllLocationPopup_New.buildingDescription.setValue(currentBuildingMap.get('BuildingDescription'))
        await setInputValueIfExists(cllLocationPopup_New.yearBuilt, 'YearBuilt', currentBuildingMap)
        await cllLocationPopup_New.cllCPBuildingPopupOk.click()
        i++
        if (i < world.buildingDataMap.size) {
          await cllLocationPopup_New.cllLocationPopupAddBuilding.click()
          console.log("ADDING NEXT BUILDING")
        }
      }
    }
    else {
      console.log(`Building Data is ${world.buildingDataMap}`)
      throw new Error('world.buildingDataMap is undefined or empty')
    }
  }

  //To load vehicle data from json input and add single or multiple vehicle
  async addVehicle() {
    if (!(world.vehicleDataMap === undefined) && Array.from(world.vehicleDataMap.keys()).length > 0) {
      t.ctx.module = 'Vehicles'
      console.log(`The current module is ${t.ctx.module}`)
      let i = 0
      for (const [key, value] of world.vehicleDataMap) {
        const currentVehicleMap = new Map(Object.entries(value))
        await ualPersonalVehiclePopup_New.annualMileage.setValue(currentVehicleMap.get('AnnualMileage'))
        await ualPersonalVehiclePopup_New.personalUse.selectOptionByLabel(currentVehicleMap.get('PersonalUse'))
        await selectOptionByLabelIfExists(ualPersonalVehiclePopup_New.bodyType, 'BodyType', currentVehicleMap)
        await selectOptionByLabelIfExists(ualPersonalVehiclePopup_New.bodyType, 'BodyType', currentVehicleMap)
        await selectOptionByLabelIfExists(ualPersonalVehiclePopup_New.licenseState, 'LicenseState', currentVehicleMap)
        await setInputValueIfExists(ualPersonalVehiclePopup_New.vinNumber, 'VinNumber', currentVehicleMap)
        await setInputValueIfExists(ualPersonalVehiclePopup_New.year, 'Year', currentVehicleMap)
        await setInputValueIfExists(ualPersonalVehiclePopup_New.make, 'Make', currentVehicleMap)
        await setInputValueIfExists(ualPersonalVehiclePopup_New.model, 'Model', currentVehicleMap)
        await ualPersonalVehiclePopup_New.personalAutoStandardCoveargeTab.click()
        await ualPersonalVehiclePopup_New.comprehensive.click()
        await ualPersonalVehiclePopup_New.vehicleComprehensive.selectOptionByLabel('100')
        await ualPersonalVehiclePopup_New.collision.click()
        await ualPersonalVehiclePopup_New.vehicleCollision.selectOptionByLabel('100')

        await ualPersonalVehiclePopup_New.UALPersonalVehiclePopup_Ok.click()
        i++
        if (i < world.vehicleDataMap.size) {
          await submissionWizard_New.SubmissionWizard_AddPersonalVehicle.click()
          console.log("ADDING NEXT VEHICLE")
        }
      }
    }
    else {
      console.log(`Vehicle Data is ${world.vehicleDataMap}`)
      throw new Error('world.vehicleDataMap is undefined or empty')
    }
  }

  //To load driver data from json input and add single or multiple driver
  async addDriver() {
    if (!(world.driverDataMap === undefined) && Array.from(world.driverDataMap.keys()).length > 0) {
      let i =1
      for (const [key, value] of world.driverDataMap) {
        const currentDriverMap = new Map(Object.entries(value))
        let firstName = `drFirstName${i}`
        let lastName = `drLastName${i}`
        t.ctx[firstName] = generateRandomStringFunction(5)
        t.ctx[lastName] = generateRandomStringFunction(3)
        await newAdditionalNamedInsuredPopup_Ext.newAdditionalNamedInsuredPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetGlobalPersonNameInputSetFirstName.setValue(t.ctx[firstName])
        await newAdditionalNamedInsuredPopup_Ext.newAdditionalNamedInsuredPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetGlobalPersonNameInputSetLastName.setValue(t.ctx[lastName])
        await newAdditionalNamedInsuredPopup_Ext.newAdditionalNamedInsuredPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine1.setValue(currentDriverMap.get('DriverAddress1'))
        await newAdditionalNamedInsuredPopup_Ext.newAdditionalNamedInsuredPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCity.setValue(currentDriverMap.get('DriverCity'))
        await newAdditionalNamedInsuredPopup_Ext.newAdditionalNamedInsuredPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVAddressInputSetglobalAddressContainerGlobalAddressInputSetState.click()
        await newAdditionalNamedInsuredPopup_Ext.newAdditionalNamedInsuredPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVAddressInputSetglobalAddressContainerGlobalAddressInputSetState.selectOptionByLabel(currentDriverMap.get('DriverState'))
        await newAdditionalNamedInsuredPopup_Ext.driverZipCode.setValue(currentDriverMap.get('DriverZipCode'))
        await newAdditionalNamedInsuredPopup_Ext.newAdditionalNamedInsuredPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVAddressType.click()
        await newAdditionalNamedInsuredPopup_Ext.newAdditionalNamedInsuredPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVAddressType.selectOptionByLabel(currentDriverMap.get('DriverAddressType'))
        await newAdditionalNamedInsuredPopup_Ext.newAdditionalNamedInsuredPopupContactDetailScreenForceDupCheckUpdate.click()
        i++
        if (i <= world.driverDataMap.size) {
          await policyInfoScreen_Ext.namedInsuredsLV_tbAddContactsButton.click()
          await policyInfoScreen_Ext.newPersonMenuItem.click()
          console.log("ADDING NEXT DRIVER")
        }
      }
    }
    else {
      console.log(`Driver Data is ${world.vehicleDataMap}`)
      throw new Error('world.driverDataMap is undefined or empty')
    }
  }
}