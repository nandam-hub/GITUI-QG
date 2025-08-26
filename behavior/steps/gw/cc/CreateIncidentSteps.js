const { When, Then } = require("@cucumber/cucumber")
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario"
import { IncidentScenario } from "../../../../ui/actions/gw/cc/IncidentScenario"

const navigationScenario = new NavigationScenario();
const incidentScenario = new IncidentScenario();

When('the user creates vehicle incident', async function () {
    await navigationScenario.navigateToLossDetails()
    await incidentScenario.addVehicleIncident()
});

When('the user creates property incident', async function () {
    await navigationScenario.navigateToLossDetails()
    await incidentScenario.addPropertyIncident()
});

When('the user creates injury incident', async function () {
    await navigationScenario.navigateToLossDetails()
    await incidentScenario.addInjuryIncident()
});

Then('the vehicle incident is created successfully', async function () {
    await incidentScenario.validateVehicleIncident()
});

Then('the property incident is created successfully', async function () {
    await incidentScenario.validatePropertyIncident()
});

Then('the injury incident is created successfully', async function () {
    await incidentScenario.validateInjuryIncident()
});