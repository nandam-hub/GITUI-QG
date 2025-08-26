import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class GroupRegionPopup {
	regionSearchDVCode = PcfTextInput('#GroupRegionPopup-GroupRegionPopupScreen-RegionSearchDV-Code');
	regionSearchDVName = PcfTextInput('#GroupRegionPopup-GroupRegionPopupScreen-RegionSearchDV-Name');
	groupRegionPopupGroupRegionPopupScreenRegionSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#GroupRegionPopup-GroupRegionPopupScreen-RegionSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	groupRegionPopupGroupRegionPopupScreenRegionSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#GroupRegionPopup-GroupRegionPopupScreen-RegionSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	regionSearchDVzoneType = PcfSelectInput('#GroupRegionPopup-GroupRegionPopupScreen-RegionSearchDV-zoneType');
	groupRegionPopupScreenRegionSearchResultsLV = PcfListView('#GroupRegionPopup-GroupRegionPopupScreen-RegionSearchResultsLV');
	regionSearchResultsLV_tbGroupRegionPopup_SelectButton = PcfButton('#GroupRegionPopup-GroupRegionPopupScreen-RegionSearchResultsLV_tb-GroupRegionPopup_SelectButton');
	groupRegionPopupScreen_msgs = PcfButton('#GroupRegionPopup-GroupRegionPopupScreen-_msgs');
	groupRegionPopupGroupRegionPopup_UpLink = PcfButton('#GroupRegionPopup-GroupRegionPopup_UpLink');
	groupRegionPopup_Paging = PcfButton('#GroupRegionPopup-_Paging');
	groupRegionPopup__crumb__ = PcfComponent('#GroupRegionPopup-__crumb__');
}
