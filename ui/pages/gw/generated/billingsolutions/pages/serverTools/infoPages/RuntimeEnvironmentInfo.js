import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class RuntimeEnvironmentInfo {
	runtimeEnvironmentInfoEnvironmentVarsLV = PcfListView('#RuntimeEnvironmentInfo-EnvironmentVarsLV');
	runtimeEnvironmentInfoRuntimeEnvironmentInfo_Download = PcfButton('#RuntimeEnvironmentInfo-RuntimeEnvironmentInfo_Download');
	runtimeEnvironmentInfoRuntimeEnvironmentInfo_UpLink = PcfButton('#RuntimeEnvironmentInfo-RuntimeEnvironmentInfo_UpLink');
	runtimeEnvironmentInfoSystemDetailsTextBox = PcfTextInput('#RuntimeEnvironmentInfo-SystemDetailsTextBox');
	runtimeEnvironmentInfoSystemPropertiesLV = PcfListView('#RuntimeEnvironmentInfo-SystemPropertiesLV');
	runtimeEnvironmentInfoVersionPropertiesLV = PcfListView('#RuntimeEnvironmentInfo-VersionPropertiesLV');
	runtimeEnvironmentInfo_Paging = PcfButton('#RuntimeEnvironmentInfo-_Paging');
	runtimeEnvironmentInfo__crumb__ = PcfComponent('#RuntimeEnvironmentInfo-__crumb__');
	runtimeEnvironmentInfo_msgs = PcfButton('#RuntimeEnvironmentInfo-_msgs');
}
