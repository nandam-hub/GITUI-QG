import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class UserRegionPopup {
	userRegionPopupUserRegionPopupScreenRegionSearchDVCode = PcfTextInput('#UserRegionPopup-UserRegionPopupScreen-RegionSearchDV-Code');
	userRegionPopupUserRegionPopupScreenRegionSearchDVName = PcfTextInput('#UserRegionPopup-UserRegionPopupScreen-RegionSearchDV-Name');
	userRegionPopupUserRegionPopupScreenRegionSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#UserRegionPopup-UserRegionPopupScreen-RegionSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	userRegionPopupUserRegionPopupScreenRegionSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#UserRegionPopup-UserRegionPopupScreen-RegionSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	userRegionPopupUserRegionPopupScreenRegionSearchDVzoneType = PcfSelectInput('#UserRegionPopup-UserRegionPopupScreen-RegionSearchDV-zoneType');
	userRegionPopupScreenRegionSearchResultsLV = PcfListView('#UserRegionPopup-UserRegionPopupScreen-RegionSearchResultsLV');
	regionSearchResultsLV_tbUserRegionPopup_SelectButton = PcfButton('#UserRegionPopup-UserRegionPopupScreen-RegionSearchResultsLV_tb-UserRegionPopup_SelectButton');
	userRegionPopupScreen_msgs = PcfButton('#UserRegionPopup-UserRegionPopupScreen-_msgs');
	userRegionPopupUserRegionPopup_UpLink = PcfButton('#UserRegionPopup-UserRegionPopup_UpLink');
	userRegionPopup_Paging = PcfButton('#UserRegionPopup-_Paging');
	userRegionPopup__crumb__ = PcfComponent('#UserRegionPopup-__crumb__');
}
