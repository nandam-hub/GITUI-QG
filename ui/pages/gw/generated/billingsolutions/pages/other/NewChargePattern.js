import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewChargePattern {
	newChargePatternScreenCancel = PcfButton('#NewChargePattern-NewChargePatternScreen-Cancel');
	chargePatternDetailDVCategory = PcfSelectInput('#NewChargePattern-NewChargePatternScreen-ChargePatternDetailDV-Category');
	chargePatternDetailDVChargeCode = PcfTextInput('#NewChargePattern-NewChargePatternScreen-ChargePatternDetailDV-ChargeCode');
	chargePatternDetailDVChargeName = PcfTextInput('#NewChargePattern-NewChargePatternScreen-ChargePatternDetailDV-ChargeName');
	chargePatternDetailDVIncludedInEquityDating = PcfComponent('#NewChargePattern-NewChargePatternScreen-ChargePatternDetailDV-IncludedInEquityDating');
	chargePatternDetailDVInvoiceTreatment = PcfSelectInput('#NewChargePattern-NewChargePatternScreen-ChargePatternDetailDV-InvoiceTreatment');
	chargePatternDetailDVPeriodicity = PcfSelectInput('#NewChargePattern-NewChargePatternScreen-ChargePatternDetailDV-Periodicity');
	chargePatternDetailDVPriority = PcfSelectInput('#NewChargePattern-NewChargePatternScreen-ChargePatternDetailDV-Priority');
	chargePatternDetailDVSubtype = PcfSelectInput('#NewChargePattern-NewChargePatternScreen-ChargePatternDetailDV-Subtype');
	chargePatternDetailDVTAccountOwner = PcfSelectInput('#NewChargePattern-NewChargePatternScreen-ChargePatternDetailDV-TAccountOwner');
	newChargePatternScreenEdit = PcfButton('#NewChargePattern-NewChargePatternScreen-Edit');
	newChargePatternNewChargePatternScreenLocalizedValuesDVLocalizedValuesLV = PcfListView('#NewChargePattern-NewChargePatternScreen-LocalizedValuesDV-LocalizedValuesLV');
	newChargePatternScreenUpdate = PcfButton('#NewChargePattern-NewChargePatternScreen-Update');
	newChargePatternScreen_msgs = PcfButton('#NewChargePattern-NewChargePatternScreen-_msgs');
	newChargePatternNewChargePattern_UpLink = PcfButton('#NewChargePattern-NewChargePattern_UpLink');
	newChargePattern_Paging = PcfButton('#NewChargePattern-_Paging');
	newChargePattern__crumb__ = PcfComponent('#NewChargePattern-__crumb__');
}
