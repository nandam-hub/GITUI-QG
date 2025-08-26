import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class LoadHistoryInfo {
	loadHistoryInfoScreenLoadHistoryLV = PcfListView('#LoadHistoryInfo-LoadHistoryInfoScreen-LoadHistoryLV');
	loadHistoryLV_tbCancel = PcfButton('#LoadHistoryInfo-LoadHistoryInfoScreen-LoadHistoryLV_tb-Cancel');
	loadHistoryLV_tbEdit = PcfButton('#LoadHistoryInfo-LoadHistoryInfoScreen-LoadHistoryLV_tb-Edit');
	loadHistoryLV_tbLoadHistoryInfo_RefreshButton = PcfButton('#LoadHistoryInfo-LoadHistoryInfoScreen-LoadHistoryLV_tb-LoadHistoryInfo_RefreshButton');
	loadHistoryLV_tbUpdate = PcfButton('#LoadHistoryInfo-LoadHistoryInfoScreen-LoadHistoryLV_tb-Update');
	loadHistoryInfoScreen_msgs = PcfButton('#LoadHistoryInfo-LoadHistoryInfoScreen-_msgs');
	loadHistoryInfoLoadHistoryInfo_UpLink = PcfButton('#LoadHistoryInfo-LoadHistoryInfo_UpLink');
	loadHistoryInfo_Paging = PcfButton('#LoadHistoryInfo-_Paging');
	loadHistoryInfo__crumb__ = PcfComponent('#LoadHistoryInfo-__crumb__');
}
