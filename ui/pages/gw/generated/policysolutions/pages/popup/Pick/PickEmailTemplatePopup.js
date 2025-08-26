import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class PickEmailTemplatePopup {
	pickEmailTemplatePopupPickEmailTemplatePopup_UpLink = PcfButton('#PickEmailTemplatePopup-PickEmailTemplatePopup_UpLink');
	emailTemplateSearchDVKeywords = PcfTextInput('#PickEmailTemplatePopup-PickEmailTemplateScreen-EmailTemplateSearchDV-Keywords');
	emailTemplateSearchDVLanguage = PcfSelectInput('#PickEmailTemplatePopup-PickEmailTemplateScreen-EmailTemplateSearchDV-Language');
	pickEmailTemplatePopupPickEmailTemplateScreenEmailTemplateSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#PickEmailTemplatePopup-PickEmailTemplateScreen-EmailTemplateSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	pickEmailTemplatePopupPickEmailTemplateScreenEmailTemplateSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#PickEmailTemplatePopup-PickEmailTemplateScreen-EmailTemplateSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	emailTemplateSearchDVTopic = PcfTextInput('#PickEmailTemplatePopup-PickEmailTemplateScreen-EmailTemplateSearchDV-Topic');
	pickEmailTemplateScreenEmailTemplateSearchResultLV = PcfListView('#PickEmailTemplatePopup-PickEmailTemplateScreen-EmailTemplateSearchResultLV');
	pickEmailTemplateScreenPickEmailTemplatePopup_CancelButton = PcfButton('#PickEmailTemplatePopup-PickEmailTemplateScreen-PickEmailTemplatePopup_CancelButton');
	pickEmailTemplateScreen_msgs = PcfButton('#PickEmailTemplatePopup-PickEmailTemplateScreen-_msgs');
	pickEmailTemplatePopup_Paging = PcfButton('#PickEmailTemplatePopup-_Paging');
	pickEmailTemplatePopup__crumb__ = PcfComponent('#PickEmailTemplatePopup-__crumb__');
}
