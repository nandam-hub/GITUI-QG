import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class EditReferenceNumberPopup {
	editReferenceNumberPopupCancel = PcfButton('#EditReferenceNumberPopup-Cancel');
	editReferenceNumberPopupEdit = PcfButton('#EditReferenceNumberPopup-Edit');
	editReferenceNumberPopupEditReferenceNumberPopup_UpLink = PcfButton('#EditReferenceNumberPopup-EditReferenceNumberPopup_UpLink');
	editReferenceNumberPopupServiceRequestReferenceNumber = PcfTextInput('#EditReferenceNumberPopup-ServiceRequestReferenceNumber');
	editReferenceNumberPopupUpdate = PcfButton('#EditReferenceNumberPopup-Update');
	editReferenceNumberPopup_Paging = PcfButton('#EditReferenceNumberPopup-_Paging');
	editReferenceNumberPopup__crumb__ = PcfComponent('#EditReferenceNumberPopup-__crumb__');
	editReferenceNumberPopup_msgs = PcfButton('#EditReferenceNumberPopup-_msgs');
}
