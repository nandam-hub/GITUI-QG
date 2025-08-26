import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class GenerateSourceCodePopup {
	generateSourceCodePopupBranchSuffix = PcfTextInput('#GenerateSourceCodePopup-BranchSuffix');
	generateSourceCodePopupCancel = PcfButton('#GenerateSourceCodePopup-Cancel');
	generateSourceCodePopupEdit = PcfButton('#GenerateSourceCodePopup-Edit');
	generateSourceCodePopupGenerateSourceCodePopup_UpLink = PcfButton('#GenerateSourceCodePopup-GenerateSourceCodePopup_UpLink');
	generateSourceCodePopupProductTree_LV = PcfListView('#GenerateSourceCodePopup-ProductTree_LV');
	generateSourceCodePopupUpdate = PcfButton('#GenerateSourceCodePopup-Update');
	generateSourceCodePopup_Paging = PcfButton('#GenerateSourceCodePopup-_Paging');
	generateSourceCodePopup__crumb__ = PcfComponent('#GenerateSourceCodePopup-__crumb__');
	generateSourceCodePopup_msgs = PcfButton('#GenerateSourceCodePopup-_msgs');
	generateSourceCodePopupchangesDetectionAlert = PcfButton('#GenerateSourceCodePopup-changesDetectionAlert');
	generateSourceCodePopupchangesDetectionAlertCloseBtn = PcfButton('#GenerateSourceCodePopup-changesDetectionAlert-CloseBtn');
	generateSourceCodePopupcurrencyMismatchAlert = PcfButton('#GenerateSourceCodePopup-currencyMismatchAlert');
	generateSourceCodePopupcurrencyMismatchAlertCloseBtn = PcfButton('#GenerateSourceCodePopup-currencyMismatchAlert-CloseBtn');
}
