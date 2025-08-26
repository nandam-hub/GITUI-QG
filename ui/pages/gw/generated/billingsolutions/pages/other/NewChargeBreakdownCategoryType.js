import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewChargeBreakdownCategoryType {
	newChargeBreakdownCategoryTypeScreenCancel = PcfButton('#NewChargeBreakdownCategoryType-NewChargeBreakdownCategoryTypeScreen-Cancel');
	chargeBreakdownCategoryTypeDetailDVCode = PcfTextInput('#NewChargeBreakdownCategoryType-NewChargeBreakdownCategoryTypeScreen-ChargeBreakdownCategoryTypeDetailDV-Code');
	chargeBreakdownCategoryTypeDetailDVName = PcfTextInput('#NewChargeBreakdownCategoryType-NewChargeBreakdownCategoryTypeScreen-ChargeBreakdownCategoryTypeDetailDV-Name');
	newChargeBreakdownCategoryTypeScreenEdit = PcfButton('#NewChargeBreakdownCategoryType-NewChargeBreakdownCategoryTypeScreen-Edit');
	newChargeBreakdownCategoryTypeNewChargeBreakdownCategoryTypeScreenLocalizedValuesDVLocalizedValuesLV = PcfListView('#NewChargeBreakdownCategoryType-NewChargeBreakdownCategoryTypeScreen-LocalizedValuesDV-LocalizedValuesLV');
	newChargeBreakdownCategoryTypeScreenUpdate = PcfButton('#NewChargeBreakdownCategoryType-NewChargeBreakdownCategoryTypeScreen-Update');
	newChargeBreakdownCategoryTypeScreen_msgs = PcfButton('#NewChargeBreakdownCategoryType-NewChargeBreakdownCategoryTypeScreen-_msgs');
	newChargeBreakdownCategoryTypeNewChargeBreakdownCategoryType_UpLink = PcfButton('#NewChargeBreakdownCategoryType-NewChargeBreakdownCategoryType_UpLink');
	newChargeBreakdownCategoryType_Paging = PcfButton('#NewChargeBreakdownCategoryType-_Paging');
	newChargeBreakdownCategoryType__crumb__ = PcfComponent('#NewChargeBreakdownCategoryType-__crumb__');
}
