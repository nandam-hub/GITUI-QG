import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ClaimSyncStatusPopup {
	claimSyncStatusPopupClaimSyncStatusPopup_UpLink = PcfButton('#ClaimSyncStatusPopup-ClaimSyncStatusPopup_UpLink');
	claimSyncStatusScreenClaimSyncStatusPopup_ResyncButton = PcfButton('#ClaimSyncStatusPopup-ClaimSyncStatusScreen-ClaimSyncStatusPopup_ResyncButton');
	claimSyncStatusScreenClaimSyncStatusPopup_RetryButton = PcfButton('#ClaimSyncStatusPopup-ClaimSyncStatusScreen-ClaimSyncStatusPopup_RetryButton');
	claimSyncStatusScreenSyncStatusLV = PcfListView('#ClaimSyncStatusPopup-ClaimSyncStatusScreen-SyncStatusLV');
	claimSyncStatusScreen_msgs = PcfButton('#ClaimSyncStatusPopup-ClaimSyncStatusScreen-_msgs');
	claimSyncStatusPopup_Paging = PcfButton('#ClaimSyncStatusPopup-_Paging');
	claimSyncStatusPopup__crumb__ = PcfComponent('#ClaimSyncStatusPopup-__crumb__');
}
