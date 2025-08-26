package pc;

import pc.groups.GroupDO;
import gw.gtapi.util.KarateJavaWrapper;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import pc.organizations.OrganizationDO;
import pc.producercodes.ProducerCodeDO;
import pc.users.PolicyUserDO;

import java.util.HashMap;
import java.util.Map;

public class PolicyDataContainer {
    private static final Logger LOGGER = LogManager.getLogger(PolicyDataContainer.class);
    private static Map<String, PolicyUserDO> users = new HashMap<>();

    public static PolicyUserDO getPolicyUser(String userObjectName) {
        if (users.containsKey(userObjectName)) {
            return users.get(userObjectName);
        } else {
            throw new KarateJavaWrapper.WrappedJavaException(new RuntimeException(
                    "Unable to find user with object identifier: " + userObjectName));
        }
    }

    public static void setPolicyUser(String userObjectName, PolicyUserDO userDO) {
        users.put(userObjectName, userDO);
    }

    // Get unspecified user for stale cache check
    public static PolicyUserDO getUnspecifiedUser() {
        if (users.size() > 0) {
            String userKey = users.keySet().iterator().next();
            return users.get(userKey);
        }
        LOGGER.info("Failed to find pc.users in cached data");
        return null;
    }

    private static Map<String, GroupDO> groups = new HashMap<>();

    public static GroupDO getPolicyGroup(String userObjectName) {
        if (groups.containsKey(userObjectName)) {
            return groups.get(userObjectName);
        } else {
            throw new KarateJavaWrapper.WrappedJavaException(new RuntimeException("Unable to find user with object identifier : " + userObjectName));
        }
    }

    public static void setPolicyGroup(String userObjectName, GroupDO groupDO) {
        groups.put(userObjectName, groupDO);
    }

    private static Map<String, ProducerCodeDO> producerCodes = new HashMap<>();

    public static ProducerCodeDO getPolicyProducerCode(String userObjectName) {
        if (producerCodes.containsKey(userObjectName)) {
            return producerCodes.get(userObjectName);
        } else {
            throw new KarateJavaWrapper.WrappedJavaException(new RuntimeException("Unable to find user with object identifier : " + userObjectName));
        }
    }

    public static void setPolicyProducerCode(String userObjectName, ProducerCodeDO producerCodeDO) {
        producerCodes.put(userObjectName, producerCodeDO);
    }

    // Adding organization codes
    private static Map<String, OrganizationDO> organizations = new HashMap<>();

    public static OrganizationDO getPolicyOrganization(String userObjectName) {
        if (organizations.containsKey(userObjectName)) {
            return organizations.get(userObjectName);
        } else {
            throw new KarateJavaWrapper.WrappedJavaException(new RuntimeException("Unable to find user with object identifier : " + userObjectName));
        }
    }

    public static void setPolicyOrganization(String userObjectName, OrganizationDO organizationDO) {
        organizations.put(userObjectName, organizationDO);
    }

    public static boolean isDataLoaded() {
        return !(organizations.isEmpty() || producerCodes.isEmpty() || groups.isEmpty() || users.isEmpty());
    }

    public static String getPassword(){ return "gw"; }

}