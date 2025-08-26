import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewRegion {
	newRegionNewRegion_UpLink = PcfButton('#NewRegion-NewRegion_UpLink');
	regionDetailScreenCancel = PcfButton('#NewRegion-RegionDetailScreen-Cancel');
	regionDetailScreenEdit = PcfButton('#NewRegion-RegionDetailScreen-Edit');
	newRegionRegionDetailScreenLocalizedValuesDVLocalizedValuesLV = PcfListView('#NewRegion-RegionDetailScreen-LocalizedValuesDV-LocalizedValuesLV');
	regionDetailScreenName = PcfTextInput('#NewRegion-RegionDetailScreen-Name');
	newRegionRegionDetailScreenRegionDetailDVZonesInputSetCountry = PcfSelectInput('#NewRegion-RegionDetailScreen-RegionDetailDV-ZonesInputSet-Country');
	newRegionRegionDetailScreenRegionDetailDVZonesInputSetFilterBy = PcfSelectInput('#NewRegion-RegionDetailScreen-RegionDetailDV-ZonesInputSet-FilterBy');
	newRegionRegionDetailScreenRegionDetailDVZonesInputSetZoneType = PcfSelectInput('#NewRegion-RegionDetailScreen-RegionDetailDV-ZonesInputSet-ZoneType');
	newRegionRegionDetailScreenRegionDetailDVZonesInputSetZonesLV = PcfListView('#NewRegion-RegionDetailScreen-RegionDetailDV-ZonesInputSet-ZonesLV');
	newRegionRegionDetailScreenRegionDetailDVZonesInputSetZonesLV_tbAdd = PcfButton('#NewRegion-RegionDetailScreen-RegionDetailDV-ZonesInputSet-ZonesLV_tb-Add');
	newRegionRegionDetailScreenRegionDetailDVZonesInputSetZonesLV_tbRemove = PcfButton('#NewRegion-RegionDetailScreen-RegionDetailDV-ZonesInputSet-ZonesLV_tb-Remove');
	regionDetailScreenUpdate = PcfButton('#NewRegion-RegionDetailScreen-Update');
	regionDetailScreenZones = PcfTextInput('#NewRegion-RegionDetailScreen-Zones');
	regionDetailScreen_msgs = PcfButton('#NewRegion-RegionDetailScreen-_msgs');
	newRegion_Paging = PcfButton('#NewRegion-_Paging');
	newRegion__crumb__ = PcfComponent('#NewRegion-__crumb__');
}
