import { FNOLWizard_Ext } from "../../../../ui/actions/gw/cc/scenarioPages/claim/FNOLWizard_Ext"
import { dateFunction, splitFunction, generateRandomStringFunction, selectDropdownInTable, enterDataInTable, returnDataFromTable, navigateAndClickSubmenu, generateRandomNumber } from "../../../../ui/util/gw/helper"
import { NewContactPopup } from "../../../../ui/pages/gw/generated/claimsolutions/pages/popup/New/NewContactPopup"
import { NewClaimSaved_Ext } from "./scenarioPages/other/NewClaimSaved_Ext"
import { NewClaimWizard_NewPolicyVehiclePopup_Ext } from "./scenarioPages/popup/New/NewClaimWizard_NewPolicyVehiclePopup_Ext"
import { ClaimMenuActions_Ext } from "./scenarioPages/navigation/menuActions/ClaimMenuActions_Ext"
import { CloseClaimPopup_Ext } from "./scenarioPages/popup/New/Close/CloseClaimPopup_Ext"
import { ClaimLossDetails_Ext } from "./scenarioPages/claim/claimLossDetailsGroup/ClaimLossDetails_Ext"
import { AssignClaimsPopup } from "../../../pages/gw/generated/claimsolutions/pages/popup/Assign/AssignClaimsPopup"
import world from "../../../../ui/util/gw/world"
import { t } from "testcafe"
import { validateTableRecord } from "../../../util/gw/helper"

const fNOLWizard_Ext = new FNOLWizard_Ext();
const newContactPopup = new NewContactPopup()
const newClaimSaved_Ext = new NewClaimSaved_Ext()
const newClaimWizard_NewPolicyVehiclePopup_Ext = new NewClaimWizard_NewPolicyVehiclePopup_Ext()
const claimMenuActions_Ext = new ClaimMenuActions_Ext()
const closeClaimPopup_Ext = new CloseClaimPopup_Ext()
const claimLossDetails_Ext = new ClaimLossDetails_Ext()
const assignClaimsPopup = new AssignClaimsPopup()

export class FnolScenario {
    async searchOrCreatePolicy(policyNumber = world.dataMap.get('PolicyNumber')) {
        console.log("On Step 1: Search or Create Policy screen")
        await fNOLWizard_Ext.fnolWizardCreateUnverifiedPolicy.click()
        await fNOLWizard_Ext.fNOLWizardFindPolicyPanelSetPolicyNumber.setValue(policyNumber)
        await fNOLWizard_Ext.fNOLWizardFindPolicyPanelSetType.click()
        await fNOLWizard_Ext.fNOLWizardFindPolicyPanelSetType.selectOptionByLabel(world.dataMap.get('Type'))
        await fNOLWizard_Ext.fNOLWizardFindPolicyPanelSetClaim_LossDate.setValue(await world.dataMap.get('LossDate').includes('/') ? world.dataMap.get('LossDate') : dateFunction(world.dataMap.get('LossDate')))
        await fNOLWizard_Ext.newClaimPolicyGeneralDVEffectiveDate.setValue(dateFunction(world.dataMap.get('EffectiveDate')))
        await fNOLWizard_Ext.newClaimPolicyGeneralDVExpirationDate.setValue(dateFunction(world.dataMap.get('ExpirationDate')))
        await fNOLWizard_Ext.fNOLWizardNameMenuIcon.click()
        await fNOLWizard_Ext.fnolWizardNameMenuSelection.click()
    }

    async newPerson() {
        console.log("On New Person screen")
        t.ctx.insuredName = generateRandomStringFunction(4)
        await newContactPopup.newContactPopupContactDetailScreenContactBasicsDVPersonNameInputSetGlobalPersonNameInputSetLastName.setValue(t.ctx.insuredName)
        await newContactPopup.newContactPopupContactDetailScreenContactBasicsDV_tbContactDetailToolbarButtonSetCustomUpdateButton.click()
    }

    async clickNext() {
        await fNOLWizard_Ext.fNOLWizardNext.click()
    }

