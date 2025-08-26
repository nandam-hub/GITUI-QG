import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class UpgradeInfo {
	upgradeInfoScreenBlueGreenComplete = PcfButton('#UpgradeInfo-UpgradeInfoScreen-BlueGreenComplete');
	upgradeInfoScreenBlueGreenEnableGreenCluster = PcfButton('#UpgradeInfo-UpgradeInfoScreen-BlueGreenEnableGreenCluster');
	upgradeInfoScreenBlueGreenEnableSchemaMigration = PcfButton('#UpgradeInfo-UpgradeInfoScreen-BlueGreenEnableSchemaMigration');
	upgradeInfoScreenCancel = PcfButton('#UpgradeInfo-UpgradeInfoScreen-Cancel');
	upgradeInfoScreenCancelFull = PcfButton('#UpgradeInfo-UpgradeInfoScreen-CancelFull');
	upgradeInfoScreenForceBackout = PcfButton('#UpgradeInfo-UpgradeInfoScreen-ForceBackout');
	upgradeInfoScreenForceCancel = PcfButton('#UpgradeInfo-UpgradeInfoScreen-ForceCancel');
	upgradeInfoScreenInitiateBackout = PcfButton('#UpgradeInfo-UpgradeInfoScreen-InitiateBackout');
	upgradeInfoScreenRefreshButton = PcfButton('#UpgradeInfo-UpgradeInfoScreen-RefreshButton');
	upgradeInfoScreenRollingComplete = PcfButton('#UpgradeInfo-UpgradeInfoScreen-RollingComplete');
	upgradeInfoScreenStartBlueGreen = PcfButton('#UpgradeInfo-UpgradeInfoScreen-StartBlueGreen');
	upgradeInfoScreenStartFull = PcfButton('#UpgradeInfo-UpgradeInfoScreen-StartFull');
	upgradeInfoScreenStartRolling = PcfButton('#UpgradeInfo-UpgradeInfoScreen-StartRolling');
	statisticsPanelSetBatchProcessHeader = PcfButton('#UpgradeInfo-UpgradeInfoScreen-StatisticsPanelSet-BatchProcessHeader');
	statisticsPanelSetCompleteDateHeader = PcfButton('#UpgradeInfo-UpgradeInfoScreen-StatisticsPanelSet-CompleteDateHeader');
	statisticsPanelSetFailedOpsHeader = PcfButton('#UpgradeInfo-UpgradeInfoScreen-StatisticsPanelSet-FailedOpsHeader');
	statisticsPanelSetFailureReasonHeader = PcfButton('#UpgradeInfo-UpgradeInfoScreen-StatisticsPanelSet-FailureReasonHeader');
	statisticsPanelSetOpsPerformedHeader = PcfButton('#UpgradeInfo-UpgradeInfoScreen-StatisticsPanelSet-OpsPerformedHeader');
	statisticsPanelSetStartDateHeader = PcfButton('#UpgradeInfo-UpgradeInfoScreen-StatisticsPanelSet-StartDateHeader');
	statisticsPanelSet_ListPaging = PcfButton('#UpgradeInfo-UpgradeInfoScreen-StatisticsPanelSet-_ListPaging');
	upgradeInstancesDVBackOutProgress = PcfButton('#UpgradeInfo-UpgradeInfoScreen-UpgradeInstancesDV-BackOutProgress');
	upgradeInstancesDVUpgradeInfoLV = PcfListView('#UpgradeInfo-UpgradeInfoScreen-UpgradeInstancesDV-UpgradeInfoLV');
	upgradeInfoScreen_msgs = PcfButton('#UpgradeInfo-UpgradeInfoScreen-_msgs');
	upgradeInfoUpgradeInfo_UpLink = PcfButton('#UpgradeInfo-UpgradeInfo_UpLink');
	upgradeInfo_Paging = PcfButton('#UpgradeInfo-_Paging');
	upgradeInfo__crumb__ = PcfComponent('#UpgradeInfo-__crumb__');
}
