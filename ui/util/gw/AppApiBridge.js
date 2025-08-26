'use strict';
import { readClassDetails } from "@gtui/gt-ui-framework";
import { GTUiApiBridge } from "./GTUiApiBridge";
const java = require("java");
java.classpath.push(".");

/* This is a template class that enables calling APIs from gt-api module.
* The class can be further modified based specific needs for calling APIs.
* For example, generateClaimsAdminData - calls ClaimsAdminData class
*              getClaimUser - returns users created by ClaimsAdminData class. */

class AppApiBridge {

    constructor(gtUiApiBridge) {
        //In this case apiBridge = GTUiApiBridge
        this.apiBridge = gtUiApiBridge;
    }

    async runGtApiFeature(featureFile,args) {
        return await this.apiBridge.runGtApiFeature(featureFile, args);
    }

    async runGtApiScenario(featureFile, scenarioTag, args) {
        return await this.apiBridge.runGtApiScenario(featureFile, scenarioTag, args);
    }

    /* Listing below template variables are methods that are template ones.
    * This code must be treated as sample/reference code. */

    static appData;

    /* Generic method to call a specific class and method from gt-api module.
    * In the example, gt-api AdminData Java class and method is used. */
    generateAdminData(appName) {
      if (!AppApiBridge.appData) {
          let string = java.import('java.lang.String');
          let result = readClassDetails(appName);
          let adminDataUtil = java.import(result.get("className"));
          let dataObj = new adminDataUtil();
          let method = dataObj.getClassSync().getMethodSync(result.get("methodName"), string.class);
          AppApiBridge.appData = method.invokeSync(dataObj, result.get("moduleName"));
      }
    }

    /* Template method to call a specific class and method from gt-api module.
    * In the example, gt-api AdminData Java class and method is used. */
    getAppUser(userRole) {
      for (let key in AppApiBridge.appData.adminData.users) {
          let user = AppApiBridge.appData.adminData.users[key];
          if(user.testDataIdentifier === userRole)
              return user.userName;
      }
      console.log("UserName for given userRole not found. userRole = " + userRole);
      return "";
    }
}

export const AppApiBridgeObj =  function() {
    return new AppApiBridge(GTUiApiBridge);
}()