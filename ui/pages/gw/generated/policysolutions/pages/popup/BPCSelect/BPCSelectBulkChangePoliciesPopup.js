import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class BPCSelectBulkChangePoliciesPopup {
	bPCGetPolicyListScreenCancel = PcfButton('#BPCSelectBulkChangePoliciesPopup-BPCGetPolicyListScreen-Cancel');
	bPCGetPolicyListScreenEdit = PcfButton('#BPCSelectBulkChangePoliciesPopup-BPCGetPolicyListScreen-Edit');
	bPCGetPolicyListScreenFile = PcfButton('#BPCSelectBulkChangePoliciesPopup-BPCGetPolicyListScreen-File');
	bPCGetPolicyListScreenHiddenTestInput = PcfTextInput('#BPCSelectBulkChangePoliciesPopup-BPCGetPolicyListScreen-HiddenTestInput');
	bPCGetPolicyListScreenListPolicy = PcfTextInput('#BPCSelectBulkChangePoliciesPopup-BPCGetPolicyListScreen-ListPolicy');
	bPCGetPolicyListScreenSelectionMethod = PcfSelectInput('#BPCSelectBulkChangePoliciesPopup-BPCGetPolicyListScreen-SelectionMethod');
	bPCGetPolicyListScreenUpdate = PcfButton('#BPCSelectBulkChangePoliciesPopup-BPCGetPolicyListScreen-Update');
	bPCGetPolicyListScreen_msgs = PcfButton('#BPCSelectBulkChangePoliciesPopup-BPCGetPolicyListScreen-_msgs');
	bPCSelectBulkChangePoliciesPopupBPCSelectBulkChangePoliciesPopup_UpLink = PcfButton('#BPCSelectBulkChangePoliciesPopup-BPCSelectBulkChangePoliciesPopup_UpLink');
	bPCSelectBulkChangePoliciesPopup_Paging = PcfButton('#BPCSelectBulkChangePoliciesPopup-_Paging');
	bPCSelectBulkChangePoliciesPopup__crumb__ = PcfComponent('#BPCSelectBulkChangePoliciesPopup-__crumb__');
}
