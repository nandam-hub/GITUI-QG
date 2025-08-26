import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class APDNewExposurePopup {
	aPDNewExposurePopupAPDNewExposurePopup_UpLink = PcfButton('#APDNewExposurePopup-APDNewExposurePopup_UpLink');
	aPDNewExposurePopupCancel = PcfButton('#APDNewExposurePopup-Cancel');
	aPDNewExposurePopupContactRole = PcfSelectInput('#APDNewExposurePopup-ContactRole');
	aPDNewExposurePopupDescription = PcfTextInput('#APDNewExposurePopup-Description');
	aPDNewExposurePopupEdit = PcfButton('#APDNewExposurePopup-Edit');
	aPDNewExposurePopupExposureType = PcfSelectInput('#APDNewExposurePopup-ExposureType');
	aPDNewExposurePopupName = PcfTextInput('#APDNewExposurePopup-Name');
	aPDNewExposurePopupRatingType = PcfSelectInput('#APDNewExposurePopup-RatingType');
	aPDNewExposurePopupRiskLocation = PcfSelectInput('#APDNewExposurePopup-RiskLocation');
	aPDNewExposurePopupUpdate = PcfButton('#APDNewExposurePopup-Update');
	aPDNewExposurePopup_Paging = PcfButton('#APDNewExposurePopup-_Paging');
	aPDNewExposurePopup__crumb__ = PcfComponent('#APDNewExposurePopup-__crumb__');
	aPDNewExposurePopup_msgs = PcfButton('#APDNewExposurePopup-_msgs');
}
