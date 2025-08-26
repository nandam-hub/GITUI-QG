import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AgreementSearchPopup {
	agreementSearchPopupAgreementSearchDVAgreementName = PcfTextInput('#AgreementSearchPopup-AgreementSearchDV-AgreementName');
	agreementSearchPopupAgreementSearchDVAgreementNumber = PcfTextInput('#AgreementSearchPopup-AgreementSearchDV-AgreementNumber');
	agreementSearchPopupAgreementSearchDVAgreementType = PcfSelectInput('#AgreementSearchPopup-AgreementSearchDV-AgreementType');
	agreementSearchPopupAgreementSearchDVArrangement = PcfSelectInput('#AgreementSearchPopup-AgreementSearchDV-Arrangement');
	agreementSearchPopupAgreementSearchDVCoverageGroup = PcfSelectInput('#AgreementSearchPopup-AgreementSearchDV-CoverageGroup');
	agreementSearchPopupAgreementSearchDVCurrency = PcfSelectInput('#AgreementSearchPopup-AgreementSearchDV-Currency');
	agreementSearchPopupAgreementSearchDVEffectiveOn = PcfDateValueInput('#AgreementSearchPopup-AgreementSearchDV-EffectiveOn');
	agreementSearchPopupAgreementSearchDVEffectivePeriodInputSetEffectiveDate = PcfDateValueInput('#AgreementSearchPopup-AgreementSearchDV-EffectivePeriodInputSet-EffectiveDate');
	agreementSearchPopupAgreementSearchDVEffectivePeriodInputSetExpirationDate = PcfDateValueInput('#AgreementSearchPopup-AgreementSearchDV-EffectivePeriodInputSet-ExpirationDate');
	agreementSearchPopupAgreementSearchDVEffectivePeriodInputSetPeriodType = PcfSelectInput('#AgreementSearchPopup-AgreementSearchDV-EffectivePeriodInputSet-PeriodType');
	agreementSearchPopupAgreementSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#AgreementSearchPopup-AgreementSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	agreementSearchPopupAgreementSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#AgreementSearchPopup-AgreementSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	agreementSearchPopupAgreementSearchDVStatus = PcfSelectInput('#AgreementSearchPopup-AgreementSearchDV-Status');
	agreementSearchDV_tbCancel = PcfButton('#AgreementSearchPopup-AgreementSearchDV_tb-Cancel');
	agreementSearchPopupAgreementSearchPopup_UpLink = PcfButton('#AgreementSearchPopup-AgreementSearchPopup_UpLink');
	agreementSearchPopupAgreementSearchResultsLV = PcfListView('#AgreementSearchPopup-AgreementSearchResultsLV');
	agreementSearchResultsLV_tbAdd = PcfButton('#AgreementSearchPopup-AgreementSearchResultsLV_tb-Add');
	agreementSearchPopup_Paging = PcfButton('#AgreementSearchPopup-_Paging');
	agreementSearchPopup__crumb__ = PcfComponent('#AgreementSearchPopup-__crumb__');
	agreementSearchPopup_msgs = PcfButton('#AgreementSearchPopup-_msgs');
}
