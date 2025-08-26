import { t } from "testcafe";
import { AddActivityScenario } from "../../../../ui/actions/gw/pc/AddActivityScenario";

const { When, Then } = require("@cucumber/cucumber")
const addActivityScenario = new AddActivityScenario()

When('the user performs add activity transaction', async function () {
  await addActivityScenario.addActivity();
});

Then('the activity is added successfully', async function () {
  await addActivityScenario.activityValidation();
});