import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class RateTableDefinitions {
	rateTableDefinitionSearchScreenDefinitionsLV = PcfListView('#RateTableDefinitions-RateTableDefinitionSearchScreen-DefinitionsLV');
	definitionsLV_tbAddRateTableDefButton = PcfButton('#RateTableDefinitions-RateTableDefinitionSearchScreen-DefinitionsLV_tb-AddRateTableDefButton');
	definitionsLV_tbDeleteSelectedDefinitions = PcfButton('#RateTableDefinitions-RateTableDefinitionSearchScreen-DefinitionsLV_tb-DeleteSelectedDefinitions');
	rateTableDefinitionSearchScreenRateTableCacheSerializationGWCPGenerateButton = PcfButton('#RateTableDefinitions-RateTableDefinitionSearchScreen-RateTableCacheSerializationGWCPGenerateButton');
	rateTableDefinitionSearchScreenRateTableCacheSerializationGenerateButton = PcfButton('#RateTableDefinitions-RateTableDefinitionSearchScreen-RateTableCacheSerializationGenerateButton');
	rateTableDefinitionSearchDVPolicyLine = PcfSelectInput('#RateTableDefinitions-RateTableDefinitionSearchScreen-RateTableDefinitionSearchDV-PolicyLine');
	rateTableDefinitionsRateTableDefinitionSearchScreenRateTableDefinitionSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#RateTableDefinitions-RateTableDefinitionSearchScreen-RateTableDefinitionSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	rateTableDefinitionsRateTableDefinitionSearchScreenRateTableDefinitionSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#RateTableDefinitions-RateTableDefinitionSearchScreen-RateTableDefinitionSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	rateTableDefinitionSearchDVcode = PcfTextInput('#RateTableDefinitions-RateTableDefinitionSearchScreen-RateTableDefinitionSearchDV-code');
	rateTableDefinitionSearchDVname = PcfTextInput('#RateTableDefinitions-RateTableDefinitionSearchScreen-RateTableDefinitionSearchDV-name');
	rateTableDefinitionSearchScreen_msgs = PcfButton('#RateTableDefinitions-RateTableDefinitionSearchScreen-_msgs');
	rateTableDefinitionsRateTableDefinitions_UpLink = PcfButton('#RateTableDefinitions-RateTableDefinitions_UpLink');
	rateTableDefinitions_Paging = PcfButton('#RateTableDefinitions-_Paging');
	rateTableDefinitions__crumb__ = PcfComponent('#RateTableDefinitions-__crumb__');
}
