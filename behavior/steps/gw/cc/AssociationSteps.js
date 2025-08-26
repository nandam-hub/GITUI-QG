const { When, Then } = require("@cucumber/cucumber")
import { AssociationScenario } from "../../../../ui/actions/gw/cc/AssociationScenario"
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario"

const associationScenario = new AssociationScenario()
const navigationScenario = new NavigationScenario();

When('the user adds the association', async function () {
    await navigationScenario.navigateToAssocaite()
    await associationScenario.addAssociation()
    await associationScenario.claimSearchPopUp()
    await associationScenario.updateAssociation()
});

Then('the association is added successfully', async function () {
    await associationScenario.validateAssociation()
});