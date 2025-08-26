import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class EditLOCPopup {
	editLOCPopupEditLOCPopup_UpLink = PcfButton('#EditLOCPopup-EditLOCPopup_UpLink');
	editLOCScreenCancel = PcfButton('#EditLOCPopup-EditLOCScreen-Cancel');
	editLOCScreenEdit = PcfButton('#EditLOCPopup-EditLOCScreen-Edit');
	editLOCPopupEditLOCScreenLOCDVExpirationDate = PcfDateValueInput('#EditLOCPopup-EditLOCScreen-LOCDV-ExpirationDate');
	editLOCPopupEditLOCScreenLOCDVamount = PcfTextInput('#EditLOCPopup-EditLOCScreen-LOCDV-amount');
	editLOCPopupEditLOCScreenLOCDVbankName = PcfTextInput('#EditLOCPopup-EditLOCScreen-LOCDV-bankName');
	editLOCPopupEditLOCScreenLOCDVidInput = PcfTextInput('#EditLOCPopup-EditLOCScreen-LOCDV-idInput');
	editLOCScreenUpdate = PcfButton('#EditLOCPopup-EditLOCScreen-Update');
	editLOCScreen_msgs = PcfButton('#EditLOCPopup-EditLOCScreen-_msgs');
	editLOCPopup_Paging = PcfButton('#EditLOCPopup-_Paging');
	editLOCPopup__crumb__ = PcfComponent('#EditLOCPopup-__crumb__');
}
