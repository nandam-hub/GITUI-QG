import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class APDDropdownEntryPopup {
	aPDDropdownEntryInputSetCode = PcfTextInput('#APDDropdownEntryPopup-APDDropdownEntryInputSet-Code');
	aPDDropdownEntryInputSetDescription = PcfTextInput('#APDDropdownEntryPopup-APDDropdownEntryInputSet-Description');
	aPDDropdownEntryInputSetName = PcfTextInput('#APDDropdownEntryPopup-APDDropdownEntryInputSet-Name');
	aPDDropdownEntryPopupAPDDropdownEntryPopup_UpLink = PcfButton('#APDDropdownEntryPopup-APDDropdownEntryPopup_UpLink');
	aPDDropdownEntryPopupCancel = PcfButton('#APDDropdownEntryPopup-Cancel');
	aPDDropdownEntryPopupDropdownLocalizedValuesLocalizedValuesDVLocalizedValuesLV = PcfListView('#APDDropdownEntryPopup-DropdownLocalizedValues-LocalizedValuesDV-LocalizedValuesLV');
	aPDDropdownEntryPopupEdit = PcfButton('#APDDropdownEntryPopup-Edit');
	aPDDropdownEntryPopupUpdate = PcfButton('#APDDropdownEntryPopup-Update');
	aPDDropdownEntryPopup_Paging = PcfButton('#APDDropdownEntryPopup-_Paging');
	aPDDropdownEntryPopup__crumb__ = PcfComponent('#APDDropdownEntryPopup-__crumb__');
	aPDDropdownEntryPopup_msgs = PcfButton('#APDDropdownEntryPopup-_msgs');
}
