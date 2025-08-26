import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class SecurityZones {
	securityZonesScreenSecurityZonesLV = PcfListView('#SecurityZones-SecurityZonesScreen-SecurityZonesLV');
	securityZonesScreenSecurityZones_AddSecurityZoneButton = PcfButton('#SecurityZones-SecurityZonesScreen-SecurityZones_AddSecurityZoneButton');
	securityZonesScreen_msgs = PcfButton('#SecurityZones-SecurityZonesScreen-_msgs');
	securityZonesSecurityZones_UpLink = PcfButton('#SecurityZones-SecurityZones_UpLink');
	securityZones_Paging = PcfButton('#SecurityZones-_Paging');
	securityZones__crumb__ = PcfComponent('#SecurityZones-__crumb__');
}
