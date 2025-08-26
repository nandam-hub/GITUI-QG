import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class BulkPay {
	bulkPayScreenBulkInvoicesLV = PcfListView('#BulkPay-BulkPayScreen-BulkInvoicesLV');
	bulkPayScreenBulkPayFilter = PcfSelectInput('#BulkPay-BulkPayScreen-BulkPayFilter');
	bulkPayScreenCreateNewButton = PcfButton('#BulkPay-BulkPayScreen-CreateNewButton');
	bulkPayScreenDeleteButton = PcfButton('#BulkPay-BulkPayScreen-DeleteButton');
	bulkPayScreenRefreshButton = PcfButton('#BulkPay-BulkPayScreen-RefreshButton');
	bulkPayScreenStopButton = PcfButton('#BulkPay-BulkPayScreen-StopButton');
	bulkPayScreenSubmitButton = PcfButton('#BulkPay-BulkPayScreen-SubmitButton');
	bulkPayScreenVoidButton = PcfButton('#BulkPay-BulkPayScreen-VoidButton');
	bulkPayScreen_msgs = PcfButton('#BulkPay-BulkPayScreen-_msgs');
	bulkPayBulkPay_UpLink = PcfButton('#BulkPay-BulkPay_UpLink');
	bulkPay_Paging = PcfButton('#BulkPay-_Paging');
	bulkPay__crumb__ = PcfComponent('#BulkPay-__crumb__');
}
