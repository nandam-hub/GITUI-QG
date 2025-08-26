const { Then, When } = require("@cucumber/cucumber");
import { AddNoteScenario } from "../../../../ui/actions/gw/cc/AddNoteScenario";
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";

const addNoteScenario = new AddNoteScenario();
const navigationScenario = new NavigationScenario()

When('the user creates the note', async function (t) {
    await navigationScenario.openClaim(t.ctx.claimNo);
    await addNoteScenario.noteScenario();
});

Then('the note is added successfully to claim', async function (t) {
    await navigationScenario.openClaim(t.ctx.claimNo);
    await addNoteScenario.validateAddedNote();
});  