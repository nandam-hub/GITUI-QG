import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { ClaimDocuments } from './ClaimDocuments';

export class ClaimDocuments_Ext extends ClaimDocuments{

    uploadDocumentScreen_FileInput_Button=PcfComponent('#ClaimNewDocumentLinkedWorksheet-UploadDocumentScreen-FileInput--browseButton')
    DocumentDetailsEdit= PcfComponent('#ClaimNewDocumentLinkedWorksheet-UploadDocumentScreen-DocumentDetailsEditLVPanelSet-DocumentDetailsEditLV-0-Name')
}
