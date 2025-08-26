import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class CentipedeCacheInfo {
	centipedeCacheInfoCancel = PcfButton('#CentipedeCacheInfo-Cancel');
	centipedeCacheInfoCentipedeCacheInfo_UpLink = PcfButton('#CentipedeCacheInfo-CentipedeCacheInfo_UpLink');
	centipedeCacheInfoClearButton = PcfButton('#CentipedeCacheInfo-ClearButton');
	centipedeCacheInfoDownloadButton = PcfButton('#CentipedeCacheInfo-DownloadButton');
	centipedeCacheInfoEdit = PcfButton('#CentipedeCacheInfo-Edit');
	centipedeCacheInfoMaxCacheSpace = PcfTextInput('#CentipedeCacheInfo-MaxCacheSpace');
	centipedeCacheInfoRefreshButton = PcfButton('#CentipedeCacheInfo-RefreshButton');
	centipedeCacheInfoStaleTime = PcfTextInput('#CentipedeCacheInfo-StaleTime');
	centipedeCacheInfoTimestamp = PcfDateValueInput('#CentipedeCacheInfo-Timestamp');
	centipedeCacheInfoUpdate = PcfButton('#CentipedeCacheInfo-Update');
	centipedeCacheInfo_Paging = PcfButton('#CentipedeCacheInfo-_Paging');
	centipedeCacheInfo__crumb__ = PcfComponent('#CentipedeCacheInfo-__crumb__');
	centipedeCacheInfo_msgs = PcfButton('#CentipedeCacheInfo-_msgs');
}
