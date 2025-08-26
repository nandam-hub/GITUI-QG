import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class Reload {
	reloadDVDisplayNames = PcfButton('#Reload-ReloadScreen-ReloadDV-DisplayNames');
	reloadDVGSTemplates = PcfButton('#Reload-ReloadScreen-ReloadDV-GSTemplates');
	reloadDVPCF = PcfButton('#Reload-ReloadScreen-ReloadDV-PCF');
	reloadDVWorkflowEngine = PcfButton('#Reload-ReloadScreen-ReloadDV-WorkflowEngine');
	reloadScreen_msgs = PcfButton('#Reload-ReloadScreen-_msgs');
	reloadReload_UpLink = PcfButton('#Reload-Reload_UpLink');
	reload_Paging = PcfButton('#Reload-_Paging');
	reload__crumb__ = PcfComponent('#Reload-__crumb__');
}
