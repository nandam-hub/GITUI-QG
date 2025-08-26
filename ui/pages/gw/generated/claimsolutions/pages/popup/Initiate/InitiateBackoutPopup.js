import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class InitiateBackoutPopup {
	initiateBackoutPopupInitiateBackoutPopup_UpLink = PcfButton('#InitiateBackoutPopup-InitiateBackoutPopup_UpLink');
	startBackoutScreenCancel = PcfButton('#InitiateBackoutPopup-StartBackoutScreen-Cancel');
	reportDVReportLV = PcfListView('#InitiateBackoutPopup-StartBackoutScreen-ReportDV-ReportLV');
	reportLV_tbNumFixed = PcfTextInput('#InitiateBackoutPopup-StartBackoutScreen-ReportDV-ReportLV_tb-NumFixed');
	reportLV_tbRunAgain = PcfButton('#InitiateBackoutPopup-StartBackoutScreen-ReportDV-ReportLV_tb-RunAgain');
	reportLV_tbStartBackout = PcfButton('#InitiateBackoutPopup-StartBackoutScreen-ReportDV-ReportLV_tb-StartBackout');
	reportDVVerifyProgress = PcfTextInput('#InitiateBackoutPopup-StartBackoutScreen-ReportDV-VerifyProgress');
	startBackoutScreenVerifyTypekeys = PcfButton('#InitiateBackoutPopup-StartBackoutScreen-VerifyTypekeys');
	startBackoutScreen_msgs = PcfButton('#InitiateBackoutPopup-StartBackoutScreen-_msgs');
	startBackoutScreennoBatchRoleInCluster = PcfTextInput('#InitiateBackoutPopup-StartBackoutScreen-noBatchRoleInCluster');
	startBackoutScreentoBackout = PcfTextInput('#InitiateBackoutPopup-StartBackoutScreen-toBackout');
	initiateBackoutPopup_Paging = PcfButton('#InitiateBackoutPopup-_Paging');
	initiateBackoutPopup__crumb__ = PcfComponent('#InitiateBackoutPopup-__crumb__');
}
