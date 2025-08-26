import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class SourceOfFundsPopup {
	sourceOfFundsPopupFundsAllotmentLV = PcfListView('#SourceOfFundsPopup-FundsAllotmentLV');
	sourceOfFundsPopupSourceOfFundsPopup_UpLink = PcfButton('#SourceOfFundsPopup-SourceOfFundsPopup_UpLink');
	sourceOfFundsPopup_Paging = PcfButton('#SourceOfFundsPopup-_Paging');
	sourceOfFundsPopup__crumb__ = PcfComponent('#SourceOfFundsPopup-__crumb__');
	sourceOfFundsPopup_msgs = PcfButton('#SourceOfFundsPopup-_msgs');
	sourceOfFundsPopupsource = PcfButton('#SourceOfFundsPopup-source');
}
