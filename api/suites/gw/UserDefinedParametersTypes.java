package gw;

import io.cucumber.cucumberexpressions.ParameterType;
import io.cucumber.cucumberexpressions.Transformer;

/*
  This is one example of how user-defined types can be handled in the GT API/Cucumber integration
  To create user-defined parameter types, users can:
   1.  Define a class (e.g., ClaimSolutionsParametersType, PolicySolutionsParametersType of any name) in their test modules
   2.  Instantiate that class in the CucumberStep constructor
   3.  in the constructor of their user-defined parameters class develop some logic similar to that below to register their user-defined type
 */
public class UserDefinedParametersTypes {

    public UserDefinedParametersTypes() {
        CucumberStep.parameterTypeRegistry.defineParameterType(new ParameterType("sampleCurrencyUserDefinedType",
                "[A-Z]{3}",
                String.class,
                (Transformer<String>) arg -> arg));
    }
}