import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class SelectBulkChangePoliciesPopup {
	bulkChangeGetPolicyListScreenCancel = PcfButton('#SelectBulkChangePoliciesPopup-BulkChangeGetPolicyListScreen-Cancel');
	bulkChangeGetPolicyListScreenEdit = PcfButton('#SelectBulkChangePoliciesPopup-BulkChangeGetPolicyListScreen-Edit');
	bulkChangeGetPolicyListScreenFile = PcfButton('#SelectBulkChangePoliciesPopup-BulkChangeGetPolicyListScreen-File');
	bulkChangeGetPolicyListScreenListPolicy = PcfTextInput('#SelectBulkChangePoliciesPopup-BulkChangeGetPolicyListScreen-ListPolicy');
	bulkChangeGetPolicyListScreenSelectionMethod = PcfSelectInput('#SelectBulkChangePoliciesPopup-BulkChangeGetPolicyListScreen-SelectionMethod');
	bulkChangeGetPolicyListScreenUpdate = PcfButton('#SelectBulkChangePoliciesPopup-BulkChangeGetPolicyListScreen-Update');
	bulkChangeGetPolicyListScreen_msgs = PcfButton('#SelectBulkChangePoliciesPopup-BulkChangeGetPolicyListScreen-_msgs');
	selectBulkChangePoliciesPopupSelectBulkChangePoliciesPopup_UpLink = PcfButton('#SelectBulkChangePoliciesPopup-SelectBulkChangePoliciesPopup_UpLink');
	selectBulkChangePoliciesPopup_Paging = PcfButton('#SelectBulkChangePoliciesPopup-_Paging');
	selectBulkChangePoliciesPopup__crumb__ = PcfComponent('#SelectBulkChangePoliciesPopup-__crumb__');
}
