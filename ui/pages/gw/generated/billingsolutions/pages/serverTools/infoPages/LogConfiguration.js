import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class LogConfiguration {
	logConfigurationDisableLogSource = PcfButton('#LogConfiguration-DisableLogSource');
	logConfigurationEnableLogSource = PcfButton('#LogConfiguration-EnableLogSource');
	logConfigurationLogConfiguration_UpLink = PcfButton('#LogConfiguration-LogConfiguration_UpLink');
	logConfigurationMinutesEnableLogSourceFor = PcfTextInput('#LogConfiguration-MinutesEnableLogSourceFor');
	logConfiguration_Paging = PcfButton('#LogConfiguration-_Paging');
	logConfiguration__crumb__ = PcfComponent('#LogConfiguration-__crumb__');
	logConfiguration_msgs = PcfButton('#LogConfiguration-_msgs');
}
