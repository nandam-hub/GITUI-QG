import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class SubmissionManager {
	submissionManagerScreenSubmissionManagerLV = PcfListView('#SubmissionManager-SubmissionManagerScreen-SubmissionManagerLV');
	submissionManagerScreenSubmissionManager_NewSubmission = PcfButton('#SubmissionManager-SubmissionManagerScreen-SubmissionManager_NewSubmission');
	submissionManagerScreenSubmissionManager_RefreshButton = PcfButton('#SubmissionManager-SubmissionManagerScreen-SubmissionManager_RefreshButton');
	submissionManagerScreen_msgs = PcfButton('#SubmissionManager-SubmissionManagerScreen-_msgs');
	submissionManagerSubmissionManager_UpLink = PcfButton('#SubmissionManager-SubmissionManager_UpLink');
	submissionManager_Paging = PcfButton('#SubmissionManager-_Paging');
	submissionManager__crumb__ = PcfComponent('#SubmissionManager-__crumb__');
}
