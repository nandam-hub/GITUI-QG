import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class SplitRiskPopup {
	splitRiskPopupCancel = PcfButton('#SplitRiskPopup-Cancel');
	splitRiskPopupEdit = PcfButton('#SplitRiskPopup-Edit');
	splitRiskPopupSplitDate = PcfDateValueInput('#SplitRiskPopup-SplitDate');
	splitRiskPopupSplitRiskPopup_UpLink = PcfButton('#SplitRiskPopup-SplitRiskPopup_UpLink');
	splitRiskPopupUpdate = PcfButton('#SplitRiskPopup-Update');
	splitRiskPopup_Paging = PcfButton('#SplitRiskPopup-_Paging');
	splitRiskPopup__crumb__ = PcfComponent('#SplitRiskPopup-__crumb__');
	splitRiskPopup_msgs = PcfButton('#SplitRiskPopup-_msgs');
}
