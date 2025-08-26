import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ArchiveClaimRetrievePopup {
	archiveClaimRetrievePopupScreenArchiveClaimRetrieveLV = PcfListView('#ArchiveClaimRetrievePopup-ArchiveClaimRetrievePopupScreen-ArchiveClaimRetrieveLV');
	archiveClaimRetrievePopupScreenDone = PcfButton('#ArchiveClaimRetrievePopup-ArchiveClaimRetrievePopupScreen-Done');
	archiveClaimRetrievePopupScreenRestore = PcfButton('#ArchiveClaimRetrievePopup-ArchiveClaimRetrievePopupScreen-Restore');
	retrieveClaimInfoDVComment = PcfTextInput('#ArchiveClaimRetrievePopup-ArchiveClaimRetrievePopupScreen-RetrieveClaimInfoDV-Comment');
	archiveClaimRetrievePopupScreen_msgs = PcfButton('#ArchiveClaimRetrievePopup-ArchiveClaimRetrievePopupScreen-_msgs');
	archiveClaimRetrievePopupArchiveClaimRetrievePopup_UpLink = PcfButton('#ArchiveClaimRetrievePopup-ArchiveClaimRetrievePopup_UpLink');
	archiveClaimRetrievePopup_Paging = PcfButton('#ArchiveClaimRetrievePopup-_Paging');
	archiveClaimRetrievePopup__crumb__ = PcfComponent('#ArchiveClaimRetrievePopup-__crumb__');
}
