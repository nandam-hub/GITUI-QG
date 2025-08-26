import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DataFlowMasks {
	dataFlowMasksScreenDataFlowMasksLV = PcfListView('#DataFlowMasks-DataFlowMasksScreen-DataFlowMasksLV');
	dataFlowMasksScreenMasks_DeleteButton = PcfButton('#DataFlowMasks-DataFlowMasksScreen-Masks_DeleteButton');
	dataFlowMasksScreenMasks_MakeDefaultButton = PcfButton('#DataFlowMasks-DataFlowMasksScreen-Masks_MakeDefaultButton');
	dataFlowMasksScreenNewMaskButton = PcfButton('#DataFlowMasks-DataFlowMasksScreen-NewMaskButton');
	dataFlowMasksScreen_msgs = PcfButton('#DataFlowMasks-DataFlowMasksScreen-_msgs');
	dataFlowMasksScreentypeFilter = PcfSelectInput('#DataFlowMasks-DataFlowMasksScreen-typeFilter');
	dataFlowMasksDataFlowMasks_UpLink = PcfButton('#DataFlowMasks-DataFlowMasks_UpLink');
	dataFlowMasks_Paging = PcfButton('#DataFlowMasks-_Paging');
	dataFlowMasks__crumb__ = PcfComponent('#DataFlowMasks-__crumb__');
}
