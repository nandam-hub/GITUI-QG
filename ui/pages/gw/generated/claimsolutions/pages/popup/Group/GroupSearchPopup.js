import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class GroupSearchPopup {
	groupSearchPopupGroupSearchPickerScreenGroupSearchDVGroupName = PcfTextInput('#GroupSearchPopup-GroupSearchPickerScreen-GroupSearchDV-GroupName');
	groupSearchPopupGroupSearchPickerScreenGroupSearchDVGroupNameKanji = PcfTextInput('#GroupSearchPopup-GroupSearchPickerScreen-GroupSearchDV-GroupNameKanji');
	groupSearchPopupGroupSearchPickerScreenGroupSearchDVGroupType = PcfSelectInput('#GroupSearchPopup-GroupSearchPickerScreen-GroupSearchDV-GroupType');
	groupSearchPopupGroupSearchPickerScreenGroupSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#GroupSearchPopup-GroupSearchPickerScreen-GroupSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	groupSearchPopupGroupSearchPickerScreenGroupSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#GroupSearchPopup-GroupSearchPickerScreen-GroupSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	groupSearchPickerScreenGroupSearchPickerResultsLV = PcfListView('#GroupSearchPopup-GroupSearchPickerScreen-GroupSearchPickerResultsLV');
	groupSearchPickerScreen_msgs = PcfButton('#GroupSearchPopup-GroupSearchPickerScreen-_msgs');
	groupSearchPopupGroupSearchPopup_UpLink = PcfButton('#GroupSearchPopup-GroupSearchPopup_UpLink');
	groupSearchPopup_Paging = PcfButton('#GroupSearchPopup-_Paging');
	groupSearchPopup__crumb__ = PcfComponent('#GroupSearchPopup-__crumb__');
}
