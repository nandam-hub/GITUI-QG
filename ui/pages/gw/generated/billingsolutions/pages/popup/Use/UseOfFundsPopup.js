import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class UseOfFundsPopup {
	useOfFundsPopupFundsAllotmentLV = PcfListView('#UseOfFundsPopup-FundsAllotmentLV');
	useOfFundsPopupUseOfFundsPopup_UpLink = PcfButton('#UseOfFundsPopup-UseOfFundsPopup_UpLink');
	useOfFundsPopup_Paging = PcfButton('#UseOfFundsPopup-_Paging');
	useOfFundsPopup__crumb__ = PcfComponent('#UseOfFundsPopup-__crumb__');
	useOfFundsPopup_msgs = PcfButton('#UseOfFundsPopup-_msgs');
	useOfFundsPopupsource = PcfButton('#UseOfFundsPopup-source');
}
