import { PdfActionHelper } from '../../../../ui/util/gw/PdfActionHelper'
import { Given, When, Then } from '@cucumber/cucumber';
import world from "../../../../ui/util/gw/world"
import path from 'path';
import { t } from 'testcafe';
import { validateLastColumnTrue, verifyCompleteMatch } from '../../../../ui/util/gw/helper';
import { PrintExportScenario } from '../../../../ui/actions/gw/cc/PrintExportScenario';
import { NavigationScenario } from '../../../../ui/actions/gw/pc/NavigationScenario';

const pdfActionHelper = new PdfActionHelper('http://127.0.0.1:8003/');
const printExportScenario = new PrintExportScenario()
const navigationScenario = new NavigationScenario()
let response = null

Given(/^the base file (.*), actual file (.*) and data file (.*)/, async (t, stepArguments) => {
    t.ctx.baseFilePath = path.join(__dirname, `../../../../ui/testdata/pdf/${stepArguments[0]}.pdf`);
    t.ctx.actualFilePath = path.join(__dirname, `../../../../ui/testdata/pdf/${stepArguments[1]}.pdf`);
    t.ctx.dataFilePath = path.join(__dirname, `../../../../ui/testdata/pdf/${stepArguments[2]}.xlsx`);
});

When(/^the (.*) standard service is consumed/, async (t, stepArguments) => {
    response = await pdfActionHelper.comparePDFFiles(`${stepArguments[0]}/`, await t.ctx.baseFilePath, await t.ctx.actualFilePath, 'CT');
    await t.takeScreenshot()
});

When(/^the (.*) dynamic service with standard form (.*) is consumed/, async (t, stepArguments) => {
    response = await pdfActionHelper.comparePDF_ValidateDynamic(`${stepArguments[0]}/`, await t.ctx.baseFilePath, await t.ctx.actualFilePath, await t.ctx.dataFilePath, (stepArguments[1] === "true"));
    await t.takeScreenshot()
});

Then('the pdfs are a complete match', async function () {
    await t.expect(response.completematch).eql(true)
});

Then('the pdfs are a match with dynamic values', async function () {
    await t.expect(response).contains("Dynamic validation is Completed")
    await validateLastColumnTrue();
});

When('the user consumes content validation service to compare pdf', async function () {
    t.ctx.baseFilePath = path.join(__dirname, `../../../../ui/testdata/pdf/${world.dataMap.get('BaseFile')}.pdf`);
    t.ctx.actualFilePath = path.join(__dirname, `../../../../ui/testdata/pdf/${world.dataMap.get('ActualFile')}.pdf`);
    response = await pdfActionHelper.comparePDFFiles(`${world.dataMap.get('EndPoint')}/`, await t.ctx.baseFilePath, await t.ctx.actualFilePath, 'CT');
    await t.takeScreenshot()
});

When('the user consumes dynamic content validation service to compare pdf', async function () {
    t.ctx.baseFilePath = path.join(__dirname, `../../../../ui/testdata/pdf/${world.dataMap.get('BaseFile')}.pdf`);
    t.ctx.actualFilePath = path.join(__dirname, `../../../../ui/testdata/pdf/${world.dataMap.get('ActualFile')}.pdf`);
    t.ctx.dataFilePath = path.join(__dirname, `../../../../ui/testdata/pdf/${world.dataMap.get('DataFile')}.xlsx`);
    console.log("t.ctx.actualFilePath", t.ctx.actualFilePath);
    response = await pdfActionHelper.comparePDF_ValidateDynamic(`${world.dataMap.get('EndPoint')}/`, await t.ctx.baseFilePath, await t.ctx.actualFilePath, t.ctx.dataFilePath, world.dataMap.get('StandardForm'));
});

