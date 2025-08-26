import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class RiskClassSearchPopup {
	riskClassSearchPopupRiskClassSearchPopup_UpLink = PcfButton('#RiskClassSearchPopup-RiskClassSearchPopup_UpLink');
	riskClassSearchDVDescription = PcfTextInput('#RiskClassSearchPopup-RiskClassSearchScreen-RiskClassSearchDV-Description');
	riskClassSearchPopupRiskClassSearchScreenRiskClassSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#RiskClassSearchPopup-RiskClassSearchScreen-RiskClassSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	riskClassSearchPopupRiskClassSearchScreenRiskClassSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#RiskClassSearchPopup-RiskClassSearchScreen-RiskClassSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	riskClassSearchScreenRiskClassSearchResultsLV = PcfListView('#RiskClassSearchPopup-RiskClassSearchScreen-RiskClassSearchResultsLV');
	riskClassSearchScreen_msgs = PcfButton('#RiskClassSearchPopup-RiskClassSearchScreen-_msgs');
	riskClassSearchPopup_Paging = PcfButton('#RiskClassSearchPopup-_Paging');
	riskClassSearchPopup__crumb__ = PcfComponent('#RiskClassSearchPopup-__crumb__');
}
