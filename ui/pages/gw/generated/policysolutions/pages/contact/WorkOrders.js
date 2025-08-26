import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class WorkOrders {
	contactFile_WorkOrdersAssociatedWorkOrdersLV = PcfListView('#ContactFile_WorkOrders-AssociatedWorkOrdersLV');
	associatedWorkOrdersLV_tbProductFilter = PcfSelectInput('#ContactFile_WorkOrders-AssociatedWorkOrdersLV_tb-ProductFilter');
	associatedWorkOrdersLV_tbWorkOrderTypeFilter = PcfSelectInput('#ContactFile_WorkOrders-AssociatedWorkOrdersLV_tb-WorkOrderTypeFilter');
	associatedWorkOrdersLV_tbWorkOrdersCompletenessFilter = PcfSelectInput('#ContactFile_WorkOrders-AssociatedWorkOrdersLV_tb-WorkOrdersCompletenessFilter');
	contactFile_WorkOrdersContactFileInfoBarContactLabel = PcfButton('#ContactFile_WorkOrders-ContactFileInfoBar-ContactLabel');
	contactFile_WorkOrdersContactFileInfoBarContactName = PcfButton('#ContactFile_WorkOrders-ContactFileInfoBar-ContactName');
	contactFile_WorkOrdersContactFile_WorkOrders_UpLink = PcfButton('#ContactFile_WorkOrders-ContactFile_WorkOrders_UpLink');
	contactFile_WorkOrders_Paging = PcfButton('#ContactFile_WorkOrders-_Paging');
	contactFile_WorkOrders__crumb__ = PcfComponent('#ContactFile_WorkOrders-__crumb__');
	contactFile_WorkOrders_msgs = PcfButton('#ContactFile_WorkOrders-_msgs');
}
