import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class EnableGosuServletPopup {
	enableGosuServletPopupCancel = PcfButton('#EnableGosuServletPopup-Cancel');
	enableGosuServletPopupEdit = PcfButton('#EnableGosuServletPopup-Edit');
	enableGosuServletPopupEnableGosuServletPopup_UpLink = PcfButton('#EnableGosuServletPopup-EnableGosuServletPopup_UpLink');
	enableGosuServletPopupServletType = PcfSelectInput('#EnableGosuServletPopup-ServletType');
	enableGosuServletPopupUpdate = PcfButton('#EnableGosuServletPopup-Update');
	enableGosuServletPopup_Paging = PcfButton('#EnableGosuServletPopup-_Paging');
	enableGosuServletPopup__crumb__ = PcfComponent('#EnableGosuServletPopup-__crumb__');
	enableGosuServletPopup_msgs = PcfButton('#EnableGosuServletPopup-_msgs');
}
