import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class MetroFlows {
	metroFlowsDVCurrentStep = PcfTextInput('#MetroFlows-MetroFlowsScreen-MetroFlowsDV-CurrentStep');
	metroFlowsMetroFlowsScreenMetroFlowsDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#MetroFlows-MetroFlowsScreen-MetroFlowsDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	metroFlowsMetroFlowsScreenMetroFlowsDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#MetroFlows-MetroFlowsScreen-MetroFlowsDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	metroFlowsDVStartDateFrom = PcfDateValueInput('#MetroFlows-MetroFlowsScreen-MetroFlowsDV-StartDateFrom');
	metroFlowsDVStartDateTo = PcfDateValueInput('#MetroFlows-MetroFlowsScreen-MetroFlowsDV-StartDateTo');
	metroFlowsDVState = PcfSelectInput('#MetroFlows-MetroFlowsScreen-MetroFlowsDV-State');
	metroFlowsDVUpdateDateFrom = PcfDateValueInput('#MetroFlows-MetroFlowsScreen-MetroFlowsDV-UpdateDateFrom');
	metroFlowsDVUpdateDateTo = PcfDateValueInput('#MetroFlows-MetroFlowsScreen-MetroFlowsDV-UpdateDateTo');
	metroFlowsScreenMetroFlowsLV = PcfListView('#MetroFlows-MetroFlowsScreen-MetroFlowsLV');
	metroFlowsLV_tbMetroFlows_ResumeAllButton = PcfButton('#MetroFlows-MetroFlowsScreen-MetroFlowsLV_tb-MetroFlows_ResumeAllButton');
	metroFlowsLV_tbMetroFlows_ResumeButton = PcfButton('#MetroFlows-MetroFlowsScreen-MetroFlowsLV_tb-MetroFlows_ResumeButton');
	metroFlowsScreen_msgs = PcfButton('#MetroFlows-MetroFlowsScreen-_msgs');
	metroFlowsMetroFlows_UpLink = PcfButton('#MetroFlows-MetroFlows_UpLink');
	metroFlows_Paging = PcfButton('#MetroFlows-_Paging');
	metroFlows__crumb__ = PcfComponent('#MetroFlows-__crumb__');
}
