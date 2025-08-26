package pc;

import gw.GtApiBridge;
import gw.gtapi.util.Utilities;
import pc.groups.GroupDO;
import gw.gtapi.util.fileio.FileIOUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jose4j.json.internal.json_simple.JSONArray;
import org.jose4j.json.internal.json_simple.JSONObject;
import pc.organizations.OrganizationDO;
import pc.producercodes.ProducerCodeDO;
import pc.users.PolicyUserDO;

import java.util.HashMap;
import java.util.Map;

public class PolicyAdminData {
    private static final Logger LOGGER = LogManager.getLogger(PolicyAdminData.class);
    private final static String dataInputFileName = "/policyAdminData.json";
    private final static String dataCacheFileName = "/policyDataContainer.json";
    private static String dir = "";
    // outputDir can be different based on from where this class is getting called.
    // E.g. policysolutions / multiappsolutions
    private static String outputDir = "";
    private final static String POLICY_USERS_FEATURE = "classpath:pc/users/PolicyUsers.feature";
    private final static String GROUPS_FEATURE = "classpath:pc/groups/Groups.feature";
    private final static String PRODUCER_CODES_FEATURE = "classpath:pc/producercodes/ProducerCodes.feature";
    private final static String ORGANIZATIONS_FEATURE = "classpath:pc/organizations/Organizations.feature";
    private final static String ADMIN_FEATURE = "classpath:pc/admin/Admin.feature";
    private static String classpath = "";

    public static void setClasspath(String path) {
        classpath = path;
    }

    public static String getClasspath(){
        return classpath.equals("") ? System.getProperty("user.dir") + "/api/" : classpath;
    }

    public static void loadAdminData(String moduleName) {
        // Set dir paths
        setOutputDirPath(moduleName);
        // Read saved data
        JSONObject data = FileIOUtils.readJSONFile(outputDir + dataCacheFileName);
        boolean cacheIsValid = isCachedDataValid(data);

        if (cacheIsValid && !PolicyDataContainer.isDataLoaded()) {
            LOGGER.info("Reloading cached data for PolicyCenter from " + outputDir + dataCacheFileName);
            JSONObject attributesObj = (JSONObject) data.get("adminData");

            // Set Organizations
            ((JSONArray) attributesObj.get("organizations")).stream().forEach(element -> {
                JSONObject obj = (JSONObject) element;
                // Add in PolicyDataContainer
                PolicyDataContainer.setPolicyOrganization(obj.get("organizationIdentifier").toString(),
                        new OrganizationDO(obj.get("organizationName").toString(), obj.get("organizationID").toString()));
            });

            // Set Producer codes
            ((JSONArray) attributesObj.get("producerCodes")).stream().forEach(element -> {
                JSONObject obj = (JSONObject) element;
                // Add in PolicyDataContainer
                PolicyDataContainer.setPolicyProducerCode(obj.get("producerCodeIdentifier").toString(),
                        new ProducerCodeDO(obj.get("producerCode").toString(), obj.get("producerCodeID").toString()));
            });

            // Set Groups
            ((JSONArray) attributesObj.get("groups")).stream().forEach(element -> {
                JSONObject obj = (JSONObject) element;
                // Add in PolicyDataContainer
                PolicyDataContainer.setPolicyGroup(obj.get("groupIdentifier").toString(),
                        new GroupDO(obj.get("groupName").toString(), obj.get("groupID").toString()));
            });

            // Set users
            ((JSONArray) attributesObj.get("users")).stream().forEach(element -> {
                JSONObject obj = (JSONObject) element;
                // Add in PolicyDataContainer
                PolicyDataContainer.setPolicyUser(obj.get("userIdentifier").toString(),
                        new PolicyUserDO(obj.get("userName").toString(),
                                obj.get("groupId").toString(),
                                obj.get("userId").toString()));
            });
        }

        if (!cacheIsValid) {
            LOGGER.info("Rebuilding cached data for PolicyCenter based on " + dir + dataInputFileName);
            createDataFromInputJSONFile();
        }
    }

    private static boolean isCachedDataValid(JSONObject data) {
        boolean validData = false;
        if (!data.isEmpty()) {
            JSONObject adminData = ((JSONObject)data.get("adminData"));
            JSONArray users = ((JSONArray)adminData.get("users"));
            JSONObject user = (JSONObject)users.get(0);
            LOGGER.debug("Stale cached data check: validating the " + user.get("userIdentifier")
                    + " user (" +  user.get("userId") + ")");
            Map<String, Object> result = (HashMap) GtApiBridge.executeGtApiScenario(ADMIN_FEATURE, "@GetUserScenario",
                    new HashMap<>(){{ put("userId", user.get("userId")); }}, getClasspath()).get("response");
            validData = result.get("userExists").toString().equalsIgnoreCase("true");
        }
        if (!validData) {
            LOGGER.debug("Stale cached data check: Failed to validate cached user");
        }
        return validData;
    }

    public static JSONObject createDataFromInputJSONFile() {
        // Read json file
        JSONObject inputObj = FileIOUtils.readJSONFile(dir + dataInputFileName);
        JSONObject attributesObj = (JSONObject)((JSONObject)inputObj.get("data")).get("attributes");

        // Create Organizations
        JSONArray organizations = generateOrganizations((JSONArray)attributesObj.get("organizations"));

        // Create Producer codes
        JSONArray producerCodes = generateProducerCodes((JSONArray)attributesObj.get("producerCodes"));

        // Create Groups
        JSONArray groups = generateGroups((JSONArray)attributesObj.get("groups"));

        // Create Users
        JSONArray users = generateUsers((JSONArray)attributesObj.get("users"));

        // Write data to output json file
        return saveDataToFile(organizations, producerCodes, groups, users);
    }