When('the user consumes ignore dynamic standard validation service to compare pdf', async function () {
    t.ctx.baseFilePath = path.join(__dirname, `../../../../ui/testdata/pdf/${world.dataMap.get('BaseFile')}.pdf`);
    t.ctx.actualFilePath = path.join(__dirname, `../../../../ui/testdata/pdf/${world.dataMap.get('ActualFile')}.pdf`);
    response = await pdfActionHelper.comparePDF_ValidateDynamic(`${world.dataMap.get('EndPoint')}/`, await t.ctx.baseFilePath, await t.ctx.actualFilePath, world.dataMap.get('StandardForm'));
});

When('the user consumes ignore dynamic custom validation service to compare pdf', async function () {
    t.ctx.baseFilePath = path.join(__dirname, `../../../../ui/testdata/pdf/${world.dataMap.get('BaseFile')}.pdf`);
    t.ctx.actualFilePath = path.join(__dirname, `../../../../ui/testdata/pdf/${world.dataMap.get('ActualFile')}.pdf`);
    response = await pdfActionHelper.comparePDF_ValidateDynamic(`${world.dataMap.get('EndPoint')}/`, await t.ctx.baseFilePath, await t.ctx.actualFilePath, world.dataMap.get('StandardForm'));
});

Then('verify the policy pdf document content are matching completely', async function () {
    await verifyCompleteMatch(response)
});

Then('the policy PDF document is validated by ignoring policy number', async function () {
    await verifyCompleteMatch(response)
});

Then('the pdf is validated successfully', async function () {
    await verifyCompleteMatch(response)
});

When(/^the (.*) dynamic ignore service with standard form (.*) is consumed/, async (t, stepArguments) => {
    response = await pdfActionHelper.ComparePDF_IgnoreDynamic(`${stepArguments[0]}/`, await t.ctx.baseFilePath, await t.ctx.actualFilePath, (stepArguments[1] === "true"));
    await t.takeScreenshot()
});

When('verify the claim number and policy number present in the pdf document in the respective place holder', async function () {
    t.ctx.baseFilePath = path.join(__dirname, `../../../../ui/testdata/pdf/${world.dataMap.get('BaseFile')}.pdf`);
    t.ctx.actualFilePath = path.join(__dirname, `../../../../ui/testdata/pdf/${world.dataMap.get('ActualFile')}.pdf`);
    t.ctx.dataFilePath = path.join(__dirname, `../../../../ui/testdata/pdf/${world.dataMap.get('DataFile')}.xlsx`);

    await printExportScenario.updateExcelData();
    response = await pdfActionHelper.comparePDF_ValidateDynamic(`${world.dataMap.get('EndPoint')}/`, await t.ctx.baseFilePath, await t.ctx.actualFilePath, t.ctx.dataFilePath, world.dataMap.get('StandardForm'));
    await t.expect(response).contains("Dynamic validation is Completed")
    await validateLastColumnTrue();
});

Given(/^the user logs into the claims center with (.*) data as (.*)/, async function (t, stepArguments) {
    role = stepArguments[1].replace(/["]/g, "")
    await t.navigateTo(process.env["CC_URL"])
    await onCCApp.loginWithRole(role)
    await t.wait(100)
    world.dataMap.clear()
    world.dataMap = await readTestDataFiles.loadTestData(await stepArguments[0].replace(/["]/g, ""), "cc", "PrintExportTestData")
});

Given(/^the user logs into the policy center with (.*) data as (.*)/, async function (t, stepArguments) {
    role = stepArguments[1].replace(/["]/g, "")
    await t.navigateTo(process.env["PC_URL"])
    await onPCApp.loginWithRole(role)
    await t.wait(100)
    world.dataMap.clear()
    world.dataMap = await readTestDataFiles.loadTestData(await stepArguments[0].replace(/["]/g, ""), "pc", "PrintExportTestData")
});

When('the user downloads policy document pdf', async function () {
    await downloadAndMovePdf(policyMenuLinks.downloadButton)
})

When('the user downloads property exposure pdf', async function () {
    await printExportScenario.downloadExposureDocument();
});

When('the user navigates to documents screen', async function () {
    await navigationScenario.openPolicy(world.dataMap.get('PolicyNumber'))
    await policyMenuLinks.menuLinksPolicyFile_PolicyFile_Documents.click()
})
