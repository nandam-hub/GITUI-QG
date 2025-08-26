import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ClaimDocuments {
	claimDocumentsClaimDocuments_UpLink = PcfButton('#ClaimDocuments-ClaimDocuments_UpLink');
	claimDocumentSearchDVAuthor = PcfTextInput('#ClaimDocuments-Claim_DocumentsScreen-ClaimDocumentSearchDV-Author');
	claimDocumentSearchDVIncludeObsoletes = PcfComponent('#ClaimDocuments-Claim_DocumentsScreen-ClaimDocumentSearchDV-IncludeObsoletes');
	claimDocumentSearchDVLanguage = PcfSelectInput('#ClaimDocuments-Claim_DocumentsScreen-ClaimDocumentSearchDV-Language');
	claimDocumentSearchDVNameOrID = PcfTextInput('#ClaimDocuments-Claim_DocumentsScreen-ClaimDocumentSearchDV-NameOrID');
	claimDocumentSearchDVRelatedTo = PcfSelectInput('#ClaimDocuments-Claim_DocumentsScreen-ClaimDocumentSearchDV-RelatedTo');
	claimDocumentsClaim_DocumentsScreenClaimDocumentSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#ClaimDocuments-Claim_DocumentsScreen-ClaimDocumentSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	claimDocumentsClaim_DocumentsScreenClaimDocumentSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#ClaimDocuments-Claim_DocumentsScreen-ClaimDocumentSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	claimDocumentSearchDVSection = PcfSelectInput('#ClaimDocuments-Claim_DocumentsScreen-ClaimDocumentSearchDV-Section');
	claimDocumentSearchDVStatus = PcfSelectInput('#ClaimDocuments-Claim_DocumentsScreen-ClaimDocumentSearchDV-Status');
	claim_DocumentsScreenDocumentsLV = PcfListView('#ClaimDocuments-Claim_DocumentsScreen-DocumentsLV');
	documentsLV_tbAddDocuments = PcfButton('#ClaimDocuments-Claim_DocumentsScreen-DocumentsLV_tb-AddDocuments');
	addDocumentsClaimNewDocumentMenuItemSet = PcfComponent('#ClaimDocuments-Claim_DocumentsScreen-DocumentsLV_tb-AddDocuments-ClaimNewDocumentMenuItemSet');
	claimNewDocumentMenuItemSetClaimNewDocumentMenuItemSet_Create = PcfComponent('#ClaimDocuments-Claim_DocumentsScreen-DocumentsLV_tb-AddDocuments-ClaimNewDocumentMenuItemSet-ClaimNewDocumentMenuItemSet_Create');
	claimNewDocumentMenuItemSetClaimNewDocumentMenuItemSet_IndicateExists = PcfComponent('#ClaimDocuments-Claim_DocumentsScreen-DocumentsLV_tb-AddDocuments-ClaimNewDocumentMenuItemSet-ClaimNewDocumentMenuItemSet_IndicateExists');
	claimNewDocumentMenuItemSetClaimNewDocumentMenuItemSet_Link = PcfComponent('#ClaimDocuments-Claim_DocumentsScreen-DocumentsLV_tb-AddDocuments-ClaimNewDocumentMenuItemSet-ClaimNewDocumentMenuItemSet_Link');
	documentsLV_tbClaimDocuments_DeobsolesceButton = PcfButton('#ClaimDocuments-Claim_DocumentsScreen-DocumentsLV_tb-ClaimDocuments_DeobsolesceButton');
	documentsLV_tbClaimDocuments_ObsolesceButton = PcfButton('#ClaimDocuments-Claim_DocumentsScreen-DocumentsLV_tb-ClaimDocuments_ObsolesceButton');
	documentsLV_tbRefreshAsyncContent = PcfButton('#ClaimDocuments-Claim_DocumentsScreen-DocumentsLV_tb-RefreshAsyncContent');
	documentsLV_tbRemoveDocuments = PcfButton('#ClaimDocuments-Claim_DocumentsScreen-DocumentsLV_tb-RemoveDocuments');
	claim_DocumentsScreenIDCSDisabledAlert = PcfButton('#ClaimDocuments-Claim_DocumentsScreen-IDCSDisabledAlert');
	iDCSDisabledAlertCloseBtn = PcfButton('#ClaimDocuments-Claim_DocumentsScreen-IDCSDisabledAlert-CloseBtn');
	claim_DocumentsScreenIDCSUnavailableAlert = PcfButton('#ClaimDocuments-Claim_DocumentsScreen-IDCSUnavailableAlert');
	iDCSUnavailableAlertCloseBtn = PcfButton('#ClaimDocuments-Claim_DocumentsScreen-IDCSUnavailableAlert-CloseBtn');
	claim_DocumentsScreenIDMSUnavailableAlert = PcfButton('#ClaimDocuments-Claim_DocumentsScreen-IDMSUnavailableAlert');
	iDMSUnavailableAlertCloseBtn = PcfButton('#ClaimDocuments-Claim_DocumentsScreen-IDMSUnavailableAlert-CloseBtn');
	claim_DocumentsScreen_msgs = PcfButton('#ClaimDocuments-Claim_DocumentsScreen-_msgs');
	claimDocuments_Paging = PcfButton('#ClaimDocuments-_Paging');
	claimDocuments__crumb__ = PcfComponent('#ClaimDocuments-__crumb__');
}
