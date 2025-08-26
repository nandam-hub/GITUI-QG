import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewSubmission {
	newSubmissionScreenAddProductButton = PcfButton('#NewSubmission-NewSubmissionScreen-AddProductButton');
	addProductButtonFromCloud = PcfButton('#NewSubmission-NewSubmissionScreen-AddProductButton-FromCloud');
	addProductButtonFromTemplate = PcfButton('#NewSubmission-NewSubmissionScreen-AddProductButton-FromTemplate');
	addProductButtonFromXmind = PcfButton('#NewSubmission-NewSubmissionScreen-AddProductButton-FromXmind');
	addProductButtonNewProduct = PcfButton('#NewSubmission-NewSubmissionScreen-AddProductButton-NewProduct');
	newSubmissionScreenDescriptionHeader = PcfButton('#NewSubmission-NewSubmissionScreen-DescriptionHeader');
	newSubmissionScreenInstalledTab = PcfButton('#NewSubmission-NewSubmissionScreen-InstalledTab');
	newSubmissionScreenNameHeader = PcfButton('#NewSubmission-NewSubmissionScreen-NameHeader');
	productOffersDVProductSelectionLV = PcfListView('#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV');
	productSelectionLV_tbMakeSubmissions = PcfButton('#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV_tb-MakeSubmissions');
	productSettingsDVCreateSingle = PcfComponent('#NewSubmission-NewSubmissionScreen-ProductSettingsDV-CreateSingle');
	productSettingsDVDefaultBaseState = PcfSelectInput('#NewSubmission-NewSubmissionScreen-ProductSettingsDV-DefaultBaseState');
	productSettingsDVDefaultPPEffDate = PcfDateValueInput('#NewSubmission-NewSubmissionScreen-ProductSettingsDV-DefaultPPEffDate');
	productSettingsDVQuoteType = PcfSelectInput('#NewSubmission-NewSubmissionScreen-ProductSettingsDV-QuoteType');
	accountSelectAccount = PcfButton('#NewSubmission-NewSubmissionScreen-SelectAccountAndProducerDV-Account-SelectAccount');
	selectAccountAndProducerDVAccountName = PcfButton('#NewSubmission-NewSubmissionScreen-SelectAccountAndProducerDV-AccountName');
	newSubmissionNewSubmissionScreenSelectAccountAndProducerDVProducerSelectionInputSetProducerSelectOrganization = PcfButton('#NewSubmission-NewSubmissionScreen-SelectAccountAndProducerDV-ProducerSelectionInputSet-Producer-SelectOrganization');
	producerSelectionInputSetProducerCode = PcfSelectInput('#NewSubmission-NewSubmissionScreen-SelectAccountAndProducerDV-ProducerSelectionInputSet-ProducerCode');
	newSubmissionScreenSelectHeader = PcfTextInput('#NewSubmission-NewSubmissionScreen-SelectHeader');
	newSubmissionScreenUploadAcordButton = PcfButton('#NewSubmission-NewSubmissionScreen-UploadAcordButton');
	newSubmissionScreenUploadAcordInput = PcfButton('#NewSubmission-NewSubmissionScreen-UploadAcordInput');
	newSubmissionScreenUploadAcordTab = PcfButton('#NewSubmission-NewSubmissionScreen-UploadAcordTab');
	newSubmissionScreenUploadAcordTitle = PcfTextInput('#NewSubmission-NewSubmissionScreen-UploadAcordTitle');
	newSubmissionScreenVisualizedTab = PcfButton('#NewSubmission-NewSubmissionScreen-VisualizedTab');
	newSubmissionScreen_ListPaging = PcfButton('#NewSubmission-NewSubmissionScreen-_ListPaging');
	newSubmissionScreen_ViewDetail = PcfButton('#NewSubmission-NewSubmissionScreen-_ViewDetail');
	newSubmissionScreen_msgs = PcfButton('#NewSubmission-NewSubmissionScreen-_msgs');
	newSubmissionNewSubmission_UpLink = PcfButton('#NewSubmission-NewSubmission_UpLink');
	newSubmission_Paging = PcfButton('#NewSubmission-_Paging');
	newSubmission__crumb__ = PcfComponent('#NewSubmission-__crumb__');
}
