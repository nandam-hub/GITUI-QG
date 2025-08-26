import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class LoadFactorsPopup {
	loadFactorsPopupLoadFactorsPopup_UpLink = PcfButton('#LoadFactorsPopup-LoadFactorsPopup_UpLink');
	loadFactorsScreenGroupDetailsCardTab = PcfButton('#LoadFactorsPopup-LoadFactorsScreen-GroupDetailsCardTab');
	loadFactorsScreenGroupSelectionLV = PcfListView('#LoadFactorsPopup-LoadFactorsScreen-GroupSelectionLV');
	loadFactorDVEditableLoadFactorsLV = PcfListView('#LoadFactorsPopup-LoadFactorsScreen-LoadFactorDV-EditableLoadFactorsLV');
	loadFactorDVGroupLoadFactor = PcfTextInput('#LoadFactorsPopup-LoadFactorsScreen-LoadFactorDV-GroupLoadFactor');
	loadFactorDV_tbCancel = PcfButton('#LoadFactorsPopup-LoadFactorsScreen-LoadFactorDV_tb-Cancel');
	loadFactorDV_tbEdit = PcfButton('#LoadFactorsPopup-LoadFactorsScreen-LoadFactorDV_tb-Edit');
	loadFactorDV_tbUpdate = PcfButton('#LoadFactorsPopup-LoadFactorsScreen-LoadFactorDV_tb-Update');
	loadFactorsScreen_msgs = PcfButton('#LoadFactorsPopup-LoadFactorsScreen-_msgs');
	loadFactorsPopup_Paging = PcfButton('#LoadFactorsPopup-_Paging');
	loadFactorsPopup__crumb__ = PcfComponent('#LoadFactorsPopup-__crumb__');
}
