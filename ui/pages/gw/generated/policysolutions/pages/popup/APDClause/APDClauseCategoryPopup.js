import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class APDClauseCategoryPopup {
	aPDClauseCategoryInputSetCodeIdentifier = PcfTextInput('#APDClauseCategoryPopup-APDClauseCategoryInputSet-CodeIdentifier');
	aPDClauseCategoryInputSetDescription = PcfTextInput('#APDClauseCategoryPopup-APDClauseCategoryInputSet-Description');
	aPDClauseCategoryInputSetItemised = PcfComponent('#APDClauseCategoryPopup-APDClauseCategoryInputSet-Itemised');
	aPDClauseCategoryInputSetName = PcfTextInput('#APDClauseCategoryPopup-APDClauseCategoryInputSet-Name');
	aPDClauseCategoryInputSetSectionType = PcfSelectInput('#APDClauseCategoryPopup-APDClauseCategoryInputSet-SectionType');
	aPDClauseCategoryInputSetUsedOnClauses = PcfTextInput('#APDClauseCategoryPopup-APDClauseCategoryInputSet-UsedOnClauses');
	aPDClauseCategoryPopupAPDClauseCategoryPopup_UpLink = PcfButton('#APDClauseCategoryPopup-APDClauseCategoryPopup_UpLink');
	aPDClauseCategoryPopupCancel = PcfButton('#APDClauseCategoryPopup-Cancel');
	aPDClauseCategoryPopupEdit = PcfButton('#APDClauseCategoryPopup-Edit');
	aPDClauseCategoryPopupProductLocalizedValuesLocalizedValuesDVLocalizedValuesLV = PcfListView('#APDClauseCategoryPopup-ProductLocalizedValues-LocalizedValuesDV-LocalizedValuesLV');
	aPDClauseCategoryPopupUpdate = PcfButton('#APDClauseCategoryPopup-Update');
	aPDClauseCategoryPopup_Paging = PcfButton('#APDClauseCategoryPopup-_Paging');
	aPDClauseCategoryPopup__crumb__ = PcfComponent('#APDClauseCategoryPopup-__crumb__');
	aPDClauseCategoryPopup_msgs = PcfButton('#APDClauseCategoryPopup-_msgs');
}
