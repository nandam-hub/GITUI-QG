import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class ICDCodePopup {
	iCDCodePopupCancelButton = PcfButton('#ICDCodePopup-CancelButton');
	iCDCodePopupChronicHeader = PcfButton('#ICDCodePopup-ChronicHeader');
	iCDCodePopupCodeDescHeader = PcfButton('#ICDCodePopup-CodeDescHeader');
	iCDCodePopupExpiryDateHeader = PcfButton('#ICDCodePopup-ExpiryDateHeader');
	iCDCodePopupFindCode = PcfTextInput('#ICDCodePopup-FindCode');
	iCDCodePopupFind_Body_System = PcfSelectInput('#ICDCodePopup-Find_Body_System');
	iCDCodePopupICDCodeHeader = PcfButton('#ICDCodePopup-ICDCodeHeader');
	iCDCodePopupICDCodePopup_UpLink = PcfButton('#ICDCodePopup-ICDCodePopup_UpLink');
	iCDCodePopupSearchButton = PcfButton('#ICDCodePopup-SearchButton');
	iCDCodePopup_ListPaging = PcfButton('#ICDCodePopup-_ListPaging');
	iCDCodePopup_Paging = PcfButton('#ICDCodePopup-_Paging');
	iCDCodePopup__crumb__ = PcfComponent('#ICDCodePopup-__crumb__');
	iCDCodePopup_msgs = PcfButton('#ICDCodePopup-_msgs');
}
