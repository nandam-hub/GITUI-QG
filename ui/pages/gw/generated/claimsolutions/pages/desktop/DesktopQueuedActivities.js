import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DesktopQueuedActivities {
	desktopQueuedActivitiesScreenAvailableQueues = PcfSelectInput('#DesktopQueuedActivities-DesktopQueuedActivitiesScreen-AvailableQueues');
	desktopQueuedActivitiesScreenDesktopQueuedActivitiesLV = PcfListView('#DesktopQueuedActivities-DesktopQueuedActivitiesScreen-DesktopQueuedActivitiesLV');
	desktopQueuedActivitiesScreenDesktopQueuedActivities_AssignButton = PcfButton('#DesktopQueuedActivities-DesktopQueuedActivitiesScreen-DesktopQueuedActivities_AssignButton');
	desktopQueuedActivitiesScreenDesktopQueuedActivities_AssignNextButton = PcfButton('#DesktopQueuedActivities-DesktopQueuedActivitiesScreen-DesktopQueuedActivities_AssignNextButton');
	desktopQueuedActivitiesScreenDesktopQueuedActivities_AssignNextButton2 = PcfButton('#DesktopQueuedActivities-DesktopQueuedActivitiesScreen-DesktopQueuedActivities_AssignNextButton2');
	desktopQueuedActivitiesScreenDesktopQueuedActivities_AssignSelectedButton = PcfButton('#DesktopQueuedActivities-DesktopQueuedActivitiesScreen-DesktopQueuedActivities_AssignSelectedButton');
	desktopQueuedActivitiesScreenDesktopQueuedActivities_PrintButton = PcfButton('#DesktopQueuedActivities-DesktopQueuedActivitiesScreen-DesktopQueuedActivities_PrintButton');
	desktopQueuedActivitiesScreenDesktopQueuedActivities_RefreshButton = PcfButton('#DesktopQueuedActivities-DesktopQueuedActivitiesScreen-DesktopQueuedActivities_RefreshButton');
	desktopQueuedActivitiesScreen_msgs = PcfButton('#DesktopQueuedActivities-DesktopQueuedActivitiesScreen-_msgs');
	desktopQueuedActivitiesDesktopQueuedActivities_UpLink = PcfButton('#DesktopQueuedActivities-DesktopQueuedActivities_UpLink');
	desktopQueuedActivities_Paging = PcfButton('#DesktopQueuedActivities-_Paging');
	desktopQueuedActivities__crumb__ = PcfComponent('#DesktopQueuedActivities-__crumb__');
}
