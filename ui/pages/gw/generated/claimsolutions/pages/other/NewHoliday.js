import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewHoliday {
	holidayDetailScreenAllZones = PcfComponent('#NewHoliday-HolidayDetailScreen-AllZones');
	holidayDetailScreenCancel = PcfButton('#NewHoliday-HolidayDetailScreen-Cancel');
	holidayDetailScreenDate = PcfDateValueInput('#NewHoliday-HolidayDetailScreen-Date');
	holidayDetailScreenEdit = PcfButton('#NewHoliday-HolidayDetailScreen-Edit');
	holidayDetailDVZones = PcfTextInput('#NewHoliday-HolidayDetailScreen-HolidayDetailDV-Zones');
	newHolidayHolidayDetailScreenHolidayDetailDVZonesInputSetCountry = PcfSelectInput('#NewHoliday-HolidayDetailScreen-HolidayDetailDV-ZonesInputSet-Country');
	newHolidayHolidayDetailScreenHolidayDetailDVZonesInputSetFilterBy = PcfSelectInput('#NewHoliday-HolidayDetailScreen-HolidayDetailDV-ZonesInputSet-FilterBy');
	newHolidayHolidayDetailScreenHolidayDetailDVZonesInputSetZoneType = PcfSelectInput('#NewHoliday-HolidayDetailScreen-HolidayDetailDV-ZonesInputSet-ZoneType');
	newHolidayHolidayDetailScreenHolidayDetailDVZonesInputSetZonesLV = PcfListView('#NewHoliday-HolidayDetailScreen-HolidayDetailDV-ZonesInputSet-ZonesLV');
	newHolidayHolidayDetailScreenHolidayDetailDVZonesInputSetZonesLV_tbAdd = PcfButton('#NewHoliday-HolidayDetailScreen-HolidayDetailDV-ZonesInputSet-ZonesLV_tb-Add');
	newHolidayHolidayDetailScreenHolidayDetailDVZonesInputSetZonesLV_tbRemove = PcfButton('#NewHoliday-HolidayDetailScreen-HolidayDetailDV-ZonesInputSet-ZonesLV_tb-Remove');
	newHolidayHolidayDetailScreenLocalizedValuesDVLocalizedValuesLV = PcfListView('#NewHoliday-HolidayDetailScreen-LocalizedValuesDV-LocalizedValuesLV');
	holidayDetailScreenName = PcfTextInput('#NewHoliday-HolidayDetailScreen-Name');
	holidayDetailScreenTags = PcfTextInput('#NewHoliday-HolidayDetailScreen-Tags');
	holidayDetailScreenUpdate = PcfButton('#NewHoliday-HolidayDetailScreen-Update');
	holidayDetailScreenZones = PcfTextInput('#NewHoliday-HolidayDetailScreen-Zones');
	holidayDetailScreen_msgs = PcfButton('#NewHoliday-HolidayDetailScreen-_msgs');
	newHolidayNewHoliday_UpLink = PcfButton('#NewHoliday-NewHoliday_UpLink');
	newHoliday_Paging = PcfButton('#NewHoliday-_Paging');
	newHoliday__crumb__ = PcfComponent('#NewHoliday-__crumb__');
}
