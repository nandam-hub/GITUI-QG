import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class ContactDocumentDetailsPopup {
	contactDocumentDetailsInputSetAuthor = PcfTextInput('#ContactDocumentDetailsPopup-ContactDocumentDetailsInputSet-Author');
	contactDocumentDetailsInputSetDescription = PcfTextInput('#ContactDocumentDetailsPopup-ContactDocumentDetailsInputSet-Description');
	contactDocumentDetailsInputSetLanguage = PcfSelectInput('#ContactDocumentDetailsPopup-ContactDocumentDetailsInputSet-Language');
	contactDocumentDetailsInputSetMimeType = PcfTextInput('#ContactDocumentDetailsPopup-ContactDocumentDetailsInputSet-MimeType');
	contactDocumentDetailsInputSetNameLink = PcfButton('#ContactDocumentDetailsPopup-ContactDocumentDetailsInputSet-NameLink');
	contactDocumentDetailsInputSetObsolete = PcfComponent('#ContactDocumentDetailsPopup-ContactDocumentDetailsInputSet-Obsolete');
	contactDocumentDetailsInputSetRecipient = PcfTextInput('#ContactDocumentDetailsPopup-ContactDocumentDetailsInputSet-Recipient');
	contactDocumentDetailsInputSetSecurityType = PcfSelectInput('#ContactDocumentDetailsPopup-ContactDocumentDetailsInputSet-SecurityType');
	contactDocumentDetailsInputSetStatus = PcfSelectInput('#ContactDocumentDetailsPopup-ContactDocumentDetailsInputSet-Status');
	contactDocumentDetailsInputSetType = PcfSelectInput('#ContactDocumentDetailsPopup-ContactDocumentDetailsInputSet-Type');
	contactDocumentDetailsPopupContactDocumentDetailsPopup_UpLink = PcfButton('#ContactDocumentDetailsPopup-ContactDocumentDetailsPopup_UpLink');
	contactDocumentDetailsPopupContentlessNoActionsText = PcfButton('#ContactDocumentDetailsPopup-ContentlessNoActionsText');
	contentlessNoActionsTextCloseBtn = PcfButton('#ContactDocumentDetailsPopup-ContentlessNoActionsText-CloseBtn');
	contactDocumentDetailsPopupDownloadLink = PcfButton('#ContactDocumentDetailsPopup-DownloadLink');
	contactDocumentDetailsPopup_Paging = PcfButton('#ContactDocumentDetailsPopup-_Paging');
	contactDocumentDetailsPopup__crumb__ = PcfComponent('#ContactDocumentDetailsPopup-__crumb__');
	contactDocumentDetailsPopup_msgs = PcfButton('#ContactDocumentDetailsPopup-_msgs');
}
