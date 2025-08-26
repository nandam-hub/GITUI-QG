import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class EnableStartablePluginPopup {
	enableStartablePluginPopupCancel = PcfButton('#EnableStartablePluginPopup-Cancel');
	enableStartablePluginPopupEdit = PcfButton('#EnableStartablePluginPopup-Edit');
	enableStartablePluginPopupEnableStartablePluginPopup_UpLink = PcfButton('#EnableStartablePluginPopup-EnableStartablePluginPopup_UpLink');
	enableStartablePluginPopupPluginName = PcfSelectInput('#EnableStartablePluginPopup-PluginName');
	enableStartablePluginPopupUpdate = PcfButton('#EnableStartablePluginPopup-Update');
	enableStartablePluginPopup_Paging = PcfButton('#EnableStartablePluginPopup-_Paging');
	enableStartablePluginPopup__crumb__ = PcfComponent('#EnableStartablePluginPopup-__crumb__');
	enableStartablePluginPopup_msgs = PcfButton('#EnableStartablePluginPopup-_msgs');
}
