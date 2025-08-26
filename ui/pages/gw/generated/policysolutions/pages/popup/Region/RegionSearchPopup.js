import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class RegionSearchPopup {
	regionSearchPopupRegionSearchPopup_UpLink = PcfButton('#RegionSearchPopup-RegionSearchPopup_UpLink');
	regionSearchInputSetCountry = PcfSelectInput('#RegionSearchPopup-RegionSearchScreen-ZoneSearchDV-RegionSearchInputSet-Country');
	regionSearchInputSetZoneType = PcfSelectInput('#RegionSearchPopup-RegionSearchScreen-ZoneSearchDV-RegionSearchInputSet-ZoneType');
	regionSearchInputSetlinkzone = PcfSelectInput('#RegionSearchPopup-RegionSearchScreen-ZoneSearchDV-RegionSearchInputSet-linkzone');
	regionSearchInputSetchoicefilterbycity_Choice = PcfButton('#RegionSearchPopup-RegionSearchScreen-ZoneSearchDV-RegionSearchInputSet-choicefilterbycity_Choice');
	regionSearchInputSetchoicefilterbycounty_Choice = PcfButton('#RegionSearchPopup-RegionSearchScreen-ZoneSearchDV-RegionSearchInputSet-choicefilterbycounty_Choice');
	regionSearchInputSetchoicefilterbyzip_Choice = PcfButton('#RegionSearchPopup-RegionSearchScreen-ZoneSearchDV-RegionSearchInputSet-choicefilterbyzip_Choice');
	regionSearchInputSetfilterbycity = PcfTextInput('#RegionSearchPopup-RegionSearchScreen-ZoneSearchDV-RegionSearchInputSet-filterbycity');
	regionSearchInputSetfilterbycounty = PcfTextInput('#RegionSearchPopup-RegionSearchScreen-ZoneSearchDV-RegionSearchInputSet-filterbycounty');
	regionSearchInputSetfilterbyzip = PcfTextInput('#RegionSearchPopup-RegionSearchScreen-ZoneSearchDV-RegionSearchInputSet-filterbyzip');
	regionSearchPopupRegionSearchScreenZoneSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#RegionSearchPopup-RegionSearchScreen-ZoneSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	regionSearchPopupRegionSearchScreenZoneSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#RegionSearchPopup-RegionSearchScreen-ZoneSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	regionSearchScreenZoneSearchResultsLV = PcfListView('#RegionSearchPopup-RegionSearchScreen-ZoneSearchResultsLV');
	zoneSearchResultsLV_tbZonesAddButton = PcfButton('#RegionSearchPopup-RegionSearchScreen-ZoneSearchResultsLV_tb-ZonesAddButton');
	regionSearchScreen_msgs = PcfButton('#RegionSearchPopup-RegionSearchScreen-_msgs');
	regionSearchPopup_Paging = PcfButton('#RegionSearchPopup-_Paging');
	regionSearchPopup__crumb__ = PcfComponent('#RegionSearchPopup-__crumb__');
}
