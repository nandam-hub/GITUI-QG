const { Given } = require("@cucumber/cucumber")
import { onApp } from "../../../../ui/pages/gw/registry/onApp"
import world from "../../../../ui/util/gw/world"
import { ReadTestDataFiles } from "../../../../ui/util/gw/ReadTestDataFiles";

let onBCApp = new onApp("BC")
let onPCApp = new onApp('PC')
let onCCApp = new onApp("CC")
let role
const readTestDataFiles = new ReadTestDataFiles()

Given(/^the user logs into the billing center as (.*)/, async (t, stepArguments) => {
    role = stepArguments[0].replace(/["]/g, "")
    await onBCApp.navigateToApp();
    await onBCApp.loginWithRole(role)
    await t.wait(100)
});

Given(/^the user logs into the policy center as (.*)/, async function (t, stepArguments) {
    role = stepArguments[0].replace(/["]/g, "")
    await t.navigateTo(process.env["PC_URL"]);
    await onPCApp.loginWithRole(role)
    await t.wait(100);
});

Given(/^the user logs into the claims center as (.*)/, async function (t, stepArguments) {
    role = stepArguments[0].replace(/["]/g, "")
    await t.navigateTo(process.env["CC_URL"])
    await onCCApp.loginWithRole(role)
    await t.wait(100)
});