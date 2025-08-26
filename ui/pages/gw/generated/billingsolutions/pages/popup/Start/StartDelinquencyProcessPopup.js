import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class StartDelinquencyProcessPopup {
	startDelinquencyProcessPopupStartDelinquencyProcessPopup_UpLink = PcfButton('#StartDelinquencyProcessPopup-StartDelinquencyProcessPopup_UpLink');
	startDelinquencyProcessPopupStartDelinquencyProcessScreenCancel = PcfButton('#StartDelinquencyProcessPopup-StartDelinquencyProcessScreen-Cancel');
	startDelinquencyProcessPopupStartDelinquencyProcessScreenExecute = PcfButton('#StartDelinquencyProcessPopup-StartDelinquencyProcessScreen-Execute');
	startDelinquencyProcessPopupStartDelinquencyProcessScreenReason = PcfSelectInput('#StartDelinquencyProcessPopup-StartDelinquencyProcessScreen-Reason');
	startDelinquencyProcessPopupStartDelinquencyProcessScreenTargetsLV = PcfListView('#StartDelinquencyProcessPopup-StartDelinquencyProcessScreen-TargetsLV');
	startDelinquencyProcessPopupStartDelinquencyProcessScreen_msgs = PcfButton('#StartDelinquencyProcessPopup-StartDelinquencyProcessScreen-_msgs');
	startDelinquencyProcessPopup_Paging = PcfButton('#StartDelinquencyProcessPopup-_Paging');
	startDelinquencyProcessPopup__crumb__ = PcfComponent('#StartDelinquencyProcessPopup-__crumb__');
}
