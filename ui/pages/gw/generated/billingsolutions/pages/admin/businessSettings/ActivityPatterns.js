import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ActivityPatterns {
	activityPatternsScreenActivityPatternsLV = PcfListView('#ActivityPatterns-ActivityPatternsScreen-ActivityPatternsLV');
	activityPatternsLV_tbActivityPatterns_DeleteButton = PcfButton('#ActivityPatterns-ActivityPatternsScreen-ActivityPatternsLV_tb-ActivityPatterns_DeleteButton');
	activityPatternsLV_tbActivityPatterns_NewActivityPatternButton = PcfButton('#ActivityPatterns-ActivityPatternsScreen-ActivityPatternsLV_tb-ActivityPatterns_NewActivityPatternButton');
	activityPatternsScreen_msgs = PcfButton('#ActivityPatterns-ActivityPatternsScreen-_msgs');
	activityPatternsActivityPatterns_UpLink = PcfButton('#ActivityPatterns-ActivityPatterns_UpLink');
	activityPatterns_Paging = PcfButton('#ActivityPatterns-_Paging');
	activityPatterns__crumb__ = PcfComponent('#ActivityPatterns-__crumb__');
}
