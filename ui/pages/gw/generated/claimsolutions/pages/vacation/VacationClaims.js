import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class VacationClaims {
	vacationClaimsScreenVacationClaimsLV = PcfListView('#VacationClaims-VacationClaimsScreen-VacationClaimsLV');
	vacationClaimsScreenVacationClaims_Assign = PcfButton('#VacationClaims-VacationClaimsScreen-VacationClaims_Assign');
	vacationClaimsScreenVacationClaims_Print = PcfButton('#VacationClaims-VacationClaimsScreen-VacationClaims_Print');
	vacationClaimsScreen_msgs = PcfButton('#VacationClaims-VacationClaimsScreen-_msgs');
	vacationClaimsVacationClaims_UpLink = PcfButton('#VacationClaims-VacationClaims_UpLink');
	vacationClaims_Paging = PcfButton('#VacationClaims-_Paging');
	vacationClaims__crumb__ = PcfComponent('#VacationClaims-__crumb__');
}
