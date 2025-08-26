import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ProducerStatementOverview {
	producerStatementOverviewScreenProducerStatementLV = PcfListView('#ProducerStatementOverview-ProducerStatementOverviewScreen-ProducerStatementLV');
	producerStatementOverviewScreen_msgs = PcfButton('#ProducerStatementOverview-ProducerStatementOverviewScreen-_msgs');
	producerStatementOverviewProducerStatementOverview_UpLink = PcfButton('#ProducerStatementOverview-ProducerStatementOverview_UpLink');
	producerStatementOverview_Paging = PcfButton('#ProducerStatementOverview-_Paging');
	producerStatementOverview__crumb__ = PcfComponent('#ProducerStatementOverview-__crumb__');
}
