import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewManualUWIssuePopup {
	newManualUWIssuePopupCancel = PcfButton('#NewManualUWIssuePopup-Cancel');
	newManualUWIssuePopupEdit = PcfButton('#NewManualUWIssuePopup-Edit');
	newManualUWIssuePopupNewManualUWIssuePopup_UpLink = PcfButton('#NewManualUWIssuePopup-NewManualUWIssuePopup_UpLink');
	newUWIssueDelegateDVIssueType = PcfSelectInput('#NewManualUWIssuePopup-NewUWIssueDelegateDV-IssueType');
	newUWIssueDelegateDVLongDescription = PcfTextInput('#NewManualUWIssuePopup-NewUWIssueDelegateDV-LongDescription');
	newUWIssueDelegateDVShortDescription = PcfTextInput('#NewManualUWIssuePopup-NewUWIssueDelegateDV-ShortDescription');
	newUWIssueDelegateDVValue = PcfTextInput('#NewManualUWIssuePopup-NewUWIssueDelegateDV-Value');
	newManualUWIssuePopupUpdate = PcfButton('#NewManualUWIssuePopup-Update');
	newManualUWIssuePopup_Paging = PcfButton('#NewManualUWIssuePopup-_Paging');
	newManualUWIssuePopup__crumb__ = PcfComponent('#NewManualUWIssuePopup-__crumb__');
	newManualUWIssuePopup_msgs = PcfButton('#NewManualUWIssuePopup-_msgs');
}
