import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ChargePatterns {
	chargePatternsScreenChargePatternsLV = PcfListView('#ChargePatterns-ChargePatternsScreen-ChargePatternsLV');
	chargePatternsScreen_msgs = PcfButton('#ChargePatterns-ChargePatternsScreen-_msgs');
	chargePatternsChargePatterns_UpLink = PcfButton('#ChargePatterns-ChargePatterns_UpLink');
	chargePatterns_Paging = PcfButton('#ChargePatterns-_Paging');
	chargePatterns__crumb__ = PcfComponent('#ChargePatterns-__crumb__');
}
