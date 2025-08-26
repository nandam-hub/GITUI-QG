package pc.users;

public class PolicyUserDO {

    private final String name;
    private final String groupId;
    private final String id;

    public PolicyUserDO(String name, String groupId, String id) {
        this.name = name;
        this.groupId = groupId;
        this.id = id;
    }

    public String getName(){
        return this.name;
    }

    public String getGroupId(){
        return this.groupId;
    }

    public String getId(){
        return this.id;
    }

}