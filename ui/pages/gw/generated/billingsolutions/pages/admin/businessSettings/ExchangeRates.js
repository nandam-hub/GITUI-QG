import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ExchangeRates {
	searchLinksInputSetReset = PcfButton('#ExchangeRatesSearch-ExchangeRatesSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	searchLinksInputSetSearch = PcfButton('#ExchangeRatesSearch-ExchangeRatesSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	exchangeRatesSearchDVbaseCurrency = PcfSelectInput('#ExchangeRatesSearch-ExchangeRatesSearchDV-baseCurrency');
	exchangeRatesSearchDVdateFrom = PcfDateValueInput('#ExchangeRatesSearch-ExchangeRatesSearchDV-dateFrom');
	exchangeRatesSearchDVdateTo = PcfDateValueInput('#ExchangeRatesSearch-ExchangeRatesSearchDV-dateTo');
	exchangeRatesSearchDVpriceCurrency = PcfSelectInput('#ExchangeRatesSearch-ExchangeRatesSearchDV-priceCurrency');
	exchangeRatesSearchDVrateType = PcfSelectInput('#ExchangeRatesSearch-ExchangeRatesSearchDV-rateType');
	exchangeRatesSearchExchangeRatesSearchLV = PcfListView('#ExchangeRatesSearch-ExchangeRatesSearchLV');
	exchangeRatesSearchExchangeRatesSearch_UpLink = PcfButton('#ExchangeRatesSearch-ExchangeRatesSearch_UpLink');
	exchangeRatesSearch_Paging = PcfButton('#ExchangeRatesSearch-_Paging');
	exchangeRatesSearch__crumb__ = PcfComponent('#ExchangeRatesSearch-__crumb__');
	exchangeRatesSearch_msgs = PcfButton('#ExchangeRatesSearch-_msgs');
	exchangeRatesSearcheditExistingRates = PcfButton('#ExchangeRatesSearch-editExistingRates');
	exchangeRatesSearchimportNewRates = PcfButton('#ExchangeRatesSearch-importNewRates');
	exchangeRatesExchangeRates_UpLink = PcfButton('#ExchangeRates-ExchangeRates_UpLink');
	exchangeRates_Paging = PcfButton('#ExchangeRates-_Paging');
	exchangeRates__crumb__ = PcfComponent('#ExchangeRates-__crumb__');
	exchangeRates_msgs = PcfButton('#ExchangeRates-_msgs');
	exchangeRatesactWizard = PcfButton('#ExchangeRates-actWizard');
}
