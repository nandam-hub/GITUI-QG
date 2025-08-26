import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class RateBooks {
	rateBookSearchScreenCancelJarGeneration = PcfButton('#RateBooks-RateBookSearchScreen-CancelJarGeneration');
	rateBookSearchScreenJARGenerationDate = PcfDateValueInput('#RateBooks-RateBookSearchScreen-JARGenerationDate');
	rateBookSearchScreenJarGenerationProgressBar = PcfTextInput('#RateBooks-RateBookSearchScreen-JarGenerationProgressBar');
	rateBookPanelSetRatebooksLV = PcfListView('#RateBooks-RateBookSearchScreen-RateBookPanelSet-RatebooksLV');
	ratebooksLV_tbAddRateBookButton = PcfButton('#RateBooks-RateBookSearchScreen-RateBookPanelSet-RatebooksLV_tb-AddRateBookButton');
	ratebooksLV_tbImportRateBook = PcfButton('#RateBooks-RateBookSearchScreen-RateBookPanelSet-RatebooksLV_tb-ImportRateBook');
	ratebooksLV_tbMergeCheckedRateBooks = PcfButton('#RateBooks-RateBookSearchScreen-RateBookPanelSet-RatebooksLV_tb-MergeCheckedRateBooks');
	ratebooksLV_tbRemoveCheckedRateBooks = PcfButton('#RateBooks-RateBookSearchScreen-RateBookPanelSet-RatebooksLV_tb-RemoveCheckedRateBooks');
	rateBookSearchDVCode = PcfTextInput('#RateBooks-RateBookSearchScreen-RateBookSearchDV-Code');
	rateBookSearchDVEffectiveDate = PcfDateValueInput('#RateBooks-RateBookSearchScreen-RateBookSearchDV-EffectiveDate');
	rateBookSearchDVJurisdiction = PcfSelectInput('#RateBooks-RateBookSearchScreen-RateBookSearchDV-Jurisdiction');
	rateBookSearchDVLastStatusChangeDate = PcfDateValueInput('#RateBooks-RateBookSearchScreen-RateBookSearchDV-LastStatusChangeDate');
	rateBookSearchDVName = PcfTextInput('#RateBooks-RateBookSearchScreen-RateBookSearchDV-Name');
	rateBookSearchDVOffering = PcfSelectInput('#RateBooks-RateBookSearchScreen-RateBookSearchDV-Offering');
	rateBookSearchDVPolicyLine = PcfSelectInput('#RateBooks-RateBookSearchScreen-RateBookSearchDV-PolicyLine');
	rateBookSearchDVRadioButtonEffecDate = PcfComponent('#RateBooks-RateBookSearchScreen-RateBookSearchDV-RadioButtonEffecDate');
	rateBooksRateBookSearchScreenRateBookSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#RateBooks-RateBookSearchScreen-RateBookSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	rateBooksRateBookSearchScreenRateBookSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#RateBooks-RateBookSearchScreen-RateBookSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	rateBookSearchDVStatus = PcfSelectInput('#RateBooks-RateBookSearchScreen-RateBookSearchDV-Status');
	rateBookSearchDVUWCompany = PcfSelectInput('#RateBooks-RateBookSearchScreen-RateBookSearchDV-UWCompany');
	rateBookSearchScreenRateBookSearchScreen_DownloadJarButton = PcfButton('#RateBooks-RateBookSearchScreen-RateBookSearchScreen_DownloadJarButton');
	rateBookSearchScreenRateBookSearchScreen_GenerateJarButton = PcfButton('#RateBooks-RateBookSearchScreen-RateBookSearchScreen_GenerateJarButton');
	rateBookSearchScreen_msgs = PcfButton('#RateBooks-RateBookSearchScreen-_msgs');
	rateBooksRateBooks_UpLink = PcfButton('#RateBooks-RateBooks_UpLink');
	rateBooks_Paging = PcfButton('#RateBooks-_Paging');
	rateBooks__crumb__ = PcfComponent('#RateBooks-__crumb__');
}
