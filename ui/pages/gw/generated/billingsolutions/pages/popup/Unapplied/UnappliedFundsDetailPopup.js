import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class UnappliedFundsDetailPopup {
	unappliedFundsDetailPopupFundPanelTab = PcfButton('#UnappliedFundsDetailPopup-FundPanelTab');
	unappliedFundsDetailPopupUnappliedFundsDetailLV = PcfListView('#UnappliedFundsDetailPopup-UnappliedFundsDetailLV');
	unappliedFundsDetailPopupUnappliedFundsDetailPopup_UpLink = PcfButton('#UnappliedFundsDetailPopup-UnappliedFundsDetailPopup_UpLink');
	unappliedFundsDetailPopupUnappliedFundsListLV = PcfListView('#UnappliedFundsDetailPopup-UnappliedFundsListLV');
	unappliedFundsDetailPopup_Paging = PcfButton('#UnappliedFundsDetailPopup-_Paging');
	unappliedFundsDetailPopup__crumb__ = PcfComponent('#UnappliedFundsDetailPopup-__crumb__');
	unappliedFundsDetailPopup_msgs = PcfButton('#UnappliedFundsDetailPopup-_msgs');
}
