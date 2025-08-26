const { Then } = require("@cucumber/cucumber")
import { EditPolicyTransactionScenario } from "../../../../ui/actions/gw/pc/EditPolicyTransactionScenario"
import { NavigationScenario } from "../../../../ui/actions/gw/pc/NavigationScenario"
import { NewSubmissionScenario } from "../../../../ui/actions/gw/pc/NewSubmissionScenario"
import { coverageFilter } from "../../../../ui/util/gw/ActionHelper";

const editPolicyTransactionScenario = new EditPolicyTransactionScenario();
const navigationScenario = new NavigationScenario();
const newSubmissionScenario = new NewSubmissionScenario()

Then('the user updates coverage through edit policy transaction', async function () {
    await navigationScenario.editPolicyCommercialNavigation()
});

Then('the user proceeds to quote and issue the policy with the updated changes', async function () {
    await editPolicyTransactionScenario.quoteUpdatedPolicy()
    await newSubmissionScenario.issuePolicy()
});

