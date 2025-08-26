import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ActivityPatterns {
	activityPatternsScreenActivityPatternsLV = PcfListView('#ActivityPatterns-ActivityPatternsScreen-ActivityPatternsLV');
	activityPatternsScreenActivityPatterns_DeleteButton = PcfButton('#ActivityPatterns-ActivityPatternsScreen-ActivityPatterns_DeleteButton');
	activityPatternsScreenActivityPatterns_NewActivityPatternButton = PcfButton('#ActivityPatterns-ActivityPatternsScreen-ActivityPatterns_NewActivityPatternButton');
	activityPatternsScreen_msgs = PcfButton('#ActivityPatterns-ActivityPatternsScreen-_msgs');
	activityPatternsActivityPatterns_UpLink = PcfButton('#ActivityPatterns-ActivityPatterns_UpLink');
	activityPatterns_Paging = PcfButton('#ActivityPatterns-_Paging');
	activityPatterns__crumb__ = PcfComponent('#ActivityPatterns-__crumb__');
}
