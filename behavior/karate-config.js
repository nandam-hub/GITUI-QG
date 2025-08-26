function fn() {
    //Read base configurations
    var configFun = read('classpath:gw/gtapi/util/testsconfig/gw-config-utils.js');
    var config = configFun();

    //Configure AUT URLs
    config.ccBaseUrl = java.lang.System.getenv('ccBaseUrl') ? java.lang.System.getenv('ccBaseUrl') : 'DEFAULT_CC_URL';
    config.pcBaseUrl = java.lang.System.getenv('pcBaseUrl') ? java.lang.System.getenv('pcBaseUrl') : 'DEFAULT_PC_URL';

    //AUT Instance Healthcheck
    appHealthCheck(config.ccBaseUrl, true);
    appHealthCheck(config.pcBaseUrl, true);

    //Set Basic Auth Header credentials
    config.credentialsUtil.setCredentialsForAuthHeader('su','gw');

    return config;
}