    public static JSONArray generateOrganizations(JSONArray array) {
        JSONArray organizations = new JSONArray();
        array.stream().forEach(e -> {
            JSONObject element = (JSONObject)e;
            String organizationName = Utilities.getRandomName("organization");
            // Generate Organizations
            Map<String, Object> result = (HashMap) GtApiBridge.executeGtApiFeature(
                    ORGANIZATIONS_FEATURE,
                    new HashMap<>() {{
                        put("organizationName", organizationName);
                    }}, getClasspath()).get("response");

            // Add in PolicyDataContainer
            PolicyDataContainer.setPolicyOrganization(element.get("organizationIdentifier").toString(),
                    new OrganizationDO(organizationName, result.get("id").toString()));

            // Add to hashmap, so that it would be saved in file storage later.
            organizations.add( new JSONObject() {{
                put("organizationIdentifier", element.get("organizationIdentifier"));
                put("organizationName", result.get("name"));
                put("organizationID", result.get("id"));
            }});
        });
        return organizations;
    }

    public static JSONArray generateProducerCodes(JSONArray producerCodes) {
        JSONArray pCodes = new JSONArray();
        producerCodes.stream().forEach(e -> {
            JSONObject element = (JSONObject)e;
            String producerCode = Utilities.getRandomName("producerCode");

            // Generate Producer Code
            HashMap<String, Object> result = (HashMap) GtApiBridge.executeGtApiFeature(
                    PRODUCER_CODES_FEATURE,
                    new HashMap<>() {{
                        put("code", producerCode);
                        put("organization", PolicyDataContainer.getPolicyOrganization(element.get("organizationIdentifier").toString()).getId());
                        put("roles", "producer");
                    }}, getClasspath()).get("response");

            // Add in PolicyDataContainer
            PolicyDataContainer.setPolicyProducerCode(element.get("producerCodeIdentifier").toString(),
                    new ProducerCodeDO(result.get("code").toString(), result.get("id").toString()));

            // Add to hashmap, so that it would be saved in file storage later.
            pCodes.add(new JSONObject() {{
                put("producerCodeIdentifier", element.get("producerCodeIdentifier"));
                put("producerCode", result.get("code"));
                put("producerCodeID", result.get("id"));
            }});
        });
        return pCodes;
    }

    public static JSONArray generateGroups(JSONArray array) {
        JSONArray groups = new JSONArray();
        array.stream().forEach(e -> {
            JSONObject element = (JSONObject)e;
            String groupName = Utilities.getRandomName("group");
            // Generate Groups
            Map<String, Object> result = (HashMap) GtApiBridge.executeGtApiFeature(
                    GROUPS_FEATURE,
                    new HashMap<>() {{
                        put("groupName", groupName);
                        put("organization", PolicyDataContainer.getPolicyOrganization(element.get("organizationIdentifier").toString()).getId());
                        put("producerCodeId", PolicyDataContainer.getPolicyProducerCode(element.get("producerCodeIdentifier").toString()).getId());
                    }}, getClasspath()).get("response");

            // Add in PolicyDataContainer
            PolicyDataContainer.setPolicyGroup(element.get("groupIdentifier").toString(),
                    new GroupDO(groupName, result.get("id").toString()));

            // Add to hashmap, so that it would be saved in file storage later.
            groups.add( new JSONObject() {{
                put("groupIdentifier", element.get("groupIdentifier"));
                put("groupName", result.get("name"));
                put("groupID", result.get("id"));
            }});
        });
        return groups;
    }

    public static JSONArray generateUsers(JSONArray array) {
        JSONArray users = new JSONArray();
        array.stream().forEach(e -> {
            JSONObject element = (JSONObject)e;
            String userName = Utilities.getRandomName("user");

            // Generate User
            Map<String, Object> result = (HashMap) GtApiBridge.executeGtApiFeature(
                    POLICY_USERS_FEATURE,
                    new HashMap<>() {{
                        put("userName", userName);
                        put("roles", ((JSONArray)(element.get("roles"))).get(0));
                        put("groups", PolicyDataContainer.getPolicyGroup(((JSONArray)(element.get("groups"))).get(0).toString()).getId());
                        put("useProducerCodeSecurity", element.get("useProducerCodeSecurity"));
                    }}, getClasspath()).get("response");

            // Add in PolicyDataContainer
            PolicyDataContainer.setPolicyUser(element.get("userName").toString(),
                    new PolicyUserDO(userName,
                            PolicyDataContainer.getPolicyGroup(((JSONArray)element.get("groups")).get(0).toString()).getId(),
                            result.get("userId").toString()));

            // Add to hashmap, so that it would be saved in file storage later.
            users.add( new JSONObject() {{
                put("userIdentifier", element.get("userName"));
                put("userName", result.get("userName"));
                put("groupId", PolicyDataContainer.getPolicyGroup(((JSONArray)element.get("groups")).get(0).toString()).getId());
                put("userId", result.get("userId"));
            }});
        });
        return users;
    }

    public static JSONObject saveDataToFile(JSONArray organizations, JSONArray pCodes, JSONArray groups, JSONArray users) {
        JSONObject obj = new JSONObject();
        obj.put("adminData", new JSONObject(new HashMap() {{
            put("organizations", organizations);
            put("producerCodes", pCodes);
            put("groups", groups);
            put("users", users);
        }}));
        FileIOUtils.saveDataToFile(obj, outputDir + dataCacheFileName);
        return obj;
    }

    public static void setOutputDirPath(String moduleName) {
        outputDir = FileIOUtils.setPath("api", "api/datacreation", PolicyAdminData.class.getPackage().getName());;
        dir = FileIOUtils.setPath(moduleName, "api/datacreation", PolicyAdminData.class.getPackage().getName());
    }
}