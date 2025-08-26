import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class CloseExposurePopup {
	closeExposurePopupCloseExposurePopup_UpLink = PcfButton('#CloseExposurePopup-CloseExposurePopup_UpLink');
	closeExposureScreenCancel = PcfButton('#CloseExposurePopup-CloseExposureScreen-Cancel');
	closeExposureInfoDVNote = PcfTextInput('#CloseExposurePopup-CloseExposureScreen-CloseExposureInfoDV-Note');
	closeExposureInfoDVOutcome = PcfSelectInput('#CloseExposurePopup-CloseExposureScreen-CloseExposureInfoDV-Outcome');
	closeExposureScreenEdit = PcfButton('#CloseExposurePopup-CloseExposureScreen-Edit');
	closeExposureScreenUpdate = PcfButton('#CloseExposurePopup-CloseExposureScreen-Update');
	closeExposureScreen_msgs = PcfButton('#CloseExposurePopup-CloseExposureScreen-_msgs');
	closeExposurePopup_Paging = PcfButton('#CloseExposurePopup-_Paging');
	closeExposurePopup__crumb__ = PcfComponent('#CloseExposurePopup-__crumb__');
}
