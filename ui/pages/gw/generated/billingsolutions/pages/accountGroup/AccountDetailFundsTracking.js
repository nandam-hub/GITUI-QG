import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AccountDetailFundsTracking {
	fundsSourcesFundsTrackerLV = PcfListView('#AccountDetailFundsTracking-AccountDetailFundsTrackingScreen-FundsSources-FundsTrackerLV');
	accountDetailFundsTrackingScreenFundsSourcesCardTab = PcfButton('#AccountDetailFundsTracking-AccountDetailFundsTrackingScreen-FundsSourcesCardTab');
	fundsUsesFundsTrackerLV = PcfListView('#AccountDetailFundsTracking-AccountDetailFundsTrackingScreen-FundsUses-FundsTrackerLV');
	accountDetailFundsTrackingScreenFundsUsesCardTab = PcfButton('#AccountDetailFundsTracking-AccountDetailFundsTrackingScreen-FundsUsesCardTab');
	accountDetailFundsTrackingScreen_msgs = PcfButton('#AccountDetailFundsTracking-AccountDetailFundsTrackingScreen-_msgs');
	accountDetailFundsTrackingAccountDetailFundsTracking_UpLink = PcfButton('#AccountDetailFundsTracking-AccountDetailFundsTracking_UpLink');
	accountDetailFundsTracking_Paging = PcfButton('#AccountDetailFundsTracking-_Paging');
	accountDetailFundsTracking__crumb__ = PcfComponent('#AccountDetailFundsTracking-__crumb__');
}
