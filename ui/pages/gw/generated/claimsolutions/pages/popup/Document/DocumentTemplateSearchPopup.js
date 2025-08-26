import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DocumentTemplateSearchPopup {
	documentTemplateSearchPopupDocumentTemplateSearchPopup_UpLink = PcfButton('#DocumentTemplateSearchPopup-DocumentTemplateSearchPopup_UpLink');
	documentTemplateSearchDVEffectiveDate = PcfDateValueInput('#DocumentTemplateSearchPopup-DocumentTemplateSearchScreen-DocumentTemplateSearchDV-EffectiveDate');
	documentTemplateSearchDVIdentifier = PcfTextInput('#DocumentTemplateSearchPopup-DocumentTemplateSearchScreen-DocumentTemplateSearchDV-Identifier');
	documentTemplateSearchDVJurisdictionState = PcfSelectInput('#DocumentTemplateSearchPopup-DocumentTemplateSearchScreen-DocumentTemplateSearchDV-JurisdictionState');
	documentTemplateSearchDVKeywords = PcfTextInput('#DocumentTemplateSearchPopup-DocumentTemplateSearchScreen-DocumentTemplateSearchDV-Keywords');
	documentTemplateSearchDVLanguage = PcfSelectInput('#DocumentTemplateSearchPopup-DocumentTemplateSearchScreen-DocumentTemplateSearchDV-Language');
	documentTemplateSearchDVLossType = PcfSelectInput('#DocumentTemplateSearchPopup-DocumentTemplateSearchScreen-DocumentTemplateSearchDV-LossType');
	documentTemplateSearchPopupDocumentTemplateSearchScreenDocumentTemplateSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#DocumentTemplateSearchPopup-DocumentTemplateSearchScreen-DocumentTemplateSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	documentTemplateSearchPopupDocumentTemplateSearchScreenDocumentTemplateSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#DocumentTemplateSearchPopup-DocumentTemplateSearchScreen-DocumentTemplateSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	documentTemplateSearchDVSection = PcfSelectInput('#DocumentTemplateSearchPopup-DocumentTemplateSearchScreen-DocumentTemplateSearchDV-Section');
	documentTemplateSearchDVTemplateType = PcfSelectInput('#DocumentTemplateSearchPopup-DocumentTemplateSearchScreen-DocumentTemplateSearchDV-TemplateType');
	documentTemplateSearchScreenDocumentTemplateSearchResultLV = PcfListView('#DocumentTemplateSearchPopup-DocumentTemplateSearchScreen-DocumentTemplateSearchResultLV');
	documentTemplateSearchScreen_msgs = PcfButton('#DocumentTemplateSearchPopup-DocumentTemplateSearchScreen-_msgs');
	documentTemplateSearchScreencancel = PcfButton('#DocumentTemplateSearchPopup-DocumentTemplateSearchScreen-cancel');
	documentTemplateSearchPopup_Paging = PcfButton('#DocumentTemplateSearchPopup-_Paging');
	documentTemplateSearchPopup__crumb__ = PcfComponent('#DocumentTemplateSearchPopup-__crumb__');
}
