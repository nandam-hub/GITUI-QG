import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class AccountNewLOCPopup {
	accountNewLOCPopupAccountNewLOCPopup_UpLink = PcfButton('#AccountNewLOCPopup-AccountNewLOCPopup_UpLink');
	accountNewLOCScreenCancel = PcfButton('#AccountNewLOCPopup-AccountNewLOCScreen-Cancel');
	accountNewLOCScreenEdit = PcfButton('#AccountNewLOCPopup-AccountNewLOCScreen-Edit');
	lOCDVExpirationDate = PcfDateValueInput('#AccountNewLOCPopup-AccountNewLOCScreen-LOCDV-ExpirationDate');
	lOCDVamount = PcfTextInput('#AccountNewLOCPopup-AccountNewLOCScreen-LOCDV-amount');
	lOCDVbankName = PcfTextInput('#AccountNewLOCPopup-AccountNewLOCScreen-LOCDV-bankName');
	lOCDVidInput = PcfTextInput('#AccountNewLOCPopup-AccountNewLOCScreen-LOCDV-idInput');
	accountNewLOCScreenUpdate = PcfButton('#AccountNewLOCPopup-AccountNewLOCScreen-Update');
	accountNewLOCScreen_msgs = PcfButton('#AccountNewLOCPopup-AccountNewLOCScreen-_msgs');
	accountNewLOCPopup_Paging = PcfButton('#AccountNewLOCPopup-_Paging');
	accountNewLOCPopup__crumb__ = PcfComponent('#AccountNewLOCPopup-__crumb__');
}
