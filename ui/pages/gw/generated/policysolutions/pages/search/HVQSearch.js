import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class HVQSearch {
	hVQPolicySearchDVCompanyName = PcfTextInput('#HVQSearch-HVQSearchScreen-HVQPolicySearchPanelSet-HVQPolicySearchDV-CompanyName');
	hVQPolicySearchDVEmailAddress = PcfTextInput('#HVQSearch-HVQSearchScreen-HVQPolicySearchPanelSet-HVQPolicySearchDV-EmailAddress');
	hVQPolicySearchDVFirstName = PcfTextInput('#HVQSearch-HVQSearchScreen-HVQPolicySearchPanelSet-HVQPolicySearchDV-FirstName');
	hVQPolicySearchDVHVQFilter = PcfCheckBox('#HVQSearch-HVQSearchScreen-HVQPolicySearchPanelSet-HVQPolicySearchDV-HVQFilter');
	hVQPolicySearchDVLastName = PcfTextInput('#HVQSearch-HVQSearchScreen-HVQPolicySearchPanelSet-HVQPolicySearchDV-LastName');
	hVQPolicySearchDVQuoteId = PcfTextInput('#HVQSearch-HVQSearchScreen-HVQPolicySearchPanelSet-HVQPolicySearchDV-QuoteId');
	hVQSearchHVQSearchScreenHVQPolicySearchPanelSetHVQPolicySearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#HVQSearch-HVQSearchScreen-HVQPolicySearchPanelSet-HVQPolicySearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	hVQSearchHVQSearchScreenHVQPolicySearchPanelSetHVQPolicySearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#HVQSearch-HVQSearchScreen-HVQPolicySearchPanelSet-HVQPolicySearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	hVQPolicySearchDVWorkPhone = PcfTextInput('#HVQSearch-HVQSearchScreen-HVQPolicySearchPanelSet-HVQPolicySearchDV-WorkPhone');
	hVQPolicySearchPanelSetHVQSearch_ResultsLV = PcfListView('#HVQSearch-HVQSearchScreen-HVQPolicySearchPanelSet-HVQSearch_ResultsLV');
	hVQSearchScreen_msgs = PcfButton('#HVQSearch-HVQSearchScreen-_msgs');
	hVQSearchHVQSearch_UpLink = PcfButton('#HVQSearch-HVQSearch_UpLink');
	hVQSearch_Paging = PcfButton('#HVQSearch-_Paging');
	hVQSearch__crumb__ = PcfComponent('#HVQSearch-__crumb__');
}
