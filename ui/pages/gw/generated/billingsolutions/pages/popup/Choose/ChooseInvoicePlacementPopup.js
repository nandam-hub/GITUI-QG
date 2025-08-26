import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ChooseInvoicePlacementPopup {
	chooseInvoicePlacementPopupAmount = PcfTextInput('#ChooseInvoicePlacementPopup-Amount');
	chooseInvoicePlacementPopupChooseInvoicePlacementPopup_UpLink = PcfButton('#ChooseInvoicePlacementPopup-ChooseInvoicePlacementPopup_UpLink');
	chooseInvoicePlacementPopupEventDate = PcfDateValueInput('#ChooseInvoicePlacementPopup-EventDate');
	chooseInvoicePlacementPopupInvoice = PcfTextInput('#ChooseInvoicePlacementPopup-Invoice');
	chooseInvoicePlacementPopup_Paging = PcfButton('#ChooseInvoicePlacementPopup-_Paging');
	chooseInvoicePlacementPopup__crumb__ = PcfComponent('#ChooseInvoicePlacementPopup-__crumb__');
	chooseInvoicePlacementPopup_msgs = PcfButton('#ChooseInvoicePlacementPopup-_msgs');
	chooseInvoicePlacementPopuptargetInvoicesLV = PcfListView('#ChooseInvoicePlacementPopup-targetInvoicesLV');
}
