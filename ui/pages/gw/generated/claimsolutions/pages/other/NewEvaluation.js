import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewEvaluation {
	newEvaluationScreenCancel = PcfButton('#NewEvaluation-NewEvaluationScreen-Cancel');
	newEvaluationScreenEdit = PcfButton('#NewEvaluation-NewEvaluationScreen-Edit');
	newEvaluationDVEconomicDamages_ClmtOutOfPocket = PcfTextInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-EconomicDamages_ClmtOutOfPocket');
	newEvaluationDVEconomicDamages_Diagnostic = PcfTextInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-EconomicDamages_Diagnostic');
	newEvaluationDVEconomicDamages_FutureMedical = PcfTextInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-EconomicDamages_FutureMedical');
	newEvaluationDVEconomicDamages_HospitalER = PcfTextInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-EconomicDamages_HospitalER');
	newEvaluationDVEconomicDamages_MedicalEquipment = PcfTextInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-EconomicDamages_MedicalEquipment');
	newEvaluationDVEconomicDamages_Other = PcfTextInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-EconomicDamages_Other');
	newEvaluationDVEconomicDamages_PhysicalTherapy = PcfTextInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-EconomicDamages_PhysicalTherapy');
	newEvaluationDVEconomicDamages_Total = PcfTextInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-EconomicDamages_Total');
	newEvaluationDVEconomicDamages_TreatingPhysician = PcfTextInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-EconomicDamages_TreatingPhysician');
	newEvaluationDVLiabilityDistribution_ClaimantLiability = PcfTextInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-LiabilityDistribution_ClaimantLiability');
	newEvaluationDVLiabilityDistribution_InsuredLiability = PcfTextInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-LiabilityDistribution_InsuredLiability');
	newEvaluationDVLiabilityDistribution_OtherLiability = PcfTextInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-LiabilityDistribution_OtherLiability');
	newEvaluationDVNonEconomicDamages_High = PcfTextInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-NonEconomicDamages_High');
	newEvaluationDVNonEconomicDamages_Likely = PcfTextInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-NonEconomicDamages_Likely');
	newEvaluationDVNonEconomicDamages_Low = PcfTextInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-NonEconomicDamages_Low');
	newEvaluationDVNote_RelatedTo = PcfSelectInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-Note_RelatedTo');
	newEvaluationDVSettlementCostEstimate_Name = PcfTextInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-SettlementCostEstimate_Name');
	newEvaluationDVTotalValue_Amount = PcfTextInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-TotalValue_Amount');
	newEvaluationDVTotalValue_AvailableReserves = PcfTextInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-TotalValue_AvailableReserves');
	newEvaluationDVTotalValue_High = PcfTextInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-TotalValue_High');
	newEvaluationDVTotalValue_Likely = PcfTextInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-TotalValue_Likely');
	newEvaluationDVTotalValue_Low = PcfTextInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-TotalValue_Low');
	newEvaluationDVTotalValue_TotalIncurredNet = PcfTextInput('#NewEvaluation-NewEvaluationScreen-NewEvaluationDV-TotalValue_TotalIncurredNet');
	newEvaluationScreenUpdate = PcfButton('#NewEvaluation-NewEvaluationScreen-Update');
	newEvaluationScreen_msgs = PcfButton('#NewEvaluation-NewEvaluationScreen-_msgs');
	newEvaluationNewEvaluation_UpLink = PcfButton('#NewEvaluation-NewEvaluation_UpLink');
	newEvaluation_Paging = PcfButton('#NewEvaluation-_Paging');
	newEvaluation__crumb__ = PcfComponent('#NewEvaluation-__crumb__');
}
