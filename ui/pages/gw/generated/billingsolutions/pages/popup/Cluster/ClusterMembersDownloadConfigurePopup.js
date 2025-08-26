import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class ClusterMembersDownloadConfigurePopup {
	clusterMembersDownloadConfigurePopupClusterMembersDownloadConfigurePopup_UpLink = PcfButton('#ClusterMembersDownloadConfigurePopup-ClusterMembersDownloadConfigurePopup_UpLink');
	clusterMembersDownloadConfigurePopupCompleteDownload = PcfButton('#ClusterMembersDownloadConfigurePopup-CompleteDownload');
	clusterMembersDownloadConfigurePopupIncludeHistory = PcfCheckBox('#ClusterMembersDownloadConfigurePopup-IncludeHistory');
	clusterMembersDownloadConfigurePopupMaxHistoryRecords = PcfTextInput('#ClusterMembersDownloadConfigurePopup-MaxHistoryRecords');
	clusterMembersDownloadConfigurePopup_Paging = PcfButton('#ClusterMembersDownloadConfigurePopup-_Paging');
	clusterMembersDownloadConfigurePopup__crumb__ = PcfComponent('#ClusterMembersDownloadConfigurePopup-__crumb__');
	clusterMembersDownloadConfigurePopup_msgs = PcfButton('#ClusterMembersDownloadConfigurePopup-_msgs');
}
