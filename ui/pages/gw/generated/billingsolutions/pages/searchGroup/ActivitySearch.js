import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ActivitySearch {
	activitySearchDVActivityPatternCriterion = PcfSelectInput('#ActivitySearch-ActivitySearchScreen-ActivitySearchDV-ActivityPatternCriterion');
	assignedToUserCriterionUserBrowseMenuItem = PcfComponent('#ActivitySearch-ActivitySearchScreen-ActivitySearchDV-AssignedToUserCriterion-UserBrowseMenuItem');
	activitySearchActivitySearchScreenActivitySearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#ActivitySearch-ActivitySearchScreen-ActivitySearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	activitySearchActivitySearchScreenActivitySearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#ActivitySearch-ActivitySearchScreen-ActivitySearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	activitySearchScreenActivitySearchResultsLV = PcfListView('#ActivitySearch-ActivitySearchScreen-ActivitySearchResultsLV');
	activitySearchScreen_msgs = PcfButton('#ActivitySearch-ActivitySearchScreen-_msgs');
	activitySearchActivitySearch_UpLink = PcfButton('#ActivitySearch-ActivitySearch_UpLink');
	activitySearch_Paging = PcfButton('#ActivitySearch-_Paging');
	activitySearch__crumb__ = PcfComponent('#ActivitySearch-__crumb__');
}
