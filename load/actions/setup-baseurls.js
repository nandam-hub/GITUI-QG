// WARNING: the Java class loader must be called in karate.callSingle() to prevent heavy system load/lock contention in Gatling!
// - the code below references java.lang which is a non-cached class loader reference...must be done outside of karate-config.js
function fn() {
  baseurls = {};

  // Javascript can't access the System environment variables so we use reflection through java.lang to access them
  baseurls.bcBaseUrl = java.lang.System.getenv('bcBaseUrl') ? java.lang.System.getenv('bcBaseUrl').trim() : 'DEFAULT_BC_URL';
  baseurls.ccBaseUrl = java.lang.System.getenv('ccBaseUrl') ? java.lang.System.getenv('ccBaseUrl').trim() : 'DEFAULT_CC_URL';
  baseurls.cmBaseUrl = java.lang.System.getenv('cmBaseUrl') ? java.lang.System.getenv('cmBaseUrl').trim() : 'DEFAULT_CM_URL';
  baseurls.pcBaseUrl = java.lang.System.getenv('pcBaseUrl') ? java.lang.System.getenv('pcBaseUrl').trim() : 'DEFAULT_PC_URL';

  return baseurls;
}
