import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class APDNewScheduleTermPopup {
	aPDNewScheduleTermPopupAPDNewScheduleTermPopup_UpLink = PcfButton('#APDNewScheduleTermPopup-APDNewScheduleTermPopup_UpLink');
	aPDNewScheduleTermPopupAPDScheduleTermInputSetAPDAttributeInputSetDescription = PcfTextInput('#APDNewScheduleTermPopup-APDScheduleTermInputSet-APDAttributeInputSet-Description');
	aPDNewScheduleTermPopupAPDScheduleTermInputSetAPDAttributeInputSetLabel = PcfTextInput('#APDNewScheduleTermPopup-APDScheduleTermInputSet-APDAttributeInputSet-Label');
	aPDNewScheduleTermPopupAPDScheduleTermInputSetAPDAttributeInputSetName = PcfTextInput('#APDNewScheduleTermPopup-APDScheduleTermInputSet-APDAttributeInputSet-Name');
	aPDNewScheduleTermPopupAPDScheduleTermInputSetAPDAttributeInputSetUsage = PcfButton('#APDNewScheduleTermPopup-APDScheduleTermInputSet-APDAttributeInputSet-Usage');
	aPDScheduleTermInputSetGenerateAsClauseTerm = PcfComponent('#APDNewScheduleTermPopup-APDScheduleTermInputSet-GenerateAsClauseTerm');
	typeDropDownDefinition = PcfButton('#APDNewScheduleTermPopup-APDScheduleTermInputSet-Type-DropDownDefinition');
	aPDScheduleTermInputSetType = PcfSelectInput('#APDNewScheduleTermPopup-APDScheduleTermInputSet-Type');
	aPDNewScheduleTermPopupCancel = PcfButton('#APDNewScheduleTermPopup-Cancel');
	aPDNewScheduleTermPopupEdit = PcfButton('#APDNewScheduleTermPopup-Edit');
	aPDNewScheduleTermPopupScheduleTermLocalizedValuesLocalizedValuesDVLocalizedValuesLV = PcfListView('#APDNewScheduleTermPopup-ScheduleTermLocalizedValues-LocalizedValuesDV-LocalizedValuesLV');
	aPDNewScheduleTermPopupUpdate = PcfButton('#APDNewScheduleTermPopup-Update');
	aPDNewScheduleTermPopup_Paging = PcfButton('#APDNewScheduleTermPopup-_Paging');
	aPDNewScheduleTermPopup__crumb__ = PcfComponent('#APDNewScheduleTermPopup-__crumb__');
	aPDNewScheduleTermPopup_msgs = PcfButton('#APDNewScheduleTermPopup-_msgs');
}
