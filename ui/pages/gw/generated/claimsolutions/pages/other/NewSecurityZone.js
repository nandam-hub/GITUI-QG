import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewSecurityZone {
	newSecurityZoneNewSecurityZone_UpLink = PcfButton('#NewSecurityZone-NewSecurityZone_UpLink');
	securityZoneDetailScreenCancel = PcfButton('#NewSecurityZone-SecurityZoneDetailScreen-Cancel');
	securityZoneDetailScreenDelete = PcfButton('#NewSecurityZone-SecurityZoneDetailScreen-Delete');
	securityZoneDetailScreenEdit = PcfButton('#NewSecurityZone-SecurityZoneDetailScreen-Edit');
	newSecurityZoneSecurityZoneDetailScreenLocalizedValuesDVLocalizedValuesLV = PcfListView('#NewSecurityZone-SecurityZoneDetailScreen-LocalizedValuesDV-LocalizedValuesLV');
	securityZoneDetailDVDescription = PcfTextInput('#NewSecurityZone-SecurityZoneDetailScreen-SecurityZoneDetailDV-Description');
	securityZoneDetailDVName = PcfTextInput('#NewSecurityZone-SecurityZoneDetailScreen-SecurityZoneDetailDV-Name');
	securityZoneDetailScreenUpdate = PcfButton('#NewSecurityZone-SecurityZoneDetailScreen-Update');
	securityZoneDetailScreen_msgs = PcfButton('#NewSecurityZone-SecurityZoneDetailScreen-_msgs');
	newSecurityZone_Paging = PcfButton('#NewSecurityZone-_Paging');
	newSecurityZone__crumb__ = PcfComponent('#NewSecurityZone-__crumb__');
}
