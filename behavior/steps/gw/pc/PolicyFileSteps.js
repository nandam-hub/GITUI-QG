const { Then } = require('@cucumber/cucumber')
import { PolicyFileScenario } from '../../../../ui/actions/gw/pc/PolicyFileScenario'
import { NavigationScenario } from '../../../../ui/actions/gw/pc/NavigationScenario'
import { NewSubmissionScenario } from '../../../../ui/actions/gw/pc/NewSubmissionScenario'
import { t } from 'testcafe'

const policyFileScenario = new PolicyFileScenario()
const navigationScenario = new NavigationScenario()
const newSubmissionScenario = new NewSubmissionScenario()

Then('locations are added successfully', async function () {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await policyFileScenario.navigateLocationScreen()
    await policyFileScenario.verifyLocation()
})

Then(/^(.*) drivers are added successfully/, async function (t, stepArguments) {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await navigationScenario.navigatePolicyFilePersonalAutoScreen()
    await newSubmissionScenario.validatedAddedDriversInPolicyFile(stepArguments[0])
})

Then('the coverage is successfully updated for commercial property policy', async function () {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await policyFileScenario.validateCoverageOfCommercialPolicy()
});