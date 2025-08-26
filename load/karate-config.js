function fn() {
    //Read base configurations
    var configFun = read('classpath:gw/gtapi/util/testsconfig/gw-config-utils.js');
    var config = configFun();

    // Setup and validate the baseurls, only do this once using karate.callSingle() by calling setup-baseurls.js
    baseurls = karate.callSingle("classpath:setup-baseurls.js");
    for (key in baseurls) {
        config[key] = baseurls[key];
    }

    // Override karate feature files root dir location.
    config.execution.setKarateFeatureDirLocation("classpath:actions");

    return config;
}
