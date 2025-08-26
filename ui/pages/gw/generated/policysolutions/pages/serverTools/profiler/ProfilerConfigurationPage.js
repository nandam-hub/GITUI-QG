import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ProfilerConfigurationPage {
	profilerConfigurationPageProfilerConfigurationPage_UpLink = PcfButton('#ProfilerConfigurationPage-ProfilerConfigurationPage_UpLink');
	enableWebProfilerPanelSetProfilerOptionsLV = PcfListView('#ProfilerConfigurationPage-ProfilerConfigurationScreen-EnableWebProfilerPanelSet-ProfilerOptionsLV');
	enableWebProfilerPanelSetTurnProfilingOff = PcfButton('#ProfilerConfigurationPage-ProfilerConfigurationScreen-EnableWebProfilerPanelSet-TurnProfilingOff');
	enableWebProfilerPanelSetTurnProfilingOn = PcfButton('#ProfilerConfigurationPage-ProfilerConfigurationScreen-EnableWebProfilerPanelSet-TurnProfilingOn');
	profilerConfigurationScreenProfilerConfigLV = PcfListView('#ProfilerConfigurationPage-ProfilerConfigurationScreen-ProfilerConfigLV');
	profilerConfigLV_tbEnableBatchProcessButton = PcfButton('#ProfilerConfigurationPage-ProfilerConfigurationScreen-ProfilerConfigLV_tb-EnableBatchProcessButton');
	profilerConfigLV_tbEnableGosuServletButton = PcfButton('#ProfilerConfigurationPage-ProfilerConfigurationScreen-ProfilerConfigLV_tb-EnableGosuServletButton');
	profilerConfigLV_tbEnableJsonRpcButton = PcfButton('#ProfilerConfigurationPage-ProfilerConfigurationScreen-ProfilerConfigLV_tb-EnableJsonRpcButton');
	profilerConfigLV_tbEnableMessageDestinationButton = PcfButton('#ProfilerConfigurationPage-ProfilerConfigurationScreen-ProfilerConfigLV_tb-EnableMessageDestinationButton');
	profilerConfigLV_tbEnableRestOperationButton = PcfButton('#ProfilerConfigurationPage-ProfilerConfigurationScreen-ProfilerConfigLV_tb-EnableRestOperationButton');
	profilerConfigLV_tbEnableStartablePluginButton = PcfButton('#ProfilerConfigurationPage-ProfilerConfigurationScreen-ProfilerConfigLV_tb-EnableStartablePluginButton');
	profilerConfigLV_tbEnableWebServiceButton = PcfButton('#ProfilerConfigurationPage-ProfilerConfigurationScreen-ProfilerConfigLV_tb-EnableWebServiceButton');
	profilerConfigLV_tbEnableWorkQueueButton = PcfButton('#ProfilerConfigurationPage-ProfilerConfigurationScreen-ProfilerConfigLV_tb-EnableWorkQueueButton');
	profilerConfigurationScreenReadOnlyModeAlert = PcfButton('#ProfilerConfigurationPage-ProfilerConfigurationScreen-ReadOnlyModeAlert');
	readOnlyModeAlertCloseBtn = PcfButton('#ProfilerConfigurationPage-ProfilerConfigurationScreen-ReadOnlyModeAlert-CloseBtn');
	profilerConfigurationScreenRestartToTakeEffectAlert = PcfButton('#ProfilerConfigurationPage-ProfilerConfigurationScreen-RestartToTakeEffectAlert');
	restartToTakeEffectAlertCloseBtn = PcfButton('#ProfilerConfigurationPage-ProfilerConfigurationScreen-RestartToTakeEffectAlert-CloseBtn');
	profilerConfigurationScreen_msgs = PcfButton('#ProfilerConfigurationPage-ProfilerConfigurationScreen-_msgs');
	profilerConfigurationPage_Paging = PcfButton('#ProfilerConfigurationPage-_Paging');
	profilerConfigurationPage__crumb__ = PcfComponent('#ProfilerConfigurationPage-__crumb__');
}
