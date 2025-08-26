import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class BPCAllMainPage {
	bPCAllMainPageAllNoteLabel = PcfTextInput('#BPCAllMainPage-AllNoteLabel');
	bPCAllMainPageBPCAllMainPage_UpLink = PcfButton('#BPCAllMainPage-BPCAllMainPage_UpLink');
	bPCAllMainPageCreate = PcfButton('#BPCAllMainPage-Create');
	newProducerCodeSelectNewProducerCode = PcfButton('#BPCAllMainPage-NewProducerCode-SelectNewProducerCode');
	oldProducerCodeSelectOldProducerCode = PcfButton('#BPCAllMainPage-OldProducerCode-SelectOldProducerCode');
	bPCAllMainPagePoliciesBatchLV = PcfListView('#BPCAllMainPage-PoliciesBatchLV');
	policiesBatchLV_tbPrintExportPolicies = PcfButton('#BPCAllMainPage-PoliciesBatchLV_tb-PrintExportPolicies');
	policiesBatchLV_tbrunWorkflowBatch = PcfButton('#BPCAllMainPage-PoliciesBatchLV_tb-runWorkflowBatch');
	bPCAllMainPageSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#BPCAllMainPage-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	bPCAllMainPageSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#BPCAllMainPage-SearchAndResetInputSet-SearchLinksInputSet-Search');
	bPCAllMainPageSearchBPCBatch = PcfTextInput('#BPCAllMainPage-SearchBPCBatch');
	bPCAllMainPageSearchBPCCreateDate = PcfDateValueInput('#BPCAllMainPage-SearchBPCCreateDate');
	bPCAllMainPageSearchBPCTargetDate = PcfDateValueInput('#BPCAllMainPage-SearchBPCTargetDate');
	bPCAllMainPage_Paging = PcfButton('#BPCAllMainPage-_Paging');
	bPCAllMainPage__crumb__ = PcfComponent('#BPCAllMainPage-__crumb__');
	bPCAllMainPage_msgs = PcfButton('#BPCAllMainPage-_msgs');
}
