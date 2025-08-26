import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class RunCommandPopup {
	runCommandPopupCancel = PcfButton('#RunCommandPopup-Cancel');
	runCommandPopupEdit = PcfButton('#RunCommandPopup-Edit');
	runCommandPopupRunCommandPopup_UpLink = PcfButton('#RunCommandPopup-RunCommandPopup_UpLink');
	runCommandPopupUpdate = PcfButton('#RunCommandPopup-Update');
	runCommandPopup_ListPaging = PcfButton('#RunCommandPopup-_ListPaging');
	runCommandPopup_Paging = PcfButton('#RunCommandPopup-_Paging');
	runCommandPopup__crumb__ = PcfComponent('#RunCommandPopup-__crumb__');
	runCommandPopup_msgs = PcfButton('#RunCommandPopup-_msgs');
}
