import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class GenerateSourceCodePopup {
	generateSourceCodePopupBranchName = PcfTextInput('#GenerateSourceCodePopup-BranchName');
	generateSourceCodePopupBranchSuffix = PcfTextInput('#GenerateSourceCodePopup-BranchSuffix');
	generateSourceCodePopupCancel = PcfButton('#GenerateSourceCodePopup-Cancel');
	generateSourceCodePopupEdit = PcfButton('#GenerateSourceCodePopup-Edit');
	generateSourceCodePopupGenerateSourceCodePopup_UpLink = PcfButton('#GenerateSourceCodePopup-GenerateSourceCodePopup_UpLink');
	generateSourceCodePopupUpdate = PcfButton('#GenerateSourceCodePopup-Update');
	aPDValidationErrorsPanelSetProductTree_LV = PcfListView('#GenerateSourceCodePopup-ValidationErrors-APDValidationErrorsPanelSet-ProductTree_LV');
	generateSourceCodePopupValidationErrorsCCPIAPDValidationErrorsPanelSetProductTree_LV = PcfListView('#GenerateSourceCodePopup-ValidationErrorsCCPI-APDValidationErrorsPanelSet-ProductTree_LV');
	generateSourceCodePopupValidationIssueMessageId = PcfButton('#GenerateSourceCodePopup-ValidationIssueMessageId');
	validationIssueMessageIdCloseBtn = PcfButton('#GenerateSourceCodePopup-ValidationIssueMessageId-CloseBtn');
	generateSourceCodePopup_Paging = PcfButton('#GenerateSourceCodePopup-_Paging');
	generateSourceCodePopup__crumb__ = PcfComponent('#GenerateSourceCodePopup-__crumb__');
	generateSourceCodePopup_msgs = PcfButton('#GenerateSourceCodePopup-_msgs');
	generateSourceCodePopupccChangesDetectionAlert = PcfButton('#GenerateSourceCodePopup-ccChangesDetectionAlert');
	ccChangesDetectionAlertCloseBtn = PcfButton('#GenerateSourceCodePopup-ccChangesDetectionAlert-CloseBtn');
	generateSourceCodePopupccCurrencyMismatchAlert = PcfButton('#GenerateSourceCodePopup-ccCurrencyMismatchAlert');
	ccCurrencyMismatchAlertCloseBtn = PcfButton('#GenerateSourceCodePopup-ccCurrencyMismatchAlert-CloseBtn');
	generateSourceCodePopupcheckoutProgress = PcfButton('#GenerateSourceCodePopup-checkoutProgress');
	generateSourceCodePopupcommitProgress = PcfButton('#GenerateSourceCodePopup-commitProgress');
}
