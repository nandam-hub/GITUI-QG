'use strict';
const fs = require('fs');
const path = require('path');
const java = require("java");
//import { getModuleNames } from "@gtui/gt-ui-framework";

java.classpath.push(".");
const gtApiRelativePath = "../../../api/";
const buildLibLoc = "/build/libs/";
const jarExtension = ".jar";
const apiIntegrationSupportingLibsLoc = "../../../libs/uiApiIntegration/".replace('/', path.sep);

class UiApiBridge {
    constructor() {
        //let jarNames = getModuleNames();
        let supportingJarsIncluded = false;
        //jarNames.forEach( name => {
        try {
            //fs.existsSync(path.resolve(__dirname, gtApiRelativePath + name + buildLibLoc + name + jarExtension));
            fs.existsSync(path.resolve(__dirname, gtApiRelativePath + buildLibLoc + "api" + jarExtension));
        }
        catch (err) {
            console.error('Not able to find api module jar. ModuleName: ' + name);
            throw new Error(err.message);
        }
        java.classpath.push((path.resolve(__dirname, gtApiRelativePath + buildLibLoc + "api" + jarExtension).replace('/', path.sep)));

        //Add supporting jars
        if(!supportingJarsIncluded) {
            java.classpath.push(path.resolve(__dirname, apiIntegrationSupportingLibsLoc + 'graal-sdk-21.1.0.jar'));
            java.classpath.push(path.resolve(__dirname, apiIntegrationSupportingLibsLoc + 'truffle-api-21.1.0.jar'));
            java.classpath.push(path.resolve(__dirname, apiIntegrationSupportingLibsLoc + 'js-21.1.0.jar'));

            supportingJarsIncluded = true;
        }
        // });
        return this;
    }

    async runGtApiFeature(featureFile, args) {
        let gtApiBridge = java.import('gw.GtApiBridge');
        var result = await gtApiBridge.executeGtApiFeatureSync(featureFile, args, this.getKarateFeatureClassPath());
        return result;
    }

    async runGtApiScenario(featureFile, scenarioTag, args) {
        let gtApiBridge = java.import('gw.GtApiBridge');
        var result = await gtApiBridge.executeGtApiScenarioSync(featureFile, scenarioTag, args, this.getKarateFeatureClassPath());
        return result;
    }

    getKarateFeatureClassPath() {
        //Set karate/api features dir path
        let system = java.import('java.lang.System');
        let featurePath = system.getPropertySync("user.dir") + "/api/";
        return featurePath;
    }

}

export const GTUiApiBridge =  function() {
    return new UiApiBridge();
}()