    async addBasicInformation() {
        console.log("On Step 2 of 5: Basic information screen")
        await fNOLWizard_Ext.fnolWizardNameDropdown.selectOptionByLabel(t.ctx.insuredName)
    }

    async addPropertyClaimInformation() {
        console.log("On Step 3 of 5: Add claim information screen")
        await fNOLWizard_Ext.fNOLWizard_NewLossDetailsPanelSetClaim_LossCause.selectOptionByLabel(world.dataMap.get('LossCause'))
        await fNOLWizard_Ext.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsPanelFNOLWizard_NewLossDetailsPanelSetCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetCity.setValue(world.dataMap.get('City'))
        await fNOLWizard_Ext.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsPanelFNOLWizard_NewLossDetailsPanelSetCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetState.click()
        await fNOLWizard_Ext.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsPanelFNOLWizard_NewLossDetailsPanelSetCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetState.selectOptionByLabel(world.dataMap.get('State'))
    }

    async addAutoClaimInformation() {
        console.log("On Step 3 of 5: Add claim information screen")
        await fNOLWizard_Ext.lossDetailsAddressDVClaim_LossCause.selectOptionByLabel(world.dataMap.get('LossCause'))
        await fNOLWizard_Ext.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsAddressDVAddressDetailInputSetRefCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetCity.setValue(world.dataMap.get('City'))
        await fNOLWizard_Ext.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsAddressDVAddressDetailInputSetRefCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetState.click()
        await fNOLWizard_Ext.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsAddressDVAddressDetailInputSetRefCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetState.selectOptionByLabel(world.dataMap.get('State'))
    }

    async saveAndAssignClaim() {
        console.log("On Step 5 of 5: Save and Assign Claim screen")
        await fNOLWizard_Ext.fNOLWizardFinish.click()
    }

    async readClaimNumber() {
        t.ctx.claimNo = splitFunction(await newClaimSaved_Ext.newClaimDVAssignedHeader.component.innerText, " ", 1)
        console.log("The claim number is: " + t.ctx.claimNo)
    }
    async readClaimNumber1() {
        t.ctx.claimNo1 = splitFunction(await newClaimSaved_Ext.newClaimDVAssignedHeader.component.innerText, " ", 1)
        console.log("The claim number is: " + t.ctx.claimNo)
    }

    async addVehicleWithCoverage(vehicleNum) {
        for (let i = 1; i <= vehicleNum; i++) {
            await fNOLWizard_Ext.newClaimVehiclesLV_tbAdd.click()
            let vehicleMap = world.vehicleDataMap.get(`Vehicle${i}`)
            await newClaimWizard_NewPolicyVehiclePopup_Ext.newClaimWizard_NewPolicyVehiclePopupNewClaimWizard_NewPolicyVehicleScreenPolicyVehicleDetailPanelSetPolicyVehicleDetailDVNumber.setValue(`${i}`)
            await newClaimWizard_NewPolicyVehiclePopup_Ext.newClaimWizard_NewPolicyVehiclePopupNewClaimWizard_NewPolicyVehicleScreenPolicyVehicleDetailPanelSetPolicyVehicleDetailDVMake.setValue(vehicleMap[`ClaimVehicleMake`])
            await newClaimWizard_NewPolicyVehiclePopup_Ext.newClaimWizard_NewPolicyVehiclePopupNewClaimWizard_NewPolicyVehicleScreenPolicyVehicleDetailPanelSetPolicyVehicleDetailDVModel.setValue(vehicleMap[`ClaimVehicleModel`])
            for (let i = 1; ; i++) {
                if (vehicleMap[`VehicleCoverage${i}`]) {
                    t.ctx.TableIdentifier = "Type"
                    await newClaimWizard_NewPolicyVehiclePopup_Ext.newClaimWizard_NewPolicyVehiclePopupNewClaimWizard_NewPolicyVehicleScreenPolicyVehicleDetailPanelSetPolicyVehicleCoverageListDetailEditableVehicleCoveragesLV_tbAdd.click()
                    await enterDataInTable(newClaimWizard_NewPolicyVehiclePopup_Ext.newClaimWizardExposureLimit, vehicleMap[`VehicleExposureLimit${i}`])
                    await selectDropdownInTable(newClaimWizard_NewPolicyVehiclePopup_Ext.newClaimWizardCoverageType, vehicleMap[`VehicleCoverage${i}`])
                    await enterDataInTable(newClaimWizard_NewPolicyVehiclePopup_Ext.newClaimWizardIncidentLimit, vehicleMap[`VehicleIncidentLimit${i}`])
                }
                else {
                    break;
                }
            }
            await newClaimWizard_NewPolicyVehiclePopup_Ext.newClaimWizard_NewPolicyVehicleScreenUpdate.click()
        }
    }

