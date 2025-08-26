import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class PCPurge {
	pCPurgeToolsScreenFindJobButton = PcfButton('#PCPurge-PCPurgeToolsScreen-FindJobButton');
	pCPurgeToolsScreenFindJobButtonAdditionalInfo = PcfTextInput('#PCPurge-PCPurgeToolsScreen-FindJobButtonAdditionalInfo');
	pCPurgeToolsScreenFlushWorkQueuesButton = PcfButton('#PCPurge-PCPurgeToolsScreen-FlushWorkQueuesButton');
	pCPurgeToolsScreenJobNumberTextInput = PcfTextInput('#PCPurge-PCPurgeToolsScreen-JobNumberTextInput');
	purgeJobPanelSetEndOfCoverage = PcfTextInput('#PCPurge-PCPurgeToolsScreen-JobPertinentPanelSet-PurgeJobPanelSet-EndOfCoverage');
	purgeJobPanelSetJobCloseDate = PcfTextInput('#PCPurge-PCPurgeToolsScreen-JobPertinentPanelSet-PurgeJobPanelSet-JobCloseDate');
	purgeJobPanelSetJobDoNotDestroyFlag = PcfTextInput('#PCPurge-PCPurgeToolsScreen-JobPertinentPanelSet-PurgeJobPanelSet-JobDoNotDestroyFlag');
	purgeJobPanelSetJobNumberOfPeriods = PcfTextInput('#PCPurge-PCPurgeToolsScreen-JobPertinentPanelSet-PurgeJobPanelSet-JobNumberOfPeriods');
	purgeJobPanelSetJobPurgeStatus = PcfTextInput('#PCPurge-PCPurgeToolsScreen-JobPertinentPanelSet-PurgeJobPanelSet-JobPurgeStatus');
	purgeJobPanelSetJobSubType = PcfTextInput('#PCPurge-PCPurgeToolsScreen-JobPertinentPanelSet-PurgeJobPanelSet-JobSubType');
	purgeJobPanelSetPruneJobButton = PcfButton('#PCPurge-PCPurgeToolsScreen-JobPertinentPanelSet-PurgeJobPanelSet-PruneJobButton');
	purgeJobPanelSetPurgeJobButton = PcfButton('#PCPurge-PCPurgeToolsScreen-JobPertinentPanelSet-PurgeJobPanelSet-PurgeJobButton');
	purgeJobPanelSetskipValidationForPruningJob = PcfCheckBox('#PCPurge-PCPurgeToolsScreen-JobPertinentPanelSet-PurgeJobPanelSet-skipValidationForPruningJob');
	purgeJobPanelSetskipValidationForPurgingJob = PcfCheckBox('#PCPurge-PCPurgeToolsScreen-JobPertinentPanelSet-PurgeJobPanelSet-skipValidationForPurgingJob');
	purgePolicyPeriodsPanelSetPolicyPeriodLV = PcfListView('#PCPurge-PCPurgeToolsScreen-JobPertinentPanelSet-PurgePolicyPeriodsPanelSet-PolicyPeriodLV');
	purgePolicyPeriodsPanelSetskipValidationForPurgingPolicyPeriods = PcfCheckBox('#PCPurge-PCPurgeToolsScreen-JobPertinentPanelSet-PurgePolicyPeriodsPanelSet-skipValidationForPurgingPolicyPeriods');
	pCPurgeToolsScreenRunPurgeBatchProcessButton = PcfButton('#PCPurge-PCPurgeToolsScreen-RunPurgeBatchProcessButton');
	pCPurgeToolsScreen_msgs = PcfButton('#PCPurge-PCPurgeToolsScreen-_msgs');
	pCPurgeToolsScreenpurgeSucceededMessage = PcfButton('#PCPurge-PCPurgeToolsScreen-purgeSucceededMessage');
	purgeSucceededMessageCloseBtn = PcfButton('#PCPurge-PCPurgeToolsScreen-purgeSucceededMessage-CloseBtn');
	pCPurgePCPurge_UpLink = PcfButton('#PCPurge-PCPurge_UpLink');
	pCPurge_Paging = PcfButton('#PCPurge-_Paging');
	pCPurge__crumb__ = PcfComponent('#PCPurge-__crumb__');
}
