import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewRegion {
	newRegionNewRegion_UpLink = PcfButton('#NewRegion-NewRegion_UpLink');
	regionDetailScreenCancel = PcfButton('#NewRegion-RegionDetailScreen-Cancel');
	regionDetailScreenCountry = PcfSelectInput('#NewRegion-RegionDetailScreen-Country');
	regionDetailScreenEdit = PcfButton('#NewRegion-RegionDetailScreen-Edit');
	newRegionRegionDetailScreenLocalizedValuesDVLocalizedValuesLV = PcfListView('#NewRegion-RegionDetailScreen-LocalizedValuesDV-LocalizedValuesLV');
	regionDetailScreenName = PcfTextInput('#NewRegion-RegionDetailScreen-Name');
	regionDetailDVRegionZonesLV = PcfListView('#NewRegion-RegionDetailScreen-RegionDetailDV-RegionZonesLV');
	regionZonesLV_tbAdd = PcfButton('#NewRegion-RegionDetailScreen-RegionDetailDV-RegionZonesLV_tb-Add');
	regionZonesLV_tbRemove = PcfButton('#NewRegion-RegionDetailScreen-RegionDetailDV-RegionZonesLV_tb-Remove');
	regionDetailDVprovince = PcfSelectInput('#NewRegion-RegionDetailScreen-RegionDetailDV-province');
	regionDetailDVzoneType = PcfSelectInput('#NewRegion-RegionDetailScreen-RegionDetailDV-zoneType');
	regionDetailDVstate = PcfSelectInput('#NewRegion-RegionDetailScreen-RegionDetailDV-state');
	regionDetailScreenUpdate = PcfButton('#NewRegion-RegionDetailScreen-Update');
	regionDetailScreenZones = PcfTextInput('#NewRegion-RegionDetailScreen-Zones');
	regionDetailScreen_msgs = PcfButton('#NewRegion-RegionDetailScreen-_msgs');
	newRegion_Paging = PcfButton('#NewRegion-_Paging');
	newRegion__crumb__ = PcfComponent('#NewRegion-__crumb__');
}
