package pc.producercodes;

public class ProducerCodeDO {

    private final String code;
    private final String id;

    public ProducerCodeDO(String code, String id) {
        this.code = code;
        this.id = id;
    }

    public String getCode(){
        return this.code;
    }

    public String getId(){
        return this.id;
    }

}
