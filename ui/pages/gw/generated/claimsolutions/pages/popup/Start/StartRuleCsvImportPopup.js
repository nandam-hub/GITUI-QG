import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class StartRuleCsvImportPopup {
	startRuleCsvImportPopupCancelButton = PcfButton('#StartRuleCsvImportPopup-CancelButton');
	startRuleCsvImportPopupFile = PcfButton('#StartRuleCsvImportPopup-File');
	startRuleCsvImportPopupImportButton = PcfButton('#StartRuleCsvImportPopup-ImportButton');
	startRuleCsvImportPopupStartRuleCsvImportPopup_UpLink = PcfButton('#StartRuleCsvImportPopup-StartRuleCsvImportPopup_UpLink');
	startRuleCsvImportPopupUploadSummaryAlert = PcfButton('#StartRuleCsvImportPopup-UploadSummaryAlert');
	uploadSummaryAlertCloseBtn = PcfButton('#StartRuleCsvImportPopup-UploadSummaryAlert-CloseBtn');
	startRuleCsvImportPopup_Paging = PcfButton('#StartRuleCsvImportPopup-_Paging');
	startRuleCsvImportPopup__crumb__ = PcfComponent('#StartRuleCsvImportPopup-__crumb__');
	startRuleCsvImportPopup_msgs = PcfButton('#StartRuleCsvImportPopup-_msgs');
	startRuleCsvImportPopupfileLabel = PcfTextInput('#StartRuleCsvImportPopup-fileLabel');
}
