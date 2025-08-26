import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class SafePersistingOrderInfo {
	safePersistingOrderInfoScreenSafePersistingOrderInfoLV = PcfListView('#SafePersistingOrderInfo-SafePersistingOrderInfoScreen-SafePersistingOrderInfoLV');
	safePersistingOrderInfoScreen_msgs = PcfButton('#SafePersistingOrderInfo-SafePersistingOrderInfoScreen-_msgs');
	safePersistingOrderInfoSafePersistingOrderInfo_UpLink = PcfButton('#SafePersistingOrderInfo-SafePersistingOrderInfo_UpLink');
	safePersistingOrderInfo_Paging = PcfButton('#SafePersistingOrderInfo-_Paging');
	safePersistingOrderInfo__crumb__ = PcfComponent('#SafePersistingOrderInfo-__crumb__');
}
