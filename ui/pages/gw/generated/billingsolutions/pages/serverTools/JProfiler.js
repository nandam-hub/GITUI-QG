import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class JProfiler {
	jProfilerDVdump = PcfButton('#JProfiler-JProfilerScreen-JProfilerDV-dump');
	jProfilerDVstartcpu = PcfButton('#JProfiler-JProfilerScreen-JProfilerDV-startcpu');
	jProfilerDVstartmemory = PcfButton('#JProfiler-JProfilerScreen-JProfilerDV-startmemory');
	jProfilerDVstartthread = PcfButton('#JProfiler-JProfilerScreen-JProfilerDV-startthread');
	jProfilerDVstop = PcfButton('#JProfiler-JProfilerScreen-JProfilerDV-stop');
	jProfilerDVstopAndRestartCPUAndThread = PcfButton('#JProfiler-JProfilerScreen-JProfilerDV-stopAndRestartCPUAndThread');
	jProfilerScreenJProfilerIsNotAvailable = PcfButton('#JProfiler-JProfilerScreen-JProfilerIsNotAvailable');
	jProfilerIsNotAvailableCloseBtn = PcfButton('#JProfiler-JProfilerScreen-JProfilerIsNotAvailable-CloseBtn');
	jProfilerScreen_msgs = PcfButton('#JProfiler-JProfilerScreen-_msgs');
	jProfilerJProfiler_UpLink = PcfButton('#JProfiler-JProfiler_UpLink');
	jProfiler_Paging = PcfButton('#JProfiler-_Paging');
	jProfiler__crumb__ = PcfComponent('#JProfiler-__crumb__');
}
