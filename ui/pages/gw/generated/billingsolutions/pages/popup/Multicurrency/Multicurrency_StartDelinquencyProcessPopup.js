import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class Multicurrency_StartDelinquencyProcessPopup {
	multicurrency_StartDelinquencyProcessPopupMulticurrency_StartDelinquencyProcessPopup_UpLink = PcfButton('#Multicurrency_StartDelinquencyProcessPopup-Multicurrency_StartDelinquencyProcessPopup_UpLink');
	startDelinquencyProcessScreenCancel = PcfButton('#Multicurrency_StartDelinquencyProcessPopup-StartDelinquencyProcessScreen-Cancel');
	startDelinquencyProcessScreenExecute = PcfButton('#Multicurrency_StartDelinquencyProcessPopup-StartDelinquencyProcessScreen-Execute');
	startDelinquencyProcessScreenReason = PcfSelectInput('#Multicurrency_StartDelinquencyProcessPopup-StartDelinquencyProcessScreen-Reason');
	startDelinquencyProcessScreenTargetsLV = PcfListView('#Multicurrency_StartDelinquencyProcessPopup-StartDelinquencyProcessScreen-TargetsLV');
	startDelinquencyProcessScreen_msgs = PcfButton('#Multicurrency_StartDelinquencyProcessPopup-StartDelinquencyProcessScreen-_msgs');
	multicurrency_StartDelinquencyProcessPopup_Paging = PcfButton('#Multicurrency_StartDelinquencyProcessPopup-_Paging');
	multicurrency_StartDelinquencyProcessPopup__crumb__ = PcfComponent('#Multicurrency_StartDelinquencyProcessPopup-__crumb__');
}
