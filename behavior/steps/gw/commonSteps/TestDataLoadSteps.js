const { Given } = require("@cucumber/cucumber")
import world from "../../../../ui/util/gw/world"
import { ReadTestDataFiles } from "../../../../ui/util/gw/ReadTestDataFiles";

const readTestDataFiles = new ReadTestDataFiles()

Given(/^the user loads (.*) data (.*) from json (.*)/, async function (t, stepArguments) {
    const module = stepArguments[0].replace(/["]/g, "")
    const identifier = stepArguments[1].replace(/["]/g, "")
    const jsonFileName = stepArguments[2].replace(/["]/g, "")
    world.dataMap.clear()
    world.dataMap = await readTestDataFiles.loadTestData(identifier, module, jsonFileName)
    world.coverageDataMap = world.dataMap.get('Coverage')
    world.vehicleDataMap = world.dataMap.get('Vehicles')
    world.buildingDataMap = world.dataMap.get('Buildings')
    world.locationDataMap = world.dataMap.get('Locations')
    world.driverDataMap = world.dataMap.get('Drivers')
});