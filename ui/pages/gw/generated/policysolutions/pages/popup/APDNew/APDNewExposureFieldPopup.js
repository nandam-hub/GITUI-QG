import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class APDNewExposureFieldPopup {
	aPDNewExposureFieldPopupAPDExposureFieldInputSetAPDAttributeInputSetDescription = PcfTextInput('#APDNewExposureFieldPopup-APDExposureFieldInputSet-APDAttributeInputSet-Description');
	aPDNewExposureFieldPopupAPDExposureFieldInputSetAPDAttributeInputSetLabel = PcfTextInput('#APDNewExposureFieldPopup-APDExposureFieldInputSet-APDAttributeInputSet-Label');
	aPDNewExposureFieldPopupAPDExposureFieldInputSetAPDAttributeInputSetName = PcfTextInput('#APDNewExposureFieldPopup-APDExposureFieldInputSet-APDAttributeInputSet-Name');
	aPDNewExposureFieldPopupAPDExposureFieldInputSetAPDAttributeInputSetUsage = PcfButton('#APDNewExposureFieldPopup-APDExposureFieldInputSet-APDAttributeInputSet-Usage');
	aPDNewExposureFieldPopupAPDExposureFieldInputSetJurisdiction = PcfComponent('#APDNewExposureFieldPopup-APDExposureFieldInputSet-Jurisdiction');
	aPDNewExposureFieldPopupAPDExposureFieldInputSetType = PcfSelectInput('#APDNewExposureFieldPopup-APDExposureFieldInputSet-Type');
	aPDNewExposureFieldPopupAPDNewExposureFieldPopup_UpLink = PcfButton('#APDNewExposureFieldPopup-APDNewExposureFieldPopup_UpLink');
	aPDNewExposureFieldPopupCancel = PcfButton('#APDNewExposureFieldPopup-Cancel');
	aPDNewExposureFieldPopupEdit = PcfButton('#APDNewExposureFieldPopup-Edit');
	aPDNewExposureFieldPopupExposureLocalizedValuesLocalizedValuesDVLocalizedValuesLV = PcfListView('#APDNewExposureFieldPopup-ExposureLocalizedValues-LocalizedValuesDV-LocalizedValuesLV');
	aPDNewExposureFieldPopupUpdate = PcfButton('#APDNewExposureFieldPopup-Update');
	aPDNewExposureFieldPopup_Paging = PcfButton('#APDNewExposureFieldPopup-_Paging');
	aPDNewExposureFieldPopup__crumb__ = PcfComponent('#APDNewExposureFieldPopup-__crumb__');
	aPDNewExposureFieldPopup_msgs = PcfButton('#APDNewExposureFieldPopup-_msgs');
}
