import { t, Selector } from "testcafe"
import { NewEvaluation } from "../../../pages/gw/generated/claimsolutions/pages/other/NewEvaluation";
import { ClaimEvaluations } from "../../../pages/gw/generated/claimsolutions/pages/claim/claimPlanOfActionGroup/ClaimEvaluations";
import { returnDataFromTable } from "../../../util/gw/helper";
import world from "../../../util/gw/world";

const newEvaluation = new NewEvaluation();
const claimEvaluations = new ClaimEvaluations();

export class EvaluationScenario {
    async liabilityDistributionDetails() {
        await newEvaluation.newEvaluationDVSettlementCostEstimate_Name.setValue(world.dataMap.get("Name"));
        await newEvaluation.newEvaluationDVNote_RelatedTo.selectOptionByLabel(world.dataMap.get("RelatedTo"));
        await newEvaluation.newEvaluationDVEconomicDamages_HospitalER.setValue(world.dataMap.get("Hospital_Value"));
        await newEvaluation.newEvaluationDVEconomicDamages_TreatingPhysician.setValue(world.dataMap.get("TreatingPhysician"));
        await newEvaluation.newEvaluationDVEconomicDamages_MedicalEquipment.setValue(world.dataMap.get("MedicalEquipment"));
        await newEvaluation.newEvaluationDVEconomicDamages_Diagnostic.setValue(world.dataMap.get("Diagnostic"));
        await newEvaluation.newEvaluationDVTotalValue_Amount.setValue(world.dataMap.get("Total"));
        await newEvaluation.newEvaluationScreenUpdate.click();
    }
    async evaluationEdit() {
        await claimEvaluations.claimEvaluationDetailsDV_tbEdit.click();
        await claimEvaluations.claimEvaluationDetailDVEconomicDamages_ClmtOutOfPocket.setValue(world.dataMap.get("ClmtOutOfPocket"));
        await claimEvaluations.claimEvaluationDetailDVEconomicDamages_Other.setValue(world.dataMap.get("Other"))
        await claimEvaluations.claimEvaluationDetailsDV_tbUpdate.click();
    }
    async evaluationValidation() {
        await t.expect((await returnDataFromTable(3))).contains(world.dataMap.get("TotalValue"));
        await t.expect((await returnDataFromTable(1))).contains(world.dataMap.get("Name"));
    }
}