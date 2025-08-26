import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class VacationActivities {
	vacationActivitiesScreenVacationActivitiesLV = PcfListView('#VacationActivities-VacationActivitiesScreen-VacationActivitiesLV');
	vacationActivitiesScreenVacationActivities_Approve = PcfButton('#VacationActivities-VacationActivitiesScreen-VacationActivities_Approve');
	vacationActivitiesScreenVacationActivities_Assign = PcfButton('#VacationActivities-VacationActivitiesScreen-VacationActivities_Assign');
	vacationActivitiesScreenVacationActivities_Complete = PcfButton('#VacationActivities-VacationActivitiesScreen-VacationActivities_Complete');
	vacationActivitiesScreenVacationActivities_Print = PcfButton('#VacationActivities-VacationActivitiesScreen-VacationActivities_Print');
	vacationActivitiesScreenVacationActivities_Reject = PcfButton('#VacationActivities-VacationActivitiesScreen-VacationActivities_Reject');
	vacationActivitiesScreenVacationActivities_Skip = PcfButton('#VacationActivities-VacationActivitiesScreen-VacationActivities_Skip');
	vacationActivitiesScreen_msgs = PcfButton('#VacationActivities-VacationActivitiesScreen-_msgs');
	vacationActivitiesVacationActivities_UpLink = PcfButton('#VacationActivities-VacationActivities_UpLink');
	vacationActivities_Paging = PcfButton('#VacationActivities-_Paging');
	vacationActivities__crumb__ = PcfComponent('#VacationActivities-__crumb__');
}
