import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class InitiateBackoutConfirmPopup {
	initBackoutConfirmScreenCancel = PcfButton('#InitiateBackoutConfirmPopup-InitBackoutConfirmScreen-Cancel');
	initBackoutConfirmScreenConfirm = PcfTextInput('#InitiateBackoutConfirmPopup-InitBackoutConfirmScreen-Confirm');
	initBackoutConfirmScreenContinue = PcfButton('#InitiateBackoutConfirmPopup-InitBackoutConfirmScreen-Continue');
	initBackoutConfirmScreenHasTargetServers = PcfTextInput('#InitiateBackoutConfirmPopup-InitBackoutConfirmScreen-HasTargetServers');
	initBackoutConfirmScreenNoTargetServers = PcfTextInput('#InitiateBackoutConfirmPopup-InitBackoutConfirmScreen-NoTargetServers');
	initBackoutConfirmScreenRefresh = PcfButton('#InitiateBackoutConfirmPopup-InitBackoutConfirmScreen-Refresh');
	initBackoutConfirmScreenRunningServersLV = PcfListView('#InitiateBackoutConfirmPopup-InitBackoutConfirmScreen-RunningServersLV');
	initBackoutConfirmScreen_msgs = PcfButton('#InitiateBackoutConfirmPopup-InitBackoutConfirmScreen-_msgs');
	initiateBackoutConfirmPopupInitiateBackoutConfirmPopup_UpLink = PcfButton('#InitiateBackoutConfirmPopup-InitiateBackoutConfirmPopup_UpLink');
	initiateBackoutConfirmPopup_Paging = PcfButton('#InitiateBackoutConfirmPopup-_Paging');
	initiateBackoutConfirmPopup__crumb__ = PcfComponent('#InitiateBackoutConfirmPopup-__crumb__');
}
