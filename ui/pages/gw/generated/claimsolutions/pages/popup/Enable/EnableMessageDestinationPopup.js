import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class EnableMessageDestinationPopup {
	enableMessageDestinationPopupCancel = PcfButton('#EnableMessageDestinationPopup-Cancel');
	enableMessageDestinationPopupEdit = PcfButton('#EnableMessageDestinationPopup-Edit');
	enableMessageDestinationPopupEnableMessageDestinationPopup_UpLink = PcfButton('#EnableMessageDestinationPopup-EnableMessageDestinationPopup_UpLink');
	enableMessageDestinationPopupMessageDestination = PcfSelectInput('#EnableMessageDestinationPopup-MessageDestination');
	enableMessageDestinationPopupUpdate = PcfButton('#EnableMessageDestinationPopup-Update');
	enableMessageDestinationPopup_Paging = PcfButton('#EnableMessageDestinationPopup-_Paging');
	enableMessageDestinationPopup__crumb__ = PcfComponent('#EnableMessageDestinationPopup-__crumb__');
	enableMessageDestinationPopup_msgs = PcfButton('#EnableMessageDestinationPopup-_msgs');
}
