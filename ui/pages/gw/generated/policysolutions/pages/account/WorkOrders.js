import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class WorkOrders {
	accountFile_WorkOrdersAccountFileInfoBarAccount = PcfButton('#AccountFile_WorkOrders-AccountFileInfoBar-Account');
	accountFile_WorkOrdersAccountFileInfoBarAccountLabel = PcfButton('#AccountFile_WorkOrders-AccountFileInfoBar-AccountLabel');
	accountFile_WorkOrdersAccountFileInfoBarAccountName = PcfButton('#AccountFile_WorkOrders-AccountFileInfoBar-AccountName');
	accountFile_WorkOrdersScreenAccountWorkOrdersLV = PcfListView('#AccountFile_WorkOrders-AccountFile_WorkOrdersScreen-AccountWorkOrdersLV');
	accountFile_WorkOrdersScreenProductFilter = PcfSelectInput('#AccountFile_WorkOrders-AccountFile_WorkOrdersScreen-ProductFilter');
	accountFile_WorkOrdersScreenWorkOrderTypeFilter = PcfSelectInput('#AccountFile_WorkOrders-AccountFile_WorkOrdersScreen-WorkOrderTypeFilter');
	accountFile_WorkOrdersScreenWorkOrdersCompletenessFilter = PcfSelectInput('#AccountFile_WorkOrders-AccountFile_WorkOrdersScreen-WorkOrdersCompletenessFilter');
	accountFile_WorkOrdersScreen_msgs = PcfButton('#AccountFile_WorkOrders-AccountFile_WorkOrdersScreen-_msgs');
	accountFile_WorkOrdersAccountFile_WorkOrders_UpLink = PcfButton('#AccountFile_WorkOrders-AccountFile_WorkOrders_UpLink');
	accountFile_WorkOrders_Paging = PcfButton('#AccountFile_WorkOrders-_Paging');
	accountFile_WorkOrders__crumb__ = PcfComponent('#AccountFile_WorkOrders-__crumb__');
}
