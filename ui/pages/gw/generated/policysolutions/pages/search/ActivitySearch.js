import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ActivitySearch {
	activitySearchScreenActivitiesSearchLV = PcfListView('#ActivitySearch-ActivitySearchScreen-ActivitiesSearchLV');
	activitiesSearchLV_tbActivitySearch_AssignButton = PcfButton('#ActivitySearch-ActivitySearchScreen-ActivitiesSearchLV_tb-ActivitySearch_AssignButton');
	activitiesSearchLV_tbActivitySearch_CompleteButton = PcfButton('#ActivitySearch-ActivitySearchScreen-ActivitiesSearchLV_tb-ActivitySearch_CompleteButton');
	activitiesSearchLV_tbActivitySearch_SkipButton = PcfButton('#ActivitySearch-ActivitySearchScreen-ActivitiesSearchLV_tb-ActivitySearch_SkipButton');
	activitiesSearchLV_tbPrintMe = PcfButton('#ActivitySearch-ActivitySearchScreen-ActivitiesSearchLV_tb-PrintMe');
	activitySearchDVAccountNumber = PcfTextInput('#ActivitySearch-ActivitySearchScreen-ActivitySearchDV-AccountNumber');
	activitySearchDVActivityPriority = PcfSelectInput('#ActivitySearch-ActivitySearchScreen-ActivitySearchDV-ActivityPriority');
	activitySearchDVActivityStatus = PcfSelectInput('#ActivitySearch-ActivitySearchScreen-ActivitySearchDV-ActivityStatus');
	assignedUserUserBrowseMenuItem = PcfComponent('#ActivitySearch-ActivitySearchScreen-ActivitySearchDV-AssignedUser-UserBrowseMenuItem');
	activitySearchDVOverdueNow = PcfComponent('#ActivitySearch-ActivitySearchScreen-ActivitySearchDV-OverdueNow');
	activitySearchDVPolicyNumber = PcfTextInput('#ActivitySearch-ActivitySearchScreen-ActivitySearchDV-PolicyNumber');
	activitySearchActivitySearchScreenActivitySearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#ActivitySearch-ActivitySearchScreen-ActivitySearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	activitySearchActivitySearchScreenActivitySearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#ActivitySearch-ActivitySearchScreen-ActivitySearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	activitySearchScreen_msgs = PcfButton('#ActivitySearch-ActivitySearchScreen-_msgs');
	activitySearchActivitySearch_UpLink = PcfButton('#ActivitySearch-ActivitySearch_UpLink');
	activitySearch_Paging = PcfButton('#ActivitySearch-_Paging');
	activitySearch__crumb__ = PcfComponent('#ActivitySearch-__crumb__');
}
