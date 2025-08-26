import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class APDExposureFieldPopup {
	aPDAttributeInputSetDescription = PcfTextInput('#APDExposureFieldPopup-APDExposureFieldInputSet-APDAttributeInputSet-Description');
	aPDAttributeInputSetLabel = PcfTextInput('#APDExposureFieldPopup-APDExposureFieldInputSet-APDAttributeInputSet-Label');
	aPDAttributeInputSetName = PcfTextInput('#APDExposureFieldPopup-APDExposureFieldInputSet-APDAttributeInputSet-Name');
	aPDAttributeInputSetUsage = PcfButton('#APDExposureFieldPopup-APDExposureFieldInputSet-APDAttributeInputSet-Usage');
	aPDExposureFieldInputSetJurisdiction = PcfComponent('#APDExposureFieldPopup-APDExposureFieldInputSet-Jurisdiction');
	aPDExposureFieldInputSetType = PcfSelectInput('#APDExposureFieldPopup-APDExposureFieldInputSet-Type');
	aPDExposureFieldPopupAPDExposureFieldPopup_UpLink = PcfButton('#APDExposureFieldPopup-APDExposureFieldPopup_UpLink');
	aPDExposureFieldPopupCancel = PcfButton('#APDExposureFieldPopup-Cancel');
	aPDExposureFieldPopupEdit = PcfButton('#APDExposureFieldPopup-Edit');
	aPDExposureFieldPopupExposureLocalizedValuesLocalizedValuesDVLocalizedValuesLV = PcfListView('#APDExposureFieldPopup-ExposureLocalizedValues-LocalizedValuesDV-LocalizedValuesLV');
	aPDExposureFieldPopupUpdate = PcfButton('#APDExposureFieldPopup-Update');
	aPDExposureFieldPopup_Paging = PcfButton('#APDExposureFieldPopup-_Paging');
	aPDExposureFieldPopup__crumb__ = PcfComponent('#APDExposureFieldPopup-__crumb__');
	aPDExposureFieldPopup_msgs = PcfButton('#APDExposureFieldPopup-_msgs');
}
