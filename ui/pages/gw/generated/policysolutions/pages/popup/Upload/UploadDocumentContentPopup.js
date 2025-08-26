import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class UploadDocumentContentPopup {
	uploadDocumentContentPopupCancel = PcfButton('#UploadDocumentContentPopup-Cancel');
	uploadDocumentContentPopupEdit = PcfButton('#UploadDocumentContentPopup-Edit');
	uploadDocumentContentPopupUpdate = PcfButton('#UploadDocumentContentPopup-Update');
	uploadDVAttachment = PcfButton('#UploadDocumentContentPopup-UploadDV-Attachment');
	uploadDVDocType = PcfTextInput('#UploadDocumentContentPopup-UploadDV-DocType');
	uploadDocumentContentPopupUploadDocumentContentPopup_UpLink = PcfButton('#UploadDocumentContentPopup-UploadDocumentContentPopup_UpLink');
	uploadDocumentContentPopup_Paging = PcfButton('#UploadDocumentContentPopup-_Paging');
	uploadDocumentContentPopup__crumb__ = PcfComponent('#UploadDocumentContentPopup-__crumb__');
	uploadDocumentContentPopup_msgs = PcfButton('#UploadDocumentContentPopup-_msgs');
}
