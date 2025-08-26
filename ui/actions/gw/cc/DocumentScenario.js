import { t, Selector } from "testcafe"
import { ClaimDocuments_Ext } from "../../../pages/gw/generated/claimsolutions/pages/claim/ClaimDocuments_Ext";
import { ClaimNewDocumentFromTemplateWorksheet_New } from "./scenarioPages/other/ClaimNewDocumentFromTemplateWorksheet_New";
import { DocumentTemplateSearchPopup_Ext } from "./scenarioPages/other/DocumentTemplateSearchPopup_Ext";
import { navigateAndClickSubmenu, returnDataFromTable, validateTableRecord } from "../../../util/gw/helper";
import { NavigationScenario } from "./NavigationScenario.js";
import world from "../../../util/gw/world";

const claimDocuments_Ext = new ClaimDocuments_Ext();
const navigationScenario = new NavigationScenario();
const claimNewDocumentFromTemplateWorksheet_New = new ClaimNewDocumentFromTemplateWorksheet_New();
const documentTemplateSearchPopup_Ext = new DocumentTemplateSearchPopup_Ext();
export class DocumentScenario {

    async selectUploadDocument() {
        await navigationScenario.clickClaimMenuAction();
        await navigateAndClickSubmenu(['Upload Documents']);
    }
    async uploadClaimDocument() {
        await t.setFilesToUpload(claimDocuments_Ext.claimDocumentsFileUpload,(world.dataMap.get("filePath")))
        await t.wait(5000)
        await t.expect((claimDocuments_Ext.DocumentDetailsEdit).component.exists).ok();
    }
    async validateDocumentUpload() {
        await t.expect((await returnDataFromTable(2))).ok();
    }

    async addDocumentTemplate() {
        await claimDocuments_Ext.documentsLV_tbAddDocuments.click();
        await claimDocuments_Ext.claimNewDocumentMenuItemSetClaimNewDocumentMenuItemSet_Create.click()
        await claimNewDocumentFromTemplateWorksheet_New.claimNewDocumentFromTemplateWorksheetSelectTemplatePicker.click()
        await documentTemplateSearchPopup_Ext.documentTemplateSearchDVLossType.selectOptionByLabel(world.dataMap.get('LineOfBusiness'))
        await documentTemplateSearchPopup_Ext.documentTemplateSearchDVJurisdictionState.selectOptionByLabel(world.dataMap.get('Jurisdiction'))
        await documentTemplateSearchPopup_Ext.documentTemplateSearchPopupDocumentTemplateSearchScreenDocumentTemplateSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
        await documentTemplateSearchPopup_Ext.documentTemplateSearchPopupSelect.click()
        await claimNewDocumentFromTemplateWorksheet_New.claimNewDocumentFromTemplateWorksheetSelectCreateDocument.click()
        await claimNewDocumentFromTemplateWorksheet_New.claimNewDocumentFromTemplateWorksheetSelectCustomUpdate.click()
    }

    async validateDocumentTemplate() {
        await t.expect (await validateTableRecord("Name",(world.dataMap.get('TemplateName')),2)).eql(world.dataMap.get('TemplateName'))
    }
}