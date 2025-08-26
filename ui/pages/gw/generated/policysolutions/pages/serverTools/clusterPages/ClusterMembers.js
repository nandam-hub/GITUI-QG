import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ClusterMembers {
	clusterMembersDVClusterId = PcfTextInput('#ClusterMembers-ClusterMembersScreen-ClusterMembersDV-ClusterId');
	clusterMembersDVHost = PcfTextInput('#ClusterMembers-ClusterMembersScreen-ClusterMembersDV-Host');
	clusterMembersDVServerId = PcfTextInput('#ClusterMembers-ClusterMembersScreen-ClusterMembersDV-ServerId');
	clusterMembersDVServerRoles = PcfTextInput('#ClusterMembers-ClusterMembersScreen-ClusterMembersDV-ServerRoles');
	clusterMembersDVUuid = PcfTextInput('#ClusterMembers-ClusterMembersScreen-ClusterMembersDV-Uuid');
	clusterMembersScreenClusterMembersLV = PcfListView('#ClusterMembers-ClusterMembersScreen-ClusterMembersLV');
	clusterMembersScreenClusterReconnect = PcfButton('#ClusterMembers-ClusterMembersScreen-ClusterReconnect');
	clusterMembersScreenComponentsLV = PcfListView('#ClusterMembers-ClusterMembersScreen-ComponentsLV');
	clusterMembersScreenComponentsTabTab = PcfButton('#ClusterMembers-ClusterMembersScreen-ComponentsTabTab');
	clusterMembersScreenDownloadReport = PcfButton('#ClusterMembers-ClusterMembersScreen-DownloadReport');
	clusterMembersScreenHistoryLV = PcfListView('#ClusterMembers-ClusterMembersScreen-HistoryLV');
	clusterMembersScreenHistoryTabTab = PcfButton('#ClusterMembers-ClusterMembersScreen-HistoryTabTab');
	clusterMembersScreenShowUnusedRoles = PcfButton('#ClusterMembers-ClusterMembersScreen-ShowUnusedRoles');
	clusterMembersScreen_msgs = PcfButton('#ClusterMembers-ClusterMembersScreen-_msgs');
	clusterMembersClusterMembers_UpLink = PcfButton('#ClusterMembers-ClusterMembers_UpLink');
	clusterMembers_Paging = PcfButton('#ClusterMembers-_Paging');
	clusterMembers__crumb__ = PcfComponent('#ClusterMembers-__crumb__');
}
