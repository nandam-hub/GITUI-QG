import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class APDNewEditionPopup {
	aPDNewEditionPopupAPDNewEditionPopup_UpLink = PcfButton('#APDNewEditionPopup-APDNewEditionPopup_UpLink');
	aPDNewEditionPopupCancel = PcfButton('#APDNewEditionPopup-Cancel');
	aPDNewEditionPopupEdit = PcfButton('#APDNewEditionPopup-Edit');
	aPDNewEditionPopupEditionCode = PcfTextInput('#APDNewEditionPopup-EditionCode');
	aPDNewEditionPopupEditionContext = PcfTextInput('#APDNewEditionPopup-EditionContext');
	aPDNewEditionPopupEditionDescription = PcfTextInput('#APDNewEditionPopup-EditionDescription');
	aPDNewEditionPopupEffectiveDate = PcfDateValueInput('#APDNewEditionPopup-EffectiveDate');
	aPDNewEditionPopupUpdate = PcfButton('#APDNewEditionPopup-Update');
	aPDNewEditionPopup_Paging = PcfButton('#APDNewEditionPopup-_Paging');
	aPDNewEditionPopup__crumb__ = PcfComponent('#APDNewEditionPopup-__crumb__');
	aPDNewEditionPopup_msgs = PcfButton('#APDNewEditionPopup-_msgs');
}
