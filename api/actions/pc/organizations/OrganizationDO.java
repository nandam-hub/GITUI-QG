package pc.organizations;

public class OrganizationDO {

    private final String name;
    private final String id;

    public OrganizationDO(String name, String id) {
        this.name = name;
        this.id = id;
    }

    public String getName(){
        return this.name;
    }

    public String getId(){
        return this.id;
    }

}