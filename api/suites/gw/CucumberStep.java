package gw;

import com.gw.execution.*;
import gw.gtapi.util.LogFilters;
import io.cucumber.core.backend.TestCaseState;
import io.cucumber.cucumberexpressions.*;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.*;
import io.cucumber.java.en.And;
import io.cucumber.java.en.When;
import io.cucumber.plugin.event.PickleStepTestStep;
import io.cucumber.plugin.event.Step;
import io.cucumber.plugin.event.TestCase;
import org.junit.Assume;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.stream.Collectors;

public class CucumberStep {

    public static ParameterTypeRegistry parameterTypeRegistry;
    private Scenario currentScenario;
    private int currentStepIndex = 0;
    private List<PickleStepTestStep> currentScenarioStepsDefinitions;
    private List<String> currentsScenarioSteps;
    private PickleStepTestStep currentStep;
    private boolean isGtApiScenario;
    private Map<String, Object> cucumberMetadata;

    public CucumberStep() {
        parameterTypeRegistry = new ParameterTypeRegistry(Locale.ENGLISH);
        new UserDefinedParametersTypes();
    }

    @Before
    public void beforeScenario(Scenario scenario) {
        this.currentScenarioStepsDefinitions = getScenarioStepsDefinitions(scenario);
        this.currentsScenarioSteps = getScenarioSteps(this.currentScenarioStepsDefinitions);
        isGtApiScenario = KarateExecutionHelper.get().isGtApiScenario(this.currentsScenarioSteps);
        if (isGtApiScenario) {
            new GtApiScenario(scenario.getName()).execute();
            Assume.assumeTrue(true);
        }
        else {
            KarateExecutionHelper.isCucumberExecution = false;
            this.currentScenario = scenario;
            this.cucumberMetadata = new HashMap<>();
            this.cucumberMetadata.put("featureName", KarateExecutionHelper.get().getFeatureName(scenario.getUri().getPath()));
            this.cucumberMetadata.put("scenarioName", scenario.getName());
            this.cucumberMetadata.put("scenarioTags", scenario.getSourceTagNames());
        }
    }

    @After
    public void afterScenario() {
        if (isGtApiScenario) {
            isGtApiScenario = false;
        }
        CucumberDataCache.clear();
        KarateExecutionHelper.isCucumberExecution = false;
    }

    @BeforeStep
    public void beforeStep(Scenario scenario) {
        if (!isGtApiScenario) {
            this.currentStep = this.currentScenarioStepsDefinitions.get(this.currentStepIndex);
            this.cucumberMetadata.put("stepName", this.currentsScenarioSteps.get(this.currentStepIndex));
        }
        else {
            Assume.assumeTrue(true);
        }
    }

    @AfterStep
    public void afterStep() {
        if (!CucumberDataCache.isEmpty() && CucumberDataCache.get().get("stepTableParameters") != null) {
            CucumberDataCache.get().remove("stepTableParameters");
        }
        if (!CucumberStepVariablesContainer.isEmpty()){
            CucumberStepVariablesContainer.clear();
        }
        LogFilters.resetCucumberStepLog();
        this.currentStepIndex += 1;
    }

    @And(".*(?<!:)$")
    public void anyStepWithoutDataTable() {
        if(isGtApiScenario){
            Assume.assumeTrue(true);
        }
        else {
            String stepText = getStepText();
            String stepCucumberExpression = getStepCucumberExpression(stepText);
            List<Argument<?>> stepTextParametersValues = getStepTextParametersValues(stepText, stepCucumberExpression);
            KarateScenario stepGtApiScenario = getCucumberStepGtApiScenario(stepCucumberExpression);
            Map<String, Object> stepTextParametersMap = getStepTextParametersMap(stepGtApiScenario, stepTextParametersValues);

            CucumberDataCache.put("cucumberMetadata", this.cucumberMetadata);
            new GtApiStep(stepGtApiScenario, stepTextParametersMap).execute();
            if (!CucumberStepVariablesContainer.isEmpty()){
                CucumberDataCache.putAll((CucumberStepVariablesContainer.get()));
            }
            this.currentScenario.log(LogFilters.getCucumberStepLog());
        }
    }

    @When(".*:$")
    public void anyStepWithDataTable(DataTable table) {
        List<Map<String, Object>> tableData = table.asMaps(String.class, Object.class);
        for (Map<String, Object> list : tableData) {
            CucumberDataCache.get().put("stepTableParameters", new HashMap<String, Object>());
            Map<String, Object> stepParameters = (Map<String, Object>) CucumberDataCache.get().get("stepTableParameters");
            stepParameters.putAll(list);
            anyStepWithoutDataTable();
            LogFilters.resetCucumberStepLog();
        }
    }

    private List<PickleStepTestStep> getScenarioStepsDefinitions(Scenario scenario) {
        try {
            Field field1 = scenario.getClass().getDeclaredField("delegate");
            field1.setAccessible(true);
            TestCaseState testCaseState = (TestCaseState) field1.get(scenario);
            Field field2 = testCaseState.getClass().getDeclaredField("testCase");
            field2.setAccessible(true);
            TestCase testCase = (TestCase) field2.get(testCaseState);
            return testCase.getTestSteps()
                    .stream()
                    .filter(testStep -> testStep instanceof PickleStepTestStep)
                    .map(testStep -> (PickleStepTestStep) testStep)
                    .collect(Collectors.toList());
        }
        catch (NoSuchFieldException | IllegalAccessException e) {
            throw new RuntimeException("Failed to determine current cucumber step", e.getCause());
        }
    }

    private List<String> getScenarioSteps(List<PickleStepTestStep> stepsDefinitions) {
        return stepsDefinitions.stream().map(stepsDefinition -> {
            Step step = stepsDefinition.getStep();
            return step.getKeyWord().trim() + " " + step.getText().trim();
        }).collect(Collectors.toList());
    }

    private String getStepText() {
        String text = this.currentStep.getStep().getText();
        return (text.substring(text.length() - 1).equals(":") ? text.split(":")[0] : text);
    }

    private String getStepCucumberExpression(String stepText) {
        CucumberExpressionGenerator expressionsGenerator = new CucumberExpressionGenerator(parameterTypeRegistry);
        List<GeneratedExpression> expressionsList = expressionsGenerator.generateExpressions(stepText);
        return expressionsList.get(0).getSource();
    }

    private KarateScenario getCucumberStepGtApiScenario(String stepCucumberExpression) {
        return KarateExecutionHelper.get().findKarateExecutionScenario(stepCucumberExpression,
                KarateExecutionHelper.SearchBy.NAME);
    }

    private List<Argument<?>> getStepTextParametersValues(String stepText, String stepCucumberExpression) {
        List<Argument<?>> arguments;
        Expression expression = new ExpressionFactory(parameterTypeRegistry).createExpression(stepCucumberExpression);
        arguments = expression.match(stepText);
        return arguments;
    }

    private Map<String, Object> getStepTextParametersMap(KarateScenario stepGtApiAPIScenario, List<Argument<?>> stepTextParametersValues) {
        Map<String, Object> parameters = new HashMap<>();
        List<String> parametersNames = stepGtApiAPIScenario.getParametersNames();
        for (int i = 0; i < stepTextParametersValues.size(); i++) {
            parameters.put(parametersNames.get(i), stepTextParametersValues.get(i).getValue());
        }
        return parameters;
    }
}