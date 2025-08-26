import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class GenerateMultiSourceCodePopup {
	generateMultiSourceCodePopupBranchSuffix = PcfTextInput('#GenerateMultiSourceCodePopup-BranchSuffix');
	generateMultiSourceCodePopupCancel = PcfButton('#GenerateMultiSourceCodePopup-Cancel');
	generateMultiSourceCodePopupEdit = PcfButton('#GenerateMultiSourceCodePopup-Edit');
	generateMultiSourceCodePopupGenerateMultiSourceCodePopup_UpLink = PcfButton('#GenerateMultiSourceCodePopup-GenerateMultiSourceCodePopup_UpLink');
	generateMultiSourceCodePopupUpdate = PcfButton('#GenerateMultiSourceCodePopup-Update');
	generateMultiSourceCodePopup_Paging = PcfButton('#GenerateMultiSourceCodePopup-_Paging');
	generateMultiSourceCodePopup__crumb__ = PcfComponent('#GenerateMultiSourceCodePopup-__crumb__');
	generateMultiSourceCodePopup_msgs = PcfButton('#GenerateMultiSourceCodePopup-_msgs');
	generateMultiSourceCodePopupchangesDetectionAlert = PcfButton('#GenerateMultiSourceCodePopup-changesDetectionAlert');
	changesDetectionAlertCloseBtn = PcfButton('#GenerateMultiSourceCodePopup-changesDetectionAlert-CloseBtn');
	generateMultiSourceCodePopupcurrencyMismatchAlert = PcfButton('#GenerateMultiSourceCodePopup-currencyMismatchAlert');
	currencyMismatchAlertCloseBtn = PcfButton('#GenerateMultiSourceCodePopup-currencyMismatchAlert-CloseBtn');
	generateMultiSourceCodePopupproductTreeValidationAlert = PcfButton('#GenerateMultiSourceCodePopup-productTreeValidationAlert');
	productTreeValidationAlertCloseBtn = PcfButton('#GenerateMultiSourceCodePopup-productTreeValidationAlert-CloseBtn');
}
