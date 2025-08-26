import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class PickExistingDocumentPopup {
	pickExistingDocumentPopupDocumentsScreenDocumentSearchDVAuthor = PcfTextInput('#PickExistingDocumentPopup-DocumentsScreen-DocumentSearchDV-Author');
	pickExistingDocumentPopupDocumentsScreenDocumentSearchDVDateFrom = PcfDateValueInput('#PickExistingDocumentPopup-DocumentsScreen-DocumentSearchDV-DateFrom');
	pickExistingDocumentPopupDocumentsScreenDocumentSearchDVDateTo = PcfDateValueInput('#PickExistingDocumentPopup-DocumentsScreen-DocumentSearchDV-DateTo');
	pickExistingDocumentPopupDocumentsScreenDocumentSearchDVIncludeObsoletes = PcfComponent('#PickExistingDocumentPopup-DocumentsScreen-DocumentSearchDV-IncludeObsoletes');
	pickExistingDocumentPopupDocumentsScreenDocumentSearchDVLanguage = PcfSelectInput('#PickExistingDocumentPopup-DocumentsScreen-DocumentSearchDV-Language');
	pickExistingDocumentPopupDocumentsScreenDocumentSearchDVName = PcfTextInput('#PickExistingDocumentPopup-DocumentsScreen-DocumentSearchDV-Name');
	pickExistingDocumentPopupDocumentsScreenDocumentSearchDVRelatedTo = PcfSelectInput('#PickExistingDocumentPopup-DocumentsScreen-DocumentSearchDV-RelatedTo');
	pickExistingDocumentPopupDocumentsScreenDocumentSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#PickExistingDocumentPopup-DocumentsScreen-DocumentSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	pickExistingDocumentPopupDocumentsScreenDocumentSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#PickExistingDocumentPopup-DocumentsScreen-DocumentSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	pickExistingDocumentPopupDocumentsScreenDocumentSearchDVStatus = PcfSelectInput('#PickExistingDocumentPopup-DocumentsScreen-DocumentSearchDV-Status');
	documentsScreenPickExistingDocumentPopup_CancelButton = PcfButton('#PickExistingDocumentPopup-DocumentsScreen-PickExistingDocumentPopup_CancelButton');
	documentsScreenPickExistingDocumentsLV = PcfListView('#PickExistingDocumentPopup-DocumentsScreen-PickExistingDocumentsLV');
	pickExistingDocumentPopupDocumentsScreen_msgs = PcfButton('#PickExistingDocumentPopup-DocumentsScreen-_msgs');
	pickExistingDocumentPopupPickExistingDocumentPopup_UpLink = PcfButton('#PickExistingDocumentPopup-PickExistingDocumentPopup_UpLink');
	pickExistingDocumentPopup_Paging = PcfButton('#PickExistingDocumentPopup-_Paging');
	pickExistingDocumentPopup__crumb__ = PcfComponent('#PickExistingDocumentPopup-__crumb__');
}
