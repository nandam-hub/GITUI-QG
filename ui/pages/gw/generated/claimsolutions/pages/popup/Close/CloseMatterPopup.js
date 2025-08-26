import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class CloseMatterPopup {
	closeMatterPopupCloseMatterPopup_UpLink = PcfButton('#CloseMatterPopup-CloseMatterPopup_UpLink');
	closeMatterScreenCancel = PcfButton('#CloseMatterPopup-CloseMatterScreen-Cancel');
	closeMatterInfoDVNote = PcfTextInput('#CloseMatterPopup-CloseMatterScreen-CloseMatterInfoDV-Note');
	closeMatterInfoDVResolution = PcfSelectInput('#CloseMatterPopup-CloseMatterScreen-CloseMatterInfoDV-Resolution');
	closeMatterScreenEdit = PcfButton('#CloseMatterPopup-CloseMatterScreen-Edit');
	closeMatterScreenUpdate = PcfButton('#CloseMatterPopup-CloseMatterScreen-Update');
	closeMatterScreen_msgs = PcfButton('#CloseMatterPopup-CloseMatterScreen-_msgs');
	closeMatterPopup_Paging = PcfButton('#CloseMatterPopup-_Paging');
	closeMatterPopup__crumb__ = PcfComponent('#CloseMatterPopup-__crumb__');
}
