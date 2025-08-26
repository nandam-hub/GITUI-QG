package gw;

import com.gw.execution.KarateExecution;
import com.intuit.karate.Runner;
import com.intuit.karate.core.Feature;
import io.cucumber.core.cli.Main;
import java.util.Map;

public class GtApiBridge {

    /** Execute GT API E2E scenario */
    public static Map<String, Object> executeGtApiScenario(
            String featureFilePath, String scenarioTagToExecute, Map<String, Object> args) {
        System.out.println("in executeGtApiScenario: featureFilepath: " + featureFilePath + ", scenarioTagToExecute: "
                + scenarioTagToExecute + ", args: " + args);
        Feature feature = Feature.read(featureFilePath);
        feature.setCallTag(scenarioTagToExecute);
        return Runner.runFeature(feature,args,true);
    }

    /** Execute GT API E2E scenario */
    public static Map<String, Object> executeGtApiScenario(
            String featureFilePath, String scenarioTagToExecute, Map<String, Object> args, String path) {
        KarateExecution.setKarateFeatureDirLocation("file:" + path);
        System.out.println("in executeGtApiScenario: featureFilepath: " + featureFilePath + ", scenarioTagToExecute: "
                + scenarioTagToExecute + ", args: " + args);
        Feature feature = Feature.read(featureFilePath);
        feature.setCallTag(scenarioTagToExecute);
        return Runner.runFeature(feature,args,true);
    }

    /** Execute GT API E2E feature */
    public static Map<String,Object> executeGtApiFeature(String featureFilePath, Map<String, Object> args) {
        System.out.println("In executeGtApiFeature: featureFilepath: " + featureFilePath + ", args: " + args);
        return Runner.runFeature(featureFilePath, args,true);
    }

    /** Execute GT API E2E feature */
    public static Map<String,Object> executeGtApiFeature(String featureFilePath, Map<String, Object> args, String path) {
        KarateExecution.setKarateFeatureDirLocation("file:" + path);
        System.out.println("In executeGtApiFeature: featureFilepath: " + featureFilePath + ", args: " + args);
        return Runner.runFeature(featureFilePath, args,true);
    }

    /** Execute Cucumber E2E feature */
    public static void executeGtApiCucumberFeature(String featureFilePath) {
        main(new String[]{featureFilePath});
    }

    private static void main(String[] args) {
        Main.main(new String[]{
                "-g",
                "gw.dataCreation",
                args[0]}
        );
    }
}