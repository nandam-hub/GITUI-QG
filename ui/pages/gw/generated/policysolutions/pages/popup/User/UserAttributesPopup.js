import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class UserAttributesPopup {
	userAttributesSearchDVName = PcfTextInput('#UserAttributesPopup-UserAttributesPopupScreen-UserAttributesSearchDV-Name');
	userAttributesPopupUserAttributesPopupScreenUserAttributesSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#UserAttributesPopup-UserAttributesPopupScreen-UserAttributesSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	userAttributesPopupUserAttributesPopupScreenUserAttributesSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#UserAttributesPopup-UserAttributesPopupScreen-UserAttributesSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	userAttributesSearchDVType = PcfSelectInput('#UserAttributesPopup-UserAttributesPopupScreen-UserAttributesSearchDV-Type');
	userAttributesPopupScreenUserAttributesSearchLV = PcfListView('#UserAttributesPopup-UserAttributesPopupScreen-UserAttributesSearchLV');
	userAttributesSearchLV_tbUserAttributesPopup_CancelButton = PcfButton('#UserAttributesPopup-UserAttributesPopupScreen-UserAttributesSearchLV_tb-UserAttributesPopup_CancelButton');
	userAttributesSearchLV_tbUserAttributesPopup_SelectButton = PcfButton('#UserAttributesPopup-UserAttributesPopupScreen-UserAttributesSearchLV_tb-UserAttributesPopup_SelectButton');
	userAttributesPopupScreen_msgs = PcfButton('#UserAttributesPopup-UserAttributesPopupScreen-_msgs');
	userAttributesPopupUserAttributesPopup_UpLink = PcfButton('#UserAttributesPopup-UserAttributesPopup_UpLink');
	userAttributesPopup_Paging = PcfButton('#UserAttributesPopup-_Paging');
	userAttributesPopup__crumb__ = PcfComponent('#UserAttributesPopup-__crumb__');
}
