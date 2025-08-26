import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class PickExistingDocumentPopup {
	pickExistingDocumentPopupClaim_DocumentsScreenClaimDocumentSearchDVAuthor = PcfTextInput('#PickExistingDocumentPopup-Claim_DocumentsScreen-ClaimDocumentSearchDV-Author');
	pickExistingDocumentPopupClaim_DocumentsScreenClaimDocumentSearchDVIncludeObsoletes = PcfComponent('#PickExistingDocumentPopup-Claim_DocumentsScreen-ClaimDocumentSearchDV-IncludeObsoletes');
	pickExistingDocumentPopupClaim_DocumentsScreenClaimDocumentSearchDVLanguage = PcfSelectInput('#PickExistingDocumentPopup-Claim_DocumentsScreen-ClaimDocumentSearchDV-Language');
	pickExistingDocumentPopupClaim_DocumentsScreenClaimDocumentSearchDVNameOrID = PcfTextInput('#PickExistingDocumentPopup-Claim_DocumentsScreen-ClaimDocumentSearchDV-NameOrID');
	pickExistingDocumentPopupClaim_DocumentsScreenClaimDocumentSearchDVRelatedTo = PcfSelectInput('#PickExistingDocumentPopup-Claim_DocumentsScreen-ClaimDocumentSearchDV-RelatedTo');
	pickExistingDocumentPopupClaim_DocumentsScreenClaimDocumentSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#PickExistingDocumentPopup-Claim_DocumentsScreen-ClaimDocumentSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	pickExistingDocumentPopupClaim_DocumentsScreenClaimDocumentSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#PickExistingDocumentPopup-Claim_DocumentsScreen-ClaimDocumentSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	pickExistingDocumentPopupClaim_DocumentsScreenClaimDocumentSearchDVSection = PcfSelectInput('#PickExistingDocumentPopup-Claim_DocumentsScreen-ClaimDocumentSearchDV-Section');
	pickExistingDocumentPopupClaim_DocumentsScreenClaimDocumentSearchDVStatus = PcfSelectInput('#PickExistingDocumentPopup-Claim_DocumentsScreen-ClaimDocumentSearchDV-Status');
	claim_DocumentsScreenPickExistingDocumentPopup_CancelButton = PcfButton('#PickExistingDocumentPopup-Claim_DocumentsScreen-PickExistingDocumentPopup_CancelButton');
	claim_DocumentsScreenPickExistingDocumentsLV = PcfListView('#PickExistingDocumentPopup-Claim_DocumentsScreen-PickExistingDocumentsLV');
	pickExistingDocumentPopupClaim_DocumentsScreen_msgs = PcfButton('#PickExistingDocumentPopup-Claim_DocumentsScreen-_msgs');
	pickExistingDocumentPopupPickExistingDocumentPopup_UpLink = PcfButton('#PickExistingDocumentPopup-PickExistingDocumentPopup_UpLink');
	pickExistingDocumentPopup_Paging = PcfButton('#PickExistingDocumentPopup-_Paging');
	pickExistingDocumentPopup__crumb__ = PcfComponent('#PickExistingDocumentPopup-__crumb__');
}
