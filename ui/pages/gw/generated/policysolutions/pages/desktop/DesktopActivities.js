import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DesktopActivities {
	desktopActivitiesScreenDesktopActivitiesLV = PcfListView('#DesktopActivities-DesktopActivitiesScreen-DesktopActivitiesLV');
	desktopActivitiesLV_tbDesktopActivities_AssignButton = PcfButton('#DesktopActivities-DesktopActivitiesScreen-DesktopActivitiesLV_tb-DesktopActivities_AssignButton');
	desktopActivitiesLV_tbDesktopActivities_CompleteButton = PcfButton('#DesktopActivities-DesktopActivitiesScreen-DesktopActivitiesLV_tb-DesktopActivities_CompleteButton');
	desktopActivitiesLV_tbDesktopActivities_SkipButton = PcfButton('#DesktopActivities-DesktopActivitiesScreen-DesktopActivitiesLV_tb-DesktopActivities_SkipButton');
	desktopActivitiesScreenDesktopActivities_CanceledActivitiesAlertBar = PcfButton('#DesktopActivities-DesktopActivitiesScreen-DesktopActivities_CanceledActivitiesAlertBar');
	desktopActivities_CanceledActivitiesAlertBarCloseBtn = PcfButton('#DesktopActivities-DesktopActivitiesScreen-DesktopActivities_CanceledActivitiesAlertBar-CloseBtn');
	desktopActivitiesScreen_msgs = PcfButton('#DesktopActivities-DesktopActivitiesScreen-_msgs');
	desktopActivitiesScreenFederatedDesktopActivitiesLV = PcfListView('#DesktopActivities-DesktopActivitiesScreen-FederatedDesktopActivitiesLV');
	federatedDesktopActivitiesLV_tbDesktopActivities_AssignButton = PcfButton('#DesktopActivities-DesktopActivitiesScreen-FederatedDesktopActivitiesLV_tb-DesktopActivities_AssignButton');
	federatedDesktopActivitiesLV_tbDesktopActivities_CompleteButton = PcfButton('#DesktopActivities-DesktopActivitiesScreen-FederatedDesktopActivitiesLV_tb-DesktopActivities_CompleteButton');
	federatedDesktopActivitiesLV_tbDesktopActivities_LateRefreshInfo = PcfTextInput('#DesktopActivities-DesktopActivitiesScreen-FederatedDesktopActivitiesLV_tb-DesktopActivities_LateRefreshInfo');
	federatedDesktopActivitiesLV_tbDesktopActivities_SkipButton = PcfButton('#DesktopActivities-DesktopActivitiesScreen-FederatedDesktopActivitiesLV_tb-DesktopActivities_SkipButton');
	desktopActivitiesDesktopActivities_UpLink = PcfButton('#DesktopActivities-DesktopActivities_UpLink');
	desktopActivities_Paging = PcfButton('#DesktopActivities-_Paging');
	desktopActivities__crumb__ = PcfComponent('#DesktopActivities-__crumb__');
}