    async selectInvolvedVehicle() {
        for (let i = 1; ; i++) {
            if (world.dataMap.get(`IncludedVehicle${i}`))
                await t.click(`[role='checkbox'][aria-label^='${world.dataMap.get(`IncludedVehicle${i}`)}']`)
            else {
                break;
            }
        }
    }

    async selectRentalServices() {
        await fNOLWizard_Ext.fnolWizardRentalCheckbox.click()
        await fNOLWizard_Ext.fnolWizardRentalBeginDate.setValue(dateFunction(0))
        await fNOLWizard_Ext.fnolWizardRentalEndDate.setValue(dateFunction(0, "MM/DD/YYYY"))
    }

    async addNewVendorCompany() {
        await fNOLWizard_Ext.fnolWizardRentalAgencyMenu.click()
        await fNOLWizard_Ext.fnolWizardRentalAgencyMenu.click()
        await fNOLWizard_Ext.fnolWizardNewVendor.click()
        await newContactPopup.newContactPopupContactDetailScreenContactBasicsDVOrganizationNameGlobalContactNameInputSetName.setValue(generateRandomStringFunction(5))
        await newContactPopup.newContactPopupContactDetailScreenContactBasicsDVV_EIN.setValue(world.dataMap.get('VendorTaxId') + generateRandomNumber(4))
        await newContactPopup.newContactPopupContactDetailScreenContactBasicsDV_tbContactDetailToolbarButtonSetCustomUpdateButton.click()
        await fNOLWizard_Ext.fnolWizardPickUpLocation.selectOptionByLabel(world.dataMap.get('PickUpLocation'))
        await fNOLWizard_Ext.fnolWizardRentalDailyRate.setValue(world.dataMap.get('RentalDailyRate'))
        await t.wait(1000)
    }

    async validateRentalServices() {
        await t.expect(await returnDataFromTable(3, 1)).eql(world.dataMap.get('RentalText'))
    }

    async closeClaim() {
        await claimMenuActions_Ext.claimMenuActions.click();
        await navigateAndClickSubmenu(['Close Claim'])
        await t.typeText(closeClaimPopup_Ext.closeClaimPopupTextArea.component, world.dataMap.get('CloseClaimText'))
        await closeClaimPopup_Ext.closeClaimInfoDVOutcome.selectOptionByLabel(world.dataMap.get('CloseClaimOutcome'))
        await closeClaimPopup_Ext.closeClaimScreenUpdate.click()
    }

    async validateFutureLossDateNotification() {
        await t.expect(await fNOLWizard_Ext.fNOLWizardFindPolicyScreenmsgs.component.textContent).eql(world.dataMap.get('Validation'))
        console.log(world.dataMap.get('Validation'))
    }

    async updateLoss() {
        await claimLossDetails_Ext.claimLossDetailsScreenEdit.click();
        await claimLossDetails_Ext.lossDetailsDVLossCause.selectOptionByLabel(world.dataMap.get('LossCause'));
        await claimLossDetails_Ext.claimLossDetailsScreenUpdate.click();
    }

    async assignClaim() {        
        await claimMenuActions_Ext.claimMenuActions_ClaimActionsClaimMenuActions_Assign.click()
        await assignClaimsPopup.assignClaimsPopupAssignmentPopupScreenAssignmentPopupDVAssignmentPopupScreen_ButtonButton.click()
    }

    async validateClaimAssignment() {
        await t.expect(await validateTableRecord("Type", "Assigned", 4)).notEql(world.dataMap.get('Description'))
    }
}