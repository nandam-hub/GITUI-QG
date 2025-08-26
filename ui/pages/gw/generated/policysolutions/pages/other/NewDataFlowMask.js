import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewDataFlowMask {
	dataFlowMaskScreenCancel = PcfButton('#NewDataFlowMask-DataFlowMaskScreen-Cancel');
	dataFlowMaskDetailDVName = PcfTextInput('#NewDataFlowMask-DataFlowMaskScreen-DataFlowMaskDetailDV-Name');
	dataFlowMaskDetailDVType = PcfSelectInput('#NewDataFlowMask-DataFlowMaskScreen-DataFlowMaskDetailDV-Type');
	dataFlowMaskScreenEdit = PcfButton('#NewDataFlowMask-DataFlowMaskScreen-Edit');
	dataFlowMaskScreenUpdate = PcfButton('#NewDataFlowMask-DataFlowMaskScreen-Update');
	dataFlowMaskScreen_msgs = PcfButton('#NewDataFlowMask-DataFlowMaskScreen-_msgs');
	newDataFlowMaskNewDataFlowMask_UpLink = PcfButton('#NewDataFlowMask-NewDataFlowMask_UpLink');
	newDataFlowMask_Paging = PcfButton('#NewDataFlowMask-_Paging');
	newDataFlowMask__crumb__ = PcfComponent('#NewDataFlowMask-__crumb__');
}
