import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class IndustryCodeSearchPopup {
	industryCodeSearchPopupIndustryCodeSearchPopup_UpLink = PcfButton('#IndustryCodeSearchPopup-IndustryCodeSearchPopup_UpLink');
	industryCodeSearchScreenCancel = PcfButton('#IndustryCodeSearchPopup-IndustryCodeSearchScreen-Cancel');
	industryCodeSearchScreenEdit = PcfButton('#IndustryCodeSearchPopup-IndustryCodeSearchScreen-Edit');
	industryCodeSearchDVClassification = PcfTextInput('#IndustryCodeSearchPopup-IndustryCodeSearchScreen-IndustryCodeSearchDV-Classification');
	industryCodeSearchDVCode = PcfTextInput('#IndustryCodeSearchPopup-IndustryCodeSearchScreen-IndustryCodeSearchDV-Code');
	industryCodeSearchPopupIndustryCodeSearchScreenIndustryCodeSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#IndustryCodeSearchPopup-IndustryCodeSearchScreen-IndustryCodeSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	industryCodeSearchPopupIndustryCodeSearchScreenIndustryCodeSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#IndustryCodeSearchPopup-IndustryCodeSearchScreen-IndustryCodeSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	industryCodeSearchScreenIndustryCodeSearchResultsLV = PcfListView('#IndustryCodeSearchPopup-IndustryCodeSearchScreen-IndustryCodeSearchResultsLV');
	industryCodeSearchScreenUpdate = PcfButton('#IndustryCodeSearchPopup-IndustryCodeSearchScreen-Update');
	industryCodeSearchScreen_msgs = PcfButton('#IndustryCodeSearchPopup-IndustryCodeSearchScreen-_msgs');
	industryCodeSearchPopup_Paging = PcfButton('#IndustryCodeSearchPopup-_Paging');
	industryCodeSearchPopup__crumb__ = PcfComponent('#IndustryCodeSearchPopup-__crumb__');
}
