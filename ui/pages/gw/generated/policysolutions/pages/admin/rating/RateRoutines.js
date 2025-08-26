import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class RateRoutines {
	rateRoutinePanelSetRateroutinesLV = PcfListView('#RateRoutines-RateRoutineSearchScreen-RateRoutinePanelSet-RateroutinesLV');
	rateroutinesLV_tbAddRateRoutineDefButton = PcfButton('#RateRoutines-RateRoutineSearchScreen-RateRoutinePanelSet-RateroutinesLV_tb-AddRateRoutineDefButton');
	rateroutinesLV_tbDeleteRateRoutineDefButton = PcfButton('#RateRoutines-RateRoutineSearchScreen-RateRoutinePanelSet-RateroutinesLV_tb-DeleteRateRoutineDefButton');
	rateRoutineSearchDVCode = PcfTextInput('#RateRoutines-RateRoutineSearchScreen-RateRoutineSearchDV-Code');
	rateRoutineSearchDVName = PcfTextInput('#RateRoutines-RateRoutineSearchScreen-RateRoutineSearchDV-Name');
	rateRoutineSearchDVPolicyLine = PcfSelectInput('#RateRoutines-RateRoutineSearchScreen-RateRoutineSearchDV-PolicyLine');
	rateRoutinesRateRoutineSearchScreenRateRoutineSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#RateRoutines-RateRoutineSearchScreen-RateRoutineSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	rateRoutinesRateRoutineSearchScreenRateRoutineSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#RateRoutines-RateRoutineSearchScreen-RateRoutineSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	rateRoutineSearchScreen_msgs = PcfButton('#RateRoutines-RateRoutineSearchScreen-_msgs');
	rateRoutinesRateRoutines_UpLink = PcfButton('#RateRoutines-RateRoutines_UpLink');
	rateRoutines_Paging = PcfButton('#RateRoutines-_Paging');
	rateRoutines__crumb__ = PcfComponent('#RateRoutines-__crumb__');
}
