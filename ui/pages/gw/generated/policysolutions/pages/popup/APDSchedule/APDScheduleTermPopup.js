import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class APDScheduleTermPopup {
	aPDScheduleTermPopupAPDScheduleTermInputSetAPDAttributeInputSetDescription = PcfTextInput('#APDScheduleTermPopup-APDScheduleTermInputSet-APDAttributeInputSet-Description');
	aPDScheduleTermPopupAPDScheduleTermInputSetAPDAttributeInputSetLabel = PcfTextInput('#APDScheduleTermPopup-APDScheduleTermInputSet-APDAttributeInputSet-Label');
	aPDScheduleTermPopupAPDScheduleTermInputSetAPDAttributeInputSetName = PcfTextInput('#APDScheduleTermPopup-APDScheduleTermInputSet-APDAttributeInputSet-Name');
	aPDScheduleTermPopupAPDScheduleTermInputSetAPDAttributeInputSetUsage = PcfButton('#APDScheduleTermPopup-APDScheduleTermInputSet-APDAttributeInputSet-Usage');
	aPDScheduleTermPopupAPDScheduleTermInputSetGenerateAsClauseTerm = PcfComponent('#APDScheduleTermPopup-APDScheduleTermInputSet-GenerateAsClauseTerm');
	aPDScheduleTermPopupAPDScheduleTermInputSetTypeDropDownDefinition = PcfButton('#APDScheduleTermPopup-APDScheduleTermInputSet-Type-DropDownDefinition');
	aPDScheduleTermPopupAPDScheduleTermInputSetType = PcfSelectInput('#APDScheduleTermPopup-APDScheduleTermInputSet-Type');
	aPDScheduleTermPopupAPDScheduleTermPopup_UpLink = PcfButton('#APDScheduleTermPopup-APDScheduleTermPopup_UpLink');
	aPDScheduleTermPopupCancel = PcfButton('#APDScheduleTermPopup-Cancel');
	aPDScheduleTermPopupEdit = PcfButton('#APDScheduleTermPopup-Edit');
	aPDScheduleTermPopupScheduleTermLocalizedValuesLocalizedValuesDVLocalizedValuesLV = PcfListView('#APDScheduleTermPopup-ScheduleTermLocalizedValues-LocalizedValuesDV-LocalizedValuesLV');
	aPDScheduleTermPopupUpdate = PcfButton('#APDScheduleTermPopup-Update');
	aPDScheduleTermPopup_Paging = PcfButton('#APDScheduleTermPopup-_Paging');
	aPDScheduleTermPopup__crumb__ = PcfComponent('#APDScheduleTermPopup-__crumb__');
	aPDScheduleTermPopup_msgs = PcfButton('#APDScheduleTermPopup-_msgs');
}
