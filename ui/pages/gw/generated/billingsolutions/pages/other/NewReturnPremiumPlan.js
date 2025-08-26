import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewReturnPremiumPlan {
	newReturnPremiumPlanNewReturnPremiumPlan_UpLink = PcfButton('#NewReturnPremiumPlan-NewReturnPremiumPlan_UpLink');
	returnPremiumPlanDetailScreenCancel = PcfButton('#NewReturnPremiumPlan-ReturnPremiumPlanDetailScreen-Cancel');
	returnPremiumPlanDetailScreenClone = PcfButton('#NewReturnPremiumPlan-ReturnPremiumPlanDetailScreen-Clone');
	returnPremiumPlanDetailScreenEdit = PcfButton('#NewReturnPremiumPlan-ReturnPremiumPlanDetailScreen-Edit');
	newReturnPremiumPlanReturnPremiumPlanDetailScreenLocalizedValuesDVLocalizedValuesLV = PcfListView('#NewReturnPremiumPlan-ReturnPremiumPlanDetailScreen-LocalizedValuesDV-LocalizedValuesLV');
	returnPremiumPlanDetailDVChargeQualification = PcfSelectInput('#NewReturnPremiumPlan-ReturnPremiumPlanDetailScreen-ReturnPremiumPlanDetailDV-ChargeQualification');
	returnPremiumPlanDetailDVDescription = PcfTextInput('#NewReturnPremiumPlan-ReturnPremiumPlanDetailScreen-ReturnPremiumPlanDetailDV-Description');
	returnPremiumPlanDetailDVEffectiveDate = PcfDateValueInput('#NewReturnPremiumPlan-ReturnPremiumPlanDetailScreen-ReturnPremiumPlanDetailDV-EffectiveDate');
	returnPremiumPlanDetailDVExpirationDate = PcfDateValueInput('#NewReturnPremiumPlan-ReturnPremiumPlanDetailScreen-ReturnPremiumPlanDetailDV-ExpirationDate');
	returnPremiumPlanDetailDVListBillAccountExcessOption = PcfSelectInput('#NewReturnPremiumPlan-ReturnPremiumPlanDetailScreen-ReturnPremiumPlanDetailDV-ListBillAccountExcessOption');
	returnPremiumPlanDetailDVName = PcfTextInput('#NewReturnPremiumPlan-ReturnPremiumPlanDetailScreen-ReturnPremiumPlanDetailDV-Name');
	returnPremiumPlanDetailScreenReturnPremiumSchemesLV = PcfListView('#NewReturnPremiumPlan-ReturnPremiumPlanDetailScreen-ReturnPremiumSchemesLV');
	returnPremiumSchemesLV_tbAddScheme = PcfButton('#NewReturnPremiumPlan-ReturnPremiumPlanDetailScreen-ReturnPremiumSchemesLV_tb-AddScheme');
	returnPremiumSchemesLV_tbRemoveScheme = PcfButton('#NewReturnPremiumPlan-ReturnPremiumPlanDetailScreen-ReturnPremiumSchemesLV_tb-RemoveScheme');
	returnPremiumPlanDetailScreenUpdate = PcfButton('#NewReturnPremiumPlan-ReturnPremiumPlanDetailScreen-Update');
	returnPremiumPlanDetailScreen_msgs = PcfButton('#NewReturnPremiumPlan-ReturnPremiumPlanDetailScreen-_msgs');
	newReturnPremiumPlan_Paging = PcfButton('#NewReturnPremiumPlan-_Paging');
	newReturnPremiumPlan__crumb__ = PcfComponent('#NewReturnPremiumPlan-__crumb__');
}
