import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class VacationExposures {
	vacationExposuresScreenMyVacationExposuresLV = PcfListView('#VacationExposures-VacationExposuresScreen-MyVacationExposuresLV');
	vacationExposuresScreenVacationExposures_Assign = PcfButton('#VacationExposures-VacationExposuresScreen-VacationExposures_Assign');
	vacationExposuresScreenVacationExposures_Print = PcfButton('#VacationExposures-VacationExposuresScreen-VacationExposures_Print');
	vacationExposuresScreen_msgs = PcfButton('#VacationExposures-VacationExposuresScreen-_msgs');
	vacationExposuresVacationExposures_UpLink = PcfButton('#VacationExposures-VacationExposures_UpLink');
	vacationExposures_Paging = PcfButton('#VacationExposures-_Paging');
	vacationExposures__crumb__ = PcfComponent('#VacationExposures-__crumb__');
}
