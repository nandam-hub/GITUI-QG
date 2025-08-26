import { LOBWizardStepGroupSubmissionWizard_Ext } from "../../actions/gw/pc/scenarioPages/navigation/submissionWizard/LOBWizardStepGroupSubmissionWizard_Ext"
import { UALPersonalVehiclePopup_New } from "../../actions/gw/pc/scenarioPages/other/UALPersonalVehiclePopup_New";
import { CLLLocationPopup_New } from "../../actions/gw/pc/scenarioPages/popup/CLLCP/CLLLocationPopup_New";
import { NewAdditionalNamedInsuredPopup_Ext } from "../../actions/gw/pc/scenarioPages/popup/New/NewAdditionalNamedInsuredPopup_Ext";
import world from "./world"
import { pascalToCamel } from "./helper";
import { t } from "testcafe";
const fs = require('fs').promises;

let camelFieldName;
const lobWizardStepGroupSubmissionWizard_Ext = new LOBWizardStepGroupSubmissionWizard_Ext()
const ualPersonalVehiclePopup_New = new UALPersonalVehiclePopup_New()
const cllLocationPopup_New = new CLLLocationPopup_New()
const newAdditionalNamedInsuredPopup_Ext = new NewAdditionalNamedInsuredPopup_Ext()

const ModIdentifier = {
    coverage: lobWizardStepGroupSubmissionWizard_Ext,
    vehicle: ualPersonalVehiclePopup_New,
    building: cllLocationPopup_New,
    driver: newAdditionalNamedInsuredPopup_Ext
};

//Function to check and uncheck checkbox
export async function checkBox(fieldName, dataMap = null) {
    let checkAction = 'check'
    //To convert pascal casing input to camel casing as per css standard
    camelFieldName = pascalToCamel(fieldName)

    switch (t.ctx.module) {
        case ('Coverage'):
            if (world.coverageDataMap.has(fieldName)) {
                checkAction = world.coverageDataMap.get(fieldName)
                if ((checkAction === 'check' || checkAction === 'update') && !(await ModIdentifier.coverage[camelFieldName].isChecked())) {
                    // if (!(await ModIdentifier.coverage[camelFieldName].isChecked()))
                    await ModIdentifier.coverage[camelFieldName].click()
                }
                if (checkAction === 'uncheck' && (await ModIdentifier.coverage[camelFieldName].isChecked()))
                    await ModIdentifier.coverage[camelFieldName].click()
            }
            break;
        case ('Vehicles'):
            if (await dataMap.has(fieldName)) {
                checkAction = dataMap.get(fieldName)
                if (checkAction === 'check' || checkAction === 'update') {
                    if (!(await ModIdentifier.vehicle[camelFieldName].isChecked()))
                        await ModIdentifier.vehicle[camelFieldName].click()
                }
                if (checkAction === 'uncheck' && (await ModIdentifier.vehicle[camelFieldName].isChecked()))
                    await ModIdentifier.vehicle[camelFieldName].click()
            }
            break;

        case ('Building'):
            if (await dataMap.has(fieldName)) {
                checkAction = dataMap.get(fieldName)
                if ((checkAction === 'check' || checkAction === 'update') && !(await ModIdentifier.building[camelFieldName].isChecked()))
                    await ModIdentifier.building[camelFieldName].click()
                if (checkAction === 'uncheck' && (await ModIdentifier.building[camelFieldName].isChecked()))
                    await ModIdentifier.building[camelFieldName].click()
            }
            break;

        case ('Location'):
            if (await dataMap.has(fieldName)) {
                checkAction = dataMap.get(fieldName)
                if (checkAction === 'check' || checkAction === 'update') {
                    if (!(await ModIdentifier.building[camelFieldName].isChecked()))
                        await ModIdentifier.building[camelFieldName].click()
                }
                if (checkAction === 'uncheck' && (await ModIdentifier.building[camelFieldName].isChecked()))
                    await ModIdentifier.building[camelFieldName].click()
            }
            break;
        default:
            throw new Error('Incorrect module provided')
    }
}

// Common helper function to set value if test data exists for a given key
export async function setInputValueIfExists(inputField, key, dataMap) {
    const value = dataMap.get(key);
    if (value !== undefined && value !== null) {
        await inputField.setValue(value);
    }
}

// Common helper function to select dropdown option by label if test data exists for a given key
export async function selectOptionByLabelIfExists(inputField, key, dataMap) {
    const value = dataMap.get(key);
    if (value !== undefined && value !== null) {
        await inputField.selectOptionByLabel(value);
    }
}