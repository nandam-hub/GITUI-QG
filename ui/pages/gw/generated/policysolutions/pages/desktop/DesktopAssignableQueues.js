import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DesktopAssignableQueues {
	desktopAssignableQueuesScreenAssignFirstButton = PcfButton('#DesktopAssignableQueues-DesktopAssignableQueuesScreen-AssignFirstButton');
	desktopAssignableQueuesScreenAssignSelectedButton = PcfButton('#DesktopAssignableQueues-DesktopAssignableQueuesScreen-AssignSelectedButton');
	desktopAssignableQueuesScreenDesktopAssignableQueuesLV = PcfListView('#DesktopAssignableQueues-DesktopAssignableQueuesScreen-DesktopAssignableQueuesLV');
	desktopAssignableQueuesScreen_msgs = PcfButton('#DesktopAssignableQueues-DesktopAssignableQueuesScreen-_msgs');
	desktopAssignableQueuesScreenDesktopActivities_LateRefreshInfo = PcfTextInput('#DesktopAssignableQueues-DesktopAssignableQueuesScreen-DesktopActivities_LateRefreshInfo');
	desktopAssignableQueuesScreenFederatedDesktopAssignableQueuesLV = PcfListView('#DesktopAssignableQueues-DesktopAssignableQueuesScreen-FederatedDesktopAssignableQueuesLV');
	desktopAssignableQueuesDesktopAssignableQueues_UpLink = PcfButton('#DesktopAssignableQueues-DesktopAssignableQueues_UpLink');
	desktopAssignableQueues_Paging = PcfButton('#DesktopAssignableQueues-_Paging');
	desktopAssignableQueues__crumb__ = PcfComponent('#DesktopAssignableQueues-__crumb__');
}
