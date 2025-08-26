const { When, Then } = require("@cucumber/cucumber")
import { NavigationScenario } from "../../../../ui/actions/gw/pc/NavigationScenario"
import { RenewalScenario } from "../../../../ui/actions/gw/pc/RenewalScenario"
import { NewSubmissionScenario } from "../../../../ui/actions/gw/pc/NewSubmissionScenario"

const navigationScenario = new NavigationScenario()
const renewalScenario = new RenewalScenario()
const newSubmissionScenario = new NewSubmissionScenario()

When('the renewal is applied successfully', async function () {
    await renewalScenario.verifyRenewal()
})

When('the user performs renewal on commercial policy', async function (t) {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await renewalScenario.initiatePolicyRenewal()
    await renewalScenario.editPolicyTransaction()
    await renewalScenario.renewalCoverage()
    await navigationScenario.renewalNext()
    await navigationScenario.renewalNext()
    await navigationScenario.renewalNext()
    await navigationScenario.renewalNext()
    await renewalScenario.renewalQuote()
    await renewalScenario.clickRenew()
    await renewalScenario.selectRenewalCode()
})

When('the user performs renewal on homeowners policy', async function (t) {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await renewalScenario.initiatePolicyRenewal()
    await renewalScenario.editPolicyTransaction()
    await renewalScenario.navigategwHomeownersLineTabSection('AdditionalCoverges')
    await newSubmissionScenario.addHomeOwnersAdditionalCoverages()
    await navigationScenario.renewalNext()
    await navigationScenario.renewalNext()
    await renewalScenario.renewalQuote()
    await renewalScenario.clickRenew()
    await renewalScenario.selectRenewalCode()
})

When('the user performs renewal on commercial umbrella and excess liability policy', async function (t) {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await renewalScenario.initiatePolicyRenewal()
    await renewalScenario.editPolicyTransaction()
    await navigationScenario.renewalNext()
    await navigationScenario.renewalNext()
    await navigationScenario.renewalNext()
    await renewalScenario.renewalQuote()
    await renewalScenario.clickRenew()
    await renewalScenario.selectRenewalCode()
})

When('the user performs renewal on USAPersonalAuto policy', async function (t) {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await renewalScenario.initiatePolicyRenewal()
    await renewalScenario.editPolicyTransaction()
    await navigationScenario.renewalNext()
    await navigationScenario.renewalNext()
    await navigationScenario.renewalNext()
    await renewalScenario.renewalQuote()
    await renewalScenario.clickRenew()
    await renewalScenario.selectRenewalCode()
})

When('the user performs renewal on small business policy', async function (t) {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await renewalScenario.initiatePolicyRenewal()
    await renewalScenario.editPolicyTransaction()
    await renewalScenario.smallBusinessTabSelection('SmallBusinessLineCoverages')
    await newSubmissionScenario.addSmallBusinessLineCoverages()
    await navigationScenario.renewalNext()
    await navigationScenario.renewalNext()
    await renewalScenario.renewalQuote()
    await renewalScenario.clickRenew()
    await renewalScenario.selectRenewalCode()
})

When('the user initiates pre renewal', async function (t) {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await navigationScenario.navigatePreRenewalScreen()
})

When('the user adds pre renewal direction to usa personal auto policy', async function () {
    await renewalScenario.updatePreRenewalDirection()
})

Then('pre renewal direction is added successfully', async function () {
    await renewalScenario.validatePreRenewalDirection()
})