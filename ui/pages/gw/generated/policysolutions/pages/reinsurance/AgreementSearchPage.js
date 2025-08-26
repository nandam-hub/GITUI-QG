import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AgreementSearchPage {
	agreementSearchPageAgreementSearchPage_UpLink = PcfButton('#AgreementSearchPage-AgreementSearchPage_UpLink');
	agreementSearchDVAgreementName = PcfTextInput('#AgreementSearchPage-AgreementSearchScreen-AgreementSearchDV-AgreementName');
	agreementSearchDVAgreementNumber = PcfTextInput('#AgreementSearchPage-AgreementSearchScreen-AgreementSearchDV-AgreementNumber');
	agreementSearchDVAgreementType = PcfSelectInput('#AgreementSearchPage-AgreementSearchScreen-AgreementSearchDV-AgreementType');
	agreementSearchDVArrangement = PcfSelectInput('#AgreementSearchPage-AgreementSearchScreen-AgreementSearchDV-Arrangement');
	agreementSearchDVCoverageGroup = PcfSelectInput('#AgreementSearchPage-AgreementSearchScreen-AgreementSearchDV-CoverageGroup');
	agreementSearchDVCurrency = PcfSelectInput('#AgreementSearchPage-AgreementSearchScreen-AgreementSearchDV-Currency');
	agreementSearchDVEffectiveOn = PcfDateValueInput('#AgreementSearchPage-AgreementSearchScreen-AgreementSearchDV-EffectiveOn');
	effectivePeriodInputSetEffectiveDate = PcfDateValueInput('#AgreementSearchPage-AgreementSearchScreen-AgreementSearchDV-EffectivePeriodInputSet-EffectiveDate');
	effectivePeriodInputSetExpirationDate = PcfDateValueInput('#AgreementSearchPage-AgreementSearchScreen-AgreementSearchDV-EffectivePeriodInputSet-ExpirationDate');
	effectivePeriodInputSetPeriodType = PcfSelectInput('#AgreementSearchPage-AgreementSearchScreen-AgreementSearchDV-EffectivePeriodInputSet-PeriodType');
	agreementSearchPageAgreementSearchScreenAgreementSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#AgreementSearchPage-AgreementSearchScreen-AgreementSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	agreementSearchPageAgreementSearchScreenAgreementSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#AgreementSearchPage-AgreementSearchScreen-AgreementSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	agreementSearchDVStatus = PcfSelectInput('#AgreementSearchPage-AgreementSearchScreen-AgreementSearchDV-Status');
	agreementSearchScreenAgreementSearchResultsLV = PcfListView('#AgreementSearchPage-AgreementSearchScreen-AgreementSearchResultsLV');
	agreementSearchResultsLV_tbAgreementSearchResult_MakeActiveButton = PcfButton('#AgreementSearchPage-AgreementSearchScreen-AgreementSearchResultsLV_tb-AgreementSearchResult_MakeActiveButton');
	agreementSearchResultsLV_tbPrintMe = PcfButton('#AgreementSearchPage-AgreementSearchScreen-AgreementSearchResultsLV_tb-PrintMe');
	agreementSearchScreen_msgs = PcfButton('#AgreementSearchPage-AgreementSearchScreen-_msgs');
	agreementSearchPage_Paging = PcfButton('#AgreementSearchPage-_Paging');
	agreementSearchPage__crumb__ = PcfComponent('#AgreementSearchPage-__crumb__');
}
