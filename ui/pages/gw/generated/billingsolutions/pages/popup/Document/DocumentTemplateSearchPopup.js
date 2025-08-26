import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DocumentTemplateSearchPopup {
	documentTemplateSearchPopupDocumentTemplateSearchPopup_UpLink = PcfButton('#DocumentTemplateSearchPopup-DocumentTemplateSearchPopup_UpLink');
	documentTemplateSearchDVDocumentType = PcfSelectInput('#DocumentTemplateSearchPopup-DocumentTemplateSearchScreen-DocumentTemplateSearchDV-DocumentType');
	documentTemplateSearchDVEffectiveDate = PcfDateValueInput('#DocumentTemplateSearchPopup-DocumentTemplateSearchScreen-DocumentTemplateSearchDV-EffectiveDate');
	documentTemplateSearchDVKeywords = PcfTextInput('#DocumentTemplateSearchPopup-DocumentTemplateSearchScreen-DocumentTemplateSearchDV-Keywords');
	documentTemplateSearchDVLanguage = PcfSelectInput('#DocumentTemplateSearchPopup-DocumentTemplateSearchScreen-DocumentTemplateSearchDV-Language');
	documentTemplateSearchPopupDocumentTemplateSearchScreenDocumentTemplateSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#DocumentTemplateSearchPopup-DocumentTemplateSearchScreen-DocumentTemplateSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	documentTemplateSearchPopupDocumentTemplateSearchScreenDocumentTemplateSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#DocumentTemplateSearchPopup-DocumentTemplateSearchScreen-DocumentTemplateSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	documentTemplateSearchScreenDocumentTemplateSearchResultsLV = PcfListView('#DocumentTemplateSearchPopup-DocumentTemplateSearchScreen-DocumentTemplateSearchResultsLV');
	documentTemplateSearchScreen_msgs = PcfButton('#DocumentTemplateSearchPopup-DocumentTemplateSearchScreen-_msgs');
	documentTemplateSearchPopup_Paging = PcfButton('#DocumentTemplateSearchPopup-_Paging');
	documentTemplateSearchPopup__crumb__ = PcfComponent('#DocumentTemplateSearchPopup-__crumb__');
}
