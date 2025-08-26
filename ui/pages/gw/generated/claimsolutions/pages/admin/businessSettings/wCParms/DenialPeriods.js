import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DenialPeriods {
	denialPeriodsScreenAdd = PcfButton('#DenialPeriods-DenialPeriodsScreen-Add');
	denialPeriodsScreenCustomAdd = PcfButton('#DenialPeriods-DenialPeriodsScreen-CustomAdd');
	denialPeriodsScreenDenialPeriodsLV = PcfListView('#DenialPeriods-DenialPeriodsScreen-DenialPeriodsLV');
	denialPeriodsScreenRemove = PcfButton('#DenialPeriods-DenialPeriodsScreen-Remove');
	denialPeriodsScreen_msgs = PcfButton('#DenialPeriods-DenialPeriodsScreen-_msgs');
	denialPeriodsDenialPeriods_UpLink = PcfButton('#DenialPeriods-DenialPeriods_UpLink');
	denialPeriods_Paging = PcfButton('#DenialPeriods-_Paging');
	denialPeriods__crumb__ = PcfComponent('#DenialPeriods-__crumb__');
}
