const { When, Then } = require("@cucumber/cucumber");
import { AddNoteScenario } from "../../../../ui/actions/gw/pc/AddNoteScenario";

const addNoteScenario = new AddNoteScenario();

When('the user adds the note', async function () {
    await addNoteScenario.createNote()
});

Then('the note is added successfully to account', async function () {
    await addNoteScenario.validateNote()
});