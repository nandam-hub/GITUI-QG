import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class APDNewLibraryCategoryPopup {
	aPDNewLibraryCategoryPopupAPDClauseCategoryInputSetCodeIdentifier = PcfTextInput('#APDNewLibraryCategoryPopup-APDClauseCategoryInputSet-CodeIdentifier');
	aPDNewLibraryCategoryPopupAPDClauseCategoryInputSetDescription = PcfTextInput('#APDNewLibraryCategoryPopup-APDClauseCategoryInputSet-Description');
	aPDNewLibraryCategoryPopupAPDClauseCategoryInputSetItemised = PcfComponent('#APDNewLibraryCategoryPopup-APDClauseCategoryInputSet-Itemised');
	aPDNewLibraryCategoryPopupAPDClauseCategoryInputSetName = PcfTextInput('#APDNewLibraryCategoryPopup-APDClauseCategoryInputSet-Name');
	aPDNewLibraryCategoryPopupAPDClauseCategoryInputSetSectionType = PcfSelectInput('#APDNewLibraryCategoryPopup-APDClauseCategoryInputSet-SectionType');
	aPDNewLibraryCategoryPopupAPDClauseCategoryInputSetUsedOnClauses = PcfTextInput('#APDNewLibraryCategoryPopup-APDClauseCategoryInputSet-UsedOnClauses');
	aPDNewLibraryCategoryPopupAPDNewLibraryCategoryPopup_UpLink = PcfButton('#APDNewLibraryCategoryPopup-APDNewLibraryCategoryPopup_UpLink');
	aPDNewLibraryCategoryPopupCancel = PcfButton('#APDNewLibraryCategoryPopup-Cancel');
	aPDNewLibraryCategoryPopupEdit = PcfButton('#APDNewLibraryCategoryPopup-Edit');
	aPDNewLibraryCategoryPopupProductLocalizedValuesLocalizedValuesDVLocalizedValuesLV = PcfListView('#APDNewLibraryCategoryPopup-ProductLocalizedValues-LocalizedValuesDV-LocalizedValuesLV');
	aPDNewLibraryCategoryPopupUpdate = PcfButton('#APDNewLibraryCategoryPopup-Update');
	aPDNewLibraryCategoryPopup_Paging = PcfButton('#APDNewLibraryCategoryPopup-_Paging');
	aPDNewLibraryCategoryPopup__crumb__ = PcfComponent('#APDNewLibraryCategoryPopup-__crumb__');
	aPDNewLibraryCategoryPopup_msgs = PcfButton('#APDNewLibraryCategoryPopup-_msgs');
}
