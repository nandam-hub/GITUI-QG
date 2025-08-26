const { When, Then } = require("@cucumber/cucumber")
import { t } from "testcafe";
import { DocumentScenario } from "../../../../ui/actions/gw/cc/DocumentScenario";
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";

const documentScenario = new DocumentScenario();
const navigationScenario = new NavigationScenario();

When('the user uploads the document', async function () {
    await navigationScenario.openClaim(t.ctx.claimNo);
    await documentScenario.selectUploadDocument();
    await documentScenario.uploadClaimDocument();
});

Then('the document is uploaded successfully', async function () {
    //TO DO: need to validate the uploaded document //
    await documentScenario.validateDocumentUpload()
});

When('the user adds document from template', async function () {
    await navigationScenario.openClaim(t.ctx.claimNo);
    await navigationScenario.navigateToDocuments();
    await documentScenario.addDocumentTemplate();
});

Then('the document template is added successfully', async function () {
    await documentScenario.validateDocumentTemplate()